import imgValues from '../../assets/pages/home/value1.jpg'

import '../../styles/pageStyles/home/homeAbout.css';

export default function HomeAbout() {

    const observer = new IntersectionObserver( entries => {
        entries.forEach( (entry) => {
            if (entry.isIntersecting){
                // entry.classList.add('enterSectionAnimation');
            } else {
                // entry.classList.remove('enterSectionAnimation');
            }
        })
    });

    // observer.observe(document.getElementById("homeSection1"))

    return(
        <div className="homeAbout">
                <div className="homeSection" id="homeSection1">
                    <div className="testoHomeSections">
                        <h1>Inspire a sustainable future</h1>
                        <p>Our Motto and Values</p>
                    </div>
                    <div className="valuesImgContainer">
                        <img id="imgHomeAbout" className="come-in" alt="img values " src={imgValues} />
                    </div>
                </div>

                <div id="homeSectionInverted" data-mdb-toggle="animation" data-mdb-animation-start="onScroll" data-mdb-animation="slide-in-left">
                    <div className="valuesImgContainer" >
                        <img id="imgHomeAboutInv" alt="img values " src={imgValues} />
                    </div>
                    <div className="testoHomeSections">
                        <h1>Our Mission</h1>
                        <p>to make things sustainable</p>
                        <p></p>
                    </div>
                </div>

                <div className="homeSection">
                    <div className="testoHomeSections">
                        <h1>Our Goals</h1>
                        <p>Fn-målene</p>
                        <p></p>
                    </div>
                    <div className="valuesImgContainer">
                        <img id="imgHomeAbout" alt="img values " src={imgValues} />
                    </div>
                </div>
            </div>
    )
}