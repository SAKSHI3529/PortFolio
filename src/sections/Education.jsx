import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';

const Education = () => {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Pimpri Chinchwad University, Pune",
      duration: "2024 - 2026",
      score: "CGPA: 8.4",
      description: "Focused on advanced software engineering, system design, and full-stack development methodologies.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "The New College, Kolhapur",
      duration: "2021 - 2024",
      score: "CGPA: 8.3",
      description: "Built a strong foundation in programming languages, database management, and object-oriented concepts.",
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"></div>

          {educationList.map((edu, index) => (
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
                    {edu.duration}
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 text-sm font-medium">
                    <FiBookOpen className="mr-2" />
                    {edu.institution}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-4">
                    {edu.description}
                  </p>

                  <div className="inline-flex items-center text-xs font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                    <FiAward className="mr-1.5" />
                    {edu.score}
                  </div>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
