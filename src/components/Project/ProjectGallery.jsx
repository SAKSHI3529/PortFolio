import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const ProjectGallery = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project.images || project.images.length === 0) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-10 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {project.images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="aspect-video relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2" onClick={() => setSelectedImage(null)}>
              <FiX size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.9 }} 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default ProjectGallery;
