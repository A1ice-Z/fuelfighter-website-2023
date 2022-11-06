import React from "react"
import TeamDisplay from "../components/Team/TeamDisplay"
import TeamTitle from '../components/Team/TeamTitle'
import SideTopBar from '../components/Team/SideTopBar'

import '../styles/pageStyles/Team.css'


export default function Team() {
    return(
        <main>
            <section id="center" >
                <TeamTitle/>
            </section>
            <section>
                <SideTopBar/>
                <TeamDisplay/>
            </section>
        </main>


        
            
            

    )
}