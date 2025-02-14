"use client";
import { createContext, useContext, useState } from "react";
const MainContext = createContext();
export const AppProvider = ({ children }) => {
  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};
export const useMainContext = () => useContext(MainContext);
