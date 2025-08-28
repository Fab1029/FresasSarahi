import './GalleryBanner.css'
import farmersImg from '../../assets/Gallery/farmers.webp'
import CardInformation from '../CardInformation/CardInformation'
import organicIcon from '../../assets/CardInformation/organic.webp'
import groupIcon from '../../assets/CardInformation/group.webp'
import sustainableIcon from '../../assets/CardInformation/sustainable.webp'
import { useState } from 'react'

const images = import.meta.glob('../../assets/Gallery/*.webp', { eager: true });
const photos = Object.values(images).map((img) => img.default);

const GalleryBanner = () => {
  const visibleCount = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePhotos = photos.slice(currentIndex, currentIndex + visibleCount);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className='gallery-banner-container'>

        <div className='gallery-banner-left-container'>
            <img src={farmersImg} alt='farmers-image' loading='lazy'/>
        </div>

        <div className='gallery-banner-right-container'>

            <div className='gallery-photos-container'>

                <div className='arrows-container'>

                    <button className='arrow-icon' onClick={handlePrev}>
                        <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" stroke="#ffffff" style={{width: '2rem'}}>
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <g> <path d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657 c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824 c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723 C33.234,53.39,33.446,54.017,33.934,54.458z"/> </g> </g>
                        </svg>
                    </button>
                    
                    <button className='arrow-icon' onClick={handleNext}>
                        <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" transform="rotate(180)" stroke="#ffffff" style={{width: '2rem'}}>
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <g> <path d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657 c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824 c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723 C33.234,53.39,33.446,54.017,33.934,54.458z"/> </g> </g>
                        </svg>
                    </button>
                
                </div>
                <div className='gallery-photos'>
                    
                    {visiblePhotos.map((photo, index) => (
                        <img key={index} src={photo} alt={`photo-${index}`} loading='lazy'/>
                    ))
                    }

                </div>
            </div>

            <div className='gallery-info-container'>
                <div className='gallery-info-cards-container'>
                    <CardInformation image={organicIcon} information={'Productos\n100%\norgánicos'}/>
                    <CardInformation image={groupIcon} information={'Trabajan\n+20\nfamilias'}/>
                    <CardInformation image={sustainableIcon} information={'Productos\nsostenibles'}/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default GalleryBanner