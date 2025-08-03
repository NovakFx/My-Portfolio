import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const InfiniteMarquee = () => {
  const text = "LET'S WORK";
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const speed = 1.5; 

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (!isHovered && containerRef.current) {
        const width = containerRef.current.scrollWidth / 2;
        const currentX = x.get();
        const nextX = currentX - speed;

        x.set(nextX <= -width ? 0 : nextX);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, x]);

  return (
    <div
      className="bg-[rgb(242,242,242)] overflow-hidden w-full my-10 mt-18 text-5xl md:text-7xl lg:text-7xl xl:text-9xl font-medium whitespace-nowrap basemen-text">
      <Link to="/contact">
        <motion.div
          ref={containerRef}
          className="flex py-4"
          style={{ x }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-8 mr-8">
            {[...Array(10)].map((_, i) => (
              <span key={i}>{text}</span>
            ))}
          </div>
          <div className="flex gap-8">
            {[...Array(10)].map((_, i) => (
              <span key={i + 100}>{text}</span>
            ))}
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default InfiniteMarquee;
