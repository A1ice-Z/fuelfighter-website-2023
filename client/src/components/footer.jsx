import React, { useContext, useEffect } from "react"
import '../styles/componentStyles/footer.css'

import logo from "../assets/logo/logo_blue.png";
// import { DarkModeContext, blue, white, green} from "./DarkModeContext"

//for border top add "border-top" to className of the first internal div of footer
export default function Footer() {
    // const { darkMode } = useContext(DarkModeContext);
    

    return(
        <footer className="footer">
            <div id="footer" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                <p className="col-md-4 mb-0 text-muted">&copy; 2023 Fuel Fighter NTNU</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img className="bi me-2" width ="40" height="40" src={logo} alt="Fuel Fighter Logo"/>
                </a>
                
                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">Contact us</a></li>
                </ul>
            </div>
        </footer>
    )
}