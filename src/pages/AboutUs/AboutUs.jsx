import { useEffect, useState } from 'react';
import './AboutUs.css';
import Footer from '../../components/Footer/Footer';
import MainBanner from '../../components/MainBanner/MainBanner';
import NavBar from '../../components/NavBar/NavBar';
import aboutUsImg from '../../assets/Banner/aboutUsBanner.webp';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import video from '../../assets/Videos/strawberryField.mp4';
import GalleryBanner from '../../components/GalleryBanner/GalleryBanner';
import Cart from '../../components/Cart/Cart';
import { useCart } from '../../services/Cart.js';
import Loading from '../../components/Loading/Loading.jsx';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  const { cartItems, updateCart, deleteItemCart, deleteItemsCart } = useCart();

  useEffect(() => {
    // Siempre muestra loader 1.5s antes de renderizar contenido
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header className='header-about-us-page'>
            <NavBar />
          </header>

          <main>
            <Cart
              cartItems={cartItems}
              updateCart={updateCart}
              deleteItemCart={deleteItemCart}
              deleteItemsCart={deleteItemsCart}
            />
            <MainBanner
              image={aboutUsImg}
              title={'Acerca de nosotros'}
              description={
                'Somos Fresas Sarahí, una marca familiar dedicada a cultivar y transformar productos de la más alta calidad. Nuestro compromiso es ofrecerte lo mejor de la naturaleza, respetando la tierra y promoviendo prácticas sostenibles. Creemos en la autenticidad, la calidad y el sabor real de lo que hacemos.'
              }
            />
            <GalleryBanner />
            <div className='video-about-us-container'>
              <VideoPlayer video={video} />
            </div>
          </main>

          <footer className='footer-about-us-page'>
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
};

export default AboutUs;
