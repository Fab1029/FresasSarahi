import {products} from '../data/Products.js';

/*
export const getProjectById = (id) => {
    try {
        const response = project.find(p => p.id == id);

        if(!response) {
            throw new Error('Could not load project')
        }

        return response;
    }
    catch(error) {
        console.error("Error getProjectById:", error);
        return null;
    }
}*/

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