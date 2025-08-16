import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const Landingpage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure -ml-5 mt-55 px-20 text-7xl text-white'>
            {["We Create","Eye Opening","Presentation"].map((item, index)=>{
                return (
                    <div key={index} className='masker'>
                        <div className='w-fit flex '>
                            {index===1 && (
                                <div className='w-[6vw] h-[4vw] rounded-md relative top-[1.75vw] bg-amber-300 '></div>)}
                           <h1 className='pt-[1vw] -mb-[1vw] uppercase tracking-tight leading-[5vw] font-semibold'>{item}</h1>  
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='border-t-2 border-zinc-700 mt-15 flex text-center justify-between py-5 px-10 '>
            {["For Public And Private Companies","From The First Pitch To IPO"].map((item,index)=>(<p className='text-md mt-3 font-light tracking-tight leading-none '>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className='px-4 py-2 border-2 border-zinc-800 rounded-full text-md uppercase'>Start The Project</div>
                <div className='w-9 h-9 border-2 border-zinc-800 rounded-full flex items-center justify-center'>
                    
                    <span className='rotate-[45deg]'><FaArrowUpLong/></span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Landingpage