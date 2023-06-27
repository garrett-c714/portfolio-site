import React, {useState} from 'react'
import clsx from 'clsx'

const NavLink = props => {

    const {active} = props;
    
    const [hovering, setHovering] = useState(false);

    const handleHover = () => {
	setHovering(!hovering);
    }

    const className = clsx({
	"nav-active": active === "true",
	"navlink-hover": hovering,
    });

    return (
	<p className={className} onMouseOver={handleHover} onMouseOut={handleHover}>
	    {props.children}
	</p>
    );
    
    
}

export default NavLink;
