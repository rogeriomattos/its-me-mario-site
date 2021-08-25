import React from 'react';
import marioLogo from 'public/assets/Mario_logo.png';

interface ILogoProps {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
}

const Logo = (props:ILogoProps) => {

    return (
        <img src={marioLogo.src} {...props}/>
    );
}

export default Logo;