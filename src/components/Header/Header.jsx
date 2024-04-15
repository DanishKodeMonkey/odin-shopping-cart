import styles from './Header.module.css';
import NavBar from './NavBar';
import CartMenu from './CartMenu';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.headerH1}>CoffeeLovers shop!</h1>
            <div className={styles.HeaderBar}>
                <NavBar />
                <CartMenu className={styles.cartMenu} />
            </div>
        </div>
    );
};

export default Header;
