import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget } from 'react-icons/fi';

const ProjectOutcome = ({ project }) => {
  if (!project.outcome) return null;

  return (
    <section className="py-16 mb-8">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-transparent dark:from-accent/20 rounded-3xl border border-accent/20">
          <div className="flex items-center gap-4 mb-6">
            <FiTarget className="text-accent" size={32} />
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Outcome</h2>
          </div>
          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
            {project.outcome}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default ProjectOutcome;
