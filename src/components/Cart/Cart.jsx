import { useState } from 'react'
import './Cart.css'

const Cart = () => {
  const [isVisibleCartMaximize, setIsVisibleCartMaximize] = useState(false);
  return (
    <div className='cart-container'>

        {!isVisibleCartMaximize && (
            <div className='cart-container-minimize'>
                <button className='cart-items-button' onClick={() => setIsVisibleCartMaximize(!isVisibleCartMaximize)}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="white" 
                        role="img" aria-label="Carrito de compras">
                        <path d="M2.08 2.75c.14-.39.57-.6.96-.46l.3.1c.62.22 1.14.41 1.55.62.44.22.82.5 1.1.92.28.42.39.88.44 1.38.02.23.03.48.03.79H17.13c1.69 0 3.21 0 3.65.58.44.58.27 1.45-.07 3.19l-.5 2.42c-.32 1.53-.48 2.28-1.03 2.73-.55.45-1.34.45-2.9.45h-5.3c-2.79 0-4.18 0-5.04-.92C5.06 13.55 5 12.58 5 9.64V7.04c0-.74 0-1.23-.04-1.62-.04-.36-.11-.54-.2-.67-.09-.13-.22-.25-.52-.4-.32-.16-.76-.32-1.43-.56l-.26-.09a.75.75 0 0 1-.47-.95ZM7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                    </svg>
                    <p className='count-items-container'>
                        5
                    </p>
                </button>
                <button className='default-button default-button-icon pay-button-minimize'>
                    Pagar
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
        )}
        
        {isVisibleCartMaximize && (
            <div className='cart-container-maximize'>
                Maximizes
            </div>
        )}
        

    </div>
  )
}

export default Cart