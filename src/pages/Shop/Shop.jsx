import { useEffect, useState } from 'react';
import { getProductsByType, getTypesProducts} from '../../services/Products.js'
import Footer from '../../components/Footer/Footer.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import MainBanner from '../../components/MainBanner/MainBanner.jsx';
import StackType from '../../components/StackType/StackType.jsx';
import Product from '../../components/Product/Product.jsx';
import shopBannerImg from '../../assets/Banner/shopBanner.webp'

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [selectType, setSelectedType] = useState('General');
  const [productsTypes, setProductsTypes] = useState(getTypesProducts());

  useEffect(() => {
    const fetchProducts = () => {
        const data = getProductsByType(selectType);
        setProducts(data);
    };
    
    fetchProducts();

  }, [selectType]); 

  return (
    <div style={{overflow: 'hidden'}}>
      {products ? (
        <>
          <header className='header-shop-page'>
            <NavBar/>
          </header>
      
          <main>
            <MainBanner image={shopBannerImg} title={'Tienda'} description={'Bienvenido a la tienda de Fresas Sarahí, donde la naturaleza se encuentra con la innovación. Aquí encontrarás productos 100% auténticos, cultivados con amor y respeto por la tierra. Descubre el sabor de lo natural y lleva a tu mesa lo mejor de nuestras fresas.'}/>
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <StackType types={productsTypes} setType={setSelectedType} selectedType={selectType}/>
            </div>

            <div className="products-banner-container">

              <div className='products-banner'>
                  {products.map((product, index) => (
                      <Product product={product} key={index}/>
                  ))}
              </div>
                
            </div>
            
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