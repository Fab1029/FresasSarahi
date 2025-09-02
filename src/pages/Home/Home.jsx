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
  const [cartItems, setCartItems] = useState(sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems')) : []);

  useEffect(() => {
    const fetchProducts = () => {
      const data = getMainProducts();
      setProducts(data); 
    };

    fetchProducts();
  
  }, []); 

  const updateCart = (item) => {
    let items = [...cartItems];
    const itemIndex = items.findIndex((p) => p.name === item.name);

    if (itemIndex >= 0) {
      items[itemIndex] = item; 
    } else {
      items.push(item);
    }

    setCartItems(items);
    sessionStorage.setItem("cartItems", JSON.stringify(items)); 
  };

  const deleteItemCart = (item) => {
    let items = [];
    items = cartItems.filter((p) => p.name !== item.name);
    
    setCartItems(items);
    sessionStorage.setItem("cartItems", JSON.stringify(items)); 
  };

  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      {products ? (
        <>
          <header className='header-home-page'>
            <NavBar/>
          </header>
              
          <main>
            <Cart cartItems={cartItems} updateCart={updateCart} deleteItemCart={deleteItemCart}/>
            <HomeBanner/>
            <InformationBanner/>
            <ProductsBanner products={products} callFunction={updateCart}/> 
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