'use client';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get the theme mode from localStorage or set it to 'light' by default
  const [mode, setMode] = useState('light');

  const toggle = () => {
    // Update mode state and store it in localStorage
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
