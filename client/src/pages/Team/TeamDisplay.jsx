import React, { useEffect, useState } from 'react'
import '../../styles/pageStyles/Team/TeamDisplay.css'
// import 'react-dropdown/style.css';
import teamService from '../../_services/team.service'
import Profile from './MemberProfile'
import styled from 'styled-components';

// import { Title } from '../components/blog.style';



//old styling
const Description = styled.div`
	width: 800px;
	margin-bottom: 50px;
	background-color: #f8f8f8;
	border-radius: 7px;
	border: 1px solid rgba(0,0,0,0.1);
	overflow: hidden;

	display: flex;

	@media (max-width: 850px) {
		flex-direction: column;
		width: 352px;
	}
`;

const Text = styled.div`
	font-size: 16px;
	opacity: 0.7;
	height: 100%;
	padding: 20px;
	vertical-align: top;
`;

// const Image = styled.img`
// 	display: block;
// 	width: 350px;
// 	height: 300px;
// 	z-index: 2;
// 	object-fit: cover;
// `;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 5%;
	background-color: white;
`;

const Content = styled.div`
	display: flex; 
	justify-content: center; 
	flex-wrap: wrap;
	max-width: 1400px;
	align-items: flex-start;
`;

const Loading = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 40px;
`;


export default function TeamDisplay() {


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
        <>
            <title>
                    {/* <h1 onClick={onClickChangeTeam(2)}> changeTeam 2</h1>
                    <h1 onClick={onClickChangeYear(2022)}> changeYear 1</h1>
                    <h1 onClick={onClickChangeYear(2021)}> changeYear 2</h1> */}
            </title> 
            <div className='teamYearContainer'>
                <div className='yearBox'>
                        <a  onClick={() => onClickChangeYear(2022)}> 2022 </a> 
                        <a  onClick={() => onClickChangeYear(2021)}> 2021 </a> 
                        <a  onClick={() => onClickChangeYear(2020)}> 2020 </a> 
                </div>

                <div className='teamBox'>
                            <a onClick={() => onClickChangeTeam(0)}> Board </a> 
                            <a onClick={() => onClickChangeTeam(1)}> Autonomous</a>
                            <a onClick={() => onClickChangeTeam(2)}> Electrical</a>
                            <a onClick={() => onClickChangeTeam(3)}> Mechanical</a>
                            <a onClick={() => onClickChangeTeam(4)}> Design</a>
                            <a onClick={() => onClickChangeTeam(5)}> Software</a>
                            <a onClick={() => onClickChangeTeam(6)}> Finance</a>
                            <a onClick={() => onClickChangeTeam(7)}> Marketing</a>
                </div>
            </div>
            <div className='teamSection'>

                <div className='TeamsWrap'>
                    <div className='yearTitle'> The {selectedYear} team!</div>

                        {displayTeam.length !== 0
                        ? displayTeam.map(team => (
                            <div key={team.name} >
                                <Section>
                                    <div className = 'teamTitle' >{team.name}</div>
                                    <Description>
                                        <Text>{team.description}</Text>
                                    </Description>
                                    <Content>
                                        {team.members.map(member => (
                                            <Profile key={member.firstname + ' ' + member.lastname} name={member.firstname + ' ' + member.lastname} position={member.position_description} studie={member.study} mail={member.email} image={member.image} linkedin = {member.linkedin} />
                                            ))}
                                    </Content>
                                </Section>
                            </div>
                        ))
                        : <Loading><div className="spinner" /></Loading>
                    }
                </div>
            </div>
        </>


    )
}

console.log("4")