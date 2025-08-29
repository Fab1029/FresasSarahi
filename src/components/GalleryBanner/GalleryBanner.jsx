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
  
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
   setCurrentIndex(prev => Math.min(prev + 1, photos.length - visibleCount));
  };
  
  return (
    <div className='gallery-banner-container'>

        <div className='gallery-banner-left-container'>
            <img src={farmersImg} alt='farmers-image' loading='lazy'/>
        </div>

        <div className='gallery-banner-right-container'>

            <div className='gallery-photos-container'>

                <div className='arrows-container'>

                    <button className='arrow-icon' onClick={handlePrev} style={{visibility: currentIndex === 0 ? 'hidden' : 'inherit'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" width="2rem" height="2rem">
                            <path d="M16 4l-8 8 8 8" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    
                    <button className='arrow-icon' onClick={handleNext} style={{visibility: currentIndex === photos.length - 3 ? 'hidden' : 'inherit'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" width="2rem" height="2rem">
                            <path d="M8 4l8 8-8 8" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                
                </div>
                <div className='gallery-photos'>
                    {photos.slice(currentIndex, currentIndex + visibleCount).map((photo, index) => (
                        <img key={currentIndex + index} src={photo} alt={`photo-${currentIndex + index}`} loading='lazy' />
                    ))}
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