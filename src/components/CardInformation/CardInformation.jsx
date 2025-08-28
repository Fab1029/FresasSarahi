import './CardInformation.css'

const CardInformation = ({ image, information, color}) => {
  return (
    <div className='card-information' style={{backgroundColor: color}}>
        <img src={image} alt='icon' loading='lazy'/>
        <p>{information}</p>
    </div>
  )
}

export default CardInformation