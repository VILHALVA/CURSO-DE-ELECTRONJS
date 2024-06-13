# SEGUNDO APP
O código consiste em duas partes: um arquivo HTML (`index.html`) e um arquivo JavaScript principal (`main.js`) de um aplicativo Electron. 

## Arquivo HTML (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Segunda aplicación</title>
</head>
<body>
    
    <h1>Segunda aplicación</h1>
    <p>
        versión nodejs <script>document.write(process.versions.node)</script>

        Chrome <script>document.write(process.versions.chrome)</script>

        ElectronJS <script>document.write(process.versions.electron)</script>
    </p>
</body>
</html>
```

### Explicação linha por linha:
- `<!DOCTYPE html>`: Declara o tipo de documento como HTML5.
- `<html lang="en">`: Define o idioma do documento como inglês.
- `<head>`: Contém meta informações sobre o documento, como codificação, viewport e título da página.
  - `<meta charset="UTF-8">`: Especifica a codificação de caracteres como UTF-8 para suportar caracteres especiais.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Define a largura do viewport para o tamanho do dispositivo e define a escala inicial como 1.0 para dispositivos móveis.
  - `<title>Segunda aplicación</title>`: Define o título da página como "Segunda aplicación".
- `<body>`: Contém o conteúdo visível da página.
  - `<h1>Segunda aplicación</h1>`: Cabeçalho principal da página com o texto "Segunda aplicación".
  - `<p>`: Parágrafo que exibe informações dinâmicas sobre as versões do Node.js, Chrome e Electron.
    - `versión nodejs <script>document.write(process.versions.node)</script>`: Exibe a versão do Node.js.
    - `Chrome <script>document.write(process.versions.chrome)</script>`: Exibe a versão do Chrome usada pelo Electron.
    - `ElectronJS <script>document.write(process.versions.electron)</script>`: Exibe a versão do Electron utilizada.

## Arquivo JavaScript Principal (`main.js`):
```javascript
const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

app.on('before-quit', () => {
    console.log("Saliendo...");
});

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Primera aplicación',
        center: true,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    );
}

app.on('ready', createWindow);
```

### Explicação linha por linha:
- `const {app, BrowserWindow} = require('electron');`: Importa os módulos necessários do Electron (`app` e `BrowserWindow`).
- `const url = require('url');`: Importa o módulo `url` para manipulação de URLs.
- `const path = require('path');`: Importa o módulo `path` para manipulação de caminhos de arquivos.

- `app.on('before-quit', () => { ... });`: Registra um evento para ser disparado antes de fechar o aplicativo. No exemplo, apenas imprime "Saliendo..." no console quando isso ocorre.

- `let win;`: Declara uma variável `win` para armazenar a referência à janela principal do aplicativo.

- `function createWindow() { ... }`: Define a função `createWindow()` para criar a janela principal do aplicativo com as seguintes configurações:
  - `BrowserWindow`: Cria uma nova janela com as dimensões, título e configurações especificadas.
  - `win.loadURL(...);`: Carrega o arquivo `index.html` localizado no mesmo diretório que `main.js` na janela principal.

- `app.on('ready', createWindow);`: Quando o Electron terminar de inicializar, chama a função `createWindow()` para criar a janela principal do aplicativo.

## Conclusão
Este código cria um aplicativo Electron simples que exibe uma janela com o conteúdo do arquivo `index.html`. A página HTML exibe informações dinâmicas sobre as versões do Node.js, Chrome e Electron. O JavaScript principal (`main.js`) controla o ciclo de vida do aplicativo e cria a janela principal, configurando também um evento para ser disparado antes de o aplicativo ser fechado.
