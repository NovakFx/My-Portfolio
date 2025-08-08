import React from 'react'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-[rgb(242,242,242)] text-[rgb(89,89,89)] py-10 md:py-12 px-5 sm:px-6 md:px-11 lg:px-14 xl:px-20 2xl:px-28'>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-5 md:gap-8'>
        <p className='text-center md:text-left'>&copy; Jeremiah Austine {new Date().getFullYear()}.</p>

        <div className='flex flex-wrap justify-center md:justify-end items-center gap-5'>
          <a href='https://www.linkedin.com/in/jeremiah-austine-60033b33b/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedinIn className='text-lg hover:text-[rgba(89,89,89,0.74)] transition-colors duration-300' />
          </a>
          <a href='https://github.com/jeremiah-austine' target='_blank' rel='noopener noreferrer'>
            <IoLogoGithub className='text-lg hover:text-[rgba(89,89,89,0.74)] transition-colors duration-300' />
          </a>
           <a href='https://www.instagram.com/d_tech_guy_6' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-lg hover:text-[rgba(89,89,89,0.74)] transition-colors duration-300' />
          </a>
          <a href='https://twitter.com/Novak_Fx' target='_blank' rel='noopener noreferrer'>
            <FaXTwitter className='text-lg hover:text-[rgba(89,89,89,0.74)] transition-colors duration-300' />
          </a>
          <a href='mailto:jeremiahaustine77@gmail.com' target='_blank' rel='noopener noreferrer'>
            <MdOutlineMailOutline className='text-lg hover:text-[rgba(89,89,89,0.74)] transition-colors duration-300' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer