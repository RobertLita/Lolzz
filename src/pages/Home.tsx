import React from 'react'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import "../App.css"

const Home: React.FC = () => {
  return (
     <div className='f gradient_bg'>
      <Navbar />
      <Hero />
    </div> 
  )
}

export default Home