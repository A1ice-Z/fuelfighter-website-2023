import React from "react"
import "../styles/pageStyles/Sponsors/sponsors.css";

import ScrollToBottom from '../components/ScrollToBottom';

import InstagramCarousel from "./sponsors/InstagramCarousel";
import SponsorForm from "./sponsors/SponsorsForm";
import SponsorCard from "./sponsors/sponsorCard";
//DIAMOND
import alva from '../assets/pages/Sponsors/colored/Alva_industries.svg'
import TotalEnergies from '../assets/pages/Sponsors/colored/TOTALENERGIES.jpg'
import Zolve from '../assets/pages/Sponsors/colored/Zolve.png';
//GOLD
import RenRos from '../assets/pages/Sponsors/colored/RenRoros.png'
//SILVER
import Eker from '../assets/pages/Sponsors/colored/Eker.PNG'
import FourTest from '../assets/pages/Sponsors/colored/4test.png'
import Framo from '../assets/pages/Sponsors/colored/FRAMO.png'
import NeptuneEnergy from '../assets/pages/Sponsors/colored/NeptuneEnergy.jpg'
//BRONZE
import DNV from '../assets/pages/Sponsors/colored/DNV.png'
import SUBSEA from '../assets/pages/Sponsors/colored/subsea7.png'
import NTNU from '../assets/pages/Sponsors/colored/NTNU.svg'
import HPC from '../assets/pages/Sponsors/colored/HPC.png'
import TrondheimStaal from '../assets/pages/Sponsors/colored/Trondheim_staal.png'
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
import AutoCare from '../assets/pages/Sponsors/colored/AutoCare.jpg'
import IDE from '../assets/pages/Sponsors/IDEhouse.png'
import SciDart from '../assets/pages/Sponsors/scichart.png'
import MomentumIndustrial from '../assets/pages/Sponsors/colored/momentumIndustrial.jpg'

export default function Sponsors() {
    return(
            <>
                <section>
                    <div id="titleSponsors">
                        <h1>Sponsors & Partners</h1>
                        <p style={{textAlign:"justify"}}>
                            As a student organization, we depend on the support from our sponsors. They support us both financially and by providing us with components and services. We are deeply grateful to our partners for their generous contributions of time, goods and funds. Together, we address complex issues and successfully leverage our resources to compete in the Eco Shell Marathon. With support from our partners, we can continue to fund existing programs and create new services in response to emerging needs. We are therefore grateful for their contribution into the project.
                        </p>
                        <h3 style={{marginBottom: '5vh'}}>Social Media</h3>
                        <InstagramCarousel />
                        <div style={{marginTop: '5vh', display:'flex', alignContent:'center', textAlign: 'center', flexDirection:'column', cursor:'pointer'}} onClick={() => document.querySelector('#SponsorForm').scrollIntoView()}>
                            <p style={{margin: 0}}>Write us to discover more</p>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>
                </section>
                <section id="sponsorsSponsors">
                    <div class="sponsorDiv">
                        <h3>Platinum Sponsors</h3>
                        <div className="sponsorRow">
                            {sponsorsDiamond.map((sponsor) => (
                                <SponsorCard key={sponsor.name} name={sponsor.name}img={sponsor.img} description={sponsor.description} level='Diamond' link={sponsor.link}/>
                            ))}
                        </div>
                    </div>
                    <ScrollToBottom appear='.bi-chevron-down' disappear='#SponsorForm' defaultDisplay={false}/>
                    <div class="sponsorDiv" id="goldSponsors">
                        <h3>Gold Sponsors</h3>
                        <div className="sponsorRow">
                            {sponsorsGold.map((sponsor) => (
                                <SponsorCard key={sponsor.name} name={sponsor.name} img={sponsor.img} description={sponsor.description} level='Gold' link={sponsor.link}/>
                            ))}
                        </div>
                    </div>
                    <div class="sponsorDiv" id="silverSponsors">
                        <h3>Silver Sponsors</h3>
                        <div className="sponsorRow">
                            {sponsorsSilver.map((sponsor) => (
                                <SponsorCard key={sponsor.name} name={sponsor.name}img={sponsor.img} description={sponsor.description} level='Silver' link={sponsor.link}/>
                            ))}
                        </div>
                    </div>
                    <div class="sponsorDiv" id="bronzeSponsors">
                        <h3>Bronze Sponsors</h3>
                        <div className="sponsorRow" id="bronzeSponsors">
                            {sponsorBronze.map((sponsor) => (
                                <SponsorCard key={sponsor.name} name={sponsor.name}img={sponsor.img} description={sponsor.description} level='Bronze' link={sponsor.link}/>
                            ))}
                        </div>
                    </div>
                    <div className="sponsorDiv primaryColor" id="goldSponsors" style={{marginTop: '4%'}}>
                        <h3>Partners</h3>
                        <div className="sponsorRow">
                        {partners.map((sponsor) => (
                                <SponsorCard key={sponsor.name} name={sponsor.name}img={sponsor.img} description={sponsor.description} level='Partner' link={sponsor.link}/>
                            ))}
                        </div>
                    </div>
                </section>

                <div id="contactSponsorsContainer">
                </div>
                <div id='SponsorForm'>
                    <SponsorForm />                
                </div>
            </>
        )
    }

const sponsorsDiamond =[
{
    name:'Alva',
    img: alva,
    description: 'Alva was founded to meet the growing global energy demand with renewable technologies. We develop electric generators for production of clean energy and electric motors to convert this energy into motion.',
    link: 'https://alvaindustries.com/'
},
{
    name: 'Zolve',
    img: Zolve,
    description: "Zolve originates from Trondheims technological environment, and offers consulting services to a wide range of companies. Zolve is spesialists in electronics, FPGA and software, with over 60 years of experience, a core part of Zolve's success comes from openness and close communication between customer and developer, which are essential in order to achieve the best result.",
    link: 'https://zolve.no/'
},
{
    name:'Total Energies',
    img:TotalEnergies,
    description: 'TotalEnergies is a broad energy company that produces and markets fuels, natural gas and electricity. The company has around 100,000 employees that are committed to better energy that is more affordable, more reliable, cleaner and accessible to as many people as possible. Active in more than 130 countries, their ambition is to become the responsible energy major.',
    link: 'https://totalenergies.com/'
}
]

const sponsorsGold = [
{
    name: 'Ren Røros',
    img: RenRos,
    description: 'Ren Røros Intelligent Automation AS specializes in delivering rapid results and increased value through the digitization of work processes. The team provides the expertise and tools necessary to help businesses make the transition to a more digital future.',
    link: 'https://renroros.no/',
}
]

const sponsorBronze = [
{
  name: "AutoCare",
  img: AutoCare,
  description:
    "A product with a thousand uses. WD-40 Multi Use was originally developed to help block moisture in space-shuttle compliments, but was soon know as the product with thousands of uses. Since the beginning the formula remains the same however new uses are continuously being discovered. WD-40 is irreplaceable for numerous applications, such as removing moisture and lubrication. WD-40 protects metals against rust and corrosion, and even removes grease and smut from surfaces. Fuel Fighter NTNU uses WD-40 supplied from AutoCare in all moving parts to ensure smooth and efficient movements.",
  link: "https://www.autocare.no"
},
{
  name: "DNV GL",
  img: DNV,
  description:
    "We are the independent expert in risk management and quality assurance. Driven by our purpose, to safeguard life, property and the environment, we empower our customers and their stakeholders with facts and reliable insights so that critical decisions can be made with confidence. As a trusted voice for many of the world’s most successful organizations, we use our knowledge to advance safety and performance, set industry benchmarks, and inspire and invent solutions to tackle global transformations.",
  link: "https://www.dnv.com/"
},
{
  name: "Subsea7",
  img: SUBSEA,
  description:
    "Subsea7 makes offshore energy transition possible through the continuous evolution of lower-carbon oil and gas and by enabling the growth of renewables and emerging energy. Fleet of 30+ vessels in over 30 countries - powered by over 13 000 employees!",
  link: "https://www.subsea7.com/en/index.html"
},
{
  name: "Lindberg & Lund",
  img: LindbergLund,
  description:
    "Lindberg & Lund AS imports and distributes construction adhesives, lubricants, release agents, composite materials, grouts and auxiliaries for the electronics industry.",
  link: "https://lindberg-lund.no/"
},
{
  name: "SKF",
  img: SKF,
  description:
    "Our expertise is built on the development, design and manufacture of bearings, seals and lubrication systems.",
  link: "https://www.skf.com/"
},
{
  name: "Altair",
  img: Altair,
  description:
    "Solving your toughest challenges. Helping the innovators innovate, drive better decisions, and turning today’s problems into tomorrow’s opportunities.",
  link: "https://www.altair.com/"
},
{
  name: "Nskog",
  img: nskog,
  description:
    "Norske Skog Skogn is actively working towards the green shift and the global circular economy through value creation of renewable resources such as norwegian spruce and hydro power.",
  link: "https://www.norskeskog.com/"
},
{
  name: "EW Glass & Plast",
  img: EWGlassOgPlast,
  description:
    "Ew Glass & Plast primarily conducts wholesale trading activities with the purchase and sale of glass, plastic, fittings and accessories. They offer short delivery times on their products. EW Glass & Plast always aims to provide maximum service for all their customers, and grow their reputation as a supplier!",
  link: "http://www.ewglass.no/"
},{
    name: 'Tietoevery',
    img: Tietoevery,
    description:
      'Tietoevery is a leading technology company within cloud, data and software - located in more than 90 countries with over 24 000 employees. Besides a strong Nordic root and our common IT-synergy, Tietoevery has a strong climate focus with their Sustainability game plan 2023; during 2021 their data centers and offices ran on 92% carbon-free electricity.',
    link: 'https://www.tietoevry.com/no/'
  },
  {
    name: 'GKN Aerospace Norway AS',
    img: GKN,
    description:
      'GKN Aerospace Norway AS (GAN) manufactures complex components for jet engines and gas turbines for the world’s largest aircraft manufacturers. GAN have extensive experience in the industry and are a centre of excellence within advanced mechanical production.',
    link:
      'https://www.gknaerospace.com/en/about-gkn-aerospace/locations/gkn-aerospace-in-europe/norway-as/',
  },
  {
    name: 'Microchip',
    img: Microchip,
    description:
      'Microchip Technology Incorporated is a leading provider of smart, connected and secure embedded control solutions. The company\'s solutions serve more than 120,000 customers across the industrial, automotive, consumer, aerospace and defense, communications and computing markets.',
      link: 'https://www.microchip.com/',
  },
  {
    name: 'Fagne',
    img: Fagne,
    description:
      'Fagne is a grid company supplying electricity to about 150,000 inhabitants on Haugalandet, Sunnhordland, Indre Ryfylke and parts of Hardanger in Norway. Besides taking care of the socially critical infrastructure – Fagne is also ensuring the green shift by being heavily involved and developing the national test center at Utsira – where various energy technology and control systems can be tested in a closed network!',
      link: 'https://fagne.no/',
  },
  {
    name: 'Haugaland Kraft',
    img: Haugaland,
    description:
      'Headquartered in Haugesund with more than 500 employees – the Haugaland Kraft group has operations ranging from renewable production, distribution and sales of electricity, as well as energy services and telecom! Haugaland Kraft is also involved in solar power, charging, smart energy services & communications – hence, enabling the green shift by sustainable solutions!',
      link: 'https://hkraft.no/',
  },
  {
    name: 'OMEXOM Norway',
    img: Omexom,
    description:
      'OMEXOM Norway is market leader in rolling out charging infrastructure for its clients, offering them nationwide installation and a well-functioning service network. As an accelerator of the energy transition OMEXOM foster access to electricity, ensure secure supply, develop sustainable energy and operates within the whole energy value chain.',
      link: 'https://www.omexom.no/',
  },
  {
    name: 'Hertz',
    img: Hertz,
    description:
      "The Hertz Corporation is the world's largest car rental company, with 1,900 branches in the United States and 11,000 worldwide.",
      link: 'https://www.hertz.no/rentacar/reservation/',
  }
]

const sponsorsSilver = [
{
  name: 'Eker',
  img: Eker,
  description:
    "The EKER team consists of highly skilled personnel from a wide range of disciplines. Industrial designers, art directors, graphic designers, engineers, tool- and mechanical technicians, economists and project leaders all work hand in hand to create the next high leveled product.",
  link: 'https://ekerdesign.com/',
},
{
  name: 'FourTest',
  img: FourTest,
  description: "4Test is a leader in measurement solutions and expertise, building on the foundation of Keysight Technologies measurement equipment and technology. Our Mission is to provide engineers, Scientists and technicians the best-fit measurement solutions to help them to measure, test and validate the performance of their electronic, wireless and photonic devices.",
  link: 'https://www.4test.no',
},
{
  name: "Framo",
  img: Framo,
  description: "Based in Bergen, Norway, Framo has been the recognized leader in pumping systems for the marine industry for more than half a century. Customers around the globe turn to them, both for pumps and for expertise in meeting their challenges. Discover Framos unique solutions on their website.",
  link: 'https://www.framo.com/',
},
{
    name: 'Neptune Energy',
    img: NeptuneEnergy,
    description: 'Neptune Energy is an independent global E&P company with operations across the North Sea, North Africa and Asia Pacific. The business had a production of 130,000 net barrels of oil equivalent per day in 2021. Transitioning towards a greener future and net zero by 2030, Neptune Energy have created a three-year environmental roadmap where the goal is to lower emissions and explore endeavors within electrification, carbon capture storage and hydrogen.',
    link: 'https://www.neptuneenergy.com/'
}
];

const partners = [
{
  name: 'NTNU',
  img: NTNU,
  description:
    'NTNU is a university with an international focus, with headquarters in Trondheim and campuses in Ålesund and Gjøvik. NTNU has a main profile in science and technology',
  link: 'https://www.ntnu.edu/'
},
{
  name: 'HPC',
  img: HPC,
  description:
    'HPC performs services for industry and private customers. They want to be part of the development, and make your production possible. By using HPC, you will see that you save time, money, and increase quality.',
  link: 'http://www.hpcomposites.no/'
},
{
  name: 'Trondheim stål',
  img: TrondheimStaal,
  description:
    'Trondheim Stål was founded in 1989 and is a steel contractor with main focus on steel structures for construction, civil engineering, smelters and the process industry.',
  link: 'https://www.trondheimstaal.com/'
},
{
  name: 'IDE House',
  img: IDE,
  description:
    'IDÉ House of Brands delivers profile products, clothing, gifts, brands and promotional products to the corporate market.',
  link: 'https://www.idegroup.no'
},
{
    name: 'Sci Chart',
    img: SciDart,
    description: 'ciChart is a cross-platform WPF (desktop), iOS, macOS, Android, Xamarin, and Web charting library. Used by customers across the world in sectors ranging from oil and gas and engineering, financial and trading to tech medical and research and more. The product is leading in its niche, because there is no competitor matching the performance of the drawing the data.',
    link: 'https://www.scichart.com/'
},
{
    name: 'Momentum Industrial',
    img: MomentumIndustrial,
    description: "Momentum is one of Sweden's leading suppliers of industrial components. They have a range of products in the areas of bearings, seals, gearboxes, electric motors, mechatronics, gearboxes and pumps. ",
    link: 'https://www.momentum-industrial.com/'
}
];