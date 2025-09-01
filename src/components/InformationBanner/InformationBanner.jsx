import CardBenefits from '../CardBenefits/CardBenefits'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import './InformationBanner.css'
import { motion } from 'framer-motion'

import video from '../../assets/Videos/strawberryField.mp4'
import detail1 from '../../assets/CardBenefits/detail1.webp'
import detail2 from '../../assets/CardBenefits/detail2.webp'
import detail3 from '../../assets/CardBenefits/detail3.webp'

const InformationBanner = () => {
  return (
    <motion.div 
      className='information-banner-container'
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
      viewport={{ once: true, amount: 0.3 }}
    >
        <div className='information-banner-cards'>
            <motion.div 
              style={{width: '100%', height: '100%'}}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{scale: 1.02, transition:{duration: 0.2, ease: 'easeInOut'}}}
              whileTap={{scale: 0.9, transition:{duration: 0.2, ease: 'easeInOut'}}}
            >
              <CardBenefits image={detail1} benefits={'Antioxidante y\nvitamina C'}/>
            </motion.div>

            <motion.div 
              style={{width: '100%', height: '100%'}}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{scale: 1.02, transition:{duration: 0.2, ease: 'easeInOut'}}}
              whileTap={{scale: 0.9, transition:{duration: 0.2, ease: 'easeInOut'}}}
            >
              <CardBenefits image={detail2} benefits={'Bajo índice\nglucémico'}/>
            </motion.div>

            <motion.div 
              style={{width: '100%', height: '100%'}}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{scale: 1.02, transition:{duration: 0.2, ease: 'easeInOut'}}}
              whileTap={{scale: 0.9, transition:{duration: 0.2, ease: 'easeInOut'}}}
            >
              <CardBenefits image={detail3} benefits={'Propiedades\nantiinflamatorias'}/>
            </motion.div>
        </div>

        <div className='information-banner-video'>
            <VideoPlayer video={video} loopMode={true}/>
        </div>
    </motion.div>
  )
}

export default InformationBanner
