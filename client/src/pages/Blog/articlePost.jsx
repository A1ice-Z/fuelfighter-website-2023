import React from 'react';

import '../../styles/pageStyles/blog/post.css';

export const post = ({props}) => {
    // key={el.id} title={el.id} description={el.description} author={el.author} date={el.date} img={el.image}

    const formatDate = (milliseconds) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Descember"];
        var date = new Date(+milliseconds);
        return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`
    }

    return (
        <div id="containerPost">
            <img className="" width="100%" height="170" src={props.image}/>
            <h1>{props.title}</h1>
            <div className="postTxt">
                <p>{props.author}</p>
            </div>
            <div className="datePost">
                {formatDate(props.date)}
            </div>
        </div>
    )
}