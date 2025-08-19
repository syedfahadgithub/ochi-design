import React from 'react'

const Footer = () => {
    return (
        <div className='relative w-full h-screen bg-zinc-200'>
            <div className='flex gap-[30vw] p-5'>
                <h1 className='text-[7vw] w-[20vw] font-bold leading-[6.5vw] text-black uppercase'>Eye-opening</h1>
                <h1 className='text-[6vw] font-bold uppercase text-black '>presentation</h1>
            </div>
            <div className='w-[30vw] absolute right-[48px] gap-[20px] text-black flex'>
                <div className='m-link'>
                    <div>
                        <h4 className='font-semibold'>S;</h4>
                        <h4>Instagram</h4>
                        <h4>Behance</h4>
                        <h4>Facebook</h4>
                        <h4>LinkedIn</h4>
                    </div>
                    <div>
                        <h4 className='font-semibold mt-5'>L;</h4>
                        <h4>202-1965 W 4th Ave</h4>
                        <h4>Vancouver, Canada</h4>
                        <h4>30 Chukarina St</h4>
                        <h4>Lviv, Ukraine</h4>
                    </div>
                    <div>
                        <h4 className='font-semibold mt-5'>E;</h4>
                        <h4>fahadshahf31@gmail.com</h4>
                    </div>
                </div>
                <div className='about-link'>
                    <h4 className='font-semibold mt-[25px]'>M;</h4>
                    <h4>Home</h4>
                    <h4>Service</h4>
                    <h4>Our Work</h4>
                    <h4>About US</h4>
                </div>
            </div>
            <div className='absolute bottom-0 w-full px-[5vw] flex items-center justify-between '>
                <h3 className='text-5xl text-black font-bold'>ochi</h3>
                <h3 className='text-zinc-400'>©ochi design 2025</h3>
                <h3 className='text-zinc-400'>website by Bukhari</h3>
            </div>
        </div>
    )
}

export default Footer