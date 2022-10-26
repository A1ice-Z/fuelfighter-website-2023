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
                    <button type="button" class="btn btn-primary">Primary</button>
                    <button type="button" class="btn btn-secondary">Secondary</button>
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
            </ul>
        </div>
    )
}