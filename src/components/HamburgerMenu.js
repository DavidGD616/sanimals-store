import React from 'react';
import { Hamburger } from '../svg/Hamburger';
import { TodoContext } from '../context/HamburgerMenuProvider';

function HamburgerMenu () {
    const { 
        toggleMenu,
        isMenuOpen,
     } = React.useContext(TodoContext)

    return (              
        <button 
        className={`header__hamburger ${isMenuOpen ? 'is-active' : ''}`}
        onClick={toggleMenu}
        >
            <Hamburger className='header__hamburger-img'  />
        </button>
    )
}

export { HamburgerMenu }