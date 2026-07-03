import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';

const About = () => {
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
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const stats = [
    { value: "1+", label: "Years Experience", icon: "💼" },
    { value: "5+", label: "Projects Completed", icon: "🚀" },
    { value: "10+", label: "Technologies Used", icon: "💻" },
    { isText: true, title: "Currently Learning", label: "Cloud • AI • System Design", icon: "🌱" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl text-left">
              I'm a Software Developer with experience in designing and developing full-stack applications using modern technologies such as Java, Spring Boot, ReactJS, Node.js, MySQL, MongoDB, and REST APIs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I enjoy building scalable applications, optimizing performance, and continuously learning new technologies. My goal is to create software that delivers meaningful user experiences while following clean coding practices and industry standards.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently, I'm focused on strengthening my expertise in Backend Development, Cloud Computing, and AI Engineering.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm currently open to Software Engineer, Full Stack Developer, Java Developer, and Frontend Developer opportunities where I can contribute to impactful products while continuing to grow as an engineer.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <SpotlightCard key={index} className="p-5 flex flex-col justify-center h-full hover:border-accent/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-accent/10 w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {stat.icon}
                    </div>
                    {stat.isText ? (
                      <h4 className="text-gray-900 dark:text-white font-semibold text-sm leading-tight">
                        {stat.title}
                      </h4>
                    ) : (
                      <span className="text-3xl font-heading font-bold text-accent">
                        {stat.value}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </SpotlightCard>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
