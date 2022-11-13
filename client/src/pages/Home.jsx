import React from "react"
import "../styles/pageStyles/home.css"
import video from '../assets/video/mainPageVideo.mp4';

import imgValues from '../assets/home/value1.jpg'

export default function Home() {
    return(
        <div className="homeContainer">
            <div className="homeFirst">
                <video src={video} controls={false} playing={true} autoPlay muted loop></video>                
            </div>
            <div className="homeAbout">
                <div id="homeSection">
                    <div className="testoHomeSections">
                        <h1>Our values</h1>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="valuesImgContainer">
                            <img id="imgHomeAbout" alt="img values " src={imgValues}/>
                    </div>
                </div>

                <div id="homeSectionInverted">
                    <div className="valuesImgContainer">
                            <img id="imgHomeAboutInv" alt="img values " src={imgValues}/>
                    </div>
                    <div className="testoHomeSections">
                        <h1>Our values</h1>
                        <p></p>
                        <p></p>
                    </div>
                </div>

                <div id="homeSection">
                    <div className="testoHomeSections">
                        <h1>Our values</h1>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="valuesImgContainer">
                            <img id="imgHomeAbout" alt="img values " src={imgValues}/>
                    </div>
                </div>
            </div>
        </div>
    )
}