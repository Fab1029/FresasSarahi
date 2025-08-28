import { useEffect, useRef, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/NavBar/Logo.webp'
import { useLocation, useNavigate } from 'react-router-dom';

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
        <img src={logo} alt='logo' className='logo-nav-bar' loading='lazy'/>
        
        <div className='menu'>
            <button key='Inicio' className={`menu-nav-bar-item ${isActive('/')}`} onClick={() => navigate('/')}>Inicio</button>
            <button key='Tienda' className={`menu-nav-bar-item ${isActive('/shop')}`} onClick={() => navigate('/shop')}>Tienda</button>
            <button key='Acerca de nosotros' className={`menu-nav-bar-item ${isActive('/about-us')}`} onClick={() => navigate('/about-us')}>Acerca de nosotros</button>
        </div>

        <button className='default-button'>
            Contactate con nosotros
        </button>

    </nav>
  )
}

export default NavBar