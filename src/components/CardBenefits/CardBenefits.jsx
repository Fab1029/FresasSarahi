import './CardBenefits.css'

const CardBenefits = ({ image, benefits}) => {
  return (
    <div className='card-benefits'>
        <img src={image} alt='benefits-image' loading='lazy'/>
        <h1>{benefits}</h1>
        <div className='card-benefits-overlay'/>
    </div>
  )
}

export default CardBenefits