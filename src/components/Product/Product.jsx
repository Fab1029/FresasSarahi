import './Product.css'
import StackNumber from '../StackNumber/StackNumber'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react';



const Product = ({product, callFunction}) => {
  const cartControls = useAnimation();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    // Quantity 0
    if (quantity === 0) return;

    // Animacion
    cartControls.start({
        rotate: [0, -10, 5, 0], 
        x: [0, 0, 15, 0],        
        transition: { duration: 0.5, ease: 'easeInOut', times: [0, 0.1, 0.8, 1]}
    });

    callFunction({
        name: product.name,
        weight: product.weight,
        price: product.price,
        quantity: quantity
    });
    
    // Limpiamos valores
    setQuantity(0);
  };

  return (
    <div className='product-container'>
        <div className='product-image-container'>
            <img src={product.image}/>
        </div>
        
        <div className='product-information-container'>
            <div className='product-name-container'>
                <h2>{product.name}</h2>
                <div className='product-weight-tag'>
                    <p>{product.weight}</p>
                </div>
            </div>

            <p className='product-price'>${product.price}</p>
            
            <StackNumber quantity={quantity} callFunction={setQuantity}/>
            
        </div>

        <button className='default-button button-add-to-cart' 
            onClick={handleAddToCart}
        >
            Agregar al carrito
            <motion.svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                role="img" aria-label="Carrito de compras"
                animate={cartControls}
            >
                <path d="M2.08 2.75c.14-.39.57-.6.96-.46l.3.1c.62.22 1.14.41 1.55.62.44.22.82.5 1.1.92.28.42.39.88.44 1.38.02.23.03.48.03.79H17.13c1.69 0 3.21 0 3.65.58.44.58.27 1.45-.07 3.19l-.5 2.42c-.32 1.53-.48 2.28-1.03 2.73-.55.45-1.34.45-2.9.45h-5.3c-2.79 0-4.18 0-5.04-.92C5.06 13.55 5 12.58 5 9.64V7.04c0-.74 0-1.23-.04-1.62-.04-.36-.11-.54-.2-.67-.09-.13-.22-.25-.52-.4-.32-.16-.76-.32-1.43-.56l-.26-.09a.75.75 0 0 1-.47-.95ZM7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </motion.svg>
        </button>
    </div>
  )
}

export default Product