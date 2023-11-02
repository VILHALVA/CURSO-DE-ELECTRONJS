const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;
let secondWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  secondWindow = new BrowserWindow({ width: 600, height: 400 });
  secondWindow.loadFile(path.join(__dirname, 'renderer', 'page2.html'));
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
