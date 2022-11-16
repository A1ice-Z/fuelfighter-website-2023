import React, { useState, useEffect } from 'react'

import { post, post as Post } from './Blog/articlePost';

import '../styles/pageStyles/blog/blog.css'

import blogServices from '../_services/blog.services'

export default function Blog() {
    const [loading, setLoading] = useState(false)
	const [endOfTable, setEndOfTable] = useState(false)
	const [posts, setPosts] = useState([])
	const [loadCounter, setLoadCounter] = useState(0)
	const loadAmout = 8

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
            <button className="suggested-action small-button" onClick={loadMore} disabled={loading}>Load more</button>
	*/
	const idLatest = [70, 69, 64, 60];

	let topPosts = posts?.filter((el) => idLatest.includes(el.id));
	let otherPosts = posts?.filter((el) => !idLatest.includes(el.id));

    return(
        <section className='blogContainer'>
			<div id='topStories' style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
				<h1>Top Stories</h1>
				<p>{
					posts?.map((el) => <>{el.id}+" "</>)
				}</p>
			</div>
			<div className='latestPosts'>
				<h1>Latest News</h1>
				<div className='subLatest'>
					{topPosts?.map((el)=>(
                    	<Post props={el}/>
                	))}
				</div>
			</div>
			<div className='articles' style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
				<div className='subLatest'>
					{topPosts?.map((el)=>(
                    	<Post props={el}/>
                	))}
				</div>
				<div className='subLatest'>
					{topPosts?.map((el)=>(
                    	<Post props={el}/>
                	))}
				</div>
			</div>
        </section>
    )
}