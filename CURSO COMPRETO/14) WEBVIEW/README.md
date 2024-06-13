# WEBVIEW
A tag `<webview>` no Electron é utilizada para incorporar páginas da web em um aplicativo desktop. Essa funcionalidade é útil para exibir conteúdo da web de forma integrada dentro da interface do seu aplicativo Electron, permitindo interações como navegação, carregamento de URLs, manipulação de eventos e mais.

## Uso Básico da Tag `<webview>`
Para utilizar `<webview>` no Electron, siga estes passos básicos:

## Passo 1: Configuração do Projeto
Certifique-se de ter um projeto Electron configurado. Se ainda não tiver um, siga os passos iniciais para iniciar um projeto Electron como mencionado anteriormente.

## Passo 2: Implementação da Tag `<webview>`
Adicione a tag `<webview>` ao seu arquivo HTML onde deseja incorporar o conteúdo da web. Aqui está um exemplo simples:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicativo com WebView</title>
</head>
<body>
    <h1>Aplicativo com WebView</h1>
    
    <!-- Inclua a tag <webview> -->
    <webview src="https://www.example.com" style="width: 100%; height: 600px;"></webview>

    <!-- Inclua os arquivos JavaScript e CSS do Electron, se necessário -->
    <!-- <script src="electron.js"></script> -->
    <!-- <link rel="stylesheet" href="electron.css"> -->
</body>
</html>
```

## Atributos Importantes da Tag `<webview>`
- **src**: Define a URL da página web que será carregada inicialmente.
- **style**: Permite definir o tamanho e outros estilos CSS do elemento `<webview>`.
- **preload**: Especifica um script JavaScript que será pré-carregado no contexto da página carregada no `<webview>`, permitindo acesso a APIs do Electron não disponíveis diretamente no contexto de uma página da web normal.

## Comunicação entre `<webview>` e o Processo Principal
É possível comunicar-se entre o processo principal do Electron e um `<webview>` usando a API `ipcRenderer`. Aqui está um exemplo simples de como enviar uma mensagem do `<webview>` para o processo principal:

### No arquivo HTML do `<webview>`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página no WebView</title>
</head>
<body>
    <h1>Página no WebView</h1>
    <button onclick="enviarMensagem()">Enviar Mensagem para o Electron</button>

    <script>
        function enviarMensagem() {
            const { ipcRenderer } = require('electron');
            ipcRenderer.send('mensagem-para-electron', 'Olá, Electron!');
        }
    </script>
</body>
</html>
```

### No processo principal (`main.js`):
```javascript
const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');

    // Recebe mensagem do <webview>
    ipcMain.on('mensagem-para-electron', (event, mensagem) => {
        console.log('Mensagem recebida do <webview>:', mensagem);
    });
}

app.on('ready', createWindow);
```

## Considerações Finais
A utilização da tag `<webview>` no Electron oferece uma maneira poderosa de integrar conteúdo da web dentro de aplicativos desktop, aproveitando as capacidades do Electron para proporcionar uma experiência integrada e personalizada. Certifique-se de explorar a documentação oficial do Electron para mais detalhes e opções avançadas de configuração.