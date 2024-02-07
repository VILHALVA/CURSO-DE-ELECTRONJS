# SINTAXE:
## CRIANDO PROJETO:
Para criar um projeto no Electron.js, você pode seguir os seguintes passos:

### Passo 1: Instalar o Node.js
Antes de tudo, você precisa ter o Node.js instalado em sua máquina. Você pode baixar e instalar o Node.js a partir do site oficial: [Node.js](https://nodejs.org/).

### Passo 2: Inicializar um novo projeto Node.js
Abra o terminal ou prompt de comando e navegue até o diretório onde deseja criar seu projeto. Em seguida, execute o seguinte comando para criar um novo projeto Node.js:

```bash
npm init -y
```

Isso criará um arquivo `package.json` com as configurações padrão para o seu projeto.

### Passo 3: Instalar o Electron
Agora você precisa instalar o Electron como uma dependência de desenvolvimento em seu projeto. Execute o seguinte comando no terminal:

```bash
npm install electron --save-dev
```

### Passo 4: Estrutura do projeto
Crie uma estrutura básica para o seu projeto. Por exemplo, você pode criar um arquivo `index.html` na raiz do seu projeto e um arquivo `main.js` para o processo principal do Electron.

### Passo 5: Configurar o arquivo `main.js`
No arquivo `main.js`, você definirá o comportamento do processo principal do Electron. Aqui está um exemplo mínimo para começar:

```javascript
const { app, BrowserWindow } = require('electron');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);
```

Este exemplo cria uma janela do Electron e carrega o arquivo `index.html`.

### Passo 6: Executar o projeto
Para executar seu aplicativo Electron, basta executar o seguinte comando no terminal:

```bash
npm start
```

Isso iniciará seu aplicativo Electron e abrirá a janela definida no arquivo `main.js`.

### Passo 7: Desenvolver seu aplicativo
A partir daqui, você pode começar a desenvolver seu aplicativo normalmente, adicionando lógica, recursos e estilos ao seu `index.html`, bem como gerenciando a interação com o usuário no arquivo `main.js`.

## EXEMPLOS DE CÓDIGOS:
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
 