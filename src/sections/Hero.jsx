import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiGithub, FiArrowRight } from 'react-icons/fi';
import { SiReact, SiSpringboot } from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Software Developer", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Text reveal for the main heading
  const headingText = "Hi, I'm Sakshi";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 }
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Aurora Background Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 dark:bg-blue-500/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 dark:bg-purple-500/20 blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-1.5 rounded-full glass-card border border-gray-200 dark:border-white/10">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1 
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white overflow-hidden flex flex-wrap justify-center md:justify-start"
          >
            {headingText.split("").map((char, index) => {
              if (char === " ") {
                return <span key={index} className="inline-block w-4">&nbsp;</span>;
              }
              return (
                <motion.span key={index} variants={letter} className={index > 7 ? "text-gradient inline-block" : "inline-block"}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
          
          <div className="h-10 mb-6 overflow-hidden relative flex justify-center md:justify-start items-center">
            <AnimatePresence mode="wait">
              <motion.h2 
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 absolute"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed mt-4">
            I build exceptional and accessible digital experiences that are fast, elegant, and engineered for scale.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white transition-all duration-300 bg-gray-900 dark:bg-white dark:text-gray-900 border border-transparent rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 shadow-[0_0_0_0_rgba(37,99,235,0)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus:outline-none">
              <span className="mr-2">View Projects</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 bg-white dark:bg-charcoal border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-accent dark:hover:border-accent focus:outline-none overflow-hidden relative">
              <span className="absolute inset-0 w-full h-full bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <FiDownload className="mr-2 relative z-10 group-hover:text-accent transition-colors" />
              <span className="relative z-10 group-hover:text-accent transition-colors">Resume</span>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3.5 text-gray-600 dark:text-gray-300 transition-all duration-300 bg-white dark:bg-charcoal border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-accent dark:hover:text-accent hover:border-accent dark:hover:border-accent">
              <FiGithub size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div 
          className="flex-1 relative flex justify-center items-center mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl transform scale-90" />
            
            <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/50 glass-card flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="/profile.png" 
                alt="Sakshi Kumbhar" 
                className="w-full h-full object-cover rounded-full p-2"
              />
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
