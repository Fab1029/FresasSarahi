import './HomeBanner.css'
import CardInformation from "../CardInformation/CardInformation"
import organicIcon from '../../assets/CardInformation/organic.webp'
import groupIcon from '../../assets/CardInformation/group.webp'
import sustainableIcon from '../../assets/CardInformation/sustainable.webp'
import strawberryBannerImage from '../../assets/HomeBanner/HeaderMainPage.webp'
import rightArrowIcon from '../../assets/Button/right-arrow.webp'

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

                <button className="default-button default-button-icon">
                    Comprar ahora
                    <div>
                        <img src={rightArrowIcon}/>
                    </div>
                </button>
            </div>
            

            <div className="home-banner-info-cards-container">
                <CardInformation image={organicIcon} information={'Productos\n100%\norgánicos'}/>
                <CardInformation image={groupIcon} information={'Trabajan\n+20\nfamilias'}/>
                <CardInformation image={sustainableIcon} information={'Productos\nsostenibles'}/>
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