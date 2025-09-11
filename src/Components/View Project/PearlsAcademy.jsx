import React from 'react'
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const PearlsAcademy = () => {
   useEffect(() => {
      document.title = "LYFT - Jeremiah Austine"
    }, [])
  return (
    <motion.div
         className="bg-[rgb(242,242,242)] px-5 md:px-12 lg:px-24 xl:px-16 2xl:px-22 pt-32 md:pt-60 lg:pt-40  h-fit pb-55 md:pb-[55%] lg:pb-53 select-none justify-items-center items-center"
         style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'normal' }}
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{
           duration: 2,      
           ease: 'easeInOut'
         }}
         viewport={{ once: true }}
       >
        
        <h1 className='text-center text-5xl md:text-7xl font-bold pt-[38%] md:pt-[30%] lg:pt-[12%]'>
            Coming Soon
        </h1>

       </motion.div>
  );
};

export default PearlsAcademy;
