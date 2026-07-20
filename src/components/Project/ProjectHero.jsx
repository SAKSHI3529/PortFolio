import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectHero = ({ project }) => (
  <section className="pt-32 pb-16 relative overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-500/5 blur-3xl -z-10" />
    <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
        <span className="text-accent font-medium tracking-wider uppercase text-sm">{project.category}</span>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">
        {project.title}
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
        {project.description}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex justify-center gap-4">
        {project.github && project.github !== "#" && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:scale-105 transition-transform">
            <FiGithub /> GitHub
          </a>
        )}
        {project.liveDemo && project.liveDemo !== "#" && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:scale-105 transition-transform">
            <FiExternalLink /> Live Demo
          </a>
        )}
      </motion.div>
    </div>
  </section>
);
export default ProjectHero;
