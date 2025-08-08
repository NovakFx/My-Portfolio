import React from 'react'
import { useEffect } from 'react';

const About = () => {
   useEffect(() => {
    document.title = "About"
  }, [])
  return (
    <div className=" ronzino-text">About</div>
  )
}

export default About