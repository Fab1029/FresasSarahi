import {products} from '../data/Products.js';


export const getProductsByType = (type) => {
    try {
        const response = products.find(product => product.type == type);

        if(response.length === 0) {
            throw new Error('Could not load products')
        }

        return response;
    }
    catch(error) {
        console.error("Error getProductsByType:", error);
        return null;
    }
}

export const getProducts = () => {
    try {
        const response = products;
        
        if(products.length === 0) {
            throw new Error('Could not load products')
        }

        return response;
    }
    catch(error) {
        console.error("Error getProducts:", error);
        return null;
    }
}