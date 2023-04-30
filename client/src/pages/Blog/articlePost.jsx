import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/pageStyles/blog/post.css';
import { formatDate } from '../../components/formatter';

export default function Post ({props}) {
    const navigate = useNavigate();
    const goInside = (id) => {
        navigate(`/blog/${id}`, {
            state: {
                id: id
            }
        })
    }
    const descriptionTruncated = (array, nWords) => {
        let str = "";
        array.map((el, idx) => {
            if(idx <= nWords){
                str += el+" "
            }
            return 0;
        })
        return str;
    }

    const nWords = 10;
    const arrDescr = props.description.split(" ");
    const description = (arrDescr.length<nWords ? props.description : descriptionTruncated(arrDescr, nWords-1))

    return (
        <div id="containerPost" onClick={() => goInside(props.id)}>
            <img className="imagePost" width="100%" alt={`${props.title}`} height="170" src={props.image}/>
            <div className="datePost">
                {formatDate(props.date)}
            </div>
            <div id="centeredDiv">
                <h1>{props.title}</h1>
            </div>
            <div className="postTxt" id="centeredDiv">
                <h7>{description}</h7>
                {/* <span>→</span> */}
            </div>
        </div>
    )
}