# IPCMAIN-IPCRENDERER
No Electron.js, IPC (Inter-Process Communication) é fundamental para a comunicação entre os processos principal (main process) e os processos de renderização (renderer processes). Isso permite que você envie mensagens e dados entre diferentes partes do seu aplicativo Electron. Vamos explorar como implementar IPC tanto no processo principal (`main.js`) quanto nos processos de renderização (arquivos HTML carregados nos `BrowserWindow`).

## IPC no Processo Principal (`main.js`)
No processo principal do Electron, você configura e gerencia a comunicação usando o módulo `ipcMain`. Aqui está um exemplo básico de como enviar e receber mensagens do processo de renderização:

```javascript
// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true  // Habilita Node.js no processo de renderização
        }
    });

    mainWindow.loadFile('index.html');

    // Evento quando a janela é fechada
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Evento quando o Electron termina a inicialização e está pronto para criar janelas do navegador
app.on('ready', createWindow);

// IPC para receber mensagens do processo de renderização
ipcMain.on('mensagem-para-main', (event, arg) => {
    console.log('Mensagem recebida no processo principal:', arg);
    
    // Envio de uma resposta para o processo de renderização
    event.reply('resposta-da-main', 'Mensagem recebida pelo processo principal.');
});
```

- **Explicação no Processo Principal:**
  - `ipcMain.on('mensagem-para-main', ...)`: Define um ouvinte de evento para mensagens enviadas do processo de renderização para o processo principal.
  - `event.reply('resposta-da-main', ...)`: Envia uma resposta de volta para o processo de renderização que originou a mensagem.

## IPC no Processo de Renderização (`index.html`)
No processo de renderização (arquivos HTML carregados nos `BrowserWindow`), você utiliza o módulo `ipcRenderer` para enviar e receber mensagens do processo principal.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>IPC Renderer Process</title>
</head>
<body>
    <h1>Comunicação IPC - Processo de Renderização</h1>

    <button onclick="enviarMensagemParaMain()">Enviar Mensagem para Main</button>

    <div id="resposta-da-main"></div>

    <script>
        const { ipcRenderer } = require('electron');

        function enviarMensagemParaMain() {
            // Envia uma mensagem para o processo principal
            ipcRenderer.send('mensagem-para-main', 'Olá, processo principal!');
        }

        // Ouve a resposta do processo principal
        ipcRenderer.on('resposta-da-main', (event, arg) => {
            document.getElementById('resposta-da-main').textContent = arg;
        });
    </script>
</body>
</html>
```

- **Explicação no Processo de Renderização:**
  - `ipcRenderer.send('mensagem-para-main', ...)`: Envia uma mensagem para o processo principal com o canal `'mensagem-para-main'`.
  - `ipcRenderer.on('resposta-da-main', ...)`: Ouve a resposta do processo principal com o canal `'resposta-da-main'` e atualiza o conteúdo na página HTML.

