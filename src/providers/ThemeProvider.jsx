import React, { createContext, useState } from "react";

export const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
