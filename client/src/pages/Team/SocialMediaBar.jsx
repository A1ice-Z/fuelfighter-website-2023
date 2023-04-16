import React from 'react'
import { SiLinkedin  } from 'react-icons/si'
import { MdMailOutline } from 'react-icons/md'
import 'react-dropdown/style.css';
// import styled from 'styled-components';
import '../../styles/pageStyles/Team/SocialMediaBar.css'

function SocialMediaBar(props) {
    
    const iconSize = 25
    if (props.data.linkedin != null)
    {
        return (
            <div className = "social-links">
                <a href = {props.data.linkedin}> 
                    <SiLinkedin className = "socialicon" size = {iconSize +2} /> 
                </a> 
                <a  href = {'mailto:'+props.data.email}>
                    <MdMailOutline className = "socialicon" size = {iconSize + 11}  />
                </a>
            </div> 
        )
    }
    else {
        return (
            <div>
                <a href = {'mailto:'+props.data.email}>
                    <MdMailOutline className = "socialicon" size = {iconSize + 11}  />
                </a>
            </div> 
        )
    }
}


export default SocialMediaBar
