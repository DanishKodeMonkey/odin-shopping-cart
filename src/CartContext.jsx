import React, { createContext, useState, useEffect, useContext } from 'react';

// cart context to pass across components

export const CartContext = createContext();

// hook to access the cart context

export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider Component to wrap around the app

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Dev debug, print cartItems on update
    useEffect(() => {
        console.log('Updated cartItems: ', cartItems);
    }, [cartItems]);
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};
