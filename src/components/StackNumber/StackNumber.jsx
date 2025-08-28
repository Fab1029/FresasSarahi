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
          <img src={minusIcon} alt='minus-icon' loading='lazy'/>
        </button>
        
        <p>{count}</p>
        
        <button onClick={handlePlus}>

          <img src={plusIcon} alt='minus-icon' loading='lazy'/>
        </button>
        
    </div>
  )
}

export default StackNumber