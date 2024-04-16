import './Header.css';
import NavBar from './NavBar';
import CartMenu from './CartMenu';
import DarkModeToggle from '../DarkModeToggle';
const Header = () => {
    return (
        <div className='headerContainer'>
            <h1 className='headerH1'>CoffeeLovers shop!</h1>
            <div className='HeaderBar'>
                <NavBar />
                <CartMenu />
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Header;
