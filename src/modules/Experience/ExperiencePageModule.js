import Module from "modules/Module";
import P from "paths";
import ExperiencePage from "./Pages/ExperiencePage";
import { ExperienceContextProvider } from "./Store/ExperienceContext";

const ExperienceModule = () => {
  const module = new Module({
    routes: [
      {
        path: P.EXPERIENCE,
        component: ExperiencePage,
      },
    ],
  });

  return <ExperienceContextProvider>{module.render()}</ExperienceContextProvider>;
};

export default ExperienceModule;
