import { motion } from 'framer-motion'
import React from 'react'

const Textloop = () => {
  return (
    <div data-scroll data-scroll-speed=".2" className='w-full py-20 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl flex items-center justify-center'>
      <div className='w-full border-t-2 border-b-2 border-gray-300 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10,}} className='text-[18vw] font-bold tracking-tighter uppercase leading-none pr-10 '>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10,}} className='text-[18vw] font-bold tracking-tighter uppercase leading-none pr-10 '>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Textloop