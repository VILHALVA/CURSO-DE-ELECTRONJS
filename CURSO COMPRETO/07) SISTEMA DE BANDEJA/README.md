# SISTEMA DE BANDEJA
No Electron, você pode criar um ícone na bandeja do sistema (system tray) para permitir que o aplicativo continue sendo executado em segundo plano e oferecer acesso rápido a algumas funcionalidades. Abaixo, vou fornecer um exemplo de como criar um sistema de bandeja em um aplicativo Electron.

Vamos começar adicionando os módulos necessários ao seu código:

```javascript
const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');
```

Agora, vamos criar um ícone na bandeja do sistema:

```javascript
let mainWindow; // A janela principal do aplicativo
let appTray; // A bandeja do sistema

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Criar um ícone para a bandeja do sistema
  appTray = new Tray(path.join(__dirname, 'tray-icon.png'));

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
```

Neste exemplo, criamos uma janela principal e, em seguida, criamos um ícone na bandeja do sistema usando o módulo `Tray`. Também definimos um menu de contexto que será exibido ao clicar com o botão direito no ícone da bandeja. O menu de contexto possui duas opções: "Abrir Aplicativo" para exibir a janela principal e "Fechar Aplicativo" para encerrar o aplicativo.

Lembre-se de personalizar o código conforme necessário e fornecer uma imagem de ícone válida (por exemplo, 'tray-icon.png') no mesmo diretório do seu projeto.

Este é um exemplo básico de como criar um sistema de bandeja em um aplicativo Electron. Você pode adicionar mais funcionalidades e opções ao menu de contexto de acordo com as necessidades do seu aplicativo. Certifique-se de que a estrutura de pastas e os nomes de arquivos correspondam aos caminhos mencionados acima.