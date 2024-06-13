# SHORTCUTS
Em um contexto de aplicativos Electron, atalhos (ou shortcuts) são uma maneira eficiente de oferecer aos usuários acesso rápido a funcionalidades específicas do aplicativo, como abrir janelas, executar comandos ou realizar ações sem a necessidade de navegação extensiva pelos menus. Vamos explorar como implementar atalhos de teclado em um aplicativo Electron.

### Implementando Atalhos de Teclado em um Aplicativo Electron

#### Passo 1: Configuração do Projeto

Certifique-se de ter um projeto Electron configurado corretamente. Se você ainda não configurou um projeto Electron, siga os passos iniciais para iniciar um projeto Electron conforme mencionado anteriormente.

#### Passo 2: Implementação dos Atalhos de Teclado

No processo principal (`main.js`), você pode configurar atalhos globais de teclado usando a API `globalShortcut` do Electron.

```javascript
// main.js
const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');

    // Registra atalhos globais de teclado
    globalShortcut.register('CmdOrCtrl+Shift+A', () => {
        console.log('Atalho CmdOrCtrl+Shift+A pressionado');
        // Lógica a ser executada quando o atalho for pressionado
        mainWindow.webContents.send('atalho-acionado', 'CmdOrCtrl+Shift+A');
    });

    // Abre o DevTools (opcional)
    // mainWindow.webContents.openDevTools();
}

app.on('ready', () => {
    createWindow();

    // Gerencia o fechamento do aplicativo
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Libera os atalhos globais de teclado quando o aplicativo é fechado
app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});
```

### Explicação do Código

- **globalShortcut**: É utilizado para registrar atalhos globais de teclado que podem ser acionados em qualquer parte do sistema operacional enquanto o aplicativo estiver em execução.
- **globalShortcut.register('CmdOrCtrl+Shift+A', () => { ... })**: Registra o atalho `CmdOrCtrl+Shift+A`. Quando este atalho é pressionado, a função callback associada é executada.
- **mainWindow.webContents.send('atalho-acionado', 'CmdOrCtrl+Shift+A')**: Envia uma mensagem para o processo de renderização (página HTML) quando o atalho é pressionado, permitindo que a interface do usuário responda ao evento.

#### Passo 3: Implementação na Página HTML (`index.html`)

Na página HTML, você pode ouvir o evento enviado pelo processo principal para executar ações específicas na interface do usuário:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicativo com Atalhos de Teclado</title>
</head>
<body>
    <h1>Aplicativo com Atalhos de Teclado</h1>

    <script>
        const { ipcRenderer } = require('electron');

        ipcRenderer.on('atalho-acionado', (event, atalho) => {
            console.log('Atalho acionado na página:', atalho);
            // Lógica para lidar com o atalho na interface do usuário
            alert('Atalho acionado: ' + atalho);
        });
    </script>
</body>
</html>
```

### Considerações Finais

Implementar atalhos de teclado em um aplicativo Electron é uma maneira eficaz de melhorar a usabilidade e a experiência do usuário, permitindo acesso rápido a funcionalidades essenciais. Certifique-se de gerenciar adequadamente os atalhos globais para evitar conflitos com outros aplicativos e garantir que a funcionalidade seja intuitiva para os usuários. Além disso, explore a documentação do Electron para mais opções avançadas e boas práticas ao implementar atalhos de teclado.