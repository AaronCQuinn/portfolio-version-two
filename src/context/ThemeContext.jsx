import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        localStorage.getItem('theme') === 'dark' ? setTheme('dark') : setTheme('light');
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    return (
        <ThemeContext.Provider
        value={{
            theme,
            setTheme
        }}
        >
            {children}
        </ThemeContext.Provider>

    )

}

export { ThemeContext, ThemeContextProvider }