import React, { useEffect, useState } from 'react'
import "../styles/pageStyles/NewTeam.css"
import teamService from '../_services/team.service'

import NewTeamYears from "./NewTeamYears"

export default function NewTeam() {
    const defaultYear = 2022; // The default year
    const defaultTeam = 0; // The default index
    const [selectedYear, setSelectedYear] = useState(defaultYear);
    const [selectedTeam, setSelectedTeam] = useState(defaultTeam);
    const [displayTeam, setDisplayTeam] = useState([]);


    const onClickChangeYear = (year) => {
        setSelectedYear(year)    
    }
    
    const onClickChangeTeam = (team) => {
        setSelectedTeam(team)    
    }

    useEffect( () => {
        var showYear = selectedYear;
        var showTeam = selectedTeam;

        const loadingData = async (showYear, showTeam) => {
            const data = await teamService.team(showYear, showTeam);
            setDisplayTeam([data])
        }
        loadingData(showYear, showTeam);
    }, [selectedTeam, selectedYear])
    return(
        <div class="container" id="teamContainer">
            <div class="row">
                <div class="col-2" id="row1">
                    <NewTeamYears/>
                </div>
                <div class="col-10" id="row1">
                    <div class="row" id="teamTitleRow">
                        <h1 id="teamTitleText">Our Team </h1>
                    </div>
                    <div class="row justify-content-center" id="teamGroupRow">
                    
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText">Board</p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText">Autonomous </p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText">Design </p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText">Electrical </p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText">Marketing & Finance</p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText">Mechanical </p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText">Software </p>
                        </div>
                    </div>
                    <div class="row" id="teamdescriptionRow">
                        <p>Team description </p>
                    </div>
                    <div class="row" id="teamPicturesRow">
                        <h1> Pictures </h1>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

