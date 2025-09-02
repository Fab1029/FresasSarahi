import './ProductsBanner.css'
import Product from "../Product/Product"
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductsBanner = ({products, callFunction}) => {
  const navigate = useNavigate();

  return (
    <motion.div className="products-banner-container"
        initial = {{y: -50, opacity: 0}}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >

        <div className='products-banner'>
            {products.map((product, index) => (
                <Product product={product} callFunction={callFunction} key={index}/>
            ))}
        </div>
        
        <div className='see-more-container'>
            <motion.button className="default-button default-button-icon button-see-more" onClick={() => navigate('/shop')}
                whileHover={{scale: 1.05, opacity: 0.8}}
                whileTap={{scale: 0.8}}
            >
                Ver más
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        role="img" aria-label="Flecha diagonal">
                        <path d="M7 17L17 7M17 7H8M17 7V16"/>
                    </svg>
                </div>
            </motion.button>
        </div>
        
    </motion.div>
  )
}

export default ProductsBanner