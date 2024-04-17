import React from 'react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './CartMenu.css';

const CartMenu = () => {
    // destructure custom state hook to use data
    const { cartItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // calculate the total quantity of items in the cart
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = useMemo(() => {
        return cartItems
            .reduce((total, item) => total + item.quantity * item.price, 0)
            .toFixed(2);
    }, [cartItems]);

    const handleMenuToggle = () => {
        // Boolean reversal for toggle of state
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
    };

    // Helper function to filter out non-alphanumeric characters
    const cleanTitle = title => {
        return title.replace(/[^a-zA-Z0-9\s]/g, '');
    };
    return (
        <button
            className='cart-menu'
            onClick={handleMenuToggle}
        >
            <div className='cart-icon-container'>
                <IconContext.Provider value={{ className: 'cart-icon' }}>
                    <FaShoppingCart />
                </IconContext.Provider>
                &nbsp;
                <span className='total-items-text'>{totalItems}</span>
            </div>
            {isMenuOpen && (
                <div className={'cart-menu-expanded'}>
                    <ul className='cart-item'>
                        <div className='cart-item-header'>
                            <p>#</p>
                            <p>Product</p>
                            <p>Price</p>
                            <p>Sub-total</p>
                        </div>
                        {cartItems.map(item => (
                            <li
                                key={item.id}
                                className='cart-item-preview'
                            >
                                <p>{item.quantity} x </p>
                                <p>
                                    {cleanTitle(item.title).slice(0, 20)}{' '}
                                    {item.title.length > 15 ? '...' : ''}
                                </p>
                                <p>{item.price.toFixed(2)} &euro;</p>
                                <p>
                                    {(item.price * item.quantity).toFixed(2)}{' '}
                                    &euro;
                                </p>
                            </li>
                        ))}
                    </ul>
                    <p className='cart-total'>Total: {totalPrice} &euro;</p>
                    <Link to='/checkout'>
                        <button className='checkout-button'>Checkout</button>
                    </Link>
                </div>
            )}
        </button>
    );
};

export default CartMenu;
