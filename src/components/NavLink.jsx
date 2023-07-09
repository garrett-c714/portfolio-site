import React, {useState} from 'react'
import clsx from 'clsx'

const NavLink = props => {

    let {active} = props;

    // FIXME: The "active" prop should eventually be decided based on where we are on the page
    if (active === undefined) {
	active = "false";
    }
    
    const [hovering, setHovering] = useState(false);

    const handleHover = () => {
	setHovering(!hovering);
    }

    const className = clsx({
	"nav-active": active === "true",
	"navlink-hover": hovering && active === "false",
    });

    return (
	<p className={className} onMouseOver={handleHover} onMouseOut={handleHover}>
	    {props.children}
	</p>
    );
    
    
}

export default NavLink;
