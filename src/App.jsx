import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Textloop from './components/Textloop'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <div className='w-full min-h-screen bg-zinc-100 text-white '>
      <Navbar/>
      <Landingpage/>
      <Textloop/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
  </div>
    </>
  )
}

export default App