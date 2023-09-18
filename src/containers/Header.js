import logo from '../svg/sanimalsLogo.png'
import { Menu } from '../components/Menu';
import { SearchCart } from '../components/SearchCart';
import { HamburgerMenu } from '../components/HamburgerMenu';


function Header() {
    return (
        <header className='header'>
            <HamburgerMenu />
            <img className='header__logo' src={logo} alt="Logo" />
            <Menu />
            <SearchCart />
        </header>
    )
}

export { Header };