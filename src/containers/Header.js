import logo from '../svg/sanimalsLogo.png'
import { Menu } from '../components/Menu';
import { SearchCart } from '../components/SearchCart';

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="Logo" />
            <Menu />
            <SearchCart />
        </header>
    )
}

export { Header };