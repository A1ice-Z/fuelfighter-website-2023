import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Post from './Blog/articlePost'
import blogServices from '../_services/blog.services'
import '../styles/pageStyles/blog/blog.css'

export default function Blog() {
    const navigate = useNavigate();
	const [loading, setLoading] = useState(false)
	const [endOfTable, setEndOfTable] = useState(false)
	const [posts, setPosts] = useState([])
	const [loadCounter, setLoadCounter] = useState(0)
	const loadAmout = 11;

    const loadMore = () => {
		setLoading(true)
		blogServices.lazyBlogposts(loadCounter * loadAmout, loadAmout)
			.then(json => {
				if (json?.exist) {
					setLoadCounter(loadCounter + 1)					
					setPosts([...posts, ...json?.data])
					setLoading(false)
				} else {
					setEndOfTable(true)
				}
			})
	}
	
	useEffect(loadMore, [])

	const idLatest = [70, 69, 64];

	let topPosts = posts?.filter((el) => idLatest.includes(el.id));
	let otherPosts = posts?.filter((el) => !idLatest.includes(el.id));

	const goInside = (id) => {
        navigate(`/blog/${id}`, {
            state: {
                id: id
            }
        })
    }

    return(
        <section className='blogContainer'>
			<div className='topStories' id="centeredDiv">
				<h1 id="titleBlog">Welcome to Fuel Fighter Blog</h1>
				<p id="subtitleBlog">We at Fuel Fighter NTNU want to share our experience with our friends, family and anyone else interested in what we do. Our blog is the best way for anyone interested to get an in depth view of what we do both socially and as a technical student organization.</p>
			</div>

			<div className='latestPosts'>
				<h1 className='titlePosts'>Latest News</h1>
				<div className='articlesRow'>
					{topPosts?.map((el, idx)=> <Post props={el}/>)}
					<div className='suggestions'>
						<h5 style={    {'fontFamily': 'Roboto-Black', 'marginTop': '7%'}}>Our suggestions:</h5>
							<li><i class="bi bi-1-square-fill"></i><div onClick={() => goInside(56)}>Design contest</div></li>
							<li><i class="bi bi-2-square-fill"></i><div onClick={() => goInside(32)}>What a beatiful week</div></li>
							<li><i class="bi bi-3-square-fill"></i><div onClick={() => goInside(31)}>We did it!</div></li>
							<li><i class="bi bi-4-square-fill"></i><div onClick={() => goInside(28)}>Unexpected problems</div></li>
							<li><i class="bi bi-1-square-fill"></i><div onClick={() => goInside(7)}>Design contest</div></li>
					</div>
				</div>
			</div>
			
			<div className='articlesCont'>
				<h1 id="articlesTitle">Articles</h1>
				<div className='articles'>
					{
						otherPosts?.map((el, idx) =>
							<div key={idx}>
								<Post props={el} />
							</div>
						)
					}
				</div>
			</div>
			{ !endOfTable ? 
				<button className="btn btn-primary" style={{'backgroundColor':'var(--primary-color)','borderColor':'var(--primary-color)', 'color': 'var(--secondary-color)'}} onClick={loadMore} disabled={loading}>Load more</button>
			:
				<></>
			}
        </section>
    )
}