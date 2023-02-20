import React, { useEffect, useState } from 'react'
import "../styles/pageStyles/NewTeam.css"
import teamService from '../_services/team.service'


export default function NewTeam() {

    const defaultYear = 2023; // The default year
    const defaultTeam = 1; // The default index


    
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
                <div class="col-2" id="teamYearCol">
                    <div id="yearTitle">
                        <p onClick={() => onClickChangeYear(2023)}>Team 2023</p>
                    </div>
                    <div id="yearTitle">
                        <p onClick={() => onClickChangeYear(2022)}>Team 2022</p>
                    </div>
                    <div id="yearTitle">
                        <p onClick={() => onClickChangeYear(2021)}>Team 2021</p>
                    </div>
                    <div id="yearTitle">
                        <p onClick={() => onClickChangeYear(2020)}>Team 2020</p>
                    </div>
                </div>
                <div class="col-10" id="row1">
                    <div class="row" id="teamTitleRow">
                        <h1 id="teamTitleText" >Our Team </h1>
                    </div>
                    <div class="row justify-content-center" id="teamGroupRow">
                    
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText" onClick={() => onClickChangeTeam(0)}>Board</p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText" onClick={() => onClickChangeTeam(1)}>Autonomous </p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText" onClick={() => onClickChangeTeam(2)}>Design </p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText" onClick={() => onClickChangeTeam(3)}>Electrical </p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText" onClick={() => onClickChangeTeam(4)}>Marketing & Finance</p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText" onClick={() => onClickChangeTeam(5)}>Mechanical </p>
                        </div>
                        <div class="col-auto" id="chooseGroupButton">
                            <p id="chooseGroupButtonText" onClick={() => onClickChangeTeam(6)}>Software </p>
                        </div>
                    </div>
                    <div class="row" id="teamdescriptionRow">
                        {displayTeam.map(team => (
                        <p>{team.description} </p>
                        ))}
                    </div>
                    <div class="row" id="teamPicturesRow">
                        <h1> Pictures </h1>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

