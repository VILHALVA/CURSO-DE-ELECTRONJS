# MENU E CONTEXTMENU
No Electron, você pode criar menus para a barra de menus do aplicativo e menus contextuais (context menus) para interações de clique direito em elementos da interface do usuário. Vou fornecer exemplos de como criar um menu de barra de menus e um menu contextual em um aplicativo Electron.

## Menu de Barra de Menus:
Para criar um menu de barra de menus, você deve definir um modelo de menu e associá-lo à janela principal do aplicativo. Aqui está um exemplo de como criar um menu de barra de menus:

```javascript
const { app, BrowserWindow, Menu } = require('electron');
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
```

Neste exemplo, definimos um modelo de menu com itens de menu para "Arquivo" e "Editar". Você pode personalizar os itens de menu e suas ações de acordo com as necessidades do seu aplicativo.

## Menu Contextual:
Para criar um menu contextual, você pode usar o evento `contextmenu` em elementos HTML e exibir um menu personalizado. Aqui está um exemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Menu Contextual</title>
  </head>
  <body oncontextmenu="exibirMenuContextual(event)">
    <h1>Botão Direito do Mouse</h1>
  </body>
  <script>
    const { remote } = require('electron');
    const { Menu, MenuItem } = remote;

    function exibirMenuContextual(e) {
      e.preventDefault();

      const menu = new Menu();
      menu.append(new MenuItem({ label: 'Ação 1', click: () => console.log('Ação 1 clicada') }));
      menu.append(new MenuItem({ label: 'Ação 2', click: () => console.log('Ação 2 clicada') }));
      menu.popup({ window: remote.getCurrentWindow() });
    }
  </script>
</html>
```

Neste exemplo, definimos um menu contextual que é exibido quando o usuário clica com o botão direito do mouse em qualquer parte da página. O menu contextual contém duas ações personalizadas.

Esses são exemplos básicos de como criar menus de barra de menus e menus contextuais em um aplicativo Electron. Você pode personalizar os menus de acordo com as necessidades do seu aplicativo e adicionar mais itens de menu e ações conforme desejado.