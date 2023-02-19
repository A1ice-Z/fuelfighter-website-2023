import React from "react"
import "../styles/pageStyles/NewTeam.css"
import NewTeamYears from "./NewTeamYears"

export default function NewTeam() {
    return(
        <div class="container" id="maincont">
            <div class="row">
                <div class="col-2" id="row1">
                    <NewTeamYears/>
                </div>
                <div class="col-10" id="row1">
                    <div class="row" id="row1">
                        <h1>Title </h1>
                    </div>
                    <div class="row" id="row1">
                        <h1>Different team choice </h1>
                    </div>
                    <div class="row" id="row1">
                        <h1>Team description </h1>
                    </div>
                    <div class="row" id="row1">
                        <h1>Pictures </h1>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

