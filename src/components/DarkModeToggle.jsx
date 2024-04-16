import { MdLightMode } from 'react-icons/md';
import { useState } from 'react';

const DarkModeToggle = () => {
    const [colorScheme, setColorScheme] = useState('dark');

    const toggleColorScheme = () => {
        setColorScheme(prevColorScheme =>
            prevColorScheme === 'dark' ? 'light' : 'dark'
        );

        // update CSS variable based on colorScheme
        if (colorScheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    };

    return (
        <button
            className='darkModeToggle'
            onClick={toggleColorScheme}
        >
            <MdLightMode />
        </button>
    );
};

export default DarkModeToggle;
