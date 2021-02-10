import React from 'react';
import Logo from '../../img/logo.png';

const Header = () => {
    return (
        <img 
            className="Logo"
            src={Logo}
            alt="Breaking Bad"
        />
    );
}

export default Header;
