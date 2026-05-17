import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'About', id: 'about' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full"
    >
      <nav className="bg-[#0a192f]/85 backdrop-blur-md px-6 md:px-12 h-16 flex items-center justify-between border-b border-slate-800 shadow-sm">
        {/* Brand Logo */}
        <h1
          className="text-xl font-bold tracking-tight text-[#64ffda] cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Yogesh Kumar Mallik
        </h1>

        {/* 1. Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm tracking-wide capitalize transition-all duration-200 hover:text-[#64ffda] hover:scale-105 pb-1 border-b-2 ${isActive
                    ? 'text-[#64ffda] font-bold border-[#64ffda]'
                    : 'text-gray-300 border-transparent'
                  }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* 2. Mobile Menu Toggle Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-gray-300 hover:text-[#64ffda] p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* 3. Mobile Collapsible Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-[#0a192f]/95 border-r border-slate-800 z-50 p-6 pt-16 md:hidden flex flex-col space-y-6"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-[#64ffda]"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-xl text-left transition-all duration-200 hover:text-[#64ffda] ${isActive ? 'text-[#64ffda] font-bold' : 'text-gray-300'
                      }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;