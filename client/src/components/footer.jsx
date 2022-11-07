import React from "react"
//import '../../styles/templatesStyles/header.css'

import logo from "../assets/logo/logo_blue.png";


export default function Footer() {
    return(
        <footer className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; 2023 Fuel Fighter NTNU</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img className="bi me-2" width ="40" height="40" src={logo}/>
                </a>
                
                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">Contact us</a></li>
                </ul>
            </div>
        </footer>
    )
}