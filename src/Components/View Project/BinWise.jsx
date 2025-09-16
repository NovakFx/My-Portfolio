import React from 'react'
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const BinWise = () => {
   useEffect(() => {
      document.title = "BinWise - Jeremiah Austine"
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
             <h1 className="text-gray-400 md:text-xl 2xl:text-2xl font-normal basement-text">BinWise</h1>
             <p className="pt-7 text-sm md:text-lg xl:text-2xl 2xl:text-[22px] text-[rgb(56,53,53)] mb-6 max-w-3xl md:leading-7 lg:leading-[34px]">
              BinWise is a smarter approach to waste management. Instead of the usual static scheduling systems, I designed it to feel practical yet dynamic streamlining pickups, tracking routes, and delivering clear reports. It’s a solution built to make sustainability efficient, organized, and accessible right from your device.
             </p>
           </div>
   
           <div className="mt-4 text-[#5a5a5a] text-sm">
             <h1 className="font-medium md:text-lg">Role:</h1>
             <p className="pt-2 text-xs md:text-[15px] xl:text-sm 2xl:text-xs">
               UI/UX & Fullstack — from design to backend, with APIs, animations, and database work.
             </p>
           </div>
         </div>
   
         <div className="mt-16">
           <h1 className="text-2xl font-semibold">What It Offers</h1>
           <p className="pt-4 text-base md:text-lg text-gray-600 max-w-4xl leading-relaxed">
            BinWise helps you manage waste smarter with simple scheduling, real-time tracking, and clear reporting your community, your choice, anytime.
           </p>
   
           <div className="grid grid-cols-[auto_22%] xl:grid-cols-[auto_300px] gap-10 mt-10">
             <motion.img
               src="Images/Binwise.png"
               alt="BinWise Desktop View"
               loading="lazy"
               className="w-full xl:max-w-5xl rounded-t-[5px] rounded-b-[5px] md:rounded-t-[20px] md:rounded-b-[18px] xl:rounded-t-[30px]  xl:rounded-b-[30px] select-none"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
               viewport={{ once: true }}
             />
             <motion.img
               src="Images/Binwise-mobile.png"
               alt="Binwise Mobile View"
               loading="lazy"
               className="w-full max-w-xs lg:max-w-[250px] mx-auto lg:mx-0 sm:rounded-t-[23px] sm:rounded-b-[23px] rounded-t-[12px] rounded-b-[12px] md:rounded-t-[24px] md:rounded-b-[24px] lg:rounded-t-[30px] lg:rounded-b-[30px] xl:rounded-t-[43px]  xl:rounded-b-[43px] select-none"
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
               href="https://bin-wise-kappa.vercel.app/signup"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
             >
               View Live Project
             </a>
           </motion.div>
         </div>
       </motion.div>
  );
};

export default BinWise;
