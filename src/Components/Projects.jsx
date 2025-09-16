import React from 'react'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Projects = () => {
   useEffect(() => {
    document.title = "Project"
  }, [])
  return (
    <div className='bg-[rgb(242,242,242)] px-5 md:px-11 lg:px-10 xl:px-16 pt-40 2xl:pt-35 h-fit pb-60 2xl:pb-20'>
       <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 sm:mt-16'
         initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut'}}
          viewport={{ once: true }}
       >

         <Link to="/cineverse">
           <div className='p-6 h-fit overflow-hidden justify-items-center items-center'>
            <img src="Images/Cineverse.png" alt="" loading="lazy" className='w-75 object-cover rounded transition-transform duration-300 group-hover:scale-95' />
             <h2 className='font-bold text-2xl pt-3 text-center'>Cineverse</h2>
          </div>
          </Link>

          <Link to="/gemfpools">
           <div className=' h-fit p-6 overflow-hidden justify-items-center items-center'>
             <img src="Images/Gemf.jpg" alt="" loading="lazy" className='w-75 object-cover transition-transform duration-300 group-hover:scale-95 '/>  
              <h2 className='font-bold text-2xl pt-3 text-center'>Gemf Pools Ven.</h2>
           </div>
          </Link>
          
          <Link to="/lyft">
           <div className=' h-fit p-6 overflow-hidden justify-items-center items-center'>
             <img src="Images/Lyft.png" alt="" loading="lazy" className='w-75 object-cover transition-transform duration-300 group-hover:scale-95 '/>  
              <h2 className='font-bold text-2xl pt-3 text-center'>LYFT</h2>
           </div>
          </Link>

          <Link to="/zortcloud">
          <div className=' h-fit p-6 overflow-hidden justify-items-center items-center'>
            <img src="Images/Zortcloud.png" alt="" loading="lazy" className='w-75 object-cover rounded transition-transform duration-300 group-hover:scale-95' />
             <h2 className='font-bold text-2xl pt-3 text-center'>ZortCloud</h2>
          </div>
          </Link>

          <Link to="/teamcore">
            <div className=' p-6 h-fit overflow-hidden justify-items-center items-center'>
             <img src="Images/Teamcore.png" alt="" loading="lazy" className='w-75 object-cover rounded transition-transform duration-300 group-hover:scale-95' />
              <h2 className='font-bold text-2xl pt-3 text-center'>TeamCore</h2>
           </div>
           </Link>

           <Link to="/binwise">
            <div className='p-6 h-fit overflow-hidden justify-items-center items-center'>
              <img src="Images/Binwise.png" alt="" loading="lazy" className='w-75 object-cover rounded transition-transform duration-300 group-hover:scale-95 '/>  
               <h2 className='font-bold text-2xl pt-3 text-center'>Bin-Wise</h2>
            </div>
           </Link>

           <Link to="/pearlsacademy">
           <div className='p-6 h-fit overflow-hidden justify-items-center items-center'>
             <img src="Images/pj3.jpg" alt="" loading="lazy" className='w-75 h-60 md:h-45 lg:h-36 xl:h-45 object-cover rounded transition-transform duration-300 group-hover:scale-95' />
              <h2 className='font-bold text-2xl pt-3 text-center'>Pearls Academy</h2>
           </div>
           </Link>

        </motion.div>
    </div>
  )
}

export default Projects