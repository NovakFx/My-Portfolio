import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage.jsx'
import Cineverse from './Components/View Project/Cineverse.jsx'
import ZortCloud from './Components/View Project/ZortCloud.jsx';
import Navbar from './Components/Nav/Navbar.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Projects from './Components/Projects.jsx'
import ArrowUp from './ArrowUp.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Lyft from './Components/View Project/Lyft.jsx';
import TeamCore from './Components/View Project/TeamCore.jsx';
import Footer from './Components/Footer.jsx';
import BinWise from './Components/View Project/BinWise.jsx';
import PearlsAcademy from './Components/View Project/PearlsAcademy.jsx';
import NotFound from './Components/NotFound.jsx';


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
        <Route path="/ZortCloud" element={<ZortCloud />} />
        <Route path="/teamcore" element={<TeamCore />} />
        <Route path='/BinWise' element={<BinWise />} />
        <Route path='/PearlsAcademy' element={<PearlsAcademy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
