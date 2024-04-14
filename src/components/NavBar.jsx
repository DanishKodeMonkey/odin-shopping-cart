import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        <button className={styles.btn}> Home </button>
                    </Link>
                </li>
                <li>
                    <Link to='/shop'>
                        <button className={styles.btn}>Shop</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
