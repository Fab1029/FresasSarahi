import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ContactUsBanner from '../../components/ContactUsBanner/ContactUsBanner'
import InformationBanner from '../../components/InformationBanner/InformationBanner'

const Home = () => {
  return (
    <div style={{overflow: 'hidden'}}>

        <header className='header-home-page'>
            <NavBar/>
        </header>
            
        <main>
            <HomeBanner/>
            <InformationBanner/>
            <ContactUsBanner/>
        </main>

        <footer className='footer-home-page'>
            <Footer/>
        </footer>

    </div>
  )
}

export default Home