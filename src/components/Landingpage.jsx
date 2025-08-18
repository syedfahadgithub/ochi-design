import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const Landingpage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure -ml-5 mt-80 px-20 text-[6vw]'>
            {["We Create","Eye Opening","Presentation"].map((item, index)=>{
                return (
                    <div key={index} className='masker'>
                        <div className='w-fit gap-3 flex '>
                            {index===1 && (
                                <div className='w-[6vw] h-[4vw] rounded-md relative top-[1.75vw] bg-amber-300 '></div>)}
                           <h1 className='pt-[1vw] -mb-[1vw] uppercase tracking-tight leading-[5vw] font-semibold'>{item}</h1>  
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='border-t-2 border-zinc-700 mt-9 flex text-center justify-between py-5 px-10 '>
            {["For Public And Private Companies","From The First Pitch To IPO"].map((item,index)=>(<p className='text-[1.3vw] mt-3 font-light tracking-tight leading-none '>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className='button px-4 py-2 border-2 border-zinc-800 rounded-full text-[1.5vw] uppercase'>Start The Project</div>
                <div className='icon w-9 h-9 border-2 border-zinc-800 rounded-full flex items-center justify-center text-[2vw]'>
                    <span className='rotate-[45deg]'><FaArrowUpLong/></span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Landingpage