import { useState } from 'react';
import { useCart } from '../CartContext';

import './Card.css';

const Card = ({
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    setCartItems,
}) => {
    const { cartItems, setCartItems: updateCartItems } = useCart();
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        // check if valid quantity
        if (quantity < 0) {
            alert('Quantity should be equal to, or greater than 0');
            return;
        }

        const existingItem = cartItems.findIndex(item => item.id === id);

        if (existingItem !== -1) {
            // if item exist, update the quantity
            const updatedItems = [...cartItems];
            updatedItems[existingItem].quantity += quantity;
            updateCartItems(updatedItems);
        } else {
            // if item does not exist, add it
            updateCartItems(prevItems => [
                ...prevItems,
                { id, title, price, rating, quantity },
            ]);
        }
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => prevQuantity - 1);
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
