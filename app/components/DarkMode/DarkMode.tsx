"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const DarkMode = () => {
  const { toggle } : any = useContext(ThemeContext);
  return (
    <>
      <label id="switch" className="theme-switch">
        <input type="checkbox" onChange={toggle} id="slider" />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default DarkMode;
