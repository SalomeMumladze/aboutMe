import Module from "modules/Module";
import P from "paths";
import ProjectPage from "./Pages/ProjectPage";
import { ProjectContextProvider } from "./Store/ProjectContext";

const ProjectModule = () => {
  const module = new Module({
    routes: [
      {
        path: P.PROJECT,
        component: ProjectPage,
      },
    ],
  });

  return <ProjectContextProvider>{module.render()}</ProjectContextProvider>;
};

export default ProjectModule;
