import React from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react';

const GemfPools = () => {
   useEffect(() => {
      document.title = "Gemf Pools Ventures - Jeremiah Austine"
    }, [])
  return (
    <motion.div
       className="bg-[rgb(242,242,242)] px-5 md:px-12 lg:px-24 xl:px-16 2xl:px-22 pt-32 md:pt-40 pb-10 h-fit"
       style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'normal' }}
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{
         duration: 2,      
         ease: 'easeInOut'
       }}
       viewport={{ once: true }}
     >
       <div className="grid grid-cols-1 xl:grid-cols-[auto_25%] 2xl:grid-cols-[auto_25%] gap-10 border-b pb-16">
         <div>
           <h1 className="text-gray-400 md:text-xl 2xl:text-2xl font-normal basement-text">Gemf Swimming Pools Ventures</h1>
           <p className="pt-7 text-sm md:text-lg xl:text-2xl 2xl:text-[22px] text-[rgb(56,53,53)] mb-6 max-w-3xl md:leading-7 lg:leading-[34px]">
             Gemf Swimming Pools Ventures isn’t just another pool company—it’s an experience.
             We do things differently. With a modern, clean, and interactive website, we show 
             off our pool designs, construction, and maintenance work in a way that’s clear and
             easy to explore. Smooth animations and simple visuals bring our projects to life, 
             showing the care and skill we put into every pool.
           </p>
         </div>
 
         <div className="mt-4 text-[#5a5a5a] text-sm">
           <h1 className="font-medium md:text-lg">Role:</h1>
           <p className="pt-2 text-xs md:text-[15px] xl:text-sm 2xl:text-xs">
             UI/UX & Fullstack — from design to backend,with animations, and database work.
           </p>
         </div>
       </div>
 
       <div className="mt-16">
         <h1 className="text-2xl font-semibold">What It Offers</h1>
         <p className="pt-4 text-base md:text-lg text-gray-600 max-w-4xl leading-relaxed">
          Gemf keeps your projects flowing smoothly with clear service showcases, interactive galleries, and easy-to-use tools to explore, book, and connect all in one sleek platform.
         </p>
 
         <div className="grid grid-cols-[auto_22%] xl:grid-cols-[auto_300px] gap-10 mt-10">
           <motion.img
             src="Images/Gemf.jpg"
             alt="Gemf Desktop View"
             loading="lazy"
             className="w-full xl:max-w-5xl rounded-lg select-none"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
             viewport={{ once: true }}
           />
           <motion.img
             src="Images/Gemf-mobile.jpg"
             alt="Gemf Mobile View"
             loading="lazy"
             className="w-full max-w-xs lg:max-w-[250px] mx-auto lg:mx-0 rounded-lg  select-none"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
             viewport={{ once: true }}
           />
         </div>
 
         <motion.div
           className="mt-8"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 2, delay: 0.9, ease: 'easeInOut' }}
           viewport={{ once: true }}
         >
           <a
             href="https://teamcore-six.vercel.app/"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
           >
             View Live Project
           </a>
         </motion.div>
       </div>
     </motion.div>
  )
}

export default GemfPools
