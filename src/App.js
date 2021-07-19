import { Grid } from "@material-ui/core";
import { CssBaseline, LinearProgress } from "@material-ui/core";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RenderRoutes } from "routes";
import Sidebar from "modules/layout/sidebar";
import Menu from "modules/layout/menu";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Grid style={{ display: "flex" }}>
        <Sidebar />
        <Suspense fallback={<LinearProgress />}>{RenderRoutes()}</Suspense>
        <Menu />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
