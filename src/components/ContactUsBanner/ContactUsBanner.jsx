import './ContactUsBanner.css'
import { motion } from 'framer-motion'
import logo from '../../assets/ContactUsBanner/Logo.webp'
import { getLinkMessage } from '../../services/WhatsApp.js'
import strawberryImage from '../../assets/ContactUsBanner/strawberryFalling.webp'

const mainTitleVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 }}
};

const mainTitleLetterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" }}
};

const ContactUsBanner = () => {
  return (
    <motion.div className='contact-us-banner'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
    >
        <motion.img 
          src={strawberryImage} 
          alt='strawberry-image' 
          loading='lazy' 
          className='contact-us-left-container'
          animate = {{
            y: [0, -5, 0, 5, 0],
            transition: {
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity
            }
          }}

        />
        <div className='contact-us-center-container'>
            <motion.h2 
              variants={mainTitleVariant}
              initial="hidden" 
              whileInView="visible"
            >
              {"Natural y auténtico".split("").map((char, index) => (
                <motion.span key={index} variants={mainTitleLetterVariant}>{char}</motion.span>
              ))}
            </motion.h2>
            <motion.h1
              variants={mainTitleVariant}
              initial="hidden" 
              whileInView="visible"
            >
              {'¿Antojado de fresas\nfrescas y orgánicas\ntodos los días?'.split('').map((char, index) => (
                <motion.span variants={mainTitleLetterVariant} key={index}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.button
              onClick={() => window.open(getLinkMessage('REGULAR'), "_blank", "noopener,noreferrer")}
              whileHover={{backgroundColor: '#5E6839', scale: 1.02, transition:{duration: 0.3, ease: 'easeInOut'}}}
              whileTap={{scale: 0.8}}
            >
                Contactate con nosotros
                <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    role="img" aria-label="Flecha derecha">
                  <path d="M12.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4L17.6 13H4a1 1 0 0 1 0-2h13.6l-5.3-5.3a1 1 0 0 1 0-1.4Z"/>
                </svg>

            </motion.button>
        </div>

        <img 
          src={logo} 
          alt='logo' 
          loading='lazy' 
          className='contact-us-right-container'
        />
    </motion.div>
  )
}

export default ContactUsBanner