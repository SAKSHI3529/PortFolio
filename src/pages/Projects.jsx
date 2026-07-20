import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/projects';


// Inline TiltCard for simplicity since we moved away from the modal
const TiltCardComponent = ({ children, className }) => {
  const ref = React.useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`cursor-pointer ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-black/20 perspective-1000">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link to={`/project/${project.slug}`} className="block h-full">
                <TiltCardComponent 
                  className="group rounded-3xl h-full overflow-hidden glass-card flex flex-col relative z-10 transition-shadow hover:shadow-2xl"
                >
                  {/* Image Container with Zoom */}
                  <div className="relative h-64 overflow-hidden rounded-t-3xl">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span className="px-6 py-3 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white font-medium rounded-full flex items-center gap-2 backdrop-blur-md">
                          View Project <FiArrowUpRight />
                        </span>
                      </div>
                    </div>
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col bg-white/50 dark:bg-charcoal/50 backdrop-blur-md rounded-b-3xl">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.slice(0, 4).map((t, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCardComponent>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
