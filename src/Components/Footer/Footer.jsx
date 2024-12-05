import React from 'react'
import './Footer.css'
import Wave from 'react-wavify'

const Footer = () => {
  return (
    <div className='foot-container'>

        <div className="foot-cont-wrapper">
            <div className="foot-cont-wrapper-left">
                <p>Copyright &copy; 2024 <span>Simon Williams.</span> All rights reserved. </p>
                <p>Building something awesome.</p>
            </div>
            <div className="foot-cont-wrapper-right">
                <a href="#">Connect with us <span>&#9786;</span></a>
            </div>
        </div>




         {/* waves begin */}
         <div className="waves">

        <Wave mask="url(#mask)" fill="#7dd3fc" options={{
            height: 20,
            amplitude: 40,
            speed: 0.15,
            points: 6
        }}>  
        <defs>      
            <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.75" stopColor="black" />
            </linearGradient>
            <mask id="mask">
                <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)"  />
            </mask>
            </defs>
        </Wave>
        </div>

        <div className="waves">

        <Wave mask="url(#mask)" fill="#3b82f6" options={{
            height: 20,
            amplitude: 40,
            speed: 0.15,
            points: 5
        }}>
        <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.75" stopColor="black" />
            </linearGradient>
            <mask id="mask">
                <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)"  />
            </mask>
            </defs>
        </Wave>
        </div>

        <div className="waves">

        <Wave mask="url(#mask)" fill="#1d4ed8" options={{
            height: 20,
            amplitude: 41,
            speed: 0.15,
            points: 4
        }}> 
            <defs> 
            <linearGradient id="gradient" gradientTransform="rotate(70)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.75" stopColor="black" />
            </linearGradient>
            <mask id="mask">
                <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)"  />
            </mask>
            </defs>
        </Wave>
        </div>
        {/* waves end */}
        
        
    </div>
  )
}

export default Footer