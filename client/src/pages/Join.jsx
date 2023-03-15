import React from "react";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import joinHero from '../assets/pages/join/joinHero.jpeg';
import '../styles/pageStyles/join.css';

import ParallaxImage from "./join/ParallaxImage";
import Position from "./join/Position";

export const Join = () => {
    return (
        <div className='primaryColor'>
            <ParallaxImage image={joinHero} />
            <Container className="joinSection text-center primaryColor">
                <div className="introCard">
                    As a cross-disciplinary project we need students from every field of study. We are usually a team of 45 students, and always make sure some of them are exchange students. We like to have a good mixture of people from every year of study, to get good group dynamic and a good work culture to make people want to continue over several years.
                </div>
                <h2 className="text-center introCard" style={{fontFamily: 'Roboto-Black', fontSize: 'calc(var(--fontSize)*1.1)'}}>We are recruiting for new leader positions. Deadline: 19 March</h2>
                
                <div className="introCard text-center">
                    <button className="btn btn-join">Apply Now</button>
                </div>
            </Container>
            <Container>
                <h3 className="text-center mt-5">Available Roles</h3>
                <div className="vacancies-list text-center">
                {
                    positions.map((p) => (
                        <Position title={p.title} description={p.description} />
                      ))
                }
                </div>
            </Container>
        </div>
      );
};

const positions = [
    {
        'title': 'Project Manager',
        'description': 'As project manager you are the main responsible for DNV Fuel Fighter’s overall progress, and you will have the overall responsibility for ensuring the success for all phases of the team’s work, from initiation to closure. This means that you will be involved in every part of the organisation, and will have to work with both technical problems, marketing and general administration. As PM you are also our public face, and will have to talk to sponsors, organizers of the SEM-event, NTNU and many others. This position gives what we consider a rather unique experience in working with and managing a fairly large team and engineering project. We do not demand any previous experience in leadership, and encourage everyone interested to apply, but as the PM of a technical student organisation you should have some interest in both technical and administrative tasks. But most importantly we are looking for you who are organised, dedicated and keen to work hard to take both the car and team to the next level!'
    },
    {
        'title': 'Assistant Project Manager',
        'description': 'The assistant project manager(APM) works closely with the project manager(PM) to ensure that the administrative side of the project runs smoothly. The PM will have a lot to do, and you will help her/him with tasks that are ultimately their responsibility. Therefore, it is important to communicate well and work together. You will also work with the head of finance when dealing with budgeting, financing and matters of economy. In team 2022 the Assistant Project Manager will be HR responsible, meaning you will make sure the members are happy and handle possible HR situations that may arise. Some of the tasks you will have is arranging recruitment, plan employee interviews, have contact with sponsors etc. Since you will be working with the PM and share a lot of the tasks, you could be a part of deciding who is doing which tasks.'
    },
    {
        'title': 'Head of Finance',
        'description': 'As head of Finance, you are responsible for the budget and our sponsors. You will be in contact with employees at NTNU as well as contact people from sponsors. The work consists of purchasing orders for the team, handling sponsor deals and making sure the project is keeping within its budget. One of the tasks is also working closely with the assistant project manager in trying to get new sponsorship deals, and renewing existing ones.'
    },
    {
        'title': 'Technical Leader',
        'description': 'The technical leader’s most important task is to make sure that the car is ready in time for the competition. This means helping the team do their work and overcoming obstacles and making sure that the system is within the rules. You need to have a good general knowledge of each subsystem, but not necessarily every single detail. It also helps to have both experience within mechanics, electronics and software, but it is not necessary. You also have other tasks, such as reaching out to potential sponsors'
    },
    {
        'title': 'Assistant Technical Leader',
        'description': 'The Assistant Technical Leader is responsible to support the Technical Leader in making the car ready for the competition. They must at all times be up to date on how the groups are doing and facilitate, along with the Technical Leader, good cooperation. The Assistent Technical Leader should have general knowledge about each of the subsystems, but not necessarily every single detail. If the Technical Leader is unavailable, the Assistant Technical Leader must be able to fill in. The position offers a unique experience in leadership and cooperation along with varied tasks and many opportunities.'
    },
    {
        'title': 'Electrical Group Leader',
        'description': 'As leader of the electrical team, you are responsible for making sure the electrical system is ready for the competition.  You will get insight in all the electronics needed to make an electric car, this includes everything from motors to the dashboard. Improving on last years design is important to improve the efficiency of the electrical system. This includes everything from hardware design to writing software. You will also be responsible for ordering everything the team needs for electrical system. It is a great experience as you can influence the whole electrical system, and you get to help the team members when they encounter problems with their subsystems. It can be challenging at times, but it is also a lot of fun.'
    },
    {
        'title': 'Design Group Leader',
        'description': 'The Design Leader manages the overall process of designing both the interior and exterior design of the vehicle; he/she is responsible of ensuring that the car is designed according to the specifications of the SEM 2022 rules and the design goes together with the technical design of the Mechanical and Electrical group.'
    },
    {
        'title': 'Marketing Group Leader',
        'description': 'As Marketing group leader you will be responsible for making Fuel Fighter visible. There is a lot of different tasks in a marketing team, like SoMe, Event planning, graphical design and photo & video, and you will be the one with an overview of what everyone is doing and help out if needed. This gives you a unique opportunity to be a part of all of these roles and learn a lot. You are also the connection between the board and every marketing role, so you need to communicate well with both and learn how to find answers to questions the group might have. This is a job where you can come up with creative ideas and really think outside the box.'
    },
    {
        'title': 'Software Group Leader',
        'description': 'The Software group leader is responsible for the Software group. The software group is responsible for the fuelfighter.no website, as well as the simulator. The Software Group Leader makes sure that the Software group is collaborating and reaching their goals by facilitating work sessions. They are also responsible to communicate relevant information about the competition/other groups to the Software group. The Software Group leader should be familiar with different it architectures and able to aid the members in their tasks. As Software Group Leader you will get experience in managing a small group, as well as communication in a complex organisation. You will have the freedom to explore different.'
    },
    {
        'title': 'Autonomous Group Leader',
        'description': 'The Software group leader is responsible for the Autonomous group, and a special responsibility to ensure that the Autonomous system is ready for the competition. Fuel Fighter NTNU competes both in energy efficiency and in an Autonomous challenge, this entails an extra responsibility to stay up to date on competition rules and regulations. They are also responsible to communicate relevant information about the competition/other groups to the Autonomous. The Autonomous Group Leader should be familiar with concepts such as machine learning and automation. The Group leader is also responsible in aiding members if needed. As Autonomous Group Leader you will get experience in managing a small group, as well as communication in a complex organisation. You will have the freedom to explore different directions for the Autonomous system.'
    },
    {
        'title': 'Mechanical Group Leader',
        'description': 'The Mechanical Group Leader has the responsibility to ensure that all mechanical systems function according to specifications. The group leader is the main point of contact with the electrical and autonomous group. The group leader represents the mechanical group in board meetings, and is expected to be conscious about any issues related to the mechanical group and report these to the board. The group leader is expected to be available for any mechanical group members to turn to when they are facing an issue.'
    }
]