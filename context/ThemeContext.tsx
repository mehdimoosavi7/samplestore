"use client";
import * as React from 'react';
import {useState} from 'react';
// import { createContext, useState } from "react";
import { Theme, ThemeContextType } from '@/@types/theme';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themeMode, setThemeMode] = useState<Theme>('light');
  return (
    <ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;

// let m = "light";
// export const ThemeContext = createContext(m);

// export const ThemeProvider = ({ children } : {children: React.ReactNode}) => {
//   const [mode, setMode] = useState("light");

//   const toggle = () => {
//     setMode((m) => (m === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ toggle, mode }}>
//       <div className={mode}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };
