import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import InfiniteMarquee from './InfiniteMarquee';
import TechStack from './TechStack';

const Homepage = () => {
  return (
    <div className='bg-[rgb(242,242,242)] text-gray-900 px-4 md:px-7 lg:px-10 xl:px-16 2xl:px-22 pt-40  h-fit pb-20' style={{ fontFamily: 'Arial, sans-serif',fontStyle: 'normal' }}>
      <motion.div className="pb-10 "
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }} 
      > <div className='grid grid-cols-1 md:grid-cols-[auto_27.5%] 2xl:grid-cols-[auto_22.5%] '>
         <p className="text-xl md:text-3xl lg:text-4xl text-[rgb(56,53,53)] mb-6 lg:max-w-xl xl:max-w-3xl font-medium leading-relaxed md:leading-snug ">
           Hello, my name is <span className="font-bold capitalize text-green-500">Jeremiah Austine</span>. a creative developer with 5+ years of building clean, user-focused websites.
         </p>

             <div className="mt-6 hidden lg:block text-[12px] md:text-sm lg:text-base text-gray-400 opacity-40 leading-relaxed pointer-eves-none select-none max-w-xs z-0 basement-text font-normal transition-all duration-300">
               <span className="uppercase text-xs tracking-widest mb-1 text-gray-500 hover:text-black hover:font-bold">property:</span><br />
               <span className="block hover:text-black">Building sharp webs, apps,</span>
               <span className="block hover:text-black">beautiful UIs, and fullstack products</span>
               <span className="block hover:text-black">that don’t just work, they <span className="italic">wow</span>.</span>
             </div>
    </div>
         <div className="text- md:text-xl text-green-500  h-8 basement-text font-normal">
           <Typewriter
             options={{
               loop: true,
               delay: 75,
               deleteSpeed: 30,
               autoStart: true,
               strings: [
                 'Fullstack Developer',
                 'Mobile App Developer',
                 'UI/UX Designer',
                 'Problem Solver',
               ],
             }}
           />
         </div>
       </motion.div>

       <motion.div className='mt-15 md:mt-24 lg:mt-28'
        
       >
             <section>
               <h1 className='text-2xl select-none'>Recent Projects</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 mt-16'>
                 <Link to="/cineverse">
                   <div className='relative group border p-6 rounded-md h-fit overflow-hidden'>   
                     <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                        <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
                     </div>
                    <img src="Images/Cineverse.png" alt="" className='w-full object-cover rounded transition-transform duration-300 group-hover:scale-95' />
                     <h2 className='font-bold text-2xl pt-3'>Cineverse</h2>
                     <p className='text-sm text-gray-700 pt-2'>Cineverse is a modern movie website for streaming, search, and reviews.</p>
                  </div>
                  </Link>

                 <Link to="/lyft">
                  <div className='relative group border p-6 rounded-md h-fit overflow-hidden'>
                     <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                        <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
                     </div>
                    <img src="Images/Lyft.png" alt="" className='w-full object-cover rounded transition-transform duration-300 group-hover:scale-95 '/>  
                     <h2 className='font-bold text-2xl'>LYFT</h2>
                     <p className='text-sm text-gray-700 pt-2'>LYFT is a sleek gym website for workouts, plans, memberships, and coaching.</p>
                  </div>
                 </Link>

                  <Link to="/PearlsAcademy">
                  <div className='relative group border p-6 rounded-md h-fit overflow-hidden'>
                     <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                        <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
                     </div>
                    <img src="Images/pearls.png" alt="" className='w-full object-cover rounded transition-transform duration-300 group-hover:scale-95' />
                     <h2 className='font-bold text-2xl'>Pearls Academy</h2>
                     <p className='text-sm text-gray-700 pt-2'>Short description of the project.</p>
                  </div>
                  </Link>

                 <Link to="/teamcore">
                   <div className='relative group border p-6 rounded-md h-fit overflow-hidden'>   
                     <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                        <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
                     </div>
                    <img src="Images/Teamcore.png" alt="" className='w-full object-cover rounded transition-transform duration-300 group-hover:scale-95' />
                     <h2 className='font-bold text-2xl pt-3'>TeamCore</h2>
                     <p className='text-sm text-gray-700 pt-2'>TeamCore is a collaborative project management tool designed to enhance team productivity.</p>
                  </div>
                  </Link>

                 <Link to="/lyft">
                  <div className='relative group border p-6 rounded-md h-fit overflow-hidden'>
                     <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                        <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
                     </div>
                    <img src="Images/Lyft.png" alt="" className='w-full object-cover rounded transition-transform duration-300 group-hover:scale-95 '/>  
                     <h2 className='font-bold text-2xl'>LYFT</h2>
                     <p className='text-sm text-gray-700 pt-2'>LYFT is a sleek gym website for workouts, plans, memberships, and coaching.</p>
                  </div>
                 </Link>

                  <Link to="/PearlsAcademy">
                  <div className='relative group border p-6 rounded-md h-fit overflow-hidden'>
                     <div className='absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10'>
                        <p className='text-green-500 font-bold text-lg group-hover:text-2xl z-20 cursor-pointer'>View Project</p>
                     </div>
                    <img src="Images/pearls.png" alt="" className='w-full object-cover rounded transition-transform duration-300 group-hover:scale-95' />
                     <h2 className='font-bold text-2xl'>Pearls Academy</h2>
                     <p className='text-sm text-gray-700 pt-2'>Short description of the project.</p>
                  </div>
                  </Link>

                 </div>
             </section>
       </motion.div>
         <div className='mt-30 '>
          <TechStack />
          <div className='mt-30 lg:mt-26 text-[rgb(56,53,53)] select-none'>
            <h1 className='basement-text font-bold text-3xl lg:text-xl'>Why Hire Me ?</h1>
            <p className='w-full max-w-xl text md:hover:text-xl pt-4 basement-text cursor-pointer transition-all duration-300'>When you hire me, you're getting someone who knows how to build real, working products—not just write code. I’m a full stack and app developer who’s hands-on from start to finish. I focus on speed, scalability, and clean design that users actually enjoy. I care about what I build, and I make sure every project runs smooth, looks good, and gets the job done.</p>
          </div>
        </div>
       <div className='absolute lg:-bottom-[115rem] xl:-bottom-[110rem] left-0 w-full bg-[rgb(242,242,242)]'>
        <InfiniteMarquee />
        </div>      
    </div>
  );
};

export default Homepage;