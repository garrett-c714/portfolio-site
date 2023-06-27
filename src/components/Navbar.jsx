import React from 'react'
import {useState} from 'react'
import NavLink from './NavLink.jsx'

const Navbar = () => {
    
    return (
	<>
	    <div className="nav-container">
		<div className="nav-links">
		    <NavLink active="true">About Me</NavLink>
		    <NavLink>Projects</NavLink>
		    <NavLink>Work Experience</NavLink>
		</div>
	    </div>
	</>
    );
    
}

export default Navbar
