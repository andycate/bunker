/* global backend */
import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles"

import Start from './Start';

const theme = createTheme({
  palette: {
    background: {
      default: "#dddddd"
    }
  }
});

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/> {/* https://mui.com/material-ui/react-css-baseline/ */}
        <HashRouter> {/* We need to use a hash router here for it to work with static files for packaging */}
          <Routes>
            <Route path="/" element={<Start />} /> {/* On startup, we want to open to a welcome window that has a few buttons */}
          </Routes>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default App;
