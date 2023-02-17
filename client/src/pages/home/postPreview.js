import React from 'react'

import '../../styles/pageStyles/home/post.css'
import { formatDate } from '../../components/formatter'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({id, title, description, author, date, image, featured}) => {

    return (
        <a href={`/blog/${id}`} className={`post_preview ${featured ? 'featured' : ''}`}>
            <div>
                <img alt={title} src={image} />
                <header>
                    <h4>{title}</h4>
                    <h5 className="author">{author}</h5>
                    <time dateTime={date}>{formatDate(date)}</time>
                    <p className="post_preview-description">{description}</p>
                    <p className="text-left" >
                        <span className="read-more">Read</span>
                    </p>
                </header>
            </div>
        </a>
    )
}
