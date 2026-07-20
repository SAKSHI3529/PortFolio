import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { projects } from '../../data/projects';

const ProjectNavigation = ({ project }) => {
  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <section className="py-16 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex-1 w-full flex justify-start">
            {prevProject && (
              <Link to={`/project/${prevProject.slug}`} className="group flex flex-col items-start hover:text-accent transition-colors">
                <span className="text-sm text-gray-500 flex items-center gap-2 mb-2 group-hover:text-accent">
                  <FiArrowLeft /> Previous Project
                </span>
                <span className="text-xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-accent">
                  {prevProject.title}
                </span>
              </Link>
            )}
          </div>
          
          <div className="flex-1 w-full flex justify-center border-t md:border-t-0 md:border-x border-gray-200 dark:border-white/10 py-4 md:py-0">
            <Link to="/projects" className="text-gray-500 hover:text-accent transition-colors">
              View All Projects
            </Link>
          </div>

          <div className="flex-1 w-full flex justify-end">
            {nextProject && (
              <Link to={`/project/${nextProject.slug}`} className="group flex flex-col items-end hover:text-accent transition-colors">
                <span className="text-sm text-gray-500 flex items-center gap-2 mb-2 group-hover:text-accent">
                  Next Project <FiArrowRight />
                </span>
                <span className="text-xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-accent text-right">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
export default ProjectNavigation;
