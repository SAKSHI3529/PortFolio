import React from 'react';
import { motion } from 'framer-motion';

const ProjectTechStack = ({ project }) => {
  if (!project.techStack) return null;

  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "tools", label: "Tools" },
    { key: "cloud", label: "Cloud" }
  ];

  const activeCategories = categories.filter(c => project.techStack[c.key] && project.techStack[c.key].length > 0);

  if (activeCategories.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50 dark:bg-black/20 border-y border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-10 text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeCategories.map((cat, i) => (
            <motion.div key={cat.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{cat.label}</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack[cat.key].map((tech, j) => (
                  <span key={j} className="px-4 py-2 bg-white dark:bg-charcoal border border-gray-200 dark:border-white/10 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:border-accent dark:hover:border-accent transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectTechStack;
