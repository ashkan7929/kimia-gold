    // src/contexts/ThemeContext.jsx
    import React, { createContext, useState, useEffect, useContext } from 'react';

    const ThemeContext = createContext();

    export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
      });

      useEffect(() => {
        document.documentElement.className = theme; 
        localStorage.setItem('theme', theme);
      }, [theme]);

      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };

    export const useTheme = () => useContext(ThemeContext);