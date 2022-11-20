import React from 'react';

import '../../styles/pageStyles/blog/post.css';

const descriptionTruncated = (array, nWords) => {
    let str = "";
    array.map((el, idx) => {
        if(idx <= nWords){
            str += el+" "
        }
    })
    return str;
}

export const post = ({props}) => {
    // key={el.id} title={el.id} description={el.description} author={el.author} date={el.date} img={el.image}

    const formatDate = (milliseconds) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Descember"];
        var date = new Date(+milliseconds);
        return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`
    }

    const nWords = 17;
    const arrDescr = props.description.split(" ");
    const description = (arrDescr.length<nWords ? props.description : descriptionTruncated(arrDescr, nWords-1) + "...")

    return (
        <div id="containerPost">
            <img className="imagePost" width="100%" height="170" src={props.image}/>
            <div className="datePost">
                {formatDate(props.date)}
            </div>
            <div id="centeredDiv">
                <h1>{props.title}</h1>
            </div>
            <div className="postTxt" id="centeredDiv">
                <p>{description}</p>
            </div>
        </div>
    )
}