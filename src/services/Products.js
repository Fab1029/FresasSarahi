import {products} from '../data/Products.js';


export const getProductsByType = (type) => {
    try {
        const response = products.filter(product => product.type == type);

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

export const getTypesProducts = () => {
    try {
        const response = [...new Set(products.map(p => p.type))];
        
        if(response.length === 0) {
            throw new Error('Could not load types of products')
        }

        return response;
    }
    catch(error) {
        console.error("Error getTypesProducts:", error);
        return null;
    }
}

export const getProducts = () => {
    try {
        const response = products;
        
        if(response.length === 0) {
            throw new Error('Could not load products')
        }

        return response;
    }
    catch(error) {
        console.error("Error getProducts:", error);
        return null;
    }
}

export const getMainProducts = () => {
    try {
        const response = products.filter(product => product.mainProduct);
        
        if(response.length === 0) {
            throw new Error('Could not load main products')
        }

        return response;
    }
    catch(error) {
        console.error("Error getMainProducts:", error);
        return null;
    }
}