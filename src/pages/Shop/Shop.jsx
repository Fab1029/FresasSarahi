import { useEffect, useState } from 'react';
import './Shop.css'
import { getProductsByType } from '../../services/Products.js'
import Footer from '../../components/Footer/Footer.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import ShopBanner from '../../components/ShopBanner/ShopBanner.jsx';

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [typeProducts, setTypeProducts] = useState('General')
  
  useEffect(() => {
    const fetchProducts = () => {
        const data = getProductsByType(typeProducts);
        setProducts(data);
    };

    fetchProducts();

  }, [typeProducts]); 

  return (
    <div style={{overflow: 'hidden'}}>
      {products ? (
        <>
          <header className='header-shop-page'>
            <NavBar/>
          </header>
            <ShopBanner/>
          <main>
            
          </main>

          <footer className='footer-shop-page'>
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

export default Shop