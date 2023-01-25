import React, {useContext, useEffect} from "react"
import { DarkModeContext, blue, white } from "../components/DarkModeContext";

import "../styles/pageStyles/Sponsors/sponsors.css";
import SponsorCard from "./sponsors/sponsorCard";

//PLATINUM
import alva from '../assets/pages/Sponsors/colored/Alva_industries.svg'
import TotalEnergies from '../assets/pages/Sponsors/colored/TOTALENERGIES.jpg'
import Zolve from '../assets/pages/Sponsors/colored/Zolve.png';
//SILVER
import Eker from '../assets/pages/Sponsors/colored/Eker.PNG'
import FourTest from '../assets/pages/Sponsors/colored/4test.png'
import Framo from '../assets/pages/Sponsors/colored/FRAMO.png'
import NeptuneEnergy from '../assets/pages/Sponsors/colored/NeptuneEnergy.jpg'
//BRONZE
import DNV from '../assets/pages/Sponsors/colored/DNV.png'
import Subsea from '../assets/pages/Sponsors/colored/subsea7.png'
import LindbergLund from '../assets/pages/Sponsors/colored/Lindberg_lund.png'
import SKF from '../assets/pages/Sponsors/colored/SKF.png'
import Altair from '../assets/pages/Sponsors/colored/Altair.svg'
import nskog from '../assets/pages/Sponsors/colored/Nskog.png'
import EWGlassOgPlast from '../assets/pages/Sponsors/colored/EWGlassOgPlast.jpg'
import Tietoevery from '../assets/pages/Sponsors/colored/TietoEvrery.png'
import GKN from '../assets/pages/Sponsors/colored/GKN.png'
import Microchip from '../assets/pages/Sponsors/colored/Microchip.png'
import Fagne from '../assets/pages/Sponsors/colored/FagneLogo.png'
import Hertz from '../assets/pages/Sponsors/colored/HERTZ.png'
import Omexom from '../assets/pages/Sponsors/colored/OMEXOM.png'
import Haugaland from '../assets/pages/Sponsors/colored/Haugaland.png'


export default function Sponsors() {
    const { darkMode } = useContext(DarkModeContext);
    useEffect(() => {
        let titleDiv = document.getElementById("titleSponsors");
        titleDiv.style.backgroundColor = darkMode ? blue : white;
        titleDiv.style.color = darkMode ? white : blue;

    }, [darkMode]);

    return(
            <>
                <section>
                    <div id="titleSponsors">
                        <h1>Sponsors & Partners</h1>
                        <p>
                            As a student organization we depend on the support from our sponsors. They support us both financially and by supporting us with components and services. We are therefore grateful for their contribution into the project.
                        </p>
                    </div>
                </section>
                <section id="sponsorsSponsors">
                    <div class="sponsorDiv" id="goldSponsors">
                        <h3>GOLD SPONSORS</h3>
                        <div className="sponsorRow">
                            <SponsorCard name="Alva" img={alva}/>
                            <SponsorCard name="Total Energies" img={TotalEnergies}/>
                            <SponsorCard name="Zolve" img={Zolve}/>
                        </div>
                    </div>
                    <div class="sponsorDiv" id="silverSponsors">
                        <h3>SILVER SPONSORS</h3>
                        <div className="sponsorRow">
                            <SponsorCard name="4Test" img={FourTest}/>
                            <SponsorCard name="Eker" img={Eker}/>
                            <SponsorCard name="Framo" img={Framo}/>
                            <SponsorCard name="Neptune Energy" img={NeptuneEnergy}/>
                        </div>
                    </div>
                    <div class="sponsorDiv" id="bronzeSponsors">
                        <h3>BRONZE SPONSORS</h3>
                        <div className="sponsorRow">
                            <SponsorCard name="DNV" img={DNV}/>
                            <SponsorCard name="Subsea7" img={Subsea}/>
                            <SponsorCard name="Lindberg & Lund AS" img={LindbergLund}/>
                            <SponsorCard name="SKF" img={SKF}/>
                            <SponsorCard name="Altair" img={Altair}/>
                            <SponsorCard name="Norske Skog Skogn" img={nskog}/>
                            <SponsorCard name="Ew Glass & Plast" img={EWGlassOgPlast}/>
                        </div>
                        <div className="sponsorRow">
                            <SponsorCard name="Tietoevery " img={Tietoevery}/>
                            <SponsorCard name="GKN Aerospace Norway AS" img={GKN}/>
                            <SponsorCard name="Microchip Technology Incorporated" img={Microchip}/>
                            <SponsorCard name="Fagne" img={Fagne}/>
                            <SponsorCard name="The Hertz Corporation" img={Hertz}/>
                            <SponsorCard name="OMEXOM Norway" img={Omexom}/>
                            <SponsorCard name="Haugaland" img={Haugaland}/>
                        </div>
                    </div>
                </section>
                <div id="contactSponsorsContainer">
                    <h3>GET INVOLVED. [---]</h3>
                    <a href="MAILTO:br@fuelfighter.no"><button type="button" class="btn btn-light">CONTACT THE TEAM</button></a>
                </div>
            </>
        )
    }