# TELA DE GRAVACAO
Implementar uma tela de gravação em um aplicativo Electron envolve a captura de áudio e vídeo do sistema, o que pode ser feito utilizando as APIs `navigator.mediaDevices.getUserMedia()` para acessar a câmera e o microfone do dispositivo. Vamos abordar como configurar e implementar uma funcionalidade básica de gravação de tela usando Electron.

### Passos para Implementar uma Tela de Gravação no Electron

Vamos dividir o processo em etapas para facilitar a compreensão e implementação.

## Passo 1: Configuração do Projeto
Certifique-se de que o seu projeto Electron está configurado corretamente. Se não estiver configurado, siga os passos básicos de inicialização de um projeto Electron descritos anteriormente.

## Passo 2: Estrutura de Diretórios
Organize a estrutura de diretórios do seu projeto:

```
/seu-projeto
  |- main.js
  |- index.html
  |- styles.css
  |- package.json
```

## Passo 3: Código do Processo Principal (`main.js`)
O processo principal do Electron deve criar a janela principal onde a gravação da tela será exibida:

```javascript
// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');

    // Abre o DevTools (opcional)
    // mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

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
```

## Passo 4: Código da Página HTML (`index.html`)
Crie a interface do usuário para exibir a tela de gravação:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Gravação com Electron</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Tela de Gravação com Electron</h1>
    <video id="video" width="640" height="480" autoplay></video>
    <button id="startRecording">Iniciar Gravação</button>
    <button id="stopRecording">Parar Gravação</button>
    <script src="renderer.js"></script>
</body>
</html>
```

## Passo 5: Estilos CSS (`styles.css`)
Adicione estilos básicos para melhorar a apresentação:

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f0f0;
}

video {
    border: 1px solid #ddd;
    margin: 20px auto;
    display: block;
}

button {
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
```

## Passo 6: Código do Processo de Renderização (`renderer.js`)
Este script gerencia a captura e a gravação da tela:

```javascript
// renderer.js
const { desktopCapturer, remote } = require('electron');
const { writeFile } = require('fs');
const { dialog } = remote;

let mediaRecorder;
const recordedChunks = [];

const videoElement = document.querySelector('video');
const startRecordingButton = document.getElementById('startRecording');
const stopRecordingButton = document.getElementById('stopRecording');

startRecordingButton.onclick = async () => {
    try {
        const sources = await desktopCapturer.getSources({ types: ['screen'] });

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: sources[0].id,
                    maxWidth: window.screen.width,
                    maxHeight: window.screen.height
                }
            }
        });

        videoElement.srcObject = stream;
        videoElement.play();

        const options = { mimeType: 'video/webm; codecs=vp9' };
        mediaRecorder = new MediaRecorder(stream, options);

        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.start();
    } catch (err) {
        console.error('Erro ao iniciar a gravação:', err);
    }
};

stopRecordingButton.onclick = () => {
    mediaRecorder.stop();
};

function handleDataAvailable(event) {
    recordedChunks.push(event.data);
}

mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, {
        type: 'video/webm; codecs=vp9'
    });

    const filePath = dialog.showSaveDialogSync({
        buttonLabel: 'Salvar',
        defaultPath: `recording-${Date.now()}.webm`
    });

    if (filePath) {
        writeFile(filePath, Buffer.from(blob), () => {
            console.log('Gravação salva com sucesso:', filePath);
        });
    }
};
```

## Passo 7: Configuração do `preload.js`
Configure um `preload.js` se precisar acessar APIs Node.js ou módulos específicos do Electron no processo de renderização:

```javascript
// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // Exemplo de exposição de funções
    send: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    receive: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
});
```

## Passo 8: Atualizar `package.json`
Atualize o `package.json` com scripts de inicialização e dependências necessárias:

```json
{
  "name": "electron-screen-recorder",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "dependencies": {
    "electron": "^25.0.0"
  },
  "devDependencies": {
    "@types/node": "^16.7.2"
  }
}
```

## Passo 9: Executar o Projeto
Inicie seu aplicativo Electron com o comando:

```bash
npm start
```

## Conclusão
Com esses passos, você configurou e implementou uma funcionalidade básica de gravação de tela usando Electron. Isso inclui a configuração do projeto, a criação da interface do usuário para iniciar e parar a gravação, e a lógica para capturar e salvar o vídeo gravado. A partir daqui, você pode expandir e personalizar a funcionalidade conforme necessário para atender às especificações do seu aplicativo.