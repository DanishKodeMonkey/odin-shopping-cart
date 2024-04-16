import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
    // check which theme to render as on load (thanks internet)
    useEffect(() => {
        if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);
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
