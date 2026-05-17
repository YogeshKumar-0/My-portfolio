import React from 'react';
import { motion } from "framer-motion";
import PageTransition from '../components/PageTransition';

function HomePage() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto min-h-[85vh] flex items-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

          <motion.div
            className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#64ffda] text-lg font-medium">
              Hi, my name is
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 tracking-tight">
              Yogesh Kumar Mallik.
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-400">
              I build things for the web.
            </h2>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              I'm a passionate full-stack developer dedicated to building responsive web applications, reusable UI components, and scalable backend systems.
            </p>

            <div className="pt-4">
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-transparent border border-[#64ffda] text-[#64ffda] font-medium text-md md:text-lg px-8 py-3 rounded-md transition duration-200 hover:bg-[#64ffda]/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.6)] focus:outline-none"
              >
                Check out my projects!
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/Profile-pic.jpg"
              alt="Yogesh Kumar Mallik"
              className="rounded-full object-cover w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-4 border-[#64ffda] shadow-[0_0_30px_rgba(100,255,218,0.3)]"
            />
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}

export default HomePage;