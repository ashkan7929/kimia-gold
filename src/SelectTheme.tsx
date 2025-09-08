// src/contexts/ThemeContext.jsx
    import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';

    const ThemeContext = createContext<any>(null);

    export const ThemeProvider = ({ children }: { children: ReactNode }) => {
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