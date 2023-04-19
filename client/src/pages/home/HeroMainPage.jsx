import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import "../../styles/pageStyles/home/heroHome.css";

import video from '../../assets/video/mainPageAnimation.mp4';

export default function HeroHome() {

    return (
        <Controller>
            <Scene duration={600} triggerHook="onLeave">
                {(progress) => (
                    <section id='heroHome'  style={{ opacity: 1-progress}}>
                        <div className={`homeFirst`}>
                            <div id="homeTitle" className="homeTitle">
                                <h1>Fuel Fighter NTNU</h1>
                            </div>
                            <video src={video} controls={false} autoPlay muted />
                        </div>
                    </section>
                )}
            </Scene>
        </Controller>
    )
}