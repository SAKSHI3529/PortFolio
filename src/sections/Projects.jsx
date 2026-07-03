import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import ProjectModal from '../components/ProjectModal';

const TiltCard = ({ children, className, onClick }) => {
  const ref = useRef(null);
  
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
      onClick={onClick}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      role="button"
      className={`cursor-none ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MyPolicyDukaan",
      description: "Developed a React Native mobile application for an insurance consultancy that helps users explore insurance plans, connect with advisors, access financial services, and manage inquiries through an intuitive cross-platform mobile experience.",
      fullDescription: "MyPolicyDukaan is a cross-platform mobile application developed using React Native to simplify insurance and financial service management. The app enables users to explore insurance plans, compare policies, connect with certified advisors, and access financial services through a modern, intuitive, and mobile-friendly interface. Designed with a focus on usability, the application provides seamless navigation, informative content, and quick customer support for a smooth digital experience.",
      features: [
        { icon: "📱", title: "Mobile Experience", desc: "Interactive onboarding and modern mobile-first user experience." },
        { icon: "☂️", title: "Insurance Services", desc: "Explore Health, Life, Motor & Investment services." },
        { icon: "🏢", title: "Company Info", desc: "Company information, certifications, and customer testimonials." },
        { icon: "💬", title: "Support & Consultation", desc: "FAQ section and contact & consultation requests." },
        { icon: "⚡", title: "Cross-Platform", desc: "Responsive cross-platform UI built with React Native." },
        { icon: "🧭", title: "Navigation", desc: "Bottom tab navigation and intuitive category browsing." }
      ],
      contributions: [
        "Designed and developed reusable React Native components.",
        "Implemented multi-screen navigation using React Navigation.",
        "Built responsive layouts for Android and iOS devices.",
        "Developed onboarding, services, FAQ, contact, and about screens.",
        "Integrated REST APIs for dynamic content and service information.",
        "Optimized application performance and user experience.",
        "Maintained clean, modular, and scalable code architecture."
      ],
      tech: ["React Native", "Expo", "JavaScript", "React Navigation", "Context API", "AsyncStorage", "REST APIs", "Git"],
      image: "/projects/MyPolicyDukaan/localhost_8081_(iPhone SE).png",
      screenshots: [
        "/projects/MyPolicyDukaan/localhost_8081_(iPhone SE).png",
        "/projects/MyPolicyDukaan/Screenshot 2026-07-01 010309.png",
        "/projects/MyPolicyDukaan/Screenshot 2026-07-01 010335.png",
        "/projects/MyPolicyDukaan/Screenshot 2026-07-01 010440.png",
        "/projects/MyPolicyDukaan/Screenshot 2026-07-01 010501.png",
        "/projects/MyPolicyDukaan/Screenshot 2026-07-01 010522.png",
        "/projects/MyPolicyDukaan/Screenshot 2026-07-01 010538.png",
        "/projects/MyPolicyDukaan/Screenshot 2026-07-01 010555.png",
        "/projects/MyPolicyDukaan/Screenshot 2026-07-01 010611.png",
        "/projects/MyPolicyDukaan/Screenshot 2026-07-01 010629.png"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Festora",
      description: "A full-stack web application designed to streamline the management of college cultural events including event creation, participant registration, scheduling, judging, and result declaration.",
      features: [
        { icon: "🔐", title: "Role-Based Access Control", desc: "Admin, Faculty Coordinator, Event Coordinator, Judges, and Students workflows." },
        { icon: "📝", title: "Event Management", desc: "Create, update, and manage multiple events smoothly." },
        { icon: "👥", title: "Participant Registration", desc: "Students can register for events easily with dynamic forms." },
        { icon: "📊", title: "Judging & Evaluation", desc: "Judges can assign scores and evaluate participants in real-time." },
        { icon: "🗓️", title: "Scheduling System", desc: "Manage event timelines and prevent overlap coordination." },
        { icon: "📢", title: "Result Declaration", desc: "Publish and broadcast results dynamically to all users." },
      ],
      architecture: [
        "Presentation Layer – React frontend",
        "Application Layer – Backend APIs (Python)",
        "Data Layer – MongoDB"
      ],
      apiIntegration: [
        "REST APIs handle secure communication between frontend and backend",
        "Dynamic data flow for: Event details, User roles, Registrations, and Results"
      ],
      tech: ["React", "Python", "MongoDB", "REST APIs"],
      image: "/projects/festora/1.jpeg",
      screenshots: [
        "/projects/festora/1.jpeg",
        "/projects/festora/2.jpeg",
        "/projects/festora/3.jpeg",
        "/projects/festora/4.jpeg",
        "/projects/festora/5.jpeg"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "MCare",
      description: "MCare is a responsive website developed for an NGO to strengthen its online presence and improve communication with donors, volunteers, and beneficiaries. The platform provides dynamic information about the organization's initiatives, programs, donation campaigns, and activities while offering a clean and user-friendly interface.",
      features: [
        { icon: "📱", title: "Responsive Design", desc: "Fully responsive design optimized for mobile, tablet, and desktop viewing." },
        { icon: "🔄", title: "Dynamic Content", desc: "Seamless dynamic content rendering using integrated REST APIs." },
        { icon: "🏢", title: "NGO Management", desc: "Comprehensive NGO information and organizational management tools." },
        { icon: "❤️", title: "Donations", desc: "Dedicated donation and campaign management sections." },
        { icon: "🤝", title: "Volunteers", desc: "Streamlined volunteer information and registration workflow." },
        { icon: "✉️", title: "Inquiries", desc: "Integrated contact and inquiry forms for easy communication." }
      ],
      tech: ["ReactJS", "JavaScript", "REST APIs", "HTML5", "CSS3", "Git"],
      image: "/projects/mcare/Screenshot 2026-06-30 204459.png",
      screenshots: [
        "/projects/mcare/Screenshot 2026-06-30 204459.png",
        "/projects/mcare/Screenshot 2026-06-30 204525.png",
        "/projects/mcare/Screenshot 2026-06-30 204544.png",
        "/projects/mcare/Screenshot 2026-06-30 204602.png",
        "/projects/mcare/Screenshot 2026-06-30 204638.png",
        "/projects/mcare/Screenshot 2026-06-30 204720.png",
        "/projects/mcare/Screenshot 2026-06-30 204831.png",
        "/projects/mcare/Screenshot 2026-06-30 204900.png",
        "/projects/mcare/Screenshot 2026-06-30 205019.png",
        "/projects/mcare/localhost_5173_blog_mrudul-care-and-welfare-foundation-a-mission-of-hope-and-healing (3).png",
        "/projects/mcare/localhost_5173_blog_mrudul-care-and-welfare-foundation-a-mission-of-hope-and-healing (4).png",
        "/projects/mcare/localhost_5173_blog_mrudul-care-and-welfare-foundation-a-mission-of-hope-and-healing (5).png",
        "/projects/mcare/localhost_5173_blog_mrudul-care-and-welfare-foundation-a-mission-of-hope-and-healing.png"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Aarambh Store Mobile",
      description: "A React Native shopping application that provides users with a fast and intuitive mobile shopping experience, featuring product browsing, cart management, wishlists, and seamless REST API integration.",
      features: [
        { icon: "🔐", title: "Authentication", desc: "Secure user authentication and personalized profiles." },
        { icon: "🔍", title: "Product Discovery", desc: "Advanced product browsing, search, and category-wise listing." },
        { icon: "🛒", title: "Shopping Cart", desc: "Real-time shopping cart management and smooth checkout process." },
        { icon: "❤️", title: "Wishlist", desc: "Save favorite items with persistent wishlist functionality." },
        { icon: "👤", title: "Profile Management", desc: "Comprehensive user profile and order history management." },
        { icon: "📱", title: "Mobile UI", desc: "Highly responsive mobile UI with smooth native navigation." }
      ],
      tech: ["React Native", "Expo", "JavaScript", "REST APIs", "Context API"],
      image: "/projects/AarambhApp/localhost_8081_(iPhone SE).png",
      screenshots: [
        "/projects/AarambhApp/localhost_8081_(iPhone SE).png",
        "/projects/AarambhApp/Screenshot 2026-06-30 232251.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 232315.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 232341.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 232528.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 234258.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 235517.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 235612.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 235655.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 235842.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 235902.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 235918.png",
        "/projects/AarambhApp/Screenshot 2026-06-30 235947.png"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Aarambh Store Web",
      description: "A responsive React-based e-commerce platform featuring separate user and admin dashboards for managing products, orders, inventory, and customer interactions through a modern and scalable interface.",
      features: [
        { icon: "🛍️", title: "User & Admin Panels", desc: "Dedicated interfaces tailored for both customers and administrators." },
        { icon: "🛒", title: "Shopping Experience", desc: "Seamless product browsing, filtering, search, cart, and order placement." },
        { icon: "📦", title: "Store Management", desc: "Comprehensive product, category, order, and inventory control." },
        { icon: "👥", title: "User Management", desc: "Manage user profiles, authentication, and view order history." },
        { icon: "📊", title: "Analytics Dashboard", desc: "Centralized admin dashboard for tracking store performance." },
        { icon: "🌐", title: "REST API Integration", desc: "Secure and seamless data synchronization via robust backend APIs." }
      ],
      tech: ["ReactJS", "Tailwind CSS", "JavaScript", "REST APIs", "HTML5", "CSS3", "Git"],
      image: "/projects/AarambhWeb/UserFlow/localhost_5173_.png",
      screenshots: [
        "/projects/AarambhWeb/UserFlow/localhost_5173_.png",
        "/projects/AarambhWeb/UserFlow/localhost_5173_ (1).png",
        "/projects/AarambhWeb/UserFlow/localhost_5173_ (2).png",
        "/projects/AarambhWeb/UserFlow/localhost_5173_ (5).png",
        "/projects/AarambhWeb/UserFlow/localhost_5173_ (6).png",
        "/projects/AarambhWeb/UserFlow/localhost_5173_ (7).png",
        "/projects/AarambhWeb/UserFlow/localhost_5173_ (8).png",
        "/projects/AarambhWeb/UserFlow/localhost_5173_ (9).png",
        "/projects/AarambhWeb/UserFlow/localhost_5173_ (10).png",
        "/projects/AarambhWeb/UserFlow/localhost_5173_product_4.png",
        "/projects/AarambhWeb/UserFlow/Screenshot 2026-07-01 000758.png",
        "/projects/AarambhWeb/UserFlow/Screenshot 2026-07-01 000833.png",
        "/projects/AarambhWeb/UserFlow/Screenshot 2026-07-01 000852.png",
        "/projects/AarambhWeb/UserFlow/Screenshot 2026-07-01 002001.png",
        "/projects/AarambhWeb/UserFlow/Screenshot 2026-07-01 002057.png",
        "/projects/AarambhWeb/UserFlow/Screenshot 2026-07-01 002120.png",
        "/projects/AarambhWeb/UserFlow/Screenshot 2026-07-01 002537.png",
        "/projects/AarambhWeb/AdminFlow/localhost_5173_admin.png",
        "/projects/AarambhWeb/AdminFlow/localhost_5173_admin (1).png",
        "/projects/AarambhWeb/AdminFlow/localhost_5173_admin (2).png",
        "/projects/AarambhWeb/AdminFlow/localhost_5173_admin (3).png",
        "/projects/AarambhWeb/AdminFlow/localhost_5173_admin (4).png",
        "/projects/AarambhWeb/AdminFlow/localhost_5173_admin (5).png"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Meat City",
      description: "Developed a responsive business website for an Australian butcher shop, featuring product catalogs, category filtering, customer reviews, Google Maps integration, and a modern user experience optimized for desktop and mobile devices.",
      features: [
        { icon: "🥩", title: "Product Catalog", desc: "Browse fresh meat, seafood, fruits, and vegetables with category filtering." },
        { icon: "📱", title: "Responsive Experience", desc: "Mobile-friendly navigation and modern UI with reusable React components." },
        { icon: "🔍", title: "Search & Discovery", desc: "Advanced product search and featured products section." },
        { icon: "⭐", title: "Testimonials", desc: "Customer reviews and dedicated business story pages." },
        { icon: "📍", title: "Location Integration", desc: "Integrated Google Maps and contact page with business information." },
        { icon: "🚀", title: "Performance Optimization", desc: "Fast, SEO-optimized pages built with React Router." }
      ],
      tech: ["ReactJS", "Tailwind CSS", "JavaScript", "React Router", "REST APIs"],
      image: "/projects/MeatCity/localhost_5173_MeatCity_ (1).png",
      screenshots: [
        "/projects/MeatCity/localhost_5173_MeatCity_ (1).png",
        "/projects/MeatCity/localhost_5173_MeatCity_ (4).png",
        "/projects/MeatCity/localhost_5173_MeatCity_ (5).png",
        "/projects/MeatCity/localhost_5173_MeatCity_ (6).png"
      ],
      github: "#",
      live: "#"
    }
  ];

  return (
    <>
      <section id="projects" className="py-24 bg-gray-50 dark:bg-black/20 perspective-1000">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <TiltCard 
                  onClick={() => setSelectedProject(project)}
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
                      src={project.image} 
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
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};

export default Projects;
