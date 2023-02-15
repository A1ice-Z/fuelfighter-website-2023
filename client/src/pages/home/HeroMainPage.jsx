import video from '../../assets/video/mainPageVideo.mp4';
import landingImage from '../../assets/pages/home/car_render_transparent_crop1.png';


export default function HeroHome() {
    return (
        <div className={`homeFirst`}>
            <video src={video} controls={false} playing={true} autoPlay muted loop />
            {/* <img src={landingImage} alt="fuel fighter image"/> */}
            <div id="homeTitle" className="homeTitle">
                <h1>Fuel Fighter NTNU</h1>
            </div>
        </div>
    )
}