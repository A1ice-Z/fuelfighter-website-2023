// import React, { useContext, useEffect } from "react"
// import '../styles/componentStyles/footer.css'

// import logoBlue from "../assets/logo/logo_blue.png";
// import logoWhite from '../assets/logo/logo_white.png'
// import { DarkModeContext} from "./DarkModeContext"

// //for border top add "border-top" to className of the first internal div of footer
// export default function Footer() {
//     const { darkMode } = useContext(DarkModeContext);

//     return(
//         <footer className="footer">
//             <div id="footer" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//                 <p className="col-md-4 mb-0 text-muted"><span>&copy; 2023 Fuel Fighter NTNU</span></p>

//                 <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
//                     <img className="bi me-2" width ="40" height="40" src={darkMode ? logoWhite: logoBlue} alt="Fuel Fighter Logo"/>
//                 </a>

//                 <ul className="nav col-md-4 justify-content-end">
//                     <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted"><span>Contact us</span></a></li>
//                 </ul>
//             </div>
//         </footer>
//     )
// }

import React, { useContext, useEffect } from "react"
import '../styles/componentStyles/footer.css'

import logoBlue from "../assets/logo/logo_blue.png";
import logoWhite from '../assets/logo/logo_white.png'
import { DarkModeContext } from "./DarkModeContext"

//for border top add "border-top" to className of the first internal div of footer
export default function Footer() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        // <footer className="footer">
        //     <div id="footer" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        //         <p className="col-md-4 mb-0 text-muted"><span>&copy; 2023 Fuel Fighter NTNU</span></p>

        //         <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        //             <img className="bi me-2" width="40" height="40" src={darkMode ? logoWhite : logoBlue} alt="Fuel Fighter Logo" />
        //         </a>

        //         <ul className="nav col-md-4 justify-content-end">
        //             <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted"><span>Contact us</span></a></li>
        //         </ul>
        //     </div>
        // </footer>
        <div className="container">
            <div className="row" id="footer-backround">
                <div className="row" id="upper-part">
                    <div className="col-auto" id="about-fuel-fighter">
                        <div className="logo">
                            <img src={logoWhite} width="40" />
                            <h2>Fuel Figther NTNU</h2>
                        </div>
                        <div className="sosials">
                            <div className="links">
                                <li><a href="https://www.facebook.com/FuelFighterNTNU/" title="facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook"></i>
                                </a></li>
                                <li><a href="https://www.instagram.com/fuelfighter_ntnu/" title="instagram" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a></li>
                                <li><a href="https://www.youtube.com/user/EcoMarathonNTNU" title="youtube" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-youtube"></i>
                                </a></li>
                                <li><a href="https://www.linkedin.com/company/22290458/" title="linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a></li>
                            </div>
                            <p className="contact"><li><a href="/contact"><span>Contact us</span></a></li></p>
                        </div>
                    </div>
                    <div className="col-auto" id="navigasjon">
                        <h2>Navigation</h2>
                        <ul className="navigasjon">
                            <li><a href="/blog" className="">Blog</a></li>
                            <li><a href="/about" className="">About</a></li>
                            <li><a href="/team" className="">Team</a></li>
                            <li><a href="/sponsors" className="">Sponsors</a></li>
                        </ul>
                    </div>
                    <div className="col-auto" id="information">
                        <div className="adresse">
                            <h2>Adresse</h2>
                            <p>Fuel Fighter NTNU</p>
                            <p>Klæbuveien 153</p>
                            <p>7031 Trondheim</p>
                        </div>
                        {/* <h2 className="contact"><li><a href="/contact"><span>Contact us</span></a></li></h2> */}
                    </div>
                </div>
                <div className="row" id="bottom-part">
                    <div className="text">Copyright © 2023 Fuel Fighter NTNU. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}