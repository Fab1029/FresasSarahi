import './StackType.css'

const StackType = ({ types, selectedType, setType }) => {
  return (
    <div className='stack-type-container'>
      {types.map((type, index) => (
        <button 
          key={index} 
          onClick={() => setType(type)}  
          style={{ 
            color: selectedType === type ? '#BB1732' : 'inherit',
          }}
        >
          {type}
        </button>
      ))}
    </div>
  )
}

export default StackType
