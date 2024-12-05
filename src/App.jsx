import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Hero from './Components/Hero/Hero'
import Notable from './Components/Notable/Notable'
import Waves from './Components/Waves/Waves'
import Getstarted from './Components/Getstarted/Getstarted'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Notable/>
      <Waves/>
      <Getstarted/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
