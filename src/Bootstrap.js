import { CssBaseline, LinearProgress } from "@material-ui/core";
import React, { Suspense } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const Bootstrap = ({ children }) => {
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        <CssBaseline />
        <Suspense fallback={<LinearProgress />}>{children}</Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default Bootstrap;
