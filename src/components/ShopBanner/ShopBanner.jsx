import './ShopBanner.css'
import shopBannerImg from '../../assets/ShopBanner/shopBanner.webp'

const ShopBanner = () => {
  return (
    <div className='shop-banner-container'>
        <img src={shopBannerImg} alt='shop-banner-img' loading='lazy'/>
        <div className='shop-banner-info-container'>
            <h1>Tienda</h1>
            <p>Bienvenido a la tienda de Fresas Sarahí, donde la naturaleza se encuentra con la innovación. Aquí encontrarás productos 100% auténticos, cultivados con amor y respeto por la tierra. Descubre el sabor de lo natural y lleva a tu mesa lo mejor de nuestras fresas.</p>
        </div>

    </div>
  )
}

export default ShopBanner