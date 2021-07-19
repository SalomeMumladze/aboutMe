import React, { createContext, useState, useContext } from "react";

export const AboutContext = createContext({});

export const AboutContextProvider = ({ children }) => {
  return <AboutContext.Provider>{children}</AboutContext.Provider>;
};

const useAbout = () => useContext(AboutContext);

export default useAbout;
