import React from 'react'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Projects = () => {
   useEffect(() => {
    document.title = "Project"
  }, [])
  return (
    <div className='bg-[rgb(242,242,242)]  px-5 md:px-11 lg:px-10 xl:px-16 2xl:px-22 pt-40 2xl:pt-35 h-fit pb-60'>
       <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 sm:mt-16'
         initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut'}}
          viewport={{ once: true }}
       >

         <Link to="/cineverse">
           <div className='p-6 h-fit overflow-hidden justify-items-center items-center'>   
             <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
             </div>
            <img src="Images/Cineverse.png" alt="" className='w-75 object-cover rounded transition-transform duration-300 group-hover:scale-95' />
             <h2 className='font-bold text-2xl pt-3 text-center'>Cineverse</h2>
          </div>
          </Link>

          <Link to="/lyft">
           <div className=' h-fit p-6 overflow-hidden justify-items-center items-center'>
              <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                 <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
              </div>
             <img src="Images/Lyft.png" alt="" className='w-75 object-cover rounded transition-transform duration-300 group-hover:scale-95 '/>  
              <h2 className='font-bold text-2xl pt-3 text-center'>LYFT</h2>
           </div>
          </Link>

          <Link to="/ZortCloud">
          <div className=' h-fit p-6 overflow-hidden justify-items-center items-center'>
             <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
             </div>
            <img src="Images/Zortcloud.png" alt="" className='w-75 object-cover rounded transition-transform duration-300 group-hover:scale-95' />
             <h2 className='font-bold text-2xl pt-3 text-center'>ZortCloud</h2>
          </div>
          </Link>

          <Link to="/teamcore">
            <div className=' p-6 h-fit overflow-hidden justify-items-center items-center'>   
              <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                 <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
              </div>
             <img src="Images/Teamcore.png" alt="" className='w-75 object-cover rounded transition-transform duration-300 group-hover:scale-95' />
              <h2 className='font-bold text-2xl pt-3 text-center'>TeamCore</h2>
           </div>
           </Link>

           <Link to="/BinWise">
            <div className='p-6 h-fit overflow-hidden justify-items-center items-center'>
               <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                  <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
               </div>
              <img src="Images/Binwise.png" alt="" className='w-75 object-cover rounded transition-transform duration-300 group-hover:scale-95 '/>  
               <h2 className='font-bold text-2xl pt-3 text-center'>Bin-Wise</h2>
            </div>
           </Link>

           <Link to="/PearlsAcademy">
           <div className='p-6 h-fit overflow-hidden justify-items-center items-center'>
              <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                 <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
              </div>
             <img src="Images/pj3.jpg" alt="" className='w-75 h-60 md:h-45 lg:h-36 xl:h-45 object-cover rounded transition-transform duration-300 group-hover:scale-95' />
              <h2 className='font-bold text-2xl pt-3 text-center'>Pearls Academy</h2>
           </div>
           </Link>

        </motion.div>
    </div>
  )
}

export default Projects