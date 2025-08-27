import React, { useEffect, useState } from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ContactUsBanner from '../../components/ContactUsBanner/ContactUsBanner'
import InformationBanner from '../../components/InformationBanner/InformationBanner'
import {getProducts} from '../../services/Products.js'
import ProductsBanner from '../../components/ProductsBanner/ProductsBanner.jsx'

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = () => {
      const data = getProducts();
      const shuffled = [...data].sort(() => 0.5 - Math.random());
      setProducts(shuffled.slice(0, 8)); 
    };

    fetchProducts();
  
  }, []); 

  return (
    <div style={{overflow: 'hidden'}}>
      {products ? (
        <>
          <header className='header-home-page'>
            <NavBar/>
          </header>
              
          <main>
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