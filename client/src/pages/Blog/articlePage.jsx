import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//css
import '../../styles/pageStyles/blog/blogPage.css';

//Backend service
import blogService from '../../_services/blog.services';

export default function ArticlePage({state}) {
	const location = useLocation();
	const id = location.state.id;

    const [blogpost, setBlogPost] = useState();
    
    const goBack = () => window.history.back()

    useEffect(() => {
		blogService.blogpost(id)
			.then(res => {
				if (res === false) {
					goBack()
				} else {
					setBlogPost(res)
				}
			})
	}, [id])

    return(
        <div>
            {!blogpost ? 
            <></>
            :
            <div>
                <article>
						<header>
							<figure>
								<img alt="banner" src={blogpost.bannerImage} />
							</figure>
							<p><button className="small-button" onClick={goBack}>Return</button></p>
							<h1 className="heavy">{blogpost.title}</h1>
							<h5>{blogpost.author}</h5>
							{/* <time dateTime={blogpost.date}>{formatDate(blogpost.date)}</time> */}
							<p><b>{blogpost.description}</b></p>
						</header>
						<section dangerouslySetInnerHTML={{ __html: blogpost.content }} />
					</article>
					<hr />
					<div className="grid">
						<div className="two-thirds">
							<h2>Thank you for reading</h2>
							<p>We want to thank you for your interest in the blog. You can find more articles like this on our <a href="/blog">blog</a></p>
							<h3>Share</h3>
							{/* <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`} target="_blank" rel="noopener noreferrer" className="blogpost-share" title="facebook"><FontAwesomeIcon icon={faFacebook} /></a> */}
							{/* <CopyToClipboard text={shareLink}>
								<span className="blogpost-share" title="copy"><FontAwesomeIcon icon={faCopy} /></span>
							</CopyToClipboard> */}
						</div>
						<div className="two-thirds">
						<a href="/blog" className="return">Return to blog</a>
						</div>
					</div>
            </div>}
        </div>
    )
}