import React from 'react';
import { useCart } from '../../CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './CartMenu.css';

const CartMenu = () => {
    // destructure custom state hook to use data
    const { cartItems } = useCart();

    // calculate the total quantity of items in the cart
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <div>
            <IconContext.Provider value={{ className: 'cart-icon' }}>
                <FaShoppingCart />
            </IconContext.Provider>
            &nbsp;
            <span className='total-items-text'>{totalItems}</span>
        </div>
    );
};

export default CartMenu;
