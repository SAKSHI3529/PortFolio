import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    
    // REPLACE THIS WITH YOUR WEB3FORMS ACCESS KEY
    formData.append("access_key", "fca6427f-9997-4168-b295-edb13b82adb0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Your message has been sent.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0 mr-4">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</p>
                      <a href="mailto:sakshi3529@gmail.com" className="text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent font-medium">
                        sakshi3529@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0 mr-4">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        Pune, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/SAKSHI3529" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-accent hover:text-white transition-colors">
                    <FiGithub size={18} />
                  </a>
                  <a href="https://linkedin.com/in/sakshi-kumbhar2709" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#0077b5] hover:text-white transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <SpotlightCard className="p-8">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows="5" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-charcoal border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                {result && (
                  <p className={`text-sm font-medium ${result.includes("Success") ? "text-green-500" : "text-gray-500"}`}>
                    {result}
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={result === "Sending...."}
                  className="w-full py-4 bg-accent hover:bg-blue-700 disabled:opacity-70 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {result === "Sending...." ? "Sending..." : "Send Message"} <FiSend />
                </button>
              </form>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
