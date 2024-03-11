import logo from '../svg/sanimalsLogo.png'
import { Menu } from '../components/Menu';
import { SearchCart } from '../components/SearchCart';
import { HamburgerMenu } from '../components/HamburgerMenu';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className='header'>
            <HamburgerMenu />
            <Link to='/'>
                <img className='header__logo' src={logo} alt="Logo" />
            </Link>
            <Menu />
            <SearchCart />
        </header>
    )
}

export { Header };