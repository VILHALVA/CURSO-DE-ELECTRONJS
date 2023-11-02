const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // Carregar um arquivo HTML que incorpora um elemento de áudio e vídeo
  mainWindow.loadFile(path.join(__dirname, 'audio_video.html'));
});
