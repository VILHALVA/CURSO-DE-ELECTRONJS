# SYSTEMTRAY
A System Tray (ou bandeja do sistema) é uma área na barra de tarefas de sistemas operacionais como Windows, macOS e Linux, onde os aplicativos podem exibir ícones e fornecer acesso rápido a funcionalidades ou informações importantes para o usuário. No contexto do Electron, você pode adicionar um ícone à bandeja do sistema para criar uma interface discreta e acessível para o seu aplicativo.

### Implementando System Tray em um Aplicativo Electron

Para adicionar um ícone à bandeja do sistema usando Electron, siga os passos abaixo:

#### Passo 1: Configuração do Projeto

Certifique-se de que o seu projeto Electron está configurado corretamente. Se você ainda não tiver um projeto configurado, inicie um novo projeto Electron conforme descrito anteriormente.

#### Passo 2: Implementação do System Tray

No processo principal (`main.js`), você pode configurar um ícone na bandeja do sistema usando a API `Tray` do Electron.

```javascript
// main.js
const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');

let mainWindow;
let tray = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');

    // Criação do ícone na bandeja do sistema
    tray = new Tray(path.join(__dirname, 'icon.png'));
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Abrir Janela Principal', click: () => mainWindow.show() },
        { label: 'Item de Menu 2', type: 'normal' },
        { label: 'Sair', click: () => app.quit() }
    ]);
    tray.setToolTip('Aplicativo Electron na bandeja do sistema');
    tray.setContextMenu(contextMenu);

    // Esconder a janela principal quando minimizada
    mainWindow.on('minimize', (event) => {
        event.preventDefault();
        mainWindow.hide();
    });

    // Fechar aplicativo no macOS quando a janela for fechada
    mainWindow.on('close', (event) => {
        if (!app.isQuiting) {
            event.preventDefault();
            mainWindow.hide();
        }
    });

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

### Explicação do Código

- **Tray**: É criado um objeto `Tray` usando o caminho para o ícone (`icon.png`) que deve estar presente na pasta do projeto.
- **contextMenu**: Um menu de contexto é criado usando `Menu.buildFromTemplate`, especificando opções como abrir a janela principal, itens de menu adicionais e sair do aplicativo.
- **setToolTip**: Define uma dica de ferramenta para o ícone na bandeja do sistema.
- **mainWindow.on('minimize')**: Oculta a janela principal quando minimizada.
- **mainWindow.on('close')**: Gerencia o comportamento de fechar a janela no macOS, escondendo-a ao invés de fechar completamente.

### Passo 3: Atualização do `package.json`

Certifique-se de que o seu arquivo `package.json` inclua a referência correta para os módulos necessários, como `electron`.

### Passo 4: Executando o Projeto

Execute seu aplicativo Electron com o comando:

```bash
npm start
```

### Conclusão

Implementar um ícone na bandeja do sistema usando Electron permite que seu aplicativo desktop seja facilmente acessível e discreto, proporcionando funcionalidades rápidas através do menu de contexto. Este recurso é particularmente útil para aplicativos que precisam estar disponíveis em segundo plano enquanto o usuário foca em outras tarefas. Personalize o menu de contexto e adicione mais funcionalidades conforme necessário para atender aos requisitos do seu aplicativo.