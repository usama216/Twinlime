import React, { useEffect } from 'react'
import Aboutus from './Aboutus'
import Timeline from './Timeline'
import AboutUsHeroSection from './AboutUsHeroSection'

const AboutUsMain = () => {
  useEffect(()=>(
window.scrollTo(0,0)
  ),[])
  return (
<>

<AboutUsHeroSection/>
<Aboutus/>
<Timeline/>


</>
)
}

export default AboutUsMain