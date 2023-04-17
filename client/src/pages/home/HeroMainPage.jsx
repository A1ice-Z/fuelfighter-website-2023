import { useState } from 'react';

import "../../styles/pageStyles/home/heroHome.css";

//import video from '../../assets/video/mainPageVideo.mp4';
import landingImage from '../../assets/pages/home/car_render_transparent_crop1.png';
import video from '../../assets/video/mainPageAnimation.mp4';

export default function HeroHome() {
    const [videoVisible, setVideoVisible] = useState(true)

    return (
        <section id='heroHome'>
            <div className={`homeFirst`}>
                <div id="homeTitle" className="homeTitle">
                    <h1>Fuel Fighter NTNU</h1>
                </div>
                {/* {videoVisible ?
                    <video src={video} onEnded={() => setVideoVisible(false)} controls={false} autoPlay muted />
                    :
                    <img id="landingimage" src={landingImage} alt="fuel fighter" />
                } */}
                <video src={video} onEnded={() => setVideoVisible(false)} controls={false} autoPlay muted />
            </div>
        </section>
    )
}