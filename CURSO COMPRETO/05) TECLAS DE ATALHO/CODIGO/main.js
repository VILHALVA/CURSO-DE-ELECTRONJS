const { app, BrowserWindow, globalShortcut, dialog } = require('electron');
const path = require('path');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  const shortcut = 'CommandOrControl+Shift+D';

  const ret = globalShortcut.register(shortcut, () => {
    dialog.showMessageBox({
      type: 'info',
      message: 'Atalho de teclado pressionado!',
      buttons: ['OK'],
    });
  });

  if (!ret) {
    console.log('Erro ao registrar atalho de teclado.');
  }

  mainWindow.on('closed', () => {
    globalShortcut.unregister(shortcut);
  });
});
