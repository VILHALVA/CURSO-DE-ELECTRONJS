# FORMULARIO-FS
Para criar um formulário em um aplicativo Electron usando Electron.js e HTML, podemos seguir um padrão simples de criação de elementos HTML e, opcionalmente, usar estilos CSS para melhorar a aparência. Vamos abordar como criar um formulário básico e como capturar os dados do formulário usando JavaScript no contexto do Electron.

## Passos para Criar um Formulário em Electron.js
Vamos criar um formulário simples que captura informações como nome, e-mail e mensagem. Aqui estão os passos:

1. **Estrutura do Projeto**

   Certifique-se de ter um projeto Electron configurado e funcionando. Geralmente, você terá um arquivo `main.js` para o processo principal e um arquivo `index.html` (ou similar) para o processo de renderização.

2. **HTML do Formulário**

   Crie ou edite o arquivo `index.html` para incluir o formulário HTML. Abaixo está um exemplo básico de um formulário:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta charset="UTF-8">
       <title>Formulário Electron</title>
       <!-- Incluir estilos CSS opcionais para melhorar a aparência do formulário -->
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <div class="container">
           <h1>Formulário de Contato</h1>
           <form id="contactForm">
               <div class="form-group">
                   <label for="name">Nome:</label>
                   <input type="text" id="name" name="name" class="form-control" required>
               </div>
               <div class="form-group">
                   <label for="email">E-mail:</label>
                   <input type="email" id="email" name="email" class="form-control" required>
               </div>
               <div class="form-group">
                   <label for="message">Mensagem:</label>
                   <textarea id="message" name="message" class="form-control" rows="5" required></textarea>
               </div>
               <button type="submit" class="btn btn-primary">Enviar</button>
           </form>
       </div>
       <!-- Incluir scripts do Electron para manipular o formulário -->
       <script src="renderer.js"></script>
   </body>
   </html>
   ```

   - **Explicação do HTML**:
     - `<form>`: Define o formulário e especifica um ID (`contactForm`) para referência no JavaScript.
     - `<input>` e `<textarea>`: São os elementos de entrada onde os usuários inserem informações.
     - `<button>`: Botão de envio do formulário.

3. **Estilos CSS Opcionais**

   Você pode adicionar estilos CSS para melhorar a aparência do formulário. Crie um arquivo `styles.css` e adicione estilos conforme necessário.

   ```css
   .container {
       max-width: 600px;
       margin: auto;
       padding: 20px;
       border: 1px solid #ccc;
       border-radius: 5px;
       background-color: #f9f9f9;
   }
   .form-group {
       margin-bottom: 20px;
   }
   .form-control {
       width: 100%;
       padding: 10px;
       font-size: 16px;
       border: 1px solid #ccc;
       border-radius: 4px;
   }
   .btn-primary {
       background-color: #007bff;
       color: #fff;
       padding: 10px 20px;
       border: none;
       border-radius: 4px;
       cursor: pointer;
   }
   .btn-primary:hover {
       background-color: #0056b3;
   }
   ```

   - **Explicação dos Estilos CSS**:
     - `.container`: Define o tamanho e o estilo do contêiner que envolve o formulário.
     - `.form-group`, `.form-control`: Estilos para os grupos de formulário e controles de entrada.
     - `.btn-primary`: Estilo para o botão de envio.

4. **JavaScript para Manipular o Formulário**

   No arquivo `renderer.js` (ou equivalente), adicione o código JavaScript para manipular o envio do formulário e capturar os dados. Aqui está um exemplo básico para capturar e exibir os dados no console:

   ```javascript
   // renderer.js

   // Captura o formulário
   const contactForm = document.getElementById('contactForm');

   // Adiciona um ouvinte de evento para o envio do formulário
   contactForm.addEventListener('submit', function(event) {
       event.preventDefault(); // Evita o envio padrão do formulário

       // Captura os valores dos campos
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;

       // Exibe os valores capturados no console
       console.log('Nome:', name);
       console.log('E-mail:', email);
       console.log('Mensagem:', message);

       // Aqui você pode adicionar lógica para enviar os dados para o backend, salvar em um arquivo, etc.
   });
   ```

   - **Explicação do JavaScript**:
     - `document.getElementById()`: Captura os valores dos campos de entrada pelo ID.
     - `addEventListener('submit')`: Ouve o evento de envio do formulário.
     - `event.preventDefault()`: Previne o comportamento padrão de envio do formulário para que possamos capturar e manipular os dados antes do envio.

## Considerações Finais
- Certifique-se de adaptar o código conforme necessário para atender aos requisitos específicos do seu aplicativo Electron.
- Você pode estender este formulário adicionando validações, armazenamento local ou envio de dados para um servidor remoto, dependendo das necessidades do seu projeto.
- Teste o formulário em diferentes plataformas (Windows, macOS, Linux) para garantir que o comportamento seja consistente.

