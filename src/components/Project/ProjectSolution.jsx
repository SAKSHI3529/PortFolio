import React from 'react';
import { motion } from 'framer-motion';

const ProjectSolution = ({ project }) => (
  <section className="py-16 bg-gray-50 dark:bg-white/5 rounded-3xl my-8 max-w-5xl mx-auto border border-gray-200 dark:border-white/10">
    <div className="px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">The Solution</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{project.solution}</p>
      </motion.div>
    </div>
  </section>
);
export default ProjectSolution;
