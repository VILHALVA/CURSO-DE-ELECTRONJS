# SISTEMA DE DIÁLOGO
No Electron, você pode usar o módulo `dialog` para criar caixas de diálogo e interagir com o sistema de arquivos do sistema operacional. Isso é útil para permitir que o usuário selecione arquivos, pastas ou defina opções em seu aplicativo.

Aqui estão exemplos de como usar o módulo `dialog` para criar caixas de diálogo em um aplicativo Electron:

## Abrir uma caixa de diálogo para selecionar arquivos:

```javascript
const { dialog } = require('electron');

// Exibir uma caixa de diálogo para selecionar arquivos
dialog.showOpenDialog({
  title: 'Selecionar Arquivos',
  properties: ['openFile', 'multiSelections'],
  filters: [
    { name: 'Documentos', extensions: ['txt', 'pdf', 'docx'] },
    { name: 'Todos os Arquivos', extensions: ['*'] },
  ],
})
  .then((result) => {
    if (!result.canceled) {
      console.log('Arquivos selecionados:', result.filePaths);
    }
  })
  .catch((err) => {
    console.error(err);
  });
```

Neste exemplo, usamos `dialog.showOpenDialog` para abrir uma caixa de diálogo que permite ao usuário selecionar arquivos. Você pode personalizar as propriedades, como o título, as extensões permitidas e se a seleção múltipla de arquivos é permitida.

## Abrir uma caixa de diálogo para selecionar pastas:

```javascript
const { dialog } = require('electron');

// Exibir uma caixa de diálogo para selecionar uma pasta
dialog.showOpenDialog({
  title: 'Selecionar Pasta',
  properties: ['openDirectory'],
})
  .then((result) => {
    if (!result.canceled) {
      console.log('Pasta selecionada:', result.filePaths[0]);
    }
  })
  .catch((err) => {
    console.error(err);
  });
```

Este exemplo abre uma caixa de diálogo para selecionar uma pasta. As opções são configuradas com `properties: ['openDirectory']`.

## Abrir uma caixa de diálogo para salvar arquivos:

```javascript
const { dialog } = require('electron');

// Exibir uma caixa de diálogo para salvar um arquivo
dialog.showSaveDialog({
  title: 'Salvar Arquivo',
  defaultPath: 'arquivo.txt',
  filters: [
    { name: 'Documentos de Texto', extensions: ['txt'] },
    { name: 'Todos os Arquivos', extensions: ['*'] },
  ],
})
  .then((result) => {
    if (!result.canceled) {
      console.log('Arquivo salvo em:', result.filePath);
    }
  })
  .catch((err) => {
    console.error(err);
  });
```

Neste exemplo, usamos `dialog.showSaveDialog` para exibir uma caixa de diálogo que permite ao usuário escolher um local para salvar um arquivo.

Esses são exemplos básicos de como usar o módulo `dialog` no Electron para interagir com o sistema de arquivos e permitir que os usuários selecionem arquivos, pastas ou locais para salvar arquivos. Você pode personalizar as opções de acordo com as necessidades do seu aplicativo. Certifique-se de ajustar os títulos, extensões e outras configurações conforme necessário.