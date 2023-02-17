import React, {useState, useEffect } from 'react';

import blogService from '../../_services/blog.services';

import ArticlePreview from './ArticlePreview.jsx';

import "../../styles/pageStyles/home/blogPreview.css";

export default function BlogPreview() {
    const [posts, setPosts] = useState([]);
	const [selected, setSelected] = useState();
	// const [position, setPosition] = React.useState(0);
	// const isItemSelected = (id) => !!selected.find((el) => el === id);
	
    blogService.blogposts(2)
        .then(json => setPosts(json))
        .then(() => setSelected(posts[0]))

    return (
        <section className='blogPreview'>
            <h2>Blog Preview</h2>
            <h4>At Morgan Stanley, we lead with exceptional ideas. Across all our businesses, we offer keen insight on today's most critical issues.</h4>
            <div id="inside">
                {selected ? <img src={selected.image}/>:<></>}
                {posts?.map( (post) => (
                    <ArticlePreview
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
						author={post.author}
						date={post.date}
						image={post.image}
                    />
                ))}
            </div>
        </section>
    )
}
