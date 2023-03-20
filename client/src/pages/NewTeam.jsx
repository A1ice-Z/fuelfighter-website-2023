import React, { useEffect, useState } from 'react'
import "../styles/pageStyles/NewTeam.css"
import teamService from '../_services/team.service'
import NewProfile from './Team/NewMemberProfile'



export default function NewTeam() {

    const defaultYear = 2023; // The default year
    const defaultTeam = "Board"; // The default index
    const defaultDescription = "The board of the year 2023"; // The default description
    

   
    const [selectedYear, setSelectedYear] = useState(defaultYear);
    const [selectedTeam, setSelectedTeam] = useState(defaultTeam);
    const [groupDescription, setGroupDescription] = useState(defaultDescription);
    const [displayTeam, setDisplayTeam] = useState([]);
    const [groupList, setGroupList] = useState([]);


    const onClickChangeYear = (year) => {
        switch (year) {

            case 2020:
                setSelectedTeam("Administration");
                break;
            default:
                setSelectedTeam("Board");
        }
        setSelectedYear(year)
    }
    
    const onClickChangeTeam = (team) => {
        setSelectedTeam(team)    
    }


    useEffect( () => {
        
        if(selectedYear && selectedTeam ){
        var showYear = selectedYear;
        var showTeam = selectedTeam;

        const loadingData = async (showYear, showTeam) => {
            const groupData = await teamService.getGroups(showYear);
            setGroupList(groupData);
            const data = await teamService.getGroupMembers(showYear, showTeam);
            setDisplayTeam([data]);
            const description = await teamService.getDescription(showYear,showTeam);
            setGroupDescription(description);
        }
        loadingData(showYear, showTeam);
    }}, [selectedYear, selectedTeam])
    

    return(
        <div class="container" id="teamContainer">
        <div class="row" id="teamTitleRow">
            <h1 id="teamTitleText" >Our Team </h1>
        </div>
            <div class="row">
                <div class="col-2" id="teamYearCol">
                    <div id="stickyDiv">
                        
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
                </div>
                <div class="col-10" id="row1">
                    <div class="row justify-content-center" id="teamGroupRow">

                        {groupList.map(group => (
                            
                            <div class="col-auto" id="chooseGroupButton">
                                <p id="chooseGroupButtonText" onClick={() => onClickChangeTeam(group)}>{group}</p>
                            </div>))}
                    </div>
                    <div class="row" id="teamdescriptionRow">
                            <p>{groupDescription.description}</p>
                    </div>
                    <div class="row" id="teamPicturesRow">
                        
                        {displayTeam.map(team => (
                            
                        <div id="memberBox">
                            {team.map(member => (
                                <NewProfile key={member.firstname + ' ' + member.lastname} name={member.firstname + ' ' + member.lastname} position={member.position_description} studie={member.study} mail={member.email} image={member.image} linkedin = {member.linkedin} />
                                ))}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        

    )
}

