import React from 'react'
import { useEffect } from 'react';

const Projects = () => {
   useEffect(() => {
    document.title = "Project"
  }, [])
  return (
    <div className=''>Projects</div>
  )
}

export default Projects