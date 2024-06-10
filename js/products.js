import { getProducts, addProduct, deleteProduct } from './api.js';

const productContainer = document.querySelector('.product-container');
const form = document.querySelector('.add-product-section form');
const nameInput = form.querySelector('input[name="name"]');
const priceInput = form.querySelector('input[name="price"]');
const imageInput = form.querySelector('input[name="image"]');

const isValidImageUrl = (url) => {
    return (url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null);
};

const isValidPrice = (price) => {
    return /^\d+,\d{2}$/.test(price);
};

const renderProducts = (products) => {
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="product-info">
                <p>R$ ${product.price}</p>
                <div class="product-trash" data-id="${product.id}">
                    <img src="assets/products/Trash.svg" alt="Trash">
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
};

const loadProducts = async () => {
    const products = await getProducts();
    renderProducts(products);
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const imageUrl = imageInput.value;
    const productName = nameInput.value;
    const productPrice = priceInput.value;

    if (productName.length > 40) {
        alert('O nome do produto deve ter no máximo 40 caracteres.');
        return;
    }

    if (!isValidPrice(productPrice)) {
        alert('Por favor, insira um valor válido no formato "123,00".');
        return;
    }

    if (!isValidImageUrl(imageUrl)) {
        alert('Por favor, insira um URL válido de imagem.');
        return;
    }

    const newProduct = {
        name: productName,
        price: productPrice,
        image: imageUrl
    };
    await addProduct(newProduct);
    loadProducts();
    form.reset();
});

productContainer.addEventListener('click', async (e) => {
    if (e.target.closest('.product-trash')) {
        const id = e.target.closest('.product-trash').dataset.id;
        await deleteProduct(id);
        loadProducts();
    }
});

document.addEventListener('DOMContentLoaded', loadProducts);
