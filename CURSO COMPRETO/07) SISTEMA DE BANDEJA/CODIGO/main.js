const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');

let mainWindow; // A janela principal do aplicativo
let appTray; // A bandeja do sistema

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Criar um ícone para a bandeja do sistema
  appTray = new Tray(path.join(__dirname, 'electron_logo.png'));

  // Definir um menu de contexto para a bandeja do sistema
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Abrir Aplicativo',
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: 'Fechar Aplicativo',
      click: () => {
        app.quit();
      },
    },
  ]);

  // Associar o menu de contexto à bandeja do sistema
  appTray.setContextMenu(contextMenu);
});
