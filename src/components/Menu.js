import React from 'react';
import ArrowDown from '../svg/ArrowDown.svg';
import { TodoContext } from '../context';

function Menu() {
    const { 
        isMenuOpen,
     } = React.useContext(TodoContext)

    return (
        <ul className={`header__ul menu ${isMenuOpen ? 'is-active' : ''}`}>
            <li className="header__ul-li">
                New in
                <img className='header__ul-li-arrowdown' src={ArrowDown} alt='ArrowDown' />
            </li>
            <li className="header__ul-li">
                Accesories
                <img className='header__ul-li-arrowdown' src={ArrowDown} alt='ArrowDown' />
                </li>
            <li className="header__ul-li">
                Collections
                <img className='header__ul-li-arrowdown' src={ArrowDown} alt='ArrowDown' />
                </li>
        </ul>
    )
}

export { Menu };