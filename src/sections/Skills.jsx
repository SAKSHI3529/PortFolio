import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const allSkills = [
    "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", 
    "Framer Motion", "GSAP", "Node.js", "Express", "Python", "Java", 
    "Spring Boot", "MySQL", "MongoDB", "AWS", "Git", "Docker"
  ];

  // Split skills into two rows for the marquee
  const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

  const MarqueeRow = ({ items, direction = 1 }) => {
    return (
      <div className="flex overflow-hidden relative w-full py-4 whitespace-nowrap mask-image-gradient">
        <motion.div
          className="flex gap-6 min-w-full"
          animate={{
            x: direction > 0 ? [0, -1035] : [-1035, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {/* Double the items for seamless loop */}
          {[...items, ...items, ...items, ...items].map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full text-sm font-medium border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-charcoal/50 backdrop-blur-md text-gray-700 dark:text-gray-300 shadow-sm transition-colors hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent cursor-pointer flex-shrink-0"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-black/20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto"></div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-4 relative">
        {/* CSS Mask for fading edges */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          background: 'linear-gradient(to right, var(--bg-color) 0%, transparent 15%, transparent 85%, var(--bg-color) 100%)'
        }}>
          <style>{`
            :root { --bg-color: #f9fafb; }
            .dark { --bg-color: #1a1a1a; } /* Approx charcoal match */
          `}</style>
        </div>

        <MarqueeRow items={row1} direction={1} />
        <MarqueeRow items={row2} direction={-1} />
      </div>
    </section>
  );
};

export default Skills;
