import { Link } from 'react-router-dom';
import './Header.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        <button className='btn'> Home </button>
                    </Link>
                </li>
                <li>
                    <Link to='/shop'>
                        <button className='btn'>Shop</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
