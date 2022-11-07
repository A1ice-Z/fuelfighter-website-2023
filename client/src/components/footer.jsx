import React from "react"
//import '../../styles/templatesStyles/header.css'

import logo from "../assets/logo/logo_blue.png";


export default function Footer() {
    return(
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">&copy; 2022 Fuel Fighter NTNU</p>

                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img class="bi me-2" width ="40" height="40" src={logo}/>
                </a>
                
                <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="/contact" class="nav-link px-2 text-muted">Contact us</a></li>
                </ul>
            </footer>
        </div>
    )
}