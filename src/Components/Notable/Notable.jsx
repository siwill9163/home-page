import React, { useState } from 'react'
import './Notable.css'
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'

const Notable = () => {
   const [activeTab, setActiveTab] = useState("tab1");

   const photo = {
    tab1: "../src/assets/tech.jpg", 
    tab2: "../src/assets/facebookPage.jpg",
    tab3: "../src/assets/aiPage.jpg"
    // tab3: 
   };

   let slideIndex = 0;
   
   function showSlides() {
    const slides = document.querySelectorAll(".slides");
    slides.forEach((slide) => (slide.style.display = "none")); // Hide all slides
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1; // Loop back to the first slide
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
  }
//   showSlides();
  return (


    <div className='notable-wrapper'>

        <div className="notable-container">
            <h1>All-in-one solution for websites and social media</h1>
            <h4>Expert design, seamless functionality, and tailored 
                solutions to help you stand out and succeed.</h4>
        </div>

        <div className="tab-container">
          
            <div className="tabs">

                <button
                    className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab1")}>Website design, hosting and maintenance.
                </button>
                <button
                    className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab2")}>Communicate with social media packages. 
                </button>
                <button
                    className={`tab-button ${activeTab === "tab3" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab3")}>AI tools to unlock innovative solutions.
                </button>

            </div>

            <div className="photo-render">
                <img src={photo[activeTab]} alt={`Photo for ${activeTab}`} />
            </div>

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/mOFoh9FUR8w?loop=1&playlist=mOFoh9FUR8w&controls=0&autoplay=1&mute=1" frameborder="0"   ></iframe> */}

            {/* <div className="slide-container">
                <img className='slides fade' src={bg1} alt="slide 1" />
                <img className='slides fade' src={bg2} alt="slide 2" />
            </div> */}

        </div>

    </div>
  )
}

export default Notable