# MENU
Para criar um menu em um aplicativo Electron, podemos usar o módulo `Menu` e seus componentes para configurar menus tanto no processo principal quanto nos processos de renderização. Vamos explorar como implementar um menu simples em um aplicativo Electron.

## Passos para Implementar um Menu no Electron
Vamos dividir o processo em etapas para facilitar a implementação.

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

### Passo 3: Código do Processo Principal (`main.js`)

O processo principal do Electron deve criar a janela principal e configurar o menu:

```javascript
// main.js
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');

    // Criação do menu
    const menuTemplate = [
        {
            label: 'Arquivo',
            submenu: [
                {
                    label: 'Abrir',
                    accelerator: 'CmdOrCtrl+O',
                    click() {
                        // Lógica para abrir arquivo
                    }
                },
                {
                    label: 'Salvar',
                    accelerator: 'CmdOrCtrl+S',
                    click() {
                        // Lógica para salvar arquivo
                    }
                },
                { type: 'separator' },
                {
                    label: 'Sair',
                    accelerator: 'CmdOrCtrl+Q',
                    click() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Editar',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll' }
            ]
        },
        {
            label: 'Ajuda',
            submenu: [
                {
                    label: 'Sobre',
                    click() {
                        // Lógica para mostrar informações sobre o aplicativo
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

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
Crie uma página HTML simples para testar o menu:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu no Electron</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Exemplo de Menu no Electron</h1>
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

h1 {
    margin-top: 50px;
}
```

### Passo 6: Atualizar `package.json`

Atualize o `package.json` com scripts de inicialização e dependências necessárias:

```json
{
  "name": "electron-menu-app",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "dependencies": {
    "electron": "^25.0.0"
  }
}
```

### Passo 7: Executar o Projeto

Inicie seu aplicativo Electron com o comando:

```bash
npm start
```

## Conclusão
Com esses passos, você configurou e implementou um menu simples em um aplicativo Electron. O menu inclui itens para abrir e salvar arquivos, sair do aplicativo, além de itens de edição e ajuda. Você pode expandir e personalizar o menu conforme necessário para atender às especificações do seu aplicativo. 