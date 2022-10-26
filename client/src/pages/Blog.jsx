import React, { useState, useEffect } from 'react'


import blogServices from '../_services/blog.services'

export default function Blog() {
    const [loading, setLoading] = useState(false)
	const [endOfTable, setEndOfTable] = useState(false)
	const [posts, setPosts] = useState([])
	const [loadCounter, setLoadCounter] = useState(0)
	const loadAmout = 2

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

    return(
        <div>
            <h1>Blog</h1>
            <ul>
                {posts?.map((post)=>(
                    <li>{post.id}</li>
                ))}
            </ul>
            <p>loading: {loading} | endOfTable: {endOfTable}</p>
            <button className="suggested-action small-button" onClick={loadMore} disabled={loading}>Load more</button>
        </div>
    )
}