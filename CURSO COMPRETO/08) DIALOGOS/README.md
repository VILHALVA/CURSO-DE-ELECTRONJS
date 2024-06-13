# DIALOGOS
No Electron.js, diálogos são caixas de diálogo padrão que podem ser usadas para interagir com o usuário, como exibir mensagens, solicitar entrada de texto, selecionar arquivos ou pastas, entre outros. Vamos explorar como implementar diferentes tipos de diálogos no seu aplicativo Electron, tanto no processo principal quanto nos processos de renderização.

## Tipos de Diálogos no Electron.js
Existem vários tipos de diálogos disponíveis no Electron que podem ser usados conforme as necessidades do seu aplicativo:

1. **MessageBox (Caixa de Mensagem)**: Para exibir mensagens informativas, perguntas ao usuário e opções de confirmação.

2. **Dialog (Diálogo de Arquivo/Folder)**: Para selecionar arquivos ou pastas no sistema de arquivos local.

3. **Dialog (Diálogo de Salvar)**: Para salvar arquivos no sistema de arquivos local.

4. **Dialog (Diálogo de Abrir)**: Para abrir arquivos ou pastas do sistema de arquivos local.

## Exemplos de Implementação
Vamos ver como você pode implementar alguns desses diálogos no seu aplicativo Electron.

### Exemplo 1: MessageBox
```javascript
// Exemplo de MessageBox no processo de renderização (index.html)
const { ipcRenderer, remote } = require('electron');
const { dialog, BrowserWindow } = remote;

// Exemplo de MessageBox simples
document.getElementById('showMessageBox').addEventListener('click', () => {
    const options = {
        type: 'info',
        title: 'MessageBox de Exemplo',
        message: 'Esta é uma mensagem de exemplo.',
        buttons: ['OK']
    };
    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), options);
});
```

- **Explicação**:
  - `dialog.showMessageBox()`: Exibe uma caixa de mensagem com as opções fornecidas.
  - `type`: Tipo de mensagem (`info`, `warning`, `error`, `question`).
  - `title`: Título da caixa de mensagem.
  - `message`: Mensagem exibida na caixa de mensagem.
  - `buttons`: Botões exibidos na caixa de mensagem.

### Exemplo 2: Diálogo de Abrir Arquivo
```javascript
// Exemplo de Diálogo de Abrir Arquivo no processo de renderização (index.html)
document.getElementById('openFile').addEventListener('click', () => {
    dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            { name: 'Documentos', extensions: ['txt', 'docx', 'pdf'] },
            { name: 'Todos os arquivos', extensions: ['*'] }
        ]
    }).then(result => {
        console.log('Arquivo selecionado:', result.filePaths);
    }).catch(err => {
        console.error('Erro ao abrir o diálogo de abrir arquivo:', err);
    });
});
```

- **Explicação**:
  - `dialog.showOpenDialog()`: Exibe um diálogo para abrir arquivos.
  - `properties`: Propriedades do diálogo (ex. `openFile`, `openDirectory`, `multiSelections`).
  - `filters`: Filtros de arquivo para especificar os tipos de arquivos que podem ser selecionados.

### Exemplo 3: Diálogo de Salvar Arquivo
```javascript
// Exemplo de Diálogo de Salvar Arquivo no processo de renderização (index.html)
document.getElementById('saveFile').addEventListener('click', () => {
    dialog.showSaveDialog({
        title: 'Salvar Arquivo',
        defaultPath: '/path/to/default/file.txt',
        buttonLabel: 'Salvar',
        filters: [
            { name: 'Documentos', extensions: ['txt', 'docx', 'pdf'] },
            { name: 'Todos os arquivos', extensions: ['*'] }
        ]
    }).then(result => {
        console.log('Arquivo salvo:', result.filePath);
    }).catch(err => {
        console.error('Erro ao abrir o diálogo de salvar arquivo:', err);
    });
});
```

- **Explicação**:
  - `dialog.showSaveDialog()`: Exibe um diálogo para salvar um arquivo.
  - `defaultPath`: Caminho padrão para onde o arquivo será salvo.
  - `buttonLabel`: Rótulo do botão de salvar no diálogo.

## Considerações
- **Node Integration**: Certifique-se de que `nodeIntegration` está habilitado se estiver usando esses diálogos no processo de renderização.
- **API de Diálogo**: Consulte a documentação do Electron para mais opções e detalhes sobre os diálogos disponíveis.
- **Customização**: Você pode personalizar os diálogos com opções adicionais para atender às necessidades específicas do seu aplicativo.

