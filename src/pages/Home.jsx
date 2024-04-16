import './Home.css';
import image from '../assets/images/blake-wisz-q3o_8MteFM0-unsplash.jpg';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the CoffeeLovers store!</h1>
            <h2>Check out our merch in the shop!</h2>
            <div className='image-container'>
                <img
                    src={image}
                    alt='merch shop'
                    className='image'
                />
                <p>
                    Photo by{' '}
                    <a href='https://unsplash.com/@blakewisz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
                        Blake Wisz
                    </a>{' '}
                    on{' '}
                    <a href='https://unsplash.com/photos/woman-holding-magnetic-card-q3o_8MteFM0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
                        Unsplash
                    </a>
                </p>
            </div>

            <p>Please note this is a prototype site, not an actual store.</p>
        </div>
    );
};

export default Home;
