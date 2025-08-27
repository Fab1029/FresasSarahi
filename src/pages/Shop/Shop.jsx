import { useEffect, useState } from 'react';
import './Shop.css'
import { getProductsByType, getTypesProducts} from '../../services/Products.js'
import Footer from '../../components/Footer/Footer.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import ShopBanner from '../../components/ShopBanner/ShopBanner.jsx';
import StackType from '../../components/StackType/StackType.jsx';
import Product from '../../components/Product/Product.jsx';

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [selectType, setSelectedType] = useState('General');
  const [productsTypes, setProductsTypes] = useState(getTypesProducts());

  useEffect(() => {
    const fetchProducts = () => {
        const data = getProductsByType(selectType);
        console.log(data);
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
            <ShopBanner/>
            
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