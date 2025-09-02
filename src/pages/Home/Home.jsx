import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ContactUsBanner from '../../components/ContactUsBanner/ContactUsBanner'
import InformationBanner from '../../components/InformationBanner/InformationBanner'
import {getMainProducts} from '../../services/Products.js'
import ProductsBanner from '../../components/ProductsBanner/ProductsBanner.jsx'
import Cart from '../../components/Cart/Cart.jsx'

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = () => {
      const data = getMainProducts();
      setProducts(data); 
    };

    fetchProducts();
  
  }, []); 

  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      {products ? (
        <>
          <header className='header-home-page'>
            <NavBar/>
          </header>
              
          <main>
            <Cart/>
            <HomeBanner/>
            <InformationBanner/>
            <ProductsBanner products={products}/> 
            <ContactUsBanner/>
          </main>

          <footer className='footer-home-page'>
            <Footer/>
          </footer>
        </>
      )
      :
        <></>
      }
    </div>
  )
}

export default Home