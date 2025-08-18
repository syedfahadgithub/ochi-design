import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Textloop from './components/Textloop'
import About from './components/About'
import Eyes from './components/Eyes'
const App = () => {
  return (
    <>
 
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Landingpage/>
      <Textloop/>
      <About/>
      <Eyes/>
  </div>
    
    </>
  )
}

export default App