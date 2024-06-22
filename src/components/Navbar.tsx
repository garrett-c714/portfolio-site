import React from 'react';
import {NavLink} from 'react-router-dom';

import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/envelope-regular.svg'


const Navbar = () => {

    return (
	<div className="nav">
	    <div className="nav-section">
		<p id="name">Garrett Cox</p>
	    </div>
	    <div className="nav-section">
		<NavLink to="/">Home</NavLink>
		<NavLink to="/experience">Experience</NavLink>
		<NavLink to="/projects">Projects</NavLink>
	    </div>
	    <div className="nav-section">
		<div className="social-pair">
		    <img src={github} />
		    <p>Github</p>
		</div>
		<div className="social-pair">
		    <img src={linkedin} />
		    <p>LinkedIn</p>
		</div>
		<img src={mail} />
	    </div>
	</div>
    );
    
}

export default Navbar;
