# IPC (COMUNICAÇÃO ENTRE PROCESSOS)
A comunicação entre processos, ou IPC (Inter-Process Communication), é uma parte importante no desenvolvimento de aplicativos Electron, especialmente quando você deseja que as janelas se comuniquem entre si ou quando precisa que o processo principal e os processos de renderização compartilhem informações. O Electron oferece diversas maneiras de realizar a comunicação entre processos. Vou descrever algumas das técnicas mais comuns.

## IPC Renderer-Main
A comunicação entre o processo principal e os processos de renderização (janelas) é realizada usando o módulo `ipcRenderer` no lado do processo de renderização e o módulo `ipcMain` no lado do processo principal.

**Exemplo de Comunicação de um Processo de Renderização para o Processo Principal (main.js):**

```javascript
const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('renderer/index.html');

  ipcMain.on('mensagem-do-renderer', (event, arg) => {
    console.log(arg); // Exibe a mensagem enviada pelo processo de renderização
  });
});
```

**Exemplo de Comunicação de um Processo de Renderização para o Processo Principal (index.html - no processo de renderização):**

```javascript
const { ipcRenderer } = require('electron');

// Enviar uma mensagem para o processo principal
ipcRenderer.send('mensagem-do-renderer', 'Olá, Processo Principal!');
```

## IPC Main-Renderer
A comunicação do processo principal para os processos de renderização (janelas) é realizada da seguinte forma:

**Exemplo de Comunicação do Processo Principal para um Processo de Renderização (main.js):**

```javascript
const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('renderer/index.html');

  // Enviar uma mensagem para o processo de renderização
  mainWindow.webContents.send('mensagem-do-main', 'Olá, Processo de Renderização!');
});
```

**Exemplo de Comunicação do Processo Principal para um Processo de Renderização (index.html - no processo de renderização):**

```javascript
const { ipcRenderer } = require('electron');

// Receber a mensagem do processo principal
ipcRenderer.on('mensagem-do-main', (event, arg) => {
  console.log(arg); // Exibe a mensagem enviada pelo processo principal
});
```

## IPC Entre Janelas de Renderização
Para a comunicação entre janelas de renderização, você pode usar técnicas semelhantes à comunicação entre o processo principal e as janelas. Você precisará usar `ipcRenderer` para enviar mensagens de uma janela para outra.

Lembre-se de que a segurança é importante ao usar a comunicação IPC. Certifique-se de validar e sanitizar os dados para evitar vulnerabilidades de segurança.

Esses são exemplos básicos de como implementar a comunicação IPC no Electron. Você pode personalizar e estender essas técnicas de acordo com as necessidades do seu aplicativo.