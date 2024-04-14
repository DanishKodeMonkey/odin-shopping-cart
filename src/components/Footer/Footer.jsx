import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            Made by{' '}
            <a href='https://github.com/DanishKodeMonkey'>
                Daniel @danishKodeMonkey
            </a>{' '}
            Powered by <a href='https://vitejs.dev/'>React@Vite</a>
        </div>
    );
};

export default Footer;
