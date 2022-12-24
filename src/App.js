const { ipcMain, dialog } = require('electron');
const fs = require('fs');

const Config = require("./Config")

class App {
  constructor() {
    this.webContents = null;
    this.config = null;
  }

  setWebContents = (wc) => {
    this.webContents = wc;
  }

  /**
   * Gets called once the window is open, so we can set up all IPCs and anything else
   */
  initApp = () => {
    ipcMain.handle('log', (e, msg) => console.log(msg));
    ipcMain.handle('open-config-file-chooser', this.openConfigFileChooser);
  }

  /**
   * Open the file chooser dialog to choose a JSON config file
   */
  openConfigFileChooser = () => {
    dialog.showOpenDialog({properties: ['openFile'], filters: [{name: 'Config Files', extensions: ["json"]}] }).then(function (response) {
      if (!response.canceled) {
          // handle fully qualified file name
          console.log(response.filePaths[0]);
          fs.readFile(response.filePaths[0], {encoding: 'utf-8'}, (err, data) => {
            if(!err) {
              // load the config file and set up the window
              this.config = new Config(JSON.parse(data));
            } else {
              console.error(err);
            }
          });
      } else {
        console.log("no file selected");
      }
    });
  }

  cleanup = () => {
    // close everything
  }
}

module.exports = new App();
