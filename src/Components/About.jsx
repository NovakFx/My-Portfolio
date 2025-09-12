import React, { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(242,242,242)] px-6 py-12 pt-40 flex items-center md:px-11 lg:px-10 xl:px-16 2xl:px-22">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="Images/my-toon.png"
            alt="Jeremiah Austine"
            className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mt-15"
        >

          <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            My name is <span className="font-semibold">Jeremiah Austine</span>, 
            and I am a developer driven by creativity and curiosity.
          </p>

          <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            I discovered coding back in high school at first as a joke, never realizing it would grow into a career path. 
            Over the years, that curiosity transformed into a journey of passion and purpose.
          </p>

          <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            With 5+ years of coding, I’ve built personal projects, client websites as a freelancer, and continued sharpening my skills. 
            Soon, I’ll begin studying Computer Science, merging logic with creativity even further.
          </p>

          <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
            Beyond code, my drive comes from resilience and responsibility as the firstborn in my family. 
            Tech for me is not just growth it’s proof that dedication pays off.  
            But the real magic is teamwork: building experiences that matter, not just software.
          </p>

          <a
            href="/Jeremiah_Austine_CV.pdf" 
            download
            className="inline-block w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
