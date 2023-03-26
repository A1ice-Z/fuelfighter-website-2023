import React from "react"

import "../styles/pageStyles/dev.css"

const a = window.screen.height
const b = window.screen.width

export default function Dev() {
    return(
        <div>
            <ul>
                <li>
                    <p id="colors">Blue</p>
                    <p id="colors">Green</p>
                </li>
                <li>
                    <h5>checking bootstrap:</h5>
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                </li>
                <li>
                    <h5>Dimensions:</h5>
                    <p>Weight: {b}</p>
                    <p>Height: {a}</p>
                </li>
                <li>
                    <h5>Services</h5>
                    <p></p>
                </li>
                <li>
                <div class="CAFFEINA-Hero__scroller"> <span class="CAFFEINA-icon  CAFFEINA-icon-scroll"> 
                    <svg id="CAFFEINA-icon-scroll" width="2" height="47" viewBox="0 0 2 47" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                    <title>Scroll down</title> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.941176 4.11401e-08C0.421379 1.84191e-08 -1.84191e-08 0.421379 -4.11401e-08 0.941176L-1.35762e-06 31.0588C-1.38035e-06 31.5786 0.421378 32 0.941175 32C1.46097 32 1.88235 31.5786 1.88235 31.0588L1.88235 0.941177C1.88235 0.421379 1.46097 6.38612e-08 0.941176 4.11401e-08Z" fill="white"></path> <circle r="1" transform="matrix(1 0 0 -1 1 36)" fill="white"></circle> <circle r="1" transform="matrix(1 0 0 -1 1 41)" fill="white"></circle> <circle r="1" transform="matrix(1 0 0 -1 1 46)" fill="white"></circle> 
                    </svg> </span> 
                </div>
                </li>
            </ul>
        </div>
    )
}