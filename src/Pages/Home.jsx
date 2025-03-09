import React from 'react'
import Hero from './Hero'
import AboutKukurTihar from '../Components/AboutKukurTihar'
import Gallery from '../Components/Gallery'
import GlobalVision from '../Components/GlobalVision'

import Footer from '../Components/Footer'
import VideoSection from '../Components/VideoSection'

const Home = () => {
  return (
    <div>

        
        <Hero/>
        <AboutKukurTihar/>
        <Gallery/>
        <GlobalVision/>
        <VideoSection/>
        <Footer/>
    </div>
  )
}

export default Home