import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import blogService from '../../_services/blog.services';

import ArticlePreview from './ArticlePreview.jsx';

import "../../styles/pageStyles/home/blogPreview.css";

export default function BlogPreview() {
    const navigate = useNavigate();
    const goInside = (id) => {
        navigate(`/blog/${id}`, {
            state: {
                id: id
            }
        })
    }

    const [posts, setPosts] = useState();
	const [selected, setSelected] = useState();
    const [nextSelected, setNextSelected] = useState();
    const [index, setIndex] = useState();
    const size = 4;

    if(!posts){
        blogService.blogposts(size)
        .then(json => setPosts(json))
        .then(() => {
            if (!index){
                setIndex(0);
            }
        })
    }

    const nextPreview = () => {        
        if (index < size-1){
            setIndex(index+1);
            let x = document.getElementById("primaryImgBlog");
            x.classList.add("fadeInAnimation");
            setTimeout(() => {
                x.classList.remove("fadeInAnimation");
            }, 750);
        }
    }
    const prevPreview = () => {
        if (index > 0) {
            let x = document.getElementById("primaryImgBlog");
            x.classList.add("fadeInAnimation");
            setIndex(index-1);
            setTimeout(() => {
                x.classList.remove("fadeInAnimation");
            }, 750);
        }
    }
    
    useEffect( () =>{
        if (posts){
            setSelected(posts[index])
            if (index === size-1){
                setNextSelected()
            } else{
                setNextSelected(posts[index+1])
            }
        }
    }, [index]);

    return (
        <section className='blogPreview'>
            <h2>Blog Preview</h2>
            <h4>At Morgan Stanley, we lead with exceptional ideas. Across all our businesses, we offer keen insight on today's most critical issues.</h4>
            <div id="inside">
                {selected ? <img src={selected.image} id="primaryImgBlog" className="" alt="primary article img" onClick={() => goInside(selected.id)}/>:<></>}
                {selected ?
                    <ArticlePreview key = {selected.id}
                        id = {selected.id}
                        title={selected.title}
                        description={selected.description}
						author={selected.author}
						date={selected.date}
						image={selected.image}/>
                    : <></>}
                {nextSelected ?
                <ArticlePreview key = {nextSelected.id}
                    id = {nextSelected.id}
                    title={nextSelected.title}
                    description={nextSelected.description}
                    author={nextSelected.author}
                    date={nextSelected.date}
                    image={nextSelected.image}/>
                : <></>}
            </div>
            <div className='buttons'>
                <div onClick={prevPreview}>
                    <i className="bi bi-arrow-left-square-fill"></i>
                </div>
                <div className='bullets'>
                    {selected?
                        posts?.map((post) => {
                            let idBullet = (post.id === selected.id) ? "selectedBullet" : "";
                            return(
                                <i className="bi bi-dot" id={idBullet} key={post.id}></i>
                            )
                        })
                        : <></>
                    }
                </div>
                <div onClick={nextPreview}>
                    <i className="bi bi-arrow-right-square-fill"></i>
                </div>
            </div>
        </section>
    )
}
