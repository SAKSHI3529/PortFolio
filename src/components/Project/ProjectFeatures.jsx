import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../SpotlightCard';

const ProjectFeatures = ({ project }) => {
  if (!project.features || project.features.length === 0) return null;
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-10 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.features.map((feature, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="h-full">
              <SpotlightCard className="p-6 h-full flex flex-col items-start bg-white/50 dark:bg-charcoal/50">
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectFeatures;
