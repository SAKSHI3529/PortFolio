import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, BrainCircuit, Cloud, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-accent group-hover:text-white transition-colors" />,
      skills: ["Java", "JavaScript", "Python", "TypeScript", "SQL", "C++"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-accent group-hover:text-white transition-colors" />,
      skills: ["React.js", "Next Js", "React Hooks", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit", "Vite"],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-accent group-hover:text-white transition-colors" />,
      skills: ["Spring Boot", "Node.js", "Express.js", "FastAPI", "REST APIs", "API Integration"],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-accent group-hover:text-white transition-colors" />,
      skills: ["MySQL", "MongoDB", "SQL Server", "PostgreSQL"],
    },
    {
      title: "AI / ML",
      icon: <BrainCircuit className="w-5 h-5 text-accent group-hover:text-white transition-colors" />,
      skills: ["Generative AI", "LLM APIs", "RAG", "Prompt Engineering", "Machine Learning", "PyTorch", "scikit-learn"],
    },
    {
      title: "Cloud / DevOps",
      icon: <Cloud className="w-5 h-5 text-accent group-hover:text-white transition-colors" />,
      skills: ["AWS", "Docker", "Git", "GitHub", "CI/CD Fundamentals"],
    },
    {
      title: "Core",
      icon: <Cpu className="w-5 h-5 text-accent group-hover:text-white transition-colors" />,
      skills: ["OOP", "Data Structures & Algorithms", "DBMS", "Debugging", "Testing", "SDLC", "Agile/Scrum", "Problem Solving"],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-50 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4 inline-block"
          >
            Tech Stack
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-gradient-to-r from-accent to-blue-400 rounded-full mx-auto"
          ></motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`p-6 rounded-2xl border border-transparent hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1 ${idx === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-accent/10 dark:bg-white/5 rounded-xl group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-gray-100 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-white/5 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
