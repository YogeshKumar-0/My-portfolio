import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SnowBackground from './components/SnowBackground';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import CertificatesPage from './pages/CertificatesPage';
import AboutPage from './pages/AboutPage';

import { useActiveSection } from './components/useActiveSection';

export default function App() {
  const sectionIds = ['home', 'projects', 'education', 'skills', 'certificates', 'about'];
  //const activeSection = useActiveSection(sectionIds);
  const activeSection = "home";
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (theme === 'aurora') {
      document.documentElement.classList.add('aurora');
    } else {
      document.documentElement.classList.remove('aurora');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen text-slate-100 relative overflow-x-hidden selection:bg-[#64ffda]/30 selection:text-[#64ffda]">
      {/* Background canvas layer */}
      <SnowBackground theme={theme} />

      {/* Synchronized Header Tracker */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Container - max-w aur mx-auto layout widths ko squeeze hone se prevent karega */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">

        <div id="home" className="min-h-screen flex items-center pt-8 pb-4">
          <HomePage />
        </div>

        <div
          id="projects"
          className="py-10 border-t border-slate-800/60"
        >
          <ProjectsPage />
        </div>

        <div
          id="education"
          className="py-10 border-t border-slate-800/60"
        >
          <EducationPage />
        </div>

        <div
          id="skills"
          className="py-10 border-t border-slate-800/60"
        >
          <SkillsPage />
        </div>

        <div
          id="certificates"
          className="py-10 border-t border-slate-800/60"
        >
          <CertificatesPage />
        </div>

        <div
          id="about"
          className="py-10 border-t border-slate-800/60 mb-16"
        >
          <AboutPage />
        </div>
      </main>

      <Footer />
    </div>
  );
}