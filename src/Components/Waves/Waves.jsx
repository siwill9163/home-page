import React from 'react'
import './Waves.css'
import Wave from 'react-wavify'

const Waves = () => {
  return (
    <div className="wave-container">

        <div className="page-container">

            <h1>Simple pricing, for everyone.</h1>

            <div className="ptext">
                <p>&#9733; New AI features</p>
                <p>&#9736; Responsive design</p>
                <p>&#9743; Personal consultant</p>
                <p>&#9874; Professional design</p>
            </div>
            
            <div className="package-choice">

                <div className="package-container">
                    <h1>Starter Website</h1>
                    <h4>The beginners options... Get online quickly</h4>
                    <hr />
                    <div className="package-price">
                        <p className='save'>Save 20%</p>
                        <p className='before'>£499</p>
                        <p className='actual'>£399</p>    
                    </div>
                    
                    <button>Add to basket</button>
                    <select className='package-option' name="" id="">
                        <option value="1">Starter Website</option>
                        <option value="2">eCommerce including popular payment methods</option>
                    </select>
                    <p>From idea to website in record time.</p>
                    <p>Domain included for 1 year</p>
                    <p>Professional email address with 2 GB storage</p>
                    <p>10 GB webspace & 10 pages</p>
                    <p>Cutting-edge web design</p>
                </div>

                <div className="package-container">
                <h1>Website + Socials</h1>
                <h4>The beginners options... Get online quickly</h4>
                <hr />
                <div className="package-price">
                    <p className='save'>Save 20%</p>
                    <p className='before'>£899</p>
                    <p className='actual'>£599</p>    
                </div>
                <button>Add to basket</button>
                <select className='package-option' name="" id="">
                    <option value="1">Starter Website</option>
                    <option value="2">eCommerce including popular payment methods</option>
                </select>
                <p>From idea to website in record time.</p>
                <p>Domain included for 1 year</p>
                <p>Professional email address with 2 GB storage</p>
                <p>10 GB webspace & 10 pages</p>
                <p>Cutting-edge web design</p>
            </div>

            <div className="package-container">
                <h1>Bespoke package</h1>
                <h4>The beginners options... Get online quickly</h4>
                <hr />
                <div className="package-price">
                    <p className='save'>Save 100%</p>
                    <p className='before'>£1499</p>
                    <p className='actual'>FREE</p>    
                </div>
                <button>Add to basket</button>
                <select className='package-option' name="" id="">
                    <option value="1" selected>Starter Website</option>
                    <option value="2">eCommerce including popular payment methods</option>
                </select>
                <p>From idea to website in record time.</p>
                <p>Domain included for 1 year</p>
                <p>Professional email address with 2 GB storage</p>
                <p>10 GB webspace & 10 pages</p>
                <p>Cutting-edge web design</p>
            </div>

            </div>
            
            

        </div>


     


    </div>
   
  )
}

export default Waves