import React, { useEffect } from 'react'
import { useState } from 'react';
const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            // console.log(e.clientX,e.clientY)
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        })
    })
    return (
        <div className='w-full h-screen overflow-hidden'>
            <div className='relative w-full h-full bg-cover bg-center bg-[url("https://tse3.mm.bing.net/th/id/OIP.dB4Ey0VjkHWw2Msg68atfwHaEz?r=0&rs=1&pid=ImgDetMain&o=7&rm=3")]'>
                <div className='absolute flex items-center justify-center gap-5 w-[35vw] h-[15vw] left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] w-[10vw] h-[10vw] bg-zinc-900 rounded-full'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='w-full h-5 absolute top-1/2 left-1/2'>
                                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[10vw] h-[10vw] bg-zinc-900 rounded-full '>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className=' absolute w-full h-5 top-1/2 left-1/2'>
                                <div className=' w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Eyes