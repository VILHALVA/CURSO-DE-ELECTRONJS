# CLIENTE-SERVIDOR
Para criar uma aplicação cliente-servidor utilizando Electron.js, você pode aproveitar a capacidade do Electron de combinar tecnologias web front-end (HTML, CSS, JavaScript) com Node.js para o backend. Vamos explorar como configurar e estruturar uma aplicação básica cliente-servidor usando Electron.

## Estrutura Básica Cliente-Servidor com Electron
Neste exemplo, vamos criar um servidor simples usando Node.js que será executado no processo principal do Electron (main process), e o cliente será uma página HTML que será carregada no processo de renderização (renderer process) do Electron.

## Passos para Implementação
1. **Configuração Inicial**

   Certifique-se de ter um projeto Electron configurado. O `main.js` é o arquivo onde você configura o processo principal do Electron, e o `index.html` (ou equivalente) é onde seu cliente será renderizado.

2. **Servidor (Processo Principal - `main.js`)**

   No processo principal, você pode configurar um servidor HTTP básico usando Node.js. Isso pode ser feito da seguinte forma:

   ```javascript
   const { app, BrowserWindow } = require('electron');
   const path = require('path');
   const http = require('http');

   let mainWindow;

   function createWindow() {
       mainWindow = new BrowserWindow({
           width: 800,
           height: 600,
           webPreferences: {
               nodeIntegration: true
           }
       });

       mainWindow.loadFile('index.html');

       // Inicia o servidor quando a janela estiver pronta
       mainWindow.webContents.on('did-finish-load', startServer);
   }

   function startServer() {
       const server = http.createServer((req, res) => {
           res.statusCode = 200;
           res.setHeader('Content-Type', 'text/plain');
           res.end('Olá, mundo! Este é um servidor simples com Electron.');
       });

       server.listen(3000, '127.0.0.1', () => {
           console.log('Servidor está rodando em http://127.0.0.1:3000/');
       });
   }

   app.on('ready', createWindow);
   ```

   - **Explicação do Código:**
     - `http.createServer()`: Cria um servidor HTTP simples que responde com "Olá, mundo!" para todas as requisições.
     - `server.listen()`: Inicia o servidor na porta 3000 do localhost (127.0.0.1).

3. **Cliente (Processo de Renderização - `index.html`)**

   O cliente será representado pela página HTML que será carregada na janela do Electron. Aqui está um exemplo básico:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta charset="UTF-8">
       <title>Cliente-Servidor com Electron</title>
   </head>
   <body>
       <h1>Exemplo Cliente-Servidor com Electron</h1>
       <p>Resultado do servidor:</p>
       <pre id="serverResponse"></pre>

       <script>
           // Atualiza o conteúdo da página com a resposta do servidor
           fetch('http://127.0.0.1:3000/')
               .then(response => response.text())
               .then(data => {
                   document.getElementById('serverResponse').textContent = data;
               })
               .catch(error => {
                   console.error('Erro ao buscar dados do servidor:', error);
               });
       </script>
   </body>
   </html>
   ```

   - **Explicação do Código:**
     - `fetch()`: Realiza uma requisição HTTP para o servidor local na porta 3000.
     - `response.text()`: Converte a resposta do servidor em texto.
     - `document.getElementById('serverResponse').textContent`: Atualiza o conteúdo da página HTML com a resposta do servidor.

