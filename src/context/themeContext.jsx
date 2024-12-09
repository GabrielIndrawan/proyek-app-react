/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const themeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({ name: "theme-green", color: "#299D91" });

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};