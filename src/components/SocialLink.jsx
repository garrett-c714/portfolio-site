import React from 'react'

const SocialLink = props => {
    const {src} = props;

    return (
	<img src={src} className="white-svg fit-svg" />
    )
}


export default SocialLink;
