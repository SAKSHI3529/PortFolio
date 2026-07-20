import React from 'react';
import { motion } from 'framer-motion';

const ProjectOverview = ({ project }) => (
  <section className="py-12 border-y border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-black/10">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center md:text-left">
        <div>
          <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Type</h4>
          <p className="font-medium text-gray-900 dark:text-white">{project.type}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Duration</h4>
          <p className="font-medium text-gray-900 dark:text-white">{project.duration}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Company</h4>
          <p className="font-medium text-gray-900 dark:text-white">{project.company}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Role</h4>
          <p className="font-medium text-gray-900 dark:text-white">{project.role}</p>
        </div>
      </div>
    </div>
  </section>
);
export default ProjectOverview;
