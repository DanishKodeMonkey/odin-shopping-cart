import { useEffect, useState } from 'react';

const FetchStore = () => {
    const [storeURL, setStoreURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', { mode: 'cors' })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('server error');
                }
                return response.json();
            })
            .then((response) => setStoreURL(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    return { storeURL, error, loading };
};

const Shop = () => {
    const { storeURL, error, loading } = FetchStore();
    console.log(storeURL);

    if (error) return <p>A network error was encountered.</p>;
    if (loading) return <p>Loading... please wait.</p>;

    const storeItem = {
        id: storeURL[0].id,
        title: storeURL[0].title,
        price: storeURL[0].price,
        description: storeURL[0].description,
        category: storeURL[0].category,
        image: storeURL[0].image,
        rating: storeURL[0].rating,
    };
    console.log(storeItem);
    return (
        <>
            <h1>The coffee lovers merch shop:</h1>
            <ul>
                <li>{storeItem.id}</li>
                <li>{storeItem.title}</li>
            </ul>
        </>
    );
};

export default Shop;
