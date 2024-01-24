# CURSO DE ELECTRONJS
👨‍⚖️O ELECTRONJS É UM FRAMEWORK DE CÓDIGO ABERTO QUE PERMITE CRIAR APLICATIVOS DE DESKTOP MULTIPLATAFORMA USANDO TECNOLOGIAS WEB COMO HTML, CSS E JAVASCRIPT. ELE PERMITE QUE OS DESENVOLVEDORES CRIEM APLICATIVOS PARA WINDOWS, MACOS E LINUX USANDO AS MESMAS HABILIDADES DE DESENVOLVIMENTO WEB.

[![GitHub Repo stars](https://img.shields.io/badge/VILHALVA-GITHUB-03A9F4?logo=github)](https://github.com/VILHALVA)
[![GitHub Repo stars](https://img.shields.io/badge/VEJA-DOCUMENTAÇÃO-03A9F4?logo=google)](https://www.electronjs.org/docs/latest) 
[![GitHub Repo stars](https://img.shields.io/badge/LINGUAGEM%20DE-PROGRAMAÇÃO-03A9F4?logo=github)](https://github.com/VILHALVA/CURSO-DE-JAVASCRIPT) 
[![GitHub Repo stars](https://img.shields.io/badge/-PLAYLIST%20DO%20YOUTUBE-blueviolet)](https://youtube.com/playlist?list=PLWhiA_CuQkbCqT946EXFbvMQhK3oMpCsR&si=tY3L3RFl-mQJK6sn)

# CONCEITO:
O Electron é uma estrutura de código aberto que permite criar aplicativos desktop multiplataforma usando tecnologias da web, como HTML, CSS e JavaScript. Ele é amplamente utilizado para desenvolver aplicativos de desktop para Windows, macOS e Linux. Vou explicar alguns conceitos básicos e fornecer exemplos de código para ajudá-lo a entender melhor como o Electron funciona.

## Conceitos Básicos:
1. **Main Process e Renderer Process:**
   O Electron tem dois processos principais: o processo principal (main process) e os processos de renderização (renderer process). O processo principal é responsável por criar a janela do aplicativo e gerenciar eventos de sistema, enquanto os processos de renderização são usados para exibir o conteúdo da interface do usuário.

2. **Páginas da Web como UI:**
   A interface do usuário do seu aplicativo Electron é basicamente construída com páginas da web. Você pode criar interfaces usando HTML, CSS e JavaScript como faria em um site da web.

3. **Node.js Integrado:**
   O Electron integra o Node.js, permitindo que você acesse recursos nativos do sistema operacional e execute código JavaScript no lado do servidor.

4. **Electron API:**
   O Electron fornece uma ampla gama de APIs para interagir com o sistema operacional e criar recursos específicos da área de trabalho, como janelas, bandejas de sistema, notificações e muito mais.

5. **Package.json:**
   O arquivo `package.json` é fundamental em um projeto Electron. Ele descreve as dependências do aplicativo e configurações importantes, como o arquivo principal (main), que define o processo principal do aplicativo.

## Exemplo de Código:
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

À medida que você avança no curso, aprenderá a interagir com recursos avançados do sistema operacional, criar menus, lidar com eventos e muito mais. 

# CARACTERISTICAS:
## Características Positivas:
1. **Multiplataforma:** Um dos principais benefícios do Electron é a capacidade de criar aplicativos desktop para Windows, macOS e Linux usando uma única base de código.

2. **Desenvolvimento Web:** Desenvolver aplicativos com Electron é acessível para desenvolvedores web, pois permite usar tecnologias da web comuns, como HTML, CSS e JavaScript.

3. **Grande Comunidade:** O Electron tem uma comunidade ativa e uma ampla gama de bibliotecas e recursos disponíveis, o que facilita a solução de problemas e o desenvolvimento rápido.

4. **Integração com Node.js:** A integração nativa com o Node.js permite acessar recursos nativos do sistema, como sistemas de arquivos, notificações e muito mais.

5. **Atualizações Simples:** Atualizar aplicativos Electron é relativamente fácil, já que você só precisa atualizar os arquivos de origem, e os usuários receberão as atualizações automaticamente.

6. **Acesso a APIs de Sistema:** O Electron oferece APIs para acessar recursos de sistema, como câmera, áudio, sistema de arquivos, janelas de sistema, e outras funcionalidades de nível de desktop.

## Características Negativas:
1. **Consumo de Recursos:** Aplicativos Electron tendem a consumir mais memória e recursos do sistema em comparação com aplicativos nativos, já que estão executando um navegador embutido.

2. **Tamanho do Aplicativo:** Os aplicativos Electron podem ser relativamente grandes em tamanho, o que pode ser um problema se a largura de banda for limitada.

3. **Desempenho Limitado:** Em comparação com aplicativos nativos, os aplicativos Electron podem ser mais lentos em termos de inicialização e desempenho, especialmente para aplicativos intensivos em gráficos.

4. **Dependências de Terceiros:** Eletrons geralmente incluem muitas dependências de terceiros, o que pode tornar a gestão de dependências mais complicada.

5. **Manutenção Contínua:** Você deve acompanhar as atualizações do Electron e suas dependências para garantir a segurança e a compatibilidade com sistemas operacionais.

6. **Experiência do Usuário:** O estilo visual e a experiência do usuário podem ser diferentes da plataforma nativa, o que pode afetar a aceitação dos usuários.

