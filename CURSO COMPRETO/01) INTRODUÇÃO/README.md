# INTRODUÇÃO, INSTALAÇÃO E CONFIGURAÇÃO
## Introdução:
O ElectronJS é uma estrutura que permite criar aplicativos de desktop multiplataforma usando tecnologias da web, como HTML, CSS e JavaScript. Ele é amplamente usado para criar aplicativos desktop para Windows, macOS e Linux. Com o Electron, você pode aproveitar seu conhecimento em desenvolvimento web para criar aplicativos de área de trabalho poderosos.

## Instalação:
Para começar a desenvolver com o Electron, você precisa instalar o Node.js, que é uma parte fundamental do ambiente de desenvolvimento. Aqui estão os passos para instalar o Electron:

1. **Instalar o Node.js:** Se você ainda não tem o Node.js instalado, baixe-o em [nodejs.org](https://nodejs.org/) e siga as instruções de instalação para o seu sistema operacional.

2. **Inicialize um projeto Node.js:** Abra o terminal ou prompt de comando e crie uma pasta para o seu projeto. Navegue até a pasta e execute o seguinte comando para criar um arquivo `package.json` vazio:

   ```
   npm init -y
   ```

3. **Instale o Electron:** Agora você pode instalar o Electron usando o seguinte comando:

   ```
   npm install electron
   ```

4. **Estrutura de Pastas:** Você pode organizar seu projeto da maneira que preferir, mas uma estrutura comum inclui pastas para código-fonte, recursos, e uma pasta `main` para o código principal do aplicativo.

## Configuração Básica:
Depois de instalar o Electron, você pode configurar seu projeto básico. Aqui está um exemplo de estrutura de pasta e um arquivo de código principal para iniciar:

**Estrutura de Pastas Sugerida:**

```
meu-aplicativo-electron/
  ├── package.json
  ├── main.js
  ├── renderer/
  │     ├── index.html
  │     └── style.css
  └── node_modules/
```

**main.js:**

```javascript
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Permite o uso do Node.js no processo de renderização
    }
  });

  win.loadFile('renderer/index.html');
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

**renderer/index.html:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Meu Aplicativo Electron</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
  </body>
</html>
```

Aqui, `main.js` é o ponto de entrada do processo principal do seu aplicativo. Ele cria uma janela do navegador que carrega o conteúdo do arquivo `index.html` na pasta `renderer`. Certifique-se de que as estruturas de pastas e arquivos estejam organizadas corretamente.

Agora, você pode iniciar o seu aplicativo Electron executando `npm start` no terminal na raiz do seu projeto. Isso abrirá uma janela do Electron exibindo "Olá, Mundo!".

Esta é apenas uma introdução e configuração inicial. À medida que você avança, você aprenderá a usar APIs do Electron para criar recursos mais avançados e interagir com o sistema operacional.

## AVISO:
É normal que a instalação do Electron crie apenas os arquivos "package-lock.json" e "package.json" no início, já que o Electron é adicionado como uma dependência ao seu projeto. Você precisará criar manualmente os outros arquivos e pastas, como "main.js", "index.html" e "style.css", e organizá-los de acordo com a estrutura sugerida.

Aqui estão as etapas para criar esses arquivos e pastas manualmente:

1. **Crie o arquivo `main.js` no diretório raiz do seu projeto:**

   ```javascript
   const { app, BrowserWindow } = require('electron');

   function createWindow() {
     const win = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
         nodeIntegration: true
       }
     });

     win.loadFile('index.html');
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

2. **Crie um diretório chamado `renderer` no mesmo nível que o arquivo `main.js`. Dentro do diretório `renderer`, crie o arquivo `index.html` e o arquivo `style.css`.

3. **Crie o arquivo `index.html` dentro do diretório `renderer`:**

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Meu Aplicativo Electron</title>
       <link rel="stylesheet" type="text/css" href="style.css">
     </head>
     <body>
       <h1>Olá, Mundo!</h1>
     </body>
   </html>
   ```

4. **Crie o arquivo `style.css` dentro do diretório `renderer` para estilizar o conteúdo do HTML conforme necessário.

Agora, com esses arquivos e diretórios criados, sua estrutura de projeto estará mais completa. Você pode executar o aplicativo Electron com `npm start`, e ele deve abrir uma janela exibindo "Olá, Mundo!". Certifique-se de que a estrutura de pastas e arquivos esteja organizada da maneira correta para que o Electron possa localizá-los.

