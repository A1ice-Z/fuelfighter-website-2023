import React, {useState, useEffect} from "react"
import { Container, Row, Col } from "react-bootstrap"
import Profile from "../Team/MemberProfile";

import getMemberDetails from '../../_services/leader.service.js';
import notFound from '../../assets/404-img.jpeg'

import electricImg from '../../assets/pages/join/electrical.JPG'
import machanicImg from '../../assets/pages/join/mechanical.JPG'
import marketinImg from '../../assets/pages/join/marketing_and_finance.JPG'
import autonomoImg from '../../assets/pages/join/autonomous_description.JPG'


const generalPositions = [
    {
        'title': 'Mechanical',
        'description': (
                <div id="descriptionGenPosition">
                    <div className="h4">What do they do?</div>
                    <ul>
                        <li>A mechanical group member gets the responsibility for their own mechanical subsystem. This can be chassis, front or back suspension, doors and windows or aerodynamics.</li>
                        <li>The team works with modeling software such as CAD to design parts and manufacture these using techniques such as machining, 3d printing and other creative solutions.</li>
                        <li>The mechanical team is also in charge when it comes to producing a new chassis. They get to work with carbon fibre moulding and other innovative materials.</li>
                    </ul>
                    <div className="h4">Who can join?</div>
                    <ul>
                        <li>
                            A mechanical member is typically someone who studies mechanical engineering or something similar. If you have an interest in working with the mechanical team without this backround, we as always value enthusiasm before knowledge.
                        </li>
                        <li>
                            You should enjoy practical work and want to improve your team working skills.
                        </li>
                    </ul>
                    <div className="h4">Prerequisite?</div>
                    <ul>
                        <li>
    No pre-requisites are required. It is an advantage if you have a background in mechanical engineering or similar.
                        </li>
                        <li>
                        We absolutely love students who have a practical experience, such as a certificate of apprenticeship (“fagbrev”), but this is not by any means a must.
                        </li>
                    </ul>
                </div>
            ),
            leader: 190,
            'image': machanicImg,
    },
    {
        title: 'Electrical',
        description: (
            <div id="descriptionGenPosition">
                    <div className="h4">What does a member in the Electrical group do?</div>
                    <ul>
                        <li>The Electrical members have a wide array of tasks where they work on their own systems and help out if there are challenges in other systems.</li>
                        <li>As a member you can work with Telemetry, the motor controller, driver interface and embedded systems.</li>
                        <li>The electrical group works closely with both design in the dashboard and mechanical with propulsion.</li>
                        <li>A key part of the electrical team is to optimise all subsystems so that we use the least amount of energy possible. This is a highly relevant experience to bring to virtually any field, both in academic and professional work.</li>
                    </ul>
                    <div className="h4">Who can join?</div>
                    <ul>
                        <li>If you are interested in electronics and want to get your hands on a unique project you are more than welcome to apply.</li>
                        <li>The electrical members are typically students in electrical systems design and innovation or similar.</li>
                    </ul>
                </div>
        ),
        leader: 216,
        image: electricImg
    },
    {
        title: 'Software',
        description: (
            <div id="descriptionGenPosition">
                    <div className="h4">What does a Software group member do?</div>
                    <ul>
                        <li>The software members work together on different subsystems that falls under software. The software group develops the driving strategy so that the driver can drive the car in the optimal way, using as little energy as possible. They also develops a driving simulator so that the driver can practise and the team can compete for fun. In addition to this some of the members develop the fuelfighter.no website.</li>
                    </ul>
                    <div className="h4">Who can apply?</div>
                    <ul>
                        <li>If you have an interest in computer science and want a practical application you should consider applying for a position in the software group.</li>
                        <li>In the software group you can develop your programming skills and meet a community of students.</li>
                    </ul>
                </div>
        ),
        leader: 180,
        'image': notFound,
    },
    {
        title: 'Autonomous',
        description: (
            <div id="descriptionGenPosition">
                    <div className="h4">What does an Autonomous group member do?</div>
                    <ul>
                        <li>In the autonomous group the members get to do a wide array of research of autonomous systems. This includes machine learning, ROS and SLAM.</li>
                        <li>The autonomous members work on their own subsystems where they are more or less free to explore different ways to complete their tasks. Subsystems in the autonomous group are the autonomous simulator, actuators and perception.</li>
                        <li>The autonomous group also have their own special rig for testing the LIDAR and cameras, a re-purposed stroller!</li>
                    </ul>
                    <div className="h4">Who can join?</div>
                    <ul>
                        <li>The typical autonomous member studies Cybernetics and Robotics or something similar. They all have a shared interest for autonomous systems.</li>
                        <li>You do not need any prior knowledge to join the group, and after a year of being a member in the autonomous group you probably know more about autonomous driving than just about anyone as this is a true niche field.</li>
                    </ul>
                </div>
        ),
        'image': autonomoImg,
        leader: 179
    },
    {
        title: 'Design',
        description: (
            <div id="descriptionGenPosition">
                    <div className="h4">What does a member in the Design group do?</div>
                    <ul>
                        <li>A member of the design group works with different parts of the cars design, either interior or exterior.</li>
                        <li>The design group cooperates with the mechanical group in designing the chassis of the cars. They combine aesthetics and functional design to create a truly eye catching efficient vehicle.</li>
                        <li>In addition to the exterior, the team is tasked with creating the driver interface including the dashboard and the steering wheel.</li>
                        <li>The members work with 3D modeling software and innovative materials.</li>
                    </ul>
                    <div className="h4">Who can join?</div>
                    <ul>
                        <li>If you have an eye for good design and want to make your mark on the Fuel Fighter car you should apply to the Design group.</li>
                    </ul>
                </div>
        ),
        'image': notFound,
        leader: 202
    },
/* 
Who can join?

 
*/
    {
        title: 'Marketing & Finance',
        'image': marketinImg,
        description: (
            <div id="descriptionGenPosition">
                    <div className="h4">What does a member in the Marketing and Finance group do?</div>
                    <ul>
                        <li>The members in Marketing and Finance makes sure that the team is visible to people outside the organisation.</li>
                        <li>They contact sponsors, do graphic design, are responsible for events and manages our social media channels.</li>
                        <li>The marketing group works closely with all the groups to convey their work to a wide audience.</li>
                    </ul>
                    <div className="h4">Who can join?</div>
                    <ul>
                        <li>If you want to challenge your communication skills, expand your network and learn about Fuel Fighter as a whole you should apply for Marketing and Finance.</li>
                        <li>The group is often the most diverse in terms of students from different fields of study ranging from future engineers to economists.</li>
                    </ul>
                </div>
        ),
        leader: 213
    }
]

const GeneralPositions = () => {
    const [selectedPosition, setSelectedPosition] = useState(generalPositions[0]);
    const [leader, setLeader] = useState([]);

    const handleSelectPosition = (position) => {
      setSelectedPosition(position);
    }
    
    useEffect(() => {
        getMemberDetails(selectedPosition.leader)
        .then((res) => {
            setLeader(Object.values(res));
        })
    }, [selectedPosition]);

    return (
        <div className="positions-wrapper">
            <Container>
                <Row>
                    {
                        generalPositions.map((position) => (
                            <Col
                                key={position.title}
                                className={`position-item ${
                                    position === selectedPosition ? 'selected' : ''
                                }`}
                            onClick={() => handleSelectPosition(position)}
                            >
                                {position.title}
                            </Col>
                        ))
                    }
                </Row>
                <Row className="selected-position" style={{flexDirection: 'row', marginTop: '2rem'}}>
                    <h3 style={{textAlign: 'center'}} className=''>{selectedPosition.title}</h3>
                    <Col xs={12} sm={5} style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <img src={selectedPosition.image} alt={selectedPosition.title} className="position-image" />
                    </Col>
                    <Col xs={12} sm={7} id='PosLeadDescription'>
                        <ul>
                            {
                                selectedPosition.description
                            }
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div id='descriptionGenPosition'>
                            <div className="h4">What to know more?</div>
                            { (leader.length ===6) && (<p>Talk to the {selectedPosition.title} Team Leader team 23, {leader[0].trim()}.</p>)}
                        </div>
                    </Col>
                    <Col xs={12} sm={6} style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        { (leader.length === 6) && ( <Profile name={leader[0].trim() + ' ' + leader[1].trim()} study={leader[2]} mail={leader[3]} image={leader[4]} position={`Team Leader ${selectedPosition.title}`} linkedin={leader[5]} year={'2023'} />)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GeneralPositions;