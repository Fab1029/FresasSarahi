import './StackType.css'
import { motion } from 'framer-motion'

const StackType = ({ types, selectedType, setType }) => {
  return (
    <div className='stack-type-container'>
      {types.map((type, index) => (
        <motion.button 
          key={index} 
          onClick={() => setType(type)}  
          style={{ 
            color: selectedType === type ? '#BB1732' : 'inherit',
          }}
          whileTap={{scale: 0.9}}
        >
          {type}
        </motion.button>
      ))}
    </div>
  )
}

export default StackType
