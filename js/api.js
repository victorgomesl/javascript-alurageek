const API_URL = 'http://localhost:3000/products';

export const getProducts = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
};

export const addProduct = async (product) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        return await response.json();
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
    }
};

export const deleteProduct = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
    }
};
