# AluraGeek

Bem-vindo ao projeto AluraGeek! Este é um exemplo de aplicação de e-commerce desenvolvida como parte do curso da Alura. O objetivo deste projeto é demonstrar a criação de um frontend interativo utilizando HTML, CSS e JavaScript, com simulação de backend utilizando JSON Server.

## Funcionalidades

- Listagem de produtos dinamicamente.
- Adição de novos produtos através de um formulário.
- Exclusão de produtos listados.
- Validação de URL de imagem e formatação de preço.
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- JSON Server

## Como Utilizar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado em sua máquina.
- [npm](https://www.npmjs.com/) (normalmente instalado junto com o Node.js).

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/victorgomesl/alurageek.git
```

2. Navegue até o diretório do projeto:

```bash
cd alurageek
```

3. Instale as dependências:

```bash
npm install
```

### Iniciando o Servidor

1. Inicie o JSON Server:

```bash
json-server --watch db.json
```

2. Abra o arquivo index.html em seu navegador.

```bash
json-server --watch db.json
```

## Estrutura do Projeto

- index.html: Arquivo principal da aplicação.
- css/style.css: Arquivo de estilos CSS.
- js/products.js: Lógica de manipulação de produtos.
- db.json: Simulação de backend com JSON Server.

### Requisições

GET
Obtém a lista de produtos:

```bash
const products = await getProducts();
```

POST
Adiciona um novo produto.

```bash
const newProduct = {
    name: "Nome do Produto",
    price: "100,00",
    image: "url_da_imagem"
};
await addProduct(newProduct);
```

DELETE
Remove um produto pelo ID.

```bash
await deleteProduct(id);
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Feito com ❤️ por victorgomesl