import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import SpotlightCard from '../SpotlightCard';

const ProjectArchitecture = ({ project }) => {
  if (!project.architecture) return null;

  const archKeys = [
    { key: "frontend", label: "Frontend", color: "border-blue-500" },
    { key: "communication", label: "API Layer", color: "border-purple-500" },
    { key: "backend", label: "Backend", color: "border-green-500" },
    { key: "database", label: "Database", color: "border-orange-500" }
  ];

  const blocks = archKeys.filter(item => project.architecture[item.key] && project.architecture[item.key] !== "N/A");

  if (blocks.length === 0) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-10 text-center">Architecture</h2>
        <div className="flex flex-col items-center">
          {blocks.map((block, i) => (
            <React.Fragment key={block.key}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="w-full">
                <SpotlightCard className={`p-6 text-center border-l-4 ${block.color} bg-white/50 dark:bg-charcoal/50`}>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">{block.label}</h4>
                  <p className="text-lg text-gray-900 dark:text-white font-medium">{project.architecture[block.key]}</p>
                </SpotlightCard>
              </motion.div>
              {i < blocks.length - 1 && (
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.1 }} className="py-4 text-gray-400">
                  <FiArrowDown size={24} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectArchitecture;
