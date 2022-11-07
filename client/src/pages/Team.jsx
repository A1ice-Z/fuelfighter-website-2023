import React from "react"
import TeamDisplay from "../components/Team/TeamDisplay.jsx"
import TeamTitle from '../components/Team/TeamTitle.jsx'
import SideTopBar from '../components/Team/SideTopBar.jsx'

import '../styles/pageStyles/Team.css'


export default function Team() {
    return(
        <main>
            <section id="center" >
                <TeamTitle/>
            </section>
            <section>
                {/* <SideTopBar/> */}
                <TeamDisplay/>
            </section>
        </main>


        
            
            

    )
}