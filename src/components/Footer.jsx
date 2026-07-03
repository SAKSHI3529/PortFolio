import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10 mt-auto">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Sakshi Kumbhar. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
