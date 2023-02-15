import React, { useState } from "react"

import "../styles/pageStyles/home/home.css"
// import BlogPreview from "./home/blogPreview";
import video from '../assets/video/mainPageVideo.mp4';
import landingImage from '../assets/pages/home/car_render_transparent_crop1.png';
import imgValues from '../assets/pages/home/value1.jpg'

export default function Home() {    
    const [videoVisible, setVideoVisible] = useState(true)

    const afterVideoEnd = () =>{
        setVideoVisible(false)
    }

    return(
        <div className="homeContainer">
            <div className={`homeFirst`}>
                {/* <video src={video} controls={false} playing={true} autoPlay muted loop /> */}
                <img src={landingImage} alt="fuel fighter image"/>
                <div id="homeTitle" className="homeTitle">
					<h1>Fuel Fighter NTNU</h1>
				</div>
            </div>
            <div className="homeAbout">
                <div id="homeSection">
                    <div className="testoHomeSections">
                        <h1>Inspire a sustainable future</h1>
                        <p>Our Motto</p>
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
                        <h1>Our Mission</h1>
                        <p></p>
                        <p></p>
                    </div>
                </div>

                <div id="homeSection">
                    <div className="testoHomeSections">
                        <h1>Our Values</h1>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="valuesImgContainer">
                            <img id="imgHomeAbout" alt="img values " src={imgValues}/>
                    </div>
                </div>
            </div>
            {/* <BlogPreview /> */}
        </div>
    )
}