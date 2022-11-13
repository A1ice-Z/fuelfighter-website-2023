import React from "react"
import "../styles/pageStyles/home.css"
import video from '../assets/video/mainPageVideo.mp4';

export default function Home() {
    return(
        <div className="homeContainer">
            <div className="homeFirst">
                <video src={video} controls={false} playing={true} autoPlay muted loop></video>                
            </div>
            <div className="homeSecond">
                About
            </div>
        </div>
    )
}