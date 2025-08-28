import './AboutUs.css'
import Footer from '../../components/Footer/Footer'
import MainBanner from '../../components/MainBanner/MainBanner'
import NavBar from '../../components/NavBar/NavBar'
import aboutUsImg from '../../assets/Banner/aboutUsBanner.webp'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import video from '../../assets/Videos/strawberryField.mp4'

const AboutUs = () => {
  return (
    <div style={{overflow: 'hidden'}}>
        <header className='header-about-us-page'>
            <NavBar/>
        </header>
           
        <main>
          <MainBanner image={aboutUsImg} title={'Acerca de nosotros'} description={'Somos Fresas Sarahí, una marca familiar dedicada a cultivar y transformar productos de la más alta calidad. Nuestro compromiso es ofrecerte lo mejor de la naturaleza, respetando la tierra y promoviendo prácticas sostenibles. Creemos en la autenticidad, la calidad y el sabor real de lo que hacemos.'}/>
          <div className='video-about-us-container'>
            <VideoPlayer video={video}/>
          </div>
        </main>

        <footer className='footer-about-us-page'>
            <Footer/>
        </footer>
    </div>
  )
}

export default AboutUs