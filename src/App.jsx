import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Textloop from './components/Textloop'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
const App = () => {
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
  </div>
    
    </>
  )
}

export default App