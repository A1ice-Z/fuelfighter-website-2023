import React, { useContext, useEffect } from "react"
import '../styles/componentStyles/footer.css'

import logoBlue from "../assets/logo/logo_blue.png";
import logoWhite from '../assets/logo/logo_white.png'
import { DarkModeContext} from "./DarkModeContext"

//for border top add "border-top" to className of the first internal div of footer
export default function Footer() {
    const { darkMode } = useContext(DarkModeContext);
    
    return(
        <footer className="footer">
            <div id="footer" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted"><span>&copy; 2023 Fuel Fighter NTNU</span></p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img className="bi me-2" width ="40" height="40" src={darkMode ? logoWhite: logoBlue} alt="Fuel Fighter Logo"/>
                </a>
                    
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted"><span>Contact us</span></a></li>
                </ul>
            </div>
        </footer>
    )
}