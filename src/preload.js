// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('backend', {
  log: (msg) => ipcRenderer.invoke('log', msg),
  openConfigFileChooser: () => ipcRenderer.invoke('open-config-file-chooser'),
});
