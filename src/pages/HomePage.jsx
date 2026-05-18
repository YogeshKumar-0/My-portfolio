import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

function HomePage() {
  const roles = [
    "Full-Stack Developer.",
    "React Engineer.",
    "Backend Developer.",
    "IoT Systems Builder."
  ];
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100;
    const timeout = setTimeout(() => {
      const fullText = roles[roleIndex];

      if (!isDeleting && currentRole === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentRole(fullText.substring(0, currentRole.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentRole, isDeleting, roleIndex, roles]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto min-h-[92vh] flex items-center pt-24 md:pt-28 px-6 text-left w-full z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

        <motion.div
          className="flex flex-col space-y-6 items-start w-full text-left"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#64ffda] text-lg font-mono tracking-wide">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-100 tracking-tight leading-[1.05] block">
            Yogesh Kumar Mallik.
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 flex items-center min-h-[72px] flex-wrap">
            I'm a <span className="text-[#64ffda] ml-2">{currentRole}</span>
            <span className="animate-pulse w-[3px] h-10 bg-[#64ffda] ml-1 inline-block"></span>
          </h2>
          <p className="text-[17px] md:text-lg text-gray-400 max-w-2xl leading-relaxed mt-2 block">
            Full-stack developer focused on scalable web applications, modern UI systems, and IoT-integrated solutions. Experienced with React.js, Spring Boot, PostgreSQL, and performance-oriented backend architectures.
          </p>

          <div className="pt-8 block">
            <button
              onClick={scrollToProjects}
              className="inline-block bg-transparent border-2 border-[#64ffda] text-[#64ffda] font-mono font-medium text-md md:text-lg px-8 py-4 rounded transition duration-300 hover:bg-[#64ffda]/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] focus:outline-none tracking-wide"
            >
              View my Work
            </button>
          </div>

          <div className="flex gap-4 pt-2 flex-wrap">
            <a
              href="/Yogesh_Kumar_Mallik_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm md:text-base text-gray-300 hover:text-[#64ffda] transition duration-200 border border-slate-700 hover:border-[#64ffda]/50 px-5 py-2 rounded-lg"
            >
              View Resume
            </a>

            <a
              href="https://github.com/YogeshKumar-0"
              target="_blank"
              rel="noreferrer"
              className="text-sm md:text-base text-gray-300 hover:text-[#64ffda] transition duration-200 border border-slate-700 hover:border-[#64ffda]/50 px-5 py-2 rounded-lg"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end w-full"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group block">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#64ffda] to-blue-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

            <img
              src="/Profile-pic.jpg"
              alt="Yogesh Kumar Mallik"
              className="relative rounded-full object-cover w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] border-4 border-[#112240] group-hover:border-[#64ffda] transition-colors duration-300 z-10"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default HomePage;