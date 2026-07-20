import React from 'react';
import { motion } from 'framer-motion';

const ProjectProblem = ({ project }) => (
  <section className="py-16">
    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">The Problem</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{project.problem}</p>
      </motion.div>
    </div>
  </section>
);
export default ProjectProblem;
