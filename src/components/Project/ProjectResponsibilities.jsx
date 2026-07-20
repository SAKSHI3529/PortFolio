import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const ProjectResponsibilities = ({ project }) => {
  if (!project.responsibilities || project.responsibilities.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50/50 dark:bg-black/20 border-y border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-8">My Responsibilities</h2>
        <ul className="space-y-4">
          {project.responsibilities.map((item, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4">
              <FiCheckCircle className="text-accent mt-1 shrink-0" size={20} />
              <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ProjectResponsibilities;
