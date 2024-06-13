# MANUAL
## 1. INSTALAÇÃO DO ELECTRONJS
O Electron é uma estrutura para criar aplicativos de desktop multiplataforma usando tecnologias da web.

### INSTALAÇÃO VIA NPM (NODE PACKAGE MANAGER):
Certifique-se de ter o Node.js instalado antes de prosseguir.

#### WINDOWS:
Abra o Prompt de Comando e execute o seguinte comando:
```
npm install -g electron
```

#### MACOS E LINUX:
Abra o terminal e execute o seguinte comando:
```
sudo npm install -g electron
```

## 2. CRIANDO UM PROJETO ELECTRONJS
### PASSO A PASSO PARA CRIAR UM NOVO PROJETO:
1. Abra o terminal ou Prompt de Comando.
2. Navegue até o diretório onde deseja criar o projeto.
3. Execute o seguinte comando para criar um novo projeto Electron:
```
npx create-electron-app nome-do-projeto
```
Substitua `nome-do-projeto` pelo nome que deseja dar ao seu projeto.

4. Aguarde até que o processo de criação seja concluído.

## 3. EXECUTANDO O PROJETO ELECTRONJS
### PASSO A PASSO PARA EXECUTAR O PROJETO:
1. Navegue até o diretório do seu projeto usando o terminal.
2. Execute o seguinte comando para iniciar o aplicativo Electron:
```
npm start
```

### ESTRUTURA DO PROJETO:
O projeto criado terá uma estrutura básica de arquivos, incluindo um arquivo `main.js` que é o ponto de entrada do aplicativo Electron e um diretório `src` onde você pode colocar seus arquivos HTML, CSS e JavaScript para a interface do usuário.

### DIRETÓRIOS:
A estrutura dos diretórios em um projeto ElectronJS pode variar dependendo da complexidade do projeto e das preferências do desenvolvedor, mas geralmente segue um padrão que facilita a organização e manutenção do código. 

```
my-electron-app/
├── node_modules/
├── src/
│   ├── main/
│   │   ├── main.js
│   │   └── preload.js
│   ├── renderer/
│   │   ├── index.html
│   │   ├── renderer.js
│   │   └── styles.css
│   └── assets/
│       ├── images/
│       └── icons/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── webpack.config.js (opcional)
└── electron-builder.json (ou outro arquivo de configuração de build, opcional)
```

1. **node_modules/**:
   - Diretório onde ficam todas as dependências instaladas via npm.

2. **src/**:
   - Diretório principal do código fonte da aplicação.

   - **main/**:
     - Contém o código responsável pelo processo principal (main process) do Electron, que controla a lógica principal da aplicação, a criação de janelas, gerenciamento do ciclo de vida da aplicação, etc.
     - `main.js`: O ponto de entrada do processo principal, onde a aplicação Electron é inicializada.
     - `preload.js`: Código que é executado antes do processo de renderização, geralmente utilizado para expor APIs seguras para o renderer.

   - **renderer/**:
     - Contém o código do processo de renderização (renderer process), que é basicamente a interface gráfica da aplicação.
     - `index.html`: O arquivo HTML principal que é carregado na janela do Electron.
     - `renderer.js`: O código JavaScript específico para a interface gráfica e a lógica do frontend.
     - `styles.css`: Arquivo de estilos CSS para a interface.

   - **assets/**:
     - Diretório para arquivos estáticos, como imagens, ícones, fontes, etc.

3. **.gitignore**:
   - Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.

4. **package.json**:
   - Arquivo de configuração do npm que contém informações sobre o projeto e suas dependências.

5. **package-lock.json**:
   - Arquivo gerado automaticamente pelo npm para garantir que as instalações sejam reproduzíveis, bloqueando as versões das dependências.

6. **README.md**:
   - Arquivo de documentação do projeto, geralmente contém informações sobre como configurar e executar o projeto.

7. **webpack.config.js** (opcional):
   - Arquivo de configuração do Webpack, caso você esteja utilizando Webpack para empacotar os arquivos da aplicação.

8. **electron-builder.json** (ou outro arquivo de configuração de build, opcional):
   - Arquivo de configuração para ferramentas de build como `electron-builder`, `electron-packager`, etc., usado para empacotar e distribuir a aplicação.

## CRIANDO UM EXECUTÁVEL COM `ELECTRON-BUILDER`:
Para converter seu projeto ElectronJS em um aplicativo executável ou instalador, você pode usar ferramentas como `electron-builder` ou `electron-packager`. Ambas são amplamente utilizadas para empacotar aplicações Electron e gerar instaladores para diferentes plataformas (Windows, macOS, Linux). 

1. **Instalar o `electron-builder`**:
   Primeiro, você precisa instalar o `electron-builder` como uma dependência de desenvolvimento.

   ```bash
   npm install electron-builder --save-dev
   ```

2. **Adicionar Scripts no `package.json`**:
   Adicione scripts no seu `package.json` para construir a aplicação.

   ```json
   {
     "name": "my-electron-app",
     "version": "1.0.0",
     "description": "My Electron application",
     "main": "src/main/main.js",
     "scripts": {
       "start": "electron .",
       "build": "electron-builder"
     },
     "build": {
       "appId": "com.example.my-electron-app",
       "productName": "MyElectronApp",
       "directories": {
         "output": "dist"
       },
       "files": [
         "src/**/*",
         "package.json"
       ],
       "win": {
         "target": "nsis"
       },
       "mac": {
         "target": "dmg"
       },
       "linux": {
         "target": "AppImage"
       }
     },
     "devDependencies": {
       "electron": "^13.0.0",
       "electron-builder": "^22.10.5"
     }
   }
   ```

   No campo `build`, você pode ajustar as configurações de acordo com suas necessidades, incluindo `appId`, `productName`, `directories`, e os alvos de build para diferentes plataformas.

3. **Rodar o Build**:
   Execute o comando de build para gerar os executáveis e instaladores.

   ```bash
   npm run build
   ```

   Isso criará os arquivos de instalação na pasta `dist`.

### EXEMPLOS DE CONFIGURAÇÕES:
#### WINDOWS (NSIS):
Para Windows, o alvo comum é o `nsis`, que cria um instalador `.exe`.

```json
"win": {
  "target": "nsis",
  "icon": "src/assets/icons/icon.ico"
}
```

#### MACOS (DMG):
Para macOS, você pode usar o alvo `dmg` para criar uma imagem de disco `.dmg`.

```json
"mac": {
  "target": "dmg",
  "icon": "src/assets/icons/icon.icns"
}
```

#### LINUX (APPIMAGE):
Para Linux, o alvo `AppImage` é bastante popular.

```json
"linux": {
  "target": "AppImage",
  "icon": "src/assets/icons"
}
```

### PERSONALIZAÇÃO ADICIONAL:
Você pode personalizar ainda mais o processo de build com várias opções disponíveis no `electron-builder`. Consulte a [documentação oficial](https://www.electron.build/) para uma lista completa de opções e exemplos avançados.

## CONCLUSÃO:
Agora você instalou o Electron e criou um novo projeto ElectronJS. A partir daqui, você pode explorar mais sobre o desenvolvimento de aplicativos de desktop usando tecnologias da web e personalizar seu projeto conforme necessário.