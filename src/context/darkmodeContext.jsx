import { createContext } from "react";
import { useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState({ name: "bg-white", color: "#000000" });
    
    return (
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        {children}
      </DarkModeContext.Provider>
    );
}
