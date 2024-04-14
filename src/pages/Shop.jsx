import { useEffect, useState } from 'react';
import { useCart } from '../CartContext';
import Card from '../components/Card';
import './Shop.css';

const FetchStore = () => {
    const [storeCollection, setStoreCollection] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', { mode: 'cors' })
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('server error');
                }
                return response.json();
            })
            .then(response => setStoreCollection(response))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, []);
    return { storeCollection, error, loading };
};

const Shop = () => {
    const { cartItems, setCartItems } = useCart();
    const { storeCollection, error, loading } = FetchStore();

    if (error) return <p>A network error was encountered.</p>;
    if (loading) return <p>Loading... please wait.</p>;

    return (
        <>
            <h1>The coffee lovers merch shop:</h1>
            <div className='card-container'>
                {storeCollection.map(item => (
                    <Card
                        key={item.id}
                        {...item}
                        setCartItems={setCartItems}
                    />
                ))}
            </div>
        </>
    );
};

export default Shop;
