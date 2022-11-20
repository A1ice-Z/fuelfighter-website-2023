import React, { useState, useEffect } from 'react'

import { post as Post } from './Blog/articlePost';
import { ArticlesRow } from './Blog/articlesRow';

import '../styles/pageStyles/blog/blog.css'

import blogServices from '../_services/blog.services'

export default function Blog() {
    const [loading, setLoading] = useState(false)
	const [endOfTable, setEndOfTable] = useState(false)
	const [posts, setPosts] = useState([])
	const [loadCounter, setLoadCounter] = useState(0)
	const loadAmout = 4
	
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

	/*
			<h1>Blog</h1>
            <ul>
                {posts?.map((post)=>(
                    <li>{post.id}</li>
                ))}
            </ul>
            <p>loading: {loading} | endOfTable: {endOfTable}</p>

	*/
	const idLatest = [70, 69, 64];

	let topPosts = posts?.filter((el) => idLatest.includes(el.id));
	
    return(
        <section className='blogContainer'>
			<div id='topStories' style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
				<h1>Top Stories</h1>
				</div>
			<div className='latestPosts'>
				<h1>Latest News</h1>
				<ArticlesRow articles= {topPosts} />
				<div>Read these</div>
			</div>
			<div className='articlesCont'>
				<h1>Articles</h1>
				<div className='articles'>
					{
						posts?.map((el, idx) =>
							<div key={idx}>
								<Post props={el} />
							</div>
						)
					}
				</div>
			</div>
			<button className="btn btn-primary" id="moreArts" onClick={loadMore} disabled={loading}>Load more</button>
        </section>
    )
}