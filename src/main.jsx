import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/', // designate initial page to be parent (App) (default)
        element: <App />,
        children: [
            {
                path: '/', // Designate initial page (default)
                element: <Home />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
