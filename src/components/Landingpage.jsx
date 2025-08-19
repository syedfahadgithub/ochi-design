import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landingpage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-fit bg-zinc-200 text-zinc-900 pt-1 '>
        <div className='textstructure -ml-5 mt-80 px-20 text-[7vw]'>
            {["We Create","Eye-Opening","Presentation"].map((item, index)=>{
                return (
                    <div key={index} className='masker'>
                        <div className='w-fit gap-1 flex '>
                            {index===1 && (
                                <motion.div 
                                initial={{width:0}} 
                                animate={{width:"8vw"}}
                                transition={{ease:[0.76,0,0.24,1],duration:1}}
                                className='w-[8vw] h-[4.7vw] rounded-sm relative top-[1.75vw] bg-amber-300 '></motion.div>)}
                           <h1 className='pt-[1vw] -mb-[1vw] uppercase tracking-tight leading-[5.5vw] font-bold'>{item}</h1>  
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='border-t-2 border-zinc-700 mt-9 flex text-center justify-between py-5 px-10 '>
            {["For Public And Private Companies","From The First Pitch To IPO"].map((item,index)=>(<p className='text-[1.2vw] mt-3 tracking-tight leading-none '>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className='button px-2 py-2 border-[1.5px] border-zinc-800 rounded-full text-[1vw] uppercase cursor-pointer'>Start The Project</div>
                <div className='icon w-9 h-9 border-[1.5px] border-zinc-800 rounded-full flex items-center justify-center text-[1.5vw]'>
                    <span className='rotate-[45deg] cursor-pointer'><FaArrowUpLong/></span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Landingpage