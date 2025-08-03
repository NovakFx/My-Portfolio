import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdArrowUp } from "react-icons/io";

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="z-50 fixed top-4 right-4 transition-transform duration-500 ease-in-out">
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-3 z-50 p-1 xl:p-[6px] rounded-full hover:text-blue-500 text-red-600  shadow-lg hover:border-sky-700 border-[1px] transition-transform duration-300 transform hover:scale-110"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <IoMdArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default ArrowUp;