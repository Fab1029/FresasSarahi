import './StackNumber.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

const StackNumber = () => {
  const [count, setCount] = useState(0);
  
  const handleMinus = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className='stack-number-container'>
        <motion.button onClick={handleMinus} whileTap={{scale: 0.8}}>
          
          <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="black" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              role="img" aria-label="Menos">
            <path d="M6 12h12"/>
          </svg>

        </motion.button>
        
        <p>{count}</p>
        
        <motion.button onClick={handlePlus} whileTap={{scale: 0.8}}>
          
          <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="black" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            role="img" aria-label="Más">
            <path d="M6 12h12M12 6v12"/>
          </svg>

        </motion.button>
        
    </div>
  )
}

export default StackNumber