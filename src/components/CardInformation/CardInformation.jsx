import './CardInformation.css'

const CardInformation = ({ image, information}) => {
  return (
    <div className='card-information'>
        <img src={image} alt='icon' loading='lazy'/>
        <p>{information}</p>
    </div>
  )
}

export default CardInformation