import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from './CartContext';
import { useState } from 'react';

function App() {
    return (
        <CartProvider>
            <div className='app-container'>
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </CartProvider>
    );
}

export default App;
