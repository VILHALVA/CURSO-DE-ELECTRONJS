const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  ipcMain.on('arquivos-selecionados', (event, filePaths) => {
    console.log('Arquivos selecionados pelo processo de renderização:', filePaths);
  });
});
