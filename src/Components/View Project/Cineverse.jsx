import React from 'react'
import { motion } from 'framer-motion'

const Cineverse = () => {
  return (
    <motion.div className='px-22 pt-40  transition-transform duration-300 h-fit pb-10' style={{ fontFamily: 'Arial, sans-serif',fontStyle: 'normal'}}
     initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='grid grid-cols-[auto_30%] gap-10 border-b pb-20'>
        <div>
           <h1 className='text-gray-400 text-2xl font-normal'>Cineverse</h1>
           <p className='pt-7 text-lg md:text-[22px] text-[rgb(56,53,53)] mb-6 max-w-3xl leading-[34px]'>Cineverse is more than just a movie website, it's a cinematic experience. While most streaming platforms follow the same patterns, I set out to craft a unique user experience with bold design, dynamic visuals, and smooth animations. Inspired by high-end aesthetics, Cineverse blends motion, clarity, and energy to reflect the excitement and passion at the core of every film lover.</p>
        </div>

        <div className='mt-10 text-gray-600'>
          <h1>Role:</h1>
          <p className='pt-2'>UI/UX Design · Frontend & Backend Development Handled everything from designing the interface to building the full stack—UI/UX, API integration, and core functionality.</p>
        </div>

      </div>
      <div className='mt-20'>
        <h1 className='text-2xl'>What It Offers</h1>
        <p className='pt-4 text-lg text-gray-600 max-w-4xl'>Cineverse takes you on a thrilling journey through the world of movies lightning-fast search, seamless discovery, secure access, and jaw-dropping visuals. It’s not just a platform it’s your cinematic adventure, anytime, anywhere.</p>
        <div className='grid grid-cols-[auto_30%] gap-10 mt-10'>
          <img src="Images/Cineverse.png" alt="Cineverse Project Screenshot" className='w-full max-w-[900px] mt-10 rounded-lg shadow-lg border border-gray-200 select-none' />
          <img src="Images/Cineverse-mobile.png" alt="Cineverse Project Screenshot" className='w-full max-w-[250px] mt-10 rounded-lg select-none' />
        </div>
        <div className='mt-6'>
          <a 
            href="https://cineverse-eta-seven.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            View Live Project
          </a>
        </div>

     </div> 
    </motion.div>    
  )
}

export default Cineverse