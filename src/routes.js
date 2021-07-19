import React, { lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import AboutPageModule from "modules/About";
import ProjectPageModule from "modules/Project";
import ExperiencePageModule from "modules/Experience";
import P from "./paths";

const routes = [
  {
    path: P.ABOUT,
    exact: true,
    component: AboutPageModule,
  },
  {
    path: P.PROJECT,
    exact: true,
    component: ProjectPageModule,
  },

  {
    path: P.EXPERIENCE,
    exact: true,
    component: ExperiencePageModule,
  },
];

export const RenderRoutes = (r = routes, switchProps = {}) => {
  return (
    <Switch {...switchProps}>
      {r.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={route.component}
          />
        );
      })}
    </Switch>
  );
};
