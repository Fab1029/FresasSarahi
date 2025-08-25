import './Footer.css'
import logo from '../../assets/Footer/Logo.webp'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='footer'>
        <div className='left-footer-container'>
          <img src={logo} alt='logo' className='logo-footer' loading='lazy'/>
        </div>      
        

        <div className='center-footer-container'>
          <div className='footer-info-container'>
            <h1>Categorías</h1>
            <p className='footer-link' onClick={() => navigate('/')}>Inicio</p>
            <p className='footer-link'>Tienda</p>
            <p className='footer-link'>Acerca de nosotros</p>
          </div>

          <div className='footer-info-container'>
              <h1>Contacto</h1>
              <p>fresasSarahi@gmail.com</p>
              <p>+593 0998956672</p>
              <p>Nabón, Azuay, Ecuador</p>
          </div>

        </div>

        <div className='right-footer-container'/>
        

    </div>
  )
}

export default Footer