import './MainBanner.css'

const MainBanner = ({image, title, description}) => {
  return (
    <div className='main-banner-container'>
        <img src={image} alt='banner-img' loading='lazy'/>
        <div className='main-banner-info-container'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>

    </div>
  )
}

export default MainBanner