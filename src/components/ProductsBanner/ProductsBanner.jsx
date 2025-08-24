import './ProductsBanner.css'
import arrowUpIcon from '../../assets/Button/arrow-up.webp'
import Product from "../Product/Product"


const ProductsBanner = ({products}) => {
  return (
    <div className="products-banner-container">

        <div className='products-banner'>
            {products.map((product, index) => (
                <Product product={product} key={index}/>
            ))}
        </div>
        
        <div className='see-more-container'>
            <button className="default-button default-button-icon button-see-more">
                Ver más
                <div>
                    <img src={arrowUpIcon}/>
                </div>
            </button>
        </div>
        
    </div>
  )
}

export default ProductsBanner