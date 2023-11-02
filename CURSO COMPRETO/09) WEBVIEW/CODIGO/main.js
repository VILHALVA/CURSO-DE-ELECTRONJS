const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // Criar uma WebView
  const { session } = mainWindow.webContents;

  // Defina opções para a WebView, como permitir conteúdo da web
  session.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'openExternal') {
      callback(true);
    } else {
      callback(false);
    }
  });

  // Carregar uma página da web na WebView
  mainWindow.loadURL('file://' + path.join(__dirname, 'webview.html'));
});
