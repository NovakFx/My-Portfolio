import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Switch from './Switch';

const Navbar = () => {
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  const activeLinkVariants = {
    initial: { width: 0 },
    animate: { width: '100%', transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };

  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {

      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
 
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    console.log('Toggling menu, isMobileMenuOpen:', !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md text-white px-5 md:px-11 md:pt-2 lg:pt-0 lg:px-10 xl:px-16 2xl:px-22 ${
        isVisible ? 'shadow-md' : ''
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center py-6 max-w-8xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 font-bold text-lg' : 'text-gray-400 font-semibold text-lg'
          }
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
        >
          <motion.span variants={linkVariants} initial="initial" animate="animate" whileHover="hover">
            Jeremiah Austine
          </motion.span>
        </NavLink>

        <ul className="hidden md:flex space-x-12 cursor-pointer">
          {['projects', 'about', 'contact'].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-gray-400 font-extralight'
                }
              >
                {({ isActive }) => (
                  <motion.span
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="relative"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                        variants={activeLinkVariants}
                        initial="initial"
                        animate="animate"
                      />
                    )}
                  </motion.span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <Switch onClick={toggleMobileMenu} checked={isMobileMenuOpen} />
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden fixed top-0 right-0 h-screen w-full bg-gray-800 text-white flex flex-col items-center justify-center space-y-8 z-40"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {['projects', 'about', 'contact'].map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold text-xl' : 'text-gray-400 font-extralight text-xl'
                }
                onClick={() => {
                  console.log('Closing menu via link click');
                  setIsMobileMenuOpen(false);
                }}
              >
                <motion.span
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.span>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;