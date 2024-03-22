import React from 'react';
import { TodoContext } from '../context/HamburgerMenuProvider';
// import { DropdownMenu } from './DropdownMenu';

function Menu() {
    const { 
        isMenuOpen,
     } = React.useContext(TodoContext)

     

    return (
        // <ul className={`header__ul menu ${isMenuOpen ? 'is-active' : ''}`}>
        //     <li className="header__ul-li">
        //         New in
        //     </li>
        //     <li className="header__ul-li">
        //         Collections
        //         <ArrowDown className='header__ul-li-arrowdown' />
        //         <DropdownMenu />
        //         </li>
        // </ul>
        <ul className={`header__ul menu ${isMenuOpen ? 'is-active' : ''}`}>
            <li className="header__ul-li">
                New in
            </li>
            <li className="header__ul-li">        
                Categories
            </li>
        </ul>
    )
}

export { Menu };