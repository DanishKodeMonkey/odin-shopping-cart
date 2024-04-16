import './Header.css';
import NavBar from './NavBar';
import CartMenu from './CartMenu';

const Header = () => {
    return (
        <div className='headerContainer'>
            <h1 className='headerH1'>CoffeeLovers shop!</h1>
            <div className='HeaderBar'>
                <NavBar />
                <CartMenu />
            </div>
        </div>
    );
};

export default Header;
