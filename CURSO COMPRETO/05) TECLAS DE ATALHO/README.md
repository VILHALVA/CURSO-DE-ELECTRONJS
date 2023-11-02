# TECLAS DE ATALHO
No Electron, você pode criar atalhos de teclado para ações específicas em seu aplicativo usando o módulo `globalShortcut`. Esses atalhos permitem que os usuários executem ações comuns pressionando combinações de teclas predefinidas. Abaixo, vou fornecer um exemplo de como criar atalhos de teclado em um aplicativo Electron.

Primeiro, você precisa adicionar os módulos necessários ao seu código. Aqui está um exemplo de como criar um atalho de teclado simples:

```javascript
const { app, BrowserWindow, globalShortcut } = require('electron');
```

Agora, você pode usar o módulo `globalShortcut` para criar atalhos de teclado. Vamos criar um atalho que exiba um diálogo quando o usuário pressionar "Ctrl+Shift+D":

```javascript
app.on('ready', () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('index.html');

  // Defina o atalho de teclado
  const shortcut = 'CommandOrControl+Shift+D';

  const ret = globalShortcut.register(shortcut, () => {
    // Ação a ser executada quando o atalho for pressionado
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
    // Libere o atalho quando a janela for fechada
    globalShortcut.unregister(shortcut);
  });
});
```

Neste exemplo, registramos um atalho de teclado usando `globalShortcut.register` para "Ctrl+Shift+D" (ou "CommandOrControl+Shift+D" em sistemas Mac). Quando o atalho é pressionado, exibimos uma caixa de diálogo com a mensagem "Atalho de teclado pressionado!".

É importante lembrar de liberar o atalho quando a janela é fechada para evitar problemas. Portanto, usamos `globalShortcut.unregister` no evento `'closed'` da janela.

Certifique-se de ajustar o código conforme necessário e personalizar o atalho e a ação de acordo com as necessidades do seu aplicativo. Lembre-se de que atalhos de teclado podem facilitar a interação do usuário com seu aplicativo.