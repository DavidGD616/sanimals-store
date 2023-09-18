import React from 'react';
import Hamburger from '../svg/Hamburger.svg'
import { TodoContext } from '../context';

function HamburgerMenu () {
    const { 
        toggleMenu,
        isMenuOpen,
     } = React.useContext(TodoContext)

    return (              
        <button className={`header__hamburger ${isMenuOpen ? 'is-active' : ''}`}>
            <img className='header__hamburger-img'
            src={Hamburger} alt='Hamburger' 
            onClick={toggleMenu}/>
        </button>
    )
}

export { HamburgerMenu }