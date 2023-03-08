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


	//ANIMATIONS
	const popUpOptions = {
		rootMargin: '0px',
		threshold: 0.3
	};
	const popUpOptions2 = {
		rootMargin: '0px',
		threshold: 0.5
	};
	
	useEffect(() => {
		const animatedPostsOther = document.querySelectorAll("#otherPost")
		
		const articlesPopOut = new IntersectionObserver(function(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('enterArticle');
					observer.unobserve(entry.target);
					setTimeout(() =>{
						entry.target.classList.remove('opacityZero');
					}, 2000);
				}
			});
		}, popUpOptions);
	
		animatedPostsOther.forEach(p => articlesPopOut.observe(p));  
	}, [posts, popUpOptions]);

	useEffect(() => {
		const suggestionsSliding = document.querySelectorAll('#suggestedPosts');
		const suggestedSlideToRight = new IntersectionObserver(function(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('slideInSuggestions');
					observer.unobserve(entry.target);
					setTimeout(() =>{
						entry.target.classList.remove('opacityZero');
					}, 1700);
				}
			});
		}, popUpOptions2);
		suggestionsSliding.forEach(suggestion => suggestedSlideToRight.observe(suggestion));
	}, [popUpOptions2])

	useEffect(() => {
		const suggBlog = document.getElementById("sugBlog");
		const suggestionsObserver = new IntersectionObserver(function(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('suggPopUp');
					entry.target.classList.remove('opacityZero');
					observer.unobserve(entry.target);
				}
			});
		}, popUpOptions2);

		suggestionsObserver.observe(suggBlog);
	}, [popUpOptions2]);

    return(
        <section className='blogContainer'>
			<div className='topStories' id="centeredDiv">
				<h1 id="titleBlog">Welcome to Fuel Fighter Blog</h1>
				<p id="subtitleBlog">We at Fuel Fighter NTNU want to share our experience with our friends, family and anyone else interested in what we do. Our blog is the best way for anyone interested to get an in depth view of what we do both socially and as a technical student organization.</p>
			</div>

			<div className='latestPosts'>
				<h1 className='titlePosts'>Latest News</h1>
				<div className='articlesRow'>
					{topPosts?.map((el, idx)=> 
						<div id="suggestedPosts" className='opacityZero' key={idx}>
							<Post props={el}/>
						</div>
					)}
					<div id="sugBlog" className='suggestions opacityZero'>
						<h3 id="suggestionsTitle">Our suggestions</h3>
							<li><span>1</span><div onClick={() => goInside(56)}>Design contest</div></li>
							<li><span>2</span><div onClick={() => goInside(32)}>What a beatiful week</div></li>
							<li><span>3</span><div onClick={() => goInside(31)}>We did it!</div></li>
							<li><span>4</span><div onClick={() => goInside(28)}>Unexpected problems</div></li>
							<li><span>5</span><div onClick={() => goInside(7)}>Design contest</div></li>
					</div>
				</div>
			</div>
			
			<div className='articlesCont'>
				<h1 id="articlesTitle">Articles</h1>
				<div className='articles'>
					{
						otherPosts?.map((el, idx) =>
							<div key={idx} id="otherPost" className='opacityZero'>
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