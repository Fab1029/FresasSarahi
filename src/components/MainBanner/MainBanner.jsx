import './MainBanner.css'
import { motion } from 'framer-motion'

const mainTitleVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 }}
};

const mainTitleLetterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" }}
};

const MainBanner = ({image, title, description}) => {
  return (
    <div className='main-banner-container'>
        <img src={image} alt='banner-img' loading='lazy'/>
        <div className='main-banner-info-container'>

            <motion.h1
              variants={mainTitleVariant}
              initial = 'hidden'
              animate = 'visible'
            >
              {title.split("").map((char, index) => (
                <motion.span key={index} variants={mainTitleLetterVariant}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={mainTitleVariant}
              initial = 'hidden'
              animate = 'visible'
            >
              {description.split("").map((char, index) => (
                <motion.span key={index} variants={mainTitleLetterVariant}>
                  {char}
                </motion.span>
              ))}
            </motion.p>

        </div>

    </div>
  )
}

export default MainBanner