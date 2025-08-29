import './HomeBanner.css'
import CardInformation from "../CardInformation/CardInformation"
import organicIcon from '../../assets/CardInformation/organic.webp'
import groupIcon from '../../assets/CardInformation/group.webp'
import sustainableIcon from '../../assets/CardInformation/sustainable.webp'
import strawberryBannerImage from '../../assets/Banner/HeaderMainPage.webp'

const HomeBanner = () => {
  return (
    <div className="home-banner-container">
        <div className="home-banner-left-container">
            <h1>
                {'Natural y auténtico\ncomo debe ser'}
            </h1>

            <div>
                <p className='home-banner-description'>
                    Fresas Sarahí es un puente entre el agricultor y tu mesa, que ofrece productos frescos, saludables y auténticos. Cada fresa cuenta una historia de cuidado, dedicación y pasión por el campo, llevando sabores únicos a quienes valoran la calidad y la sostenibilidad.
                </p>

                <button className="default-button default-button-icon button-buy-now">
                    Comprar ahora
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            role="img" aria-label="Flecha derecha">
                            <path d="M12.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4L17.6 13H4a1 1 0 0 1 0-2h13.6l-5.3-5.3a1 1 0 0 1 0-1.4Z"/>
                        </svg>
                    </div>
                </button>
            </div>
            

            <div className="home-banner-info-cards-container">
                <CardInformation image={organicIcon} information={'Productos\n100%\norgánicos'} color={'#BB1732'}/>
                <CardInformation image={groupIcon} information={'Trabajan\n+20\nfamilias'} color={'#BB1732'}/>
                <CardInformation image={sustainableIcon} information={'Productos\nsostenibles'} color={'#BB1732'}/>
            </div>

        </div>

        <div className="home-banner-right-container">
            <h1>SARAHí</h1>
        </div>

        <img src={strawberryBannerImage} alt='strawberry image' className='strawberry-banner-image' loading='lazy'/>
    </div>
  )
}

export default HomeBanner