import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Handle escape key for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <AnimatePresence>
        {project && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-10 lg:inset-x-32 lg:inset-y-12 bg-white dark:bg-charcoal rounded-3xl z-[120] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-white/10"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={onClose}
                  className="p-3 bg-white/50 dark:bg-black/50 hover:bg-gray-200 dark:hover:bg-gray-800 backdrop-blur-md rounded-full transition-colors text-gray-900 dark:text-white cursor-none"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide relative">
                
                {/* Header with Title and Links */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 pr-12">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-accent hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2 cursor-none text-sm shadow-lg shadow-accent/20">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl font-medium transition-colors flex items-center gap-2 cursor-none text-sm">
                      <FiGithub /> Source Code
                    </a>
                  </div>
                </div>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-gray-200 dark:border-white/10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-12 max-w-5xl">
                  {/* Overview */}
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">Overview</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  {project.features && (
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-6">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.features.map((feature, i) => (
                          <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/5 flex gap-4 transition-transform hover:-translate-y-1">
                            <div className="text-3xl mt-1">{feature.icon}</div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{feature.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Architecture & API & Contributions */}
                  {(project.architecture || project.apiIntegration || project.contributions) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                      {project.architecture && (
                        <div>
                          <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-6">Architecture</h3>
                          <ul className="space-y-4">
                            {project.architecture.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                <span className="text-accent mt-1">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {project.apiIntegration && (
                        <div>
                          <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-6">API Integration</h3>
                          <ul className="space-y-4">
                            {project.apiIntegration.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                <span className="text-accent mt-1">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.contributions && (
                        <div>
                          <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-6">My Contributions</h3>
                          <ul className="space-y-4">
                            {project.contributions.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                <span className="text-accent mt-1">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Screenshots */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-6">Gallery</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.screenshots.map((img, i) => (
                          <div 
                            key={i} 
                            onClick={() => setSelectedImage(img)}
                            role="button"
                            className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group cursor-none relative aspect-video"
                          >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white font-medium rounded-full text-sm transform translate-y-4 group-hover:translate-y-0 transition-all">
                                View Full Size
                              </span>
                            </div>
                            <img 
                              src={img} 
                              alt={`${project.title} Screenshot ${i + 1}`} 
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-none"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-colors text-white cursor-none z-10"
            >
              <FiX size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen Screenshot"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;
