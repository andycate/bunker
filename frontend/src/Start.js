/* global backend */
import React, { Component } from "react";
import { Button, Grid } from "@mui/material";

const { ipcRenderer } = window;

class Start extends Component {

  loadConfigFile = () => {
    backend.openConfigFileChooser();
  }

  render() {
    return (
      <Grid container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
        <Grid item xs={3}>
          <Button disabled color="success" variant="contained">New Configuration</Button>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" variant="contained" onClick={this.loadConfigFile}>Load Configuration File</Button> 
        </Grid>
      </Grid>
    );
  }
}

export default Start;