import './Product.css'
import carIcon from '../../assets/Cart/cart.webp'
import StackNumber from '../StackNumber/StackNumber'

const Product = ({product}) => {
  return (
    <div className='product-container'>
        <div className='product-image-container'>
            <img src={product.image}/>
        </div>
        
        <div className='product-information-container'>
            <div className='product-name-container'>
                <h2>{product.name}</h2>
                <div className='product-weight-tag'>
                    <p>{product.weight}</p>
                </div>
            </div>

            <p className='product-price'>${product.price}</p>
            
            <StackNumber/>
            
        </div>

        <button className='default-button button-add-to-cart'>
            Agregar al carrito
            <img src={carIcon} alt='car-icon' loading='lazy'/>
        </button>
    </div>
  )
}

export default Product