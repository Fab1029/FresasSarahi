import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div style={{overflow: 'hidden'}}>

        <header className='header-home-page'>
            <NavBar/>
        </header>

        <main>
            MAIN
        </main>

        <footer className='footer-home-page'>
            <Footer/>
        </footer>

    </div>
  )
}

export default Home