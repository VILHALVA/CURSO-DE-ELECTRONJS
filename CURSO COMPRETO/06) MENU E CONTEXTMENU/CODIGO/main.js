const { app, BrowserWindow, Menu, MenuItem } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  const template = [
    {
      label: 'Arquivo',
      submenu: [
        {
          label: 'Abrir',
          accelerator: 'CmdOrCtrl+O',
          click: () => {
            // Ação ao selecionar "Abrir" no menu
            // Você pode abrir um diálogo para selecionar arquivos aqui
          },
        },
        {
          label: 'Sair',
          accelerator: 'CmdOrCtrl+Q',
          role: 'quit',
        },
      ],
    },
    {
      label: 'Editar',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});
