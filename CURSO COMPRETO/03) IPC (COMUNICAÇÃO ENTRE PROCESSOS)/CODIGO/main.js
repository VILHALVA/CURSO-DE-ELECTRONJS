const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  ipcMain.on('mensagem-do-renderer', (event, arg) => {
    console.log(arg); // Exibe a mensagem enviada pelo processo de renderização
  });
});
