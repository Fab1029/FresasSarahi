import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ContactUsBanner from '../../components/ContactUsBanner/ContactUsBanner'
import InformationBanner from '../../components/InformationBanner/InformationBanner'
import {getMainProducts} from '../../services/Products.js'
import ProductsBanner from '../../components/ProductsBanner/ProductsBanner.jsx'
import Cart from '../../components/Cart/Cart.jsx'
import {useCart} from '../../services/Cart.js'
import Loading from '../../components/Loading/Loading.jsx'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const { cartItems, updateCart, deleteItemCart, deleteItemsCart } = useCart();

  useEffect(() => {
    const fetchProducts = () => {
      const data = getMainProducts();
      setProducts(data); 
    };

    fetchProducts();
  
  }, []); 

  useEffect(() => {
    if (products) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1500); 

      return () => clearTimeout(timeout);
    }
  }, [products]);

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header className="header-home-page">
            <NavBar />
          </header>

          <main>
            <Cart
              cartItems={cartItems}
              updateCart={updateCart}
              deleteItemCart={deleteItemCart}
              deleteItemsCart={deleteItemsCart}
            />
            <HomeBanner />
            <InformationBanner />
            <ProductsBanner products={products} callFunction={updateCart} />
            <ContactUsBanner />
          </main>

          <footer className="footer-home-page">
            <Footer />
          </footer>
        </>
      )}
    </div>
  )
}

export default Home