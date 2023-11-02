const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Exemplo de criação de uma notificação
  const notification = new Notification({
    title: 'Minha Notificação',
    body: 'Esta é uma notificação de exemplo!',
  });

  // Mostrar a notificação quando o aplicativo estiver pronto
  notification.show();

  // Defina um evento para executar ações quando o usuário clica na notificação
  notification.on('click', () => {
    console.log('O usuário clicou na notificação!');
  });
});
