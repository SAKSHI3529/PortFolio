import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "VMV Tech Solutions",
      duration: "June 2025 - June 2026",
      description: "Developed and maintained scalable backend services using RESTful APIs and SQL databases. Designed reusable backend components and optimized applications to improve scalability, reliability, and performance within an Agile environment.",
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Center Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-charcoal z-10 mt-1.5 md:mt-0"></div>

              {/* Content Box */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <SpotlightCard className="p-6 relative group transition-colors">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors"></div>
                  
                  <div className="flex items-center text-accent mb-2 text-sm font-medium">
                    <FiCalendar className="mr-2" />
                    {exp.duration}
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    <FiBriefcase className="mr-2" />
                    {exp.company}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
