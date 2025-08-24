import CardBenefits from '../CardBenefits/CardBenefits'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import './InformationBanner.css'

import video from '../../assets/Videos/strawberryField.webm'
import detail1 from '../../assets/CardBenefits/detail1.webp'
import detail2 from '../../assets/CardBenefits/detail2.webp'
import detail3 from '../../assets/CardBenefits/detail3.webp'

const InformationBanner = () => {
  return (
    <div className='information-banner-container'>
        <div className='information-banner-cards'>
            <CardBenefits image={detail1} benefits={'Antioxidante y\nvitamina C'}/>
            <CardBenefits image={detail2} benefits={'Bajo índice\nglucémico'}/>
            <CardBenefits image={detail3} benefits={'Propiedades\nantiinflamatorias'}/>
        </div>
        <div className='information-banner-video'>
            <VideoPlayer video={video} loopMode={true}/>
        </div>
    </div>
  )
}

export default InformationBanner