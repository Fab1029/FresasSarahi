import { useEffect, useState } from 'react'
import './Cart.css'
import StackNumber from '../StackNumber/StackNumber';
import { motion, AnimatePresence } from 'framer-motion'

const Cart = ({cartItems, updateCart, deleteItemCart}) => {
  const [dragged, setDragged] = useState(false);  
  const [isMobile, setIsMobile] = useState(false);
  const [cartPosition, setCartPosition] = useState({x:0, y: 0});
  const [isVisibleCartMaximize, setIsVisibleCartMaximize] = useState(false);
  
  useEffect(() => {
    // detectar si es móvil
    const checkMobile = () => setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    checkMobile();
  }, []);

  useEffect(() => {
    if (isVisibleCartMaximize) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
        document.body.style.overflow = 'auto';
    };
    
  }, [isVisibleCartMaximize]);

  return (
    <div className='cart-container'>

        {!isVisibleCartMaximize && (
            <motion.div className='cart-container-minimize'
                drag
                dragMomentum = {false}
                dragConstraints={{ 
                    top: -10, left: -window.innerWidth + 150 , right: 0, bottom: document.documentElement.scrollHeight * 1.5
                }}
                
                onDragStart={() => setDragged(false)}

                onDrag={(_, info) => {
                    if (Math.abs(info.offset.x) > 2 || Math.abs(info.offset.y) > 2) {
                        setDragged(true);
                    }
                }}

                onDragEnd={(_, info) => {
                    setCartPosition(prev => ({
                        x: prev.x + info.offset.x,
                        y: prev.y + info.offset.y
                    }));
                }}

                style={{ x: cartPosition.x, y: cartPosition.y }}
            >
                <button className='cart-items-button' 
                    onClick={() => {
                        if (!isMobile && dragged) {
                            setDragged(false);
                            return;
                        };

                        setIsVisibleCartMaximize(!isVisibleCartMaximize)}
                    }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="white" 
                        role="img" aria-label="Carrito de compras">
                        <path d="M2.08 2.75c.14-.39.57-.6.96-.46l.3.1c.62.22 1.14.41 1.55.62.44.22.82.5 1.1.92.28.42.39.88.44 1.38.02.23.03.48.03.79H17.13c1.69 0 3.21 0 3.65.58.44.58.27 1.45-.07 3.19l-.5 2.42c-.32 1.53-.48 2.28-1.03 2.73-.55.45-1.34.45-2.9.45h-5.3c-2.79 0-4.18 0-5.04-.92C5.06 13.55 5 12.58 5 9.64V7.04c0-.74 0-1.23-.04-1.62-.04-.36-.11-.54-.2-.67-.09-.13-.22-.25-.52-.4-.32-.16-.76-.32-1.43-.56l-.26-.09a.75.75 0 0 1-.47-.95ZM7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                    </svg>
                    <p className='count-items-container'>
                        {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                    </p>
                </button>
                <button className='default-button default-button-icon pay-button-minimize' onClick={null}>
                    Pagar
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
                </button>
            </motion.div>
        )}
        
        <AnimatePresence>
            {isVisibleCartMaximize && (
            <motion.div className="cart-overlay" onClick={() => setIsVisibleCartMaximize(false)}
                initial={{ clipPath: "circle(0% at 100% 10%)" }}
                animate={{ clipPath: "circle(150% at 100% 10%)" }}
                exit={{ clipPath: "circle(0% at 100% 0%)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}      
            >
                <div className='cart-container-maximize' onClick={e => e.stopPropagation()}>

                    <div className='cart-container-header-container'>
                        <div style={{flex: 1}}/>
                        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h1 style={{fontSize: '1.5rem'}}>Artículos</h1></div>
                        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <button className='close-button' onClick={() => setIsVisibleCartMaximize(!isVisibleCartMaximize)}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#ffffff"/> </g>
                                </svg>
                            </button>
                        </div>
                        
                    </div>
                
                    <div className='products-order-container'>
                        {cartItems.map((item, index) => (
                            <div className='product-detail-container' key={index}>

                                <div className='product-detail-left-container'>
                                    <p className='product-detail-name'>
                                        {item.name}
                                        <span className='product-detail-weight'>{item.weight}</span>
                                    </p>
                                    
                                </div>

                                <div className='product-detail-center-container'>
                                    <StackNumber quantity={item.quantity} callFunction={(quantity) => {
                                        if (quantity === 0) deleteItemCart(item);
                                        else updateCart({ ...item, quantity })
                                    }}/>
                                </div>

                                <div className='product-detail-right-container'>
                                    <button className='trash-button' onClick={() => deleteItemCart(item)}>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                            <g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                        </svg>
                                    </button>
                                    
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='pay-button-container'>
                        <button className='pay-button-maximize' onClick={null}>
                            Pagar
                        </button>
                    </div>
                        
                </div>
            </motion.div>
        )}

        </AnimatePresence>
    </div>
  )
}

export default Cart