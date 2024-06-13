# CAMERA-FOTO
Para integrar a funcionalidade de câmera e captura de foto em um aplicativo Electron, você pode usar o módulo `node-webkit` ou `node-hid` para acessar hardware de câmera, mas uma abordagem mais comum e direta é usar a API `navigator.mediaDevices.getUserMedia()` disponível no navegador. Esta API permite acessar a câmera do dispositivo diretamente do JavaScript.

## Implementação da Funcionalidade de Câmera e Captura de Foto
Vamos passo a passo integrar uma funcionalidade simples de câmera que permite capturar fotos no Electron.

## Passo 1: Configuração do Projeto
Certifique-se de que seu projeto Electron está configurado. Se ainda não estiver configurado, você pode criar um novo projeto com o seguinte comando:

```bash
npm init -y
npm install electron --save-dev
```

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
O processo principal do Electron deve criar a janela principal onde o conteúdo da câmera será exibido:

```javascript
// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
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
Crie a interface do usuário para exibir a câmera e capturar fotos:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Captura de Foto com Electron</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Captura de Foto com Electron</h1>
    <video id="video" width="640" height="480" autoplay></video>
    <button id="capture">Capturar Foto</button>
    <canvas id="canvas" width="640" height="480" style="display:none;"></canvas>
    <img id="photo" src="" alt="Foto Capturada" style="display:none;">
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
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

canvas {
    display: none;
}
```

## Passo 6: Código do Processo de Renderização (`renderer.js`)
Este script gerencia a captura de vídeo da câmera e a captura da foto:

```javascript
// renderer.js
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const captureButton = document.getElementById('capture');
    const canvas = document.getElementById('canvas');
    const photo = document.getElementById('photo');
    const context = canvas.getContext('2d');

    // Solicita acesso à câmera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error('Erro ao acessar a câmera:', error);
        });

    // Captura a foto quando o botão é clicado
    captureButton.addEventListener('click', () => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        photo.src = dataUrl;
        photo.style.display = 'block';
        canvas.style.display = 'block';
    });
});
```

## Passo 7: Configuração do `preload.js`
Se você precisar acessar APIs Node.js ou módulos específicos do Electron no processo de renderização, configure um `preload.js`:

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
Adicione scripts de inicialização e dependências necessárias no `package.json`:

```json
{
  "name": "electron-camera-app",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "devDependencies": {
    "electron": "^25.0.0"
  }
}
```

## Executar o Projeto
Com tudo configurado, você pode iniciar seu aplicativo com o comando:

```bash
npm start
```

## Conclusão
Com esses passos, você criou uma funcionalidade básica para capturar fotos usando a câmera em um aplicativo Electron. Isso inclui a configuração do projeto, a implementação da interface do usuário, e a lógica para acessar a câmera e capturar fotos. 