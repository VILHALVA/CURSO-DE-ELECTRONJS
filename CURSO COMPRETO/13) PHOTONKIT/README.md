# PHOTONKIT
PhotonKit é um conjunto de componentes visuais baseado no estilo do sistema operacional macOS, originalmente desenvolvido pela equipe do GitHub. Ele oferece uma maneira fácil de integrar elementos de interface de usuário (UI) consistentes com o estilo do macOS em aplicativos Electron.

## Introdução ao PhotonKit
PhotonKit fornece uma biblioteca de componentes que facilita a criação de interfaces de usuário no estilo macOS. Aqui estão os passos básicos para começar a usar PhotonKit em seu aplicativo Electron:

## Passo 1: Configuração do Projeto
Certifique-se de que o seu projeto Electron está configurado e pronto para integrar módulos npm. Se você ainda não configurou um projeto Electron, siga as etapas básicas para iniciar um projeto Electron como descrito anteriormente.

## Passo 2: Instalação do PhotonKit
Para começar, instale o PhotonKit via npm no seu projeto Electron:

```bash
npm install photonkit --save
```

## Passo 3: Integração com Electron
Você pode usar PhotonKit para estilizar os componentes da interface do usuário em suas páginas HTML.

### Exemplo de Uso Básico
Aqui está um exemplo simples de como você pode integrar PhotonKit em uma página HTML do seu aplicativo Electron:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicativo com PhotonKit</title>
    <!-- Inclua o arquivo CSS do PhotonKit -->
    <link rel="stylesheet" href="node_modules/photonkit/dist/css/photon.css">
    <!-- Estilos adicionais para a página -->
    <style>
        body {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            padding: 20px;
        }
    </style>
</head>
<body>
    <h1>Meu Aplicativo Electron com PhotonKit</h1>
    
    <!-- Exemplo de botão -->
    <button class="btn btn-primary">Botão PhotonKit</button>

    <!-- Inclua o arquivo JavaScript do PhotonKit (opcional, dependendo dos componentes usados) -->
    <!-- <script src="node_modules/photonkit/dist/js/photon.min.js"></script> -->
</body>
</html>
```

## Conclusão
PhotonKit simplifica a criação de interfaces de usuário elegantes e consistentes com o estilo do macOS em aplicativos Electron. Ao integrar PhotonKit, você pode aproveitar a facilidade de uso e a estética familiar aos usuários do macOS, proporcionando uma experiência mais integrada e agradável. Certifique-se de explorar a documentação do PhotonKit para descobrir todos os componentes disponíveis e suas opções de personalização.