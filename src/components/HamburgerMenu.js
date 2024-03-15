import React from 'react';
import { Hamburger } from '../svg/Hamburger';
import { TodoContext } from '../context';

function HamburgerMenu () {
    const { 
        toggleMenu,
        isMenuOpen,
     } = React.useContext(TodoContext)

    return (              
        <button className={`header__hamburger ${isMenuOpen ? 'is-active' : ''}`}>
            <Hamburger className='header__hamburger-img' onClick={toggleMenu} />
        </button>
    )
}

export { HamburgerMenu }