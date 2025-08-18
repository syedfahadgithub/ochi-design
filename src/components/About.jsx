import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const About = () => {
  return (
    <>
    <div className='w-full py-8 bg-lime-300 rounded-tl-2xl rounded-tr-2xl'>
        <h1 className='text-[3vw] md:text-[4vw] px-9 leading-[4.3vw] text-black border-b-[1px] border-gray-700 py-24  '>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
        <div className='flex justify-between px-14'>
        <h2 className='text-[3vw] md:text-[4vw] py-1 text-black '>How we can help:
            <p className='text-[1.4vw] md:text-[1.5vw] bg-black text-white rounded-full w-[12vw] md:w-[13vw] h-[6vh] md:h-[8vh] flex items-center justify-between p-5 mt-2.5'>Read more <span className='rotate-[45deg] text-[1.2vw] md:text-[1.5vw]'><FaArrowUpLong/></span></p>
            
        </h2>
        <img className='w-[45vw] h-[30vw] object-cover mt-7 rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="about-img" />
    </div>
    </div>
    </>
  )
}

export default About