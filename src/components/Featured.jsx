import React from 'react'

const Featured = () => {
    return (
        <div className='w-full h-[60vw] bg-zinc-200'>
            <h1 className='text-zinc-800 text-[4vw] px-20 py-11 font-semibold border-b-[1px] border-zinc-700 '>Featured Projects</h1>
            <div className='cardcontainer relative flex gap-10 items-center justify-center mt-14'>
                <div className=' flex flex-col items-center'>
                    <div className='card w-[30vw] md:w-[40vw] h-[30vw] md:h-[35vw] bg-cover bg-center rounded-xl  bg-[url("https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png")]'>
                    </div>
                    <div className='flex items-center gap-5 mt-5 mr-65 cursor-pointer'>
                        <h4 className='text-zinc-800 p-2 uppercase rounded-full text-sm border-[1.5px] border-zinc-800'>Brand identity</h4>
                        <h4 className='text-zinc-800 p-2 uppercase rounded-full text-sm border-[1.5px] border-zinc-800'>Pitch deck</h4>
                    </div>
                </div>
                <div className=' flex flex-col items-center cursor-pointer'>
                    <div className='card w-[30vw] md:w-[40vw] h-[30vw] md:h-[35vw] bg-cover bg-center rounded-xl bg-[url("https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png")]'></div>

                    <div className='flex items-center gap-6 mt-5 '>
                        <h4 className='uppercase p-2 border-zinc-800 border-[1.5px] rounded-full text-sm text-zinc-800 '>confearence</h4>
                        <h4 className='uppercase p-2 border-zinc-800 border-[1.5px] rounded-full text-sm text-zinc-800 '>exective keynote</h4>
                        <h4 className='uppercase p-2 border-zinc-800 border-[1.5px] rounded-full text-sm text-zinc-800 '>product launh</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Featured