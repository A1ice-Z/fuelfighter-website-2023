import React from "react"
import "../styles/pageStyles/404.css"

import img404 from "../assets/404-img.jpeg"

export default function PageNotFound() {
    return(
        <div className="container404">
            <img class="bi me-2" id="img404" src={img404}/>
            <div><h2>We are having a problem charging this page!</h2></div>
            <div className="buttons404">
                <a href="/"><button type="button" class="btn btn-primary">Go to Main Page</button></a>
                <a href="/contact"><button type="button" class="btn btn-secondary">Go to Contact Us</button></a>
            </div>
        </div>
    )
}