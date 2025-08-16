import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-10 py-4 flex items-center justify-between'>
        <div className='text-8xl'>
            <h1>ochi</h1>
        </div>
        <div className='navR flex gap-10 text-5xl'>
            {["Services","Our Work","About Us","Insights","Contact"].map((item,index)=>{
                return(
                <a key={index} className={`text-2xl font-semibold capitalize ${index === 4 && "ml-[100px]"}`}>{item}</a>
                )
            })}
        </div>
    </div>
  )
}

export default Navbar