import React, {useState, useEffect } from 'react';

import blogService from '../../_services/blog.services';

import PostPreview from './postPreview';

import "../../styles/pageStyles/home/blogPreview.css";

export default function BlogPreview() {
    const [posts, setPosts] = useState([]);
	const [selected, setSelected] = React.useState([]);
	// const [position, setPosition] = React.useState(0);
  
	const isItemSelected = (id) => !!selected.find((el) => el === id);
	
    useEffect(() => {
		blogService.blogposts(3)
			.then(json => setPosts(json))
	}, [])

    return (
        <section className='blogPreview'>
            <h2>Blog Preview</h2>
            <h4>At Morgan Stanley, we lead with exceptional ideas. Across all our businesses, we offer keen insight on today's most critical issues.</h4>
            <div id="inside">

            </div>
        </section>
    )
}
