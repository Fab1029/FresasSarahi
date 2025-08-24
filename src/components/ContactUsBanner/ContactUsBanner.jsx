import './ContactUsBanner.css'
import logo from '../../assets/ContactUsBanner/Logo.webp'
import rightArrowIcon from '../../assets/Button/right-arrow.webp'
import strawberryImage from '../../assets/ContactUsBanner/strawberryFalling.webp'


const ContactUsBanner = () => {
  return (
    <div className='contact-us-banner'>
        <img src={strawberryImage} alt='strawberry-image' loading='lazy' className='contact-us-left-container'/>
        <div className='contact-us-center-container'>
            <h2>Natural y auténtico</h2>
            <h1>{'¿Antojado de fresas\nfrescas y orgánicas\ntodos los días?'}</h1>
            <button>
                Contactate con nosotros
                <img src={rightArrowIcon}/>
            </button>
        </div>
        <img src={logo} alt='logo' loading='lazy' className='contact-us-right-container'/>
    </div>
  )
}

export default ContactUsBanner