import { useState } from 'react';
import './StackNumber.css'
import { motion } from 'framer-motion'

const StackNumber = ({quantity, callFunction}) => {

  const handleMinus = () => {
    if(quantity > 0) {
      callFunction(quantity - 1);
    }
  };

  const handlePlus = () => {
    callFunction(quantity + 1);
  };

  return (
    <div className='stack-number-container'>
        <motion.button onClick={handleMinus} whileTap={{scale: 0.8}}>
          
          <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              role="img" aria-label="Menos">
            <path d="M6 12h12"/>
          </svg>

        </motion.button>
        
        <p>{quantity}</p>
        
        <motion.button onClick={handlePlus} whileTap={{scale: 0.8}}>
          
          <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            role="img" aria-label="Más">
            <path d="M6 12h12M12 6v12"/>
          </svg>

        </motion.button>
        
    </div>
  )
}

export default StackNumber