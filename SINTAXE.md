# SINTAXE:
Aqui está um exemplo simples de como criar uma janela do Electron:

**package.json:**
```json
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "dependencies": {
    "electron": "^16.0.0"
  }
}
```

**main.js:**
```javascript
const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadFile('index.html');
});
```

**index.html:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Meu App Electron</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
  </body>
</html>
```

Neste exemplo, o arquivo `main.js` cria uma janela do Electron e carrega o conteúdo da página da web a partir de `index.html`.
 