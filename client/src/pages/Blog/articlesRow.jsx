import  React from 'react';
import { post as Post } from './articlePost';

export function ArticlesRow ({articles}) {

    return(
        <div className='articlesRow'>
            {articles?.map((el, idx)=>(
                <Post props={el} key={idx}/>
            ))}
        </div>
    )
}

