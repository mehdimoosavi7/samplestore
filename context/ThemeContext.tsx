"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children } : {children: React.ReactNode}) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{toggle, mode}}>
      <div className={mode}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;