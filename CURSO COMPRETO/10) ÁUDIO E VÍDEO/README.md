# ÁUDIO E VÍDEO
No Electron, é possível incorporar áudio e vídeo em um aplicativo para reproduzir mídia diretamente na interface do usuário. Abaixo, vou fornecer um exemplo de como adicionar áudio e vídeo a um aplicativo Electron.

Primeiro, você precisará importar os módulos necessários no seu código:

```javascript
const { app, BrowserWindow } = require('electron');
const path = require('path');
```

Aqui está um exemplo de como criar uma janela que reproduz um arquivo de áudio e vídeo:

```javascript
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // Carregar um arquivo HTML que incorpora um elemento de áudio e vídeo
  mainWindow.loadFile(path.join(__dirname, 'audio_video.html'));
});
```

Agora, você precisará criar um arquivo HTML que contém elementos de áudio e vídeo. Crie um arquivo chamado `audio_video.html` no mesmo diretório que o seu código e insira o seguinte conteúdo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Áudio e Vídeo</title>
  </head>
  <body>
    <h1>Reprodução de Áudio e Vídeo</h1>

    <!-- Elemento de áudio -->
    <audio controls>
      <source src="sample.mp3" type="audio/mpeg">
      Seu navegador não suporta a reprodução de áudio.
    </audio>

    <!-- Elemento de vídeo -->
    <video controls width="480" height="270">
      <source src="sample.mp4" type="video/mp4">
      Seu navegador não suporta a reprodução de vídeo.
    </video>
  </body>
</html>
```

Neste exemplo, criamos um arquivo HTML que incorpora elementos de áudio e vídeo. Os elementos `audio` e `video` têm atributos `controls` para permitir que o usuário controle a reprodução e exibam controles de reprodução padrão. Certifique-se de ter arquivos de áudio (`sample.mp3`) e vídeo (`sample.mp4`) no mesmo diretório que o seu projeto.

Você pode personalizar o código e os arquivos de áudio e vídeo de acordo com as necessidades do seu aplicativo. Após criar o arquivo HTML, você pode executar o aplicativo Electron com `npm start` no diretório do seu projeto para testar a reprodução de áudio e vídeo na janela do aplicativo.