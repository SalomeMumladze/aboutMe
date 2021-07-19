import Module from "modules/Module";
import P from "paths";
import AboutPage from "./Pages/AboutPage";
import { AboutContextProvider } from "./Store/AboutContext";

const AboutModule = () => {
  const module = new Module({
    routes: [
      {
        path: P.ABOUT,
        component: AboutPage,
      },
    ],
  });

  return <AboutContextProvider>{module.render()}</AboutContextProvider>;
};

export default AboutModule;
