import React, { createContext, useState } from 'react';

export const themes = {
  light: {
    background: '#ffffff',
    lightColor: '#c7c7c7',
    darkColor: '#494949',
    accent: '#ee0000',
  },
};

export const ThemeContext = createContext(themes.light);

const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
