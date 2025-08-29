import './StackNumber.css'
import plusIcon from '../../assets/StackNumber/plus.webp'
import minusIcon from '../../assets/StackNumber/minus.webp'
import { useState } from 'react'


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
        <button onClick={handleMinus}>
          
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

        </button>
        
        <p>{count}</p>
        
        <button onClick={handlePlus}>
          
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

        </button>
        
    </div>
  )
}

export default StackNumber