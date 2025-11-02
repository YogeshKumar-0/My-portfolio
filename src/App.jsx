// src/App.jsx
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedPage from './components/AnimatedPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import CertificatesPage from './pages/CertificatesPage';

function App() {
  return (
    <Box>
      <NavBar />
      <Box p={4} minH="calc(100vh - 128px)">
        <Routes>
          <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
          <Route path="/education" element={<AnimatedPage><EducationPage /></AnimatedPage>} />
          <Route path="/skills" element={<AnimatedPage><SkillsPage /></AnimatedPage>} />
          <Route path="/certificates" element={<AnimatedPage><CertificatesPage /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;