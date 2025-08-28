import './Footer.css'
import logo from '../../assets/Footer/Logo.webp'
import facebookIcon from '../../assets/Footer/facebookIcon.webp'
import instagramIcon from '../../assets/Footer/instagramIcon.webp'
import whatsappIcon from '../../assets/Footer/whatsappIcon.webp'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='footer'>
        {/* Izquierda */}
        <div className='left-footer-container'>
          <img src={logo} alt='logo' className='logo-footer' loading='lazy'/>
          <div className='social-media-icons-container'>
            
            <button>
              <img src={facebookIcon} alt='facebook-icon' loading='lazy' className='social-icon facebook-icon'/>
            </button>

            <button>
              <img src={instagramIcon} alt='instagram-icon' loading='lazy' className='social-icon'/>
            </button>

            <button>
              <img src={whatsappIcon} alt='whatsapp-icon' loading='lazy' className='social-icon'/>
            </button>
            
          </div>
        </div>      
        
        {/* Centro */}
        <div className='center-footer-container'>
          <div className='footer-info-container'>
            <h1>Categorías</h1>
            <button className='footer-link' onClick={() => navigate('/')}>Inicio</button>
            <button className='footer-link' onClick={() => navigate('/shop')}>Tienda</button>
            <button className='footer-link' onClick={() => navigate('/about-us')}>Acerca de nosotros</button>
          </div>

          <div className='footer-info-container'>
              <h1>Contacto</h1>
              <p>fresasSarahi@gmail.com</p>
              <p>+593 0998956672</p>
              <p>Nabón, Azuay, Ecuador</p>
          </div>
        </div>

        {/* Derecha (Mapa Google) */}
        <div className='right-footer-container'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.901203124!2d-79.0!3d-2.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd1234567890%3A0xabcdef!2sNab%C3%B3n%2C%20Azuay%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  )
}

export default Footer
