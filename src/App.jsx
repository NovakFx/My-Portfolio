import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage.jsx'
import Cineverse from './Components/View Project/Cineverse.jsx'
import PearlsAcademy from './Components/View Project/PearlsAcademy.jsx'
import Navbar from './Components/Nav/Navbar.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Projects from './Components/Projects.jsx'
import ArrowUp from './ArrowUp.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Lyft from './Components/View Project/Lyft.jsx';
import TeamCore from './Components/View Project/TeamCore.jsx';

function App() {
   const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); 

  return (
    <>
      <Navbar />
      <ArrowUp />
      <ScrollToTop />
      
      <Routes> 
        <Route path="/" element={<Homepage />} />
        <Route path="/lyft" element={<Lyft />} /> 
        <Route path="/cineverse" element={<Cineverse />} />
        <Route path="/pearlsacademy" element={<PearlsAcademy />} />
        <Route path="/teamcore" element={<TeamCore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
