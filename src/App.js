const { ipcMain, dialog } = require('electron');

class App {
  constructor() {
    this.webContents = null;
  }

  setWebContents = (wc) => {
    this.webContents = wc;
  }

  initApp = () => {
    ipcMain.handle('log', (e, msg) => console.log(msg));
    ipcMain.handle('open-config-file-chooser', this.openConfigFileChooser);
  }

  openConfigFileChooser = () => {
    dialog.showOpenDialog({properties: ['openFile'], filters: [{name: 'Config Files', extensions: ["json"]}] }).then(function (response) {
      if (!response.canceled) {
          // handle fully qualified file name
        console.log(response.filePaths[0]);
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
