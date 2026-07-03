import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light dark:bg-charcoal text-gray-900 dark:text-gray-100 transition-colors duration-300 selection:bg-accent selection:text-white">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
