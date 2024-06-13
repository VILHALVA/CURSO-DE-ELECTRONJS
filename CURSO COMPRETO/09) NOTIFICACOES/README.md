# NOTIFICACOES
No Electron.js, as notificações são úteis para informar o usuário sobre eventos importantes ou atualizações relacionadas ao aplicativo, mesmo quando ele não está ativamente interagindo com ele. Vamos explorar como implementar notificações no seu aplicativo Electron, tanto no processo principal quanto nos processos de renderização.

## Implementando Notificações no Electron.js
Existem duas formas principais de implementar notificações no Electron:

1. **Notificações do Sistema**: Utilizando o módulo `Notification` do Electron para exibir notificações nativas do sistema operacional.
   
2. **Notificações Web**: Utilizando a API de Notificações da Web para exibir notificações no conteúdo das páginas HTML.

## Notificações do Sistema (Processo Principal)
No processo principal do Electron, você pode usar o módulo `Notification` para exibir notificações nativas do sistema operacional.

### Exemplo de Notificação no Processo Principal (`main.js`)
```javascript
// main.js
const { app, BrowserWindow, Notification } = require('electron');

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
}

app.on('ready', createWindow);

// Exemplo de notificação
function exibirNotificacao() {
    const notificacao = new Notification({
        title: 'Notificação do Electron',
        body: 'Esta é uma notificação de exemplo.'
    });

    notificacao.show();
}

// Exemplo de chamada de notificação após 5 segundos
setTimeout(exibirNotificacao, 5000);
```

- **Explicação**:
  - `Notification`: Cria uma nova instância de notificação com opções como `title` (título) e `body` (corpo).
  - `notificacao.show()`: Exibe a notificação.

### Notificações Web (Processo de Renderização)
Você pode usar a API de Notificações da Web diretamente nas páginas HTML carregadas nos `BrowserWindow` para exibir notificações.

### Exemplo de Notificação no Processo de Renderização (`index.html`)
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Notificações no Electron</title>
</head>
<body>
    <h1>Exemplo de Notificações</h1>

    <button onclick="exibirNotificacao()">Exibir Notificação</button>

    <script>
        function exibirNotificacao() {
            if (!('Notification' in window)) {
                alert('Este navegador não suporta notificações.');
            } else if (Notification.permission === 'granted') {
                // Se as notificações estão permitidas, cria e exibe a notificação
                const notificacao = new Notification('Notificação Web', {
                    body: 'Esta é uma notificação de exemplo.'
                });
            } else if (Notification.permission !== 'denied') {
                // Solicita permissão para mostrar notificações
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        const notificacao = new Notification('Notificação Web', {
                            body: 'Esta é uma notificação de exemplo.'
                        });
                    }
                });
            }
        }
    </script>
</body>
</html>
```

- **Explicação**:
  - `Notification`: Cria uma nova notificação na página HTML.
  - `Notification.permission`: Verifica o status da permissão para exibir notificações.
  - `Notification.requestPermission()`: Solicita permissão ao usuário para exibir notificações.

## Considerações Adicionais
- **Permissões**: Certifique-se de lidar com permissões para notificações, especialmente quando usando a API de Notificações da Web.
- **Compatibilidade**: Verifique a compatibilidade das notificações com diferentes sistemas operacionais e navegadores.
- **Personalização**: As notificações podem ser personalizadas com diferentes opções, como ícones, sons e ações.

