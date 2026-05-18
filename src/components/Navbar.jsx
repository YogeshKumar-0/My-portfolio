import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

function Navbar({ activeSection, theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
      const navbarHeight = 80;

      const offsetTop =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === 'dark'
        ? 'aurora'
        : 'dark'
    );
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#64ffda] origin-left z-[60] shadow-[0_0_10px_#64ffda]"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: hidden ? -120 : 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut"
        }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <nav className="bg-[var(--navbar-bg)] backdrop-blur-xl px-6 md:px-14 h-20 flex items-center justify-between border-b border-[var(--border)] shadow-sm transition-all duration-500">
          <h1
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#64ffda] cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(100,255,218,0.5)]"
            onClick={() => scrollToSection('home')}
          >
            Yogesh Kumar Mallik
          </h1>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-[15px] font-medium tracking-wide capitalize transition-all duration-200 hover:text-[#64ffda] hover:scale-105 pb-1.5 border-b-2 ${isActive
                    ? 'text-[#64ffda] font-bold border-[#64ffda]'
                    : 'text-gray-300 border-transparent'
                    }`}
                >
                  {link.name}
                </button>
              );
            })}

            <button
              onClick={toggleTheme}
              className="relative w-14 h-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-105"
            >
              <motion.div
                animate={{
                  x: theme === 'aurora' ? 24 : 2,
                  rotate: theme === 'aurora' ? 180 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="absolute top-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#64ffda] to-[#8b5cf6] shadow-[0_0_14px_rgba(139,92,246,0.5)]"
              />
            </button>
          </div>

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

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-[#112240] border-l border-slate-800 z-50 p-8 pt-20 md:hidden flex flex-col space-y-8 shadow-2xl"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-gray-300 hover:text-[#64ffda]"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.id)}
                      className={`text-2xl text-left tracking-wide transition-all duration-200 hover:text-[#64ffda] hover:translate-x-2 ${isActive ? 'text-[#64ffda] font-bold' : 'text-gray-300'
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
    </>
  );
}

export default Navbar;