import React, { createContext, useState, useContext } from "react";

export const ExperienceContext = createContext({});

export const ExperienceContextProvider = ({ children }) => {
  return <ExperienceContext.Provider>{children}</ExperienceContext.Provider>;
};

const useAbout = () => useContext(ExperienceContext);

export default useAbout;
