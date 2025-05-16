import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Info from '../Components/Info'
import About from '../Components/About'
import BookAppointment from '../Components/BookAppointment'
import Reviews from '../Components/Reviews'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Info/>
      <About/>
      <BookAppointment/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
