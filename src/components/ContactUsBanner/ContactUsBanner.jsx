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
                <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    role="img" aria-label="Flecha derecha">
                  <path d="M12.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4L17.6 13H4a1 1 0 0 1 0-2h13.6l-5.3-5.3a1 1 0 0 1 0-1.4Z"/>
                </svg>

            </button>
        </div>
        <img src={logo} alt='logo' loading='lazy' className='contact-us-right-container'/>
    </div>
  )
}

export default ContactUsBanner