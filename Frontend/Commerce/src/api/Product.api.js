import axios from 'axios'

const ProductAPI = axios.create({
    baseURL : 'http://127.0.0.1:8000/api/products/'
})

export const getAllProducts = () => {
    // Obtiene todos los productos dados por nuestra API.
    return ProductAPI.get('/');
}

export const createNewProduct = (product) => {
    // Funciona para envoar datos para la creación de un nuevo producto.
    return ProductAPI.post('/', product);
}

export const deleteProduct = (product) => {
    // Elimina un producto dado un ID.
    return ProductAPI.delete('/'+product.id, product);
}

export const queryProduct = (product) => {
    // Retorna la información de un producto en específico.
    return ProductAPI.get('/'+product.id, product);
}