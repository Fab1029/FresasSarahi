import './HomeBanner.css'
import CardInformation from "../CardInformation/CardInformation"
import organicIcon from '../../assets/CardInformation/organic.webp'
import groupIcon from '../../assets/CardInformation/group.webp'
import sustainableIcon from '../../assets/CardInformation/sustainable.webp'
import strawberryBannerImage from '../../assets/Banner/HeaderMainPage.webp'
import { motion, scale, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const mainTitleVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 }}
};

const mainTitleLetterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" }}
};

const titleVariant = {
    hidden : {opacity : 1},
    visible : { opacity: 1, transition: { staggerChildren: 0.15,}}
}

const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", repeat: Infinity, repeatDelay: 8}},
};

const strawberryVariant = {
  animate: {
    y: [0, -5, 0, 5, 0],
    rotate: [-3, 3, -3],
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" }},
};

const cardsContainerVariant = { 
    hidden: {}, visible: { transition: { staggerChildren: 0.2 } } 
}; 

const cardVariant = { 
    hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } } 
};

const HomeBanner = () => {
  const arrowControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      arrowControls.start({
        x: 4,
        transition: { duration: 0.3, ease: "easeInOut" }
      }).then(() => {
        arrowControls.start({
          x: 0,
          transition: { duration: 0.3, ease: "easeInOut" }
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [arrowControls]);

  return (
    <motion.div className="home-banner-container"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
        <div className="home-banner-left-container">
            <motion.h1 
                variants={mainTitleVariant} 
                initial="hidden" 
                animate="visible"
                className="home-main-title"
            >
                {'Natural y auténtico\ncomo debe ser'.split('').map((char, index) => (
                    <motion.span key={index} variants={mainTitleLetterVariant}>
                        {char === '\n' ? <br /> : char}
                    </motion.span>
                ))}
            </motion.h1>

            <div>
                <motion.p className='home-banner-description' variants={textVariant} initial = 'hidden' animate = 'visible'>
                    Fresas Sarahí es un puente entre el agricultor y tu mesa, que ofrece productos frescos, saludables y auténticos. Cada fresa cuenta una historia de cuidado, dedicación y pasión por el campo, llevando sabores únicos a quienes valoran la calidad y la sostenibilidad.
                </motion.p>

                <motion.button className="default-button default-button-icon button-buy-now" 
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                    whileTap={{ scale: 0.8 }}
                    onHoverStart={() => arrowControls.start({ x: 4, transition: { duration: 0.3, ease: "easeInOut" }})}
                    onHoverEnd={() => arrowControls.start({ x: 0, transition: { duration: 0.3, ease: "easeInOut" }})}
                >
                    Comprar ahora
                    <div>
                        <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            role="img" aria-label="Flecha derecha"
                            animate = {arrowControls}
                            >
                            <path d="M12.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4L17.6 13H4a1 1 0 0 1 0-2h13.6l-5.3-5.3a1 1 0 0 1 0-1.4Z"/>
                        </motion.svg>
                    </div>
                </motion.button>
            </div>
            

            <motion.div className="home-banner-info-cards-container" variants={cardsContainerVariant} initial = 'hidden' animate = 'visible'>
                
                <motion.div variants={cardVariant} whileHover={{scale: 1.1, transition:{duration: 0.2}, ease: 'easeInOut'}} whileTap={{scale: 0.8, transition:{duration: 0.2}, ease: 'easeInOut'}}>
                    <CardInformation image={organicIcon} information={'Productos\n100%\norgánicos'} color={'#BB1732'}/>
                </motion.div>
                
                <motion.div variants={cardVariant} whileHover={{scale: 1.1, transition:{duration: 0.2}, ease: 'easeInOut'}} whileTap={{scale: 0.8, transition:{duration: 0.2}, ease: 'easeInOut'}}>
                    <CardInformation image={groupIcon} information={'Trabajan\n+20\nfamilias'} color={'#BB1732'}/>
                </motion.div>

                <motion.div variants={cardVariant} whileHover={{scale: 1.1, transition:{duration: 0.2}, ease: 'easeInOut'}} whileTap={{scale: 0.8, transition:{duration: 0.2}, ease: 'easeInOut'}}>
                    <CardInformation image={sustainableIcon} information={'\nProductos\nsostenibles'} color={'#BB1732'}/>
                </motion.div>
            
            </motion.div>

        </div>

        <div className="home-banner-right-container">
            <motion.h1
                variants={titleVariant}
                initial = 'hidden'
                animate = 'visible'
            >
                {'SARAHí'.split('').map((char, index) => (
                    <motion.span key={index} variants={letterVariant}>
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
        </div>

        <motion.img 
            src={strawberryBannerImage} 
            alt='strawberry image' 
            className='strawberry-banner-image' 
            loading='lazy'
            variants={strawberryVariant}
            animate = 'animate'
            
        />
    </motion.div>
  )
}

export default HomeBanner