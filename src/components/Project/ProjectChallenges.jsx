import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';
import SpotlightCard from '../SpotlightCard';

const ProjectChallenges = ({ project }) => {
  if (!project.challenges || project.challenges.length === 0) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-8">Challenges Faced</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.challenges.map((challenge, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <SpotlightCard className="p-6 h-full border-t-4 border-yellow-500 bg-white/50 dark:bg-charcoal/50">
                <FiAlertTriangle className="text-yellow-500 mb-4" size={24} />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{challenge}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectChallenges;
