import { useEffect, useState } from 'react';
import { getProductsByType, getTypesProducts} from '../../services/Products.js'
import Footer from '../../components/Footer/Footer.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import MainBanner from '../../components/MainBanner/MainBanner.jsx';
import StackType from '../../components/StackType/StackType.jsx';
import Product from '../../components/Product/Product.jsx';
import shopBannerImg from '../../assets/Banner/shopBanner.webp'
import Cart from '../../components/Cart/Cart.jsx';
import {useCart} from '../../services/Cart.js'
import { motion } from 'framer-motion'
import Loading from '../../components/Loading/Loading.jsx';

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [selectType, setSelectedType] = useState('General');
  const [productsTypes, setProductsTypes] = useState(getTypesProducts());
  const { cartItems, updateCart, deleteItemCart, deleteItemsCart } = useCart();

  useEffect(() => {
    const fetchProducts = () => {
        const data = getProductsByType(selectType);
        setProducts(data);
    };
    
    fetchProducts();

  }, [selectType]); 

  useEffect(() => {
    if (products) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1500); 

      return () => clearTimeout(timeout);
    }
  }, [products]);

  return (
    <div style={{overflow: 'hidden'}}>
      {loading ? <Loading/> :(
        <>
          <header className='header-shop-page'>
            <NavBar/>
          </header>
      
          <main>
            <Cart cartItems={cartItems} updateCart={updateCart} deleteItemCart={deleteItemCart} deleteItemsCart={deleteItemsCart}/>
            <MainBanner image={shopBannerImg} title={'Tienda'} description={'Bienvenido a la tienda de Fresas Sarahí, donde la naturaleza se encuentra con la innovación. Aquí encontrarás productos 100% auténticos, cultivados con amor y respeto por la tierra. Descubre el sabor de lo natural y lleva a tu mesa lo mejor de nuestras fresas.'}/>
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <StackType types={productsTypes} setType={setSelectedType} selectedType={selectType}/>
            </div>

            <motion.div className="products-banner-container"
              initial = {{y: -50, opacity: 0}}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
            >

              <div className='products-banner'>
                  {products.map((product, index) => (
                      <Product product={product} callFunction={updateCart} key={index}/>
                  ))}
              </div>
                
            </motion.div>
            
          </main>

          <footer className='footer-shop-page'>
            <Footer/>
          </footer>

        </>
      )
      }
    </div>
  )
}

export default Shop