import './Footer.css';

const Footer = () => {
    return (
        <div className='footerContainer'>
            Made by{' '}
            <a href='https://github.com/DanishKodeMonkey'>
                Daniel @danishKodeMonkey
            </a>{' '}
            Powered by <a href='https://vitejs.dev/'>React@Vite</a> <br />
            API by <a href='https://fakestoreapi.com/'>fakestoreapi.com</a>
        </div>
    );
};

export default Footer;
