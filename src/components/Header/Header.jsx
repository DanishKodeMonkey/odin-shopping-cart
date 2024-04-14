import styles from './Header.module.css';
import NavBar from './NavBar';
const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.headerH1}>CoffeeLovers shop!</h1>
            <NavBar />
        </div>
    );
};

export default Header;
