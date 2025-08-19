import React from 'react'

const Cards = () => {
    return (
        <div className='flex items-center justify-center gap-7 w-full h-[40vw]'>
            <div className='relative w-[40vw] h-[25vw] bg-green-900 rounded-xl'>
                <h1 className='text-amber-500 text-[3vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>ochi</h1>
                <h1 className='absolute bottom-5 left-5 border-[1px] border-amber-600 rounded-full p-1 text-sm'>©2019-2025</h1>
            </div>
            <div className='relative w-[20vw] h-[25vw] bg-zinc-800 rounded-xl'>
                <h1 className='text-amber-100 text-[3vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>clutch</h1>
                <h1 className='absolute bottom-5 left-5 border-[1px] border-amber-100 rounded-full p-1.5 text-sm uppercase'>rating 5.0 on clutch</h1>
            </div>
            <div className='relative w-[25vw] h-[25vw] bg-zinc-900 rounded-xl'>
                <h1 className='text-amber-100 text-[3vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>ochi</h1>
                <h1 className='absolute bottom-10 left-15 border-[1px] border-amber-100 rounded-full p-1 uppercase text-sm'>business bootcamp allumni</h1>
            </div>
        </div>
    )
}

export default Cards