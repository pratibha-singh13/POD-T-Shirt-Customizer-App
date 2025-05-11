import React, { createContext, useContext, useState, useEffect } from 'react';

const themeStyles = {
    light: {
        name: 'light',
        className: 'bg-white text-gray-900 font-serif',
    },
    dark: {
        name: 'dark',
        className: 'bg-[#121212] text-gray-600 font-sans',
    },
    retro: {
        name: 'retro',
        className: 'bg-[#E8DAB2] text-[#3C2A21] font-mono',
    },
};



const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState('light');

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored) setThemeName(stored);
    }, []);

    const changeTheme = (newName) => {
        setThemeName(newName);
        localStorage.setItem('theme', newName);
    };

    const value = {
        themeName,
        theme: themeStyles[themeName],
        setTheme: changeTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

