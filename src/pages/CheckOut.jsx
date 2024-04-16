import React from 'react';
import { useCart } from '../CartContext';
import './CheckOut.css';
import '../components/Card.css';

const CheckOut = () => {
    // deconstruct cart items from useCart to get up to date state of cart.
    const { cartItems } = useCart();

    // calculate total value, calculating each items value based on quantity and adding it to total.
    const totalValue = cartItems
        .reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0)
        .toFixed(2);

    return (
        <div className='checkout-container'>
            <h2>Checkout:</h2>
            <div className='checkout-summary'>
                {cartItems.map(item => (
                    <div
                        key={'checkout' + item.id}
                        className='checkout-item'
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className='card-image'
                        />
                        <h3>{item.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>
                            Subtotal: {(item.price * item.quantity).toFixed(2)}
                            &euro;
                        </p>
                    </div>
                ))}
            </div>
            <div className='checkout-total'>Total: {totalValue} &euro;</div>
            <button
                className='purchase-now-button'
                onClick={() => console.log('Purchase complete')}
            >
                Purchase now
            </button>
        </div>
    );
};
export default CheckOut;
