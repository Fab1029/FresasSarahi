import './GalleryBanner.css'
import farmersImg from '../../assets/Gallery/farmers.webp'
import CardInformation from '../CardInformation/CardInformation'
import organicIcon from '../../assets/CardInformation/organic.webp'
import groupIcon from '../../assets/CardInformation/group.webp'
import sustainableIcon from '../../assets/CardInformation/sustainable.webp'
import { useState } from 'react'
import { motion } from 'framer-motion'

const images = import.meta.glob('../../assets/Gallery/*.webp', { eager: true });
const photos = Object.values(images).map((img) => img.default);

const cardsContainerVariant = { 
    hidden: {}, visible: { transition: { staggerChildren: 0.2 } } 
}; 

const cardVariant = { 
    hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } } 
};

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
            <motion.img src={farmersImg} alt='farmers-image' loading='lazy'
                initial = {{x: -100, opacity: 0}}
                animate = {{x: 0, opacity: 1}}           
                transition={{duration: 0.3, ease: 'easeInOut'}}     
            />
        </div>

        <div className='gallery-banner-right-container'>

            <motion.div className='gallery-photos-container'
                initial = {{x: 100, opacity: 0}}
                animate = {{x:0, opacity: 1}}
                transition = {{duration:0.5, ease: 'easeInOut'}}
            >

                <div className='arrows-container'>

                    <button className='arrow-icon left' onClick={handlePrev} style={{visibility: currentIndex === 0 ? 'hidden' : 'inherit'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" width="2rem" height="2rem">
                            <path d="M16 4l-8 8 8 8" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    
                    <button className='arrow-icon right' onClick={handleNext} style={{visibility: currentIndex === photos.length - 3 ? 'hidden' : 'inherit'}}>
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
                
            </motion.div>

            <div className='gallery-info-container'>
                <motion.div className='gallery-info-cards-container'
                    variants={cardsContainerVariant}
                    initial = 'hidden'
                    animate = 'visible'
                >
                    <motion.div
                        variants={cardVariant}
                    >
                        <CardInformation image={organicIcon} information={'Productos\n100%\norgánicos'}/>
                    </motion.div>

                    <motion.div
                        variants={cardVariant}
                    >
                        <CardInformation image={groupIcon} information={'Trabajan\n+20\nfamilias'}/>
                    </motion.div>

                    <motion.div
                        variants={cardVariant}
                    >
                        <CardInformation image={sustainableIcon} information={'Productos\nsostenibles'}/>
                    </motion.div>
                    
                </motion.div>
            </div>

        </div>

    </div>
  )
}

export default GalleryBanner