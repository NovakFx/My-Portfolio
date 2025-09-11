import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Cineverse = () => {
  useEffect(() => {
    document.title = "Cineverse - Jeremiah Austine"
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
          <h1 className="text-gray-400 md:text-xl 2xl:text-2xl font-normal basement-text">Cineverse</h1>
          <p className="pt-7 text-sm md:text-lg xl:text-2xl 2xl:text-[22px] text-[rgb(56,53,53)] mb-6 max-w-3xl md:leading-7 lg:leading-[34px]">
            Cineverse is a cinematic gateway to the world of movies. While film websites often look and feel the same, I wanted to experiment and craft an immersive experience with dynamic visuals, smooth animations, and a modern UI bringing the magic of cinema to your screen.
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
          Cineverse lets you dive into the world of movies with fast search, easy discovery, secure access, and stunning visuals. It’s more than just a site—it’s your personal movie experience, anytime, anywhere.
        </p>

        <div className="grid grid-cols-[auto_22%] xl:grid-cols-[auto_300px] gap-10 mt-10">
          <motion.img
            src="Images/Cineverse.png"
            alt="Cineverse Desktop View"
            className="w-full xl:max-w-5xl rounded-lg select-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
            viewport={{ once: true }}
          />
          <motion.img
            src="Images/Cineverse-mobile.png"
            alt="Cineverse Mobile View"
            className="w-full max-w-xs lg:max-w-[250px] mx-auto lg:mx-0 rounded-lg select-none"
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
            href="https://cineverse-eta-seven.vercel.app/"
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

export default Cineverse
