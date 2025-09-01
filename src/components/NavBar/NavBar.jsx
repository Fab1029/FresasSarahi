import { useEffect, useRef, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/NavBar/Logo.webp'
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

const NavBar = () => {
  const navRef = useRef();  
  const navigate = useNavigate();
  const location = useLocation();
  const [navBackground, setNavBackground] = useState('transparent');
  
  useEffect(() => {
    if (!navRef) return; 

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.25) { 
        setNavBackground("white"); 
      } else {
        setNavBackground("transparent"); 
      }
    }

    setNavBackground("transparent");
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className='navbar' ref={navRef} style={{backgroundColor: navBackground}}>
        <img src={logo} alt='logo' className='logo-nav-bar' loading='lazy' onClick={() => navigate('/')}/>
        
        <div className='menu'>
            <motion.button key='Inicio' className={`menu-nav-bar-item ${isActive('/')}`} onClick={() => navigate('/')} whileTap={{scale: 0.5}}>Inicio</motion.button>
            <motion.button key='Tienda' className={`menu-nav-bar-item ${isActive('/shop')}`} onClick={() => navigate('/shop')} whileTap={{scale: 0.5}}>Tienda</motion.button>
            <motion.button key='Acerca de nosotros' className={`menu-nav-bar-item ${isActive('/about-us')}`} onClick={() => navigate('/about-us')} whileTap={{scale: 0.5}}> Acerca de nosotros</motion.button>
        </div>

        <motion.button 
          className='default-button'

          animate = {{
            scale: [1, 0.9, 1]
          }}

          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 10,
            ease: 'easeInOut'
          }}
        >
            Contactate con nosotros
        </motion.button>

    </nav>
  )
}

export default NavBar