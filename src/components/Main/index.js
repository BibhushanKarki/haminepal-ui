import React from 'react'
import About from '../About'
import Hero from '../HeroSection'
import Mission from '../OurMissionSection'
import Contact from '../Contact'
import OurWork from '../OurWork'
import Testimonials from '../Testimonials'
// import Preloader from '../Preloader'

const Main = () => {
  return (
    <div id="main">
      <Hero/>
      <About/>
      <Mission/>
      <OurWork/>
      <Testimonials/>
      <Contact/>
      {/* <Preloader/> */}
    </div>
  )
}

export default Main
