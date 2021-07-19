import React, { createContext, useState, useContext } from "react";

export const ProjectContext = createContext({});

export const ProjectContextProvider = ({ children }) => {
  return <ProjectContext.Provider>{children}</ProjectContext.Provider>;
};

const useProject = () => useContext(ProjectContext);

export default useProject;
