import React from "react"
import TeamDisplay from "./Team/TeamDisplay.jsx"
import TeamTitle from './Team/TeamTitle.jsx'
// import SideTopBar from '../components/Team/SideTopBar.jsx'

import '../styles/pageStyles/Team.css'


export default function Team() {
    return(
        <div className="teamMain">
            <div className="teamSection" id="center" >
                <TeamTitle/>
            </div>
            <div className="teamSection">
                {/* <SideTopBar/> */}
                <TeamDisplay/>
            </div>
        </div>


        
            
            

    )
}