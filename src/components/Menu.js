import ArrowDown from '../svg/ArrowDown.svg'

function Menu() {
    return (
        <ul className="header__ul">
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