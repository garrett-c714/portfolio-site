import React from 'react'
import {useState} from 'react'
import NavLink from './NavLink.jsx'
import SocialLink from './SocialLink.jsx'

import githubDark from '../images/github-dark.svg'
import githubLight from '../images/github-light.svg'

const Navbar = () => {
    
    return (
	<>
	    <div className="nav-container">
		<div></div>
		<div className="nav-links">
		    <NavLink active="true">About Me</NavLink>
		    <NavLink>Projects</NavLink>
		    <NavLink>Work Experience</NavLink>
		</div>
		<div className={"nav-social-links"}>
		    <SocialLink src={githubLight} />
		</div>
	    </div>
	</>
    );
    
}

export default Navbar
