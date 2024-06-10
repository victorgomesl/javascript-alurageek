# AluraGeek

Bem-vindo ao projeto AluraGeek, uma aplicação de e-commerce desenvolvida durante o curso da Alura e com suporte do programa Oracle ONE. Este projeto serve como uma demonstração prática de desenvolvimento frontend usando tecnologias web modernas e simulação de backend.

## Funcionalidades

- Listagem dinâmica de produtos.
- Adição e exclusão de produtos via interface de usuário.
- Validação de URLs de imagem e formatação automática de preços.
- Interface responsiva, adaptável para diferentes dispositivos e tamanhos de tela.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- JSON Server para simulação de API REST

## Como Utilizar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado em sua máquina.
- [npm](https://www.npmjs.com/) (normalmente instalado junto com o Node.js).

### Instalação

1. Clone o repositório:
   git clone https://github.com/victorgomesl/alurageek.git
2. Acesse o diretório do projeto:
   cd alurageek
3. Instale as dependências:
   npm install

### Execução

1. Inicie o JSON Server para simular a API:
   json-server --watch db.json
2. Abra o index.html em seu navegador para acessar a aplicação.

## Estrutura do Projeto

- index.html: Página principal.
- css/style.css: Estilos da aplicação.
- js/products.js: Script para manipulação dos produtos.
- db.json: Banco de dados fake utilizado pelo JSON Server.

## Requisições

- GET: Obtém produtos.
- POST: Adiciona um novo produto.
- DELETE: Remove um produto.

## Licença

Este projeto está sob a Licença MIT, veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com ❤️ por victorgomesl para Alura e Oracle ONE.