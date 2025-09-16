import { motion } from 'framer-motion';

const TechStack = () => {
  const techs = [
    { src: "Images/HTML5.png", label: "HTML" },
    { src: "Images/CSS.png", label: "CSS" },
    { src: "Images/TAILWIND.png", label: "Tailwind CSS" },
    { src: "Images/JAVASCRIPT.png", label: "JavaScript" },
    { src: "Images/REACT.png", label: "React" },
    { src: "Images/NODE-JS.png", label: "Node.js" },    
    { src: "Images/FLUTTER.png", label: "Flutter" },
    { src: "Images/FIREBASE.png", label: "Firebase" },
    { src: "Images/MONGO-DB.png", label: "MongoDB" },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


  return (
    <section className="select-none">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-12 basement-text"
        variants={titleVariants}
      >
        Tech Stack
      </motion.h1>
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 place-items-center basement-text">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src={tech.src}
                alt={tech.label}
                loading="lazy"
                aria-label={tech.label}
                className="w-full max-w-[110px] lg:max-w-[110px] xl:max-w-[80px] h-auto object-contain rounded-md select-none"
              />
              <p className="mt-4 text-base font-medium text-gray-700 text-center">
                {tech.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;