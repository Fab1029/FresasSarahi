import './ProductsBanner.css'
import arrowUpIcon from '../../assets/Button/arrow-up.webp'
import Product from "../Product/Product"
import { useNavigate } from 'react-router-dom'


const ProductsBanner = ({products}) => {
  const navigate = useNavigate();

  return (
    <div className="products-banner-container">

        <div className='products-banner'>
            {products.map((product, index) => (
                <Product product={product} key={index}/>
            ))}
        </div>
        
        <div className='see-more-container'>
            <button className="default-button default-button-icon button-see-more" onClick={() => navigate('/shop')}>
                Ver más
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        role="img" aria-label="Flecha diagonal">
                        <path d="M7 17L17 7M17 7H8M17 7V16"/>
                    </svg>
                </div>
            </button>
        </div>
        
    </div>
  )
}

export default ProductsBanner