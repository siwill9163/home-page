import React from 'react'
import './Hero.css'

import envelope from '../../assets/envelope.png'
import coding from '../../assets/coding.png'
import excel from '../../assets/excel.png'
import willbars from '../../assets/willbars.png'

const Hero = () => {
  return (
    <div className="wrapper">

        <div className='hero-container'>
            <h1>Introducing Your New Website and Social Media <span>Powerhouse!</span></h1>
            <h3>Bespoke soical media campaingns, brand visiblity and cutting-edge web design.</h3>
            <a href="#">Schedule an appointment</a>
        </div>

      

  
      



        <div className="trusted-container">
            <p>Trusted by these four companies so far.</p>
            <div className="img-container">
                <a href="#"><img src={envelope} alt="" /></a>
                <a href="#"><img src={willbars} alt="" /></a>
                <a href="#"><img src={coding} alt="" /></a>
                <a href="#"><img src={excel} alt="" /></a>
            </div>
        </div>

    </div>
    
    
  )
}

export default Hero