import React from 'react';
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
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="bg-[#0a192f] min-h-screen text-slate-100 relative overflow-x-hidden selection:bg-[#64ffda]/30 selection:text-[#64ffda]">
      {/* Background canvases */}
      <SnowBackground />

      {/* Synchronized Header Tracker */}
      <Navbar activeSection={activeSection} />

      <main className="w-full">
        {/* scroll-mt-16 maps margin offset for the fixed layout navbar */}
        <div id="home" className="min-h-[90vh] flex items-center scroll-mt-16">
          <HomePage />
        </div>

        <div id="projects" className="py-16 border-t border-slate-800/60 scroll-mt-16">
          <ProjectsPage />
        </div>

        <div id="education" className="py-16 border-t border-slate-800/60 scroll-mt-16">
          <EducationPage />
        </div>

        <div id="skills" className="py-16 border-t border-slate-800/60 scroll-mt-16">
          <SkillsPage />
        </div>

        <div id="certificates" className="py-16 border-t border-slate-800/60 scroll-mt-16">
          <CertificatesPage />
        </div>

        <div id="about" className="py-16 border-t border-slate-800/60 scroll-mt-16 mb-12">
          <AboutPage />
        </div>
      </main>

      <Footer />
    </div>
  );
}