import { useState } from 'react';

import './Card.css';

const Card = ({ id, title, price, description, category, image, rating }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => prevQuantity - 1);
    };

    const handleAddToCart = () => {
        console.log(`Added ${quantity} of ${title} to cart`);
    };
    return (
        <div className='card'>
            <img
                src={image}
                alt={title}
                className='card-image'
            />
            <div className='card-content'>
                <hr />
                <h3 className='card-title'>{title}</h3>
                <p className='card-price'>{price} &euro;</p>
                <div className='card-rating'>
                    <hr />
                    Rating: {rating.rate} <br /> ({rating.count} reviews)
                </div>
            </div>
            <div className='add-to-cart-container'>
                <div className='quantity'>
                    <input
                        type='number'
                        min={0}
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                    />
                    <div className='quantity-buttons'>
                        <button onClick={handleIncrement}>+</button>
                        <button onClick={handleDecrement}>-</button>
                    </div>
                </div>
                <div className='add-button'>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
