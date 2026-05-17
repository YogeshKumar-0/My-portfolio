import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ThreeDCard from '../components/ThreeDCard';
import PageTransition from '../components/PageTransition';

const projects = [
  {
    title: 'MedGuard AI | AI-Powered Clinical Risk Detection Platform',
    description: 'Engineered a full-stack AI healthcare analysis platform using FastAPI, Next.js, and Groq LLMs for real-time clinical risk assessment. Developed asynchronous multi-agent diagnostic workflows for symptom analysis and drug interaction detection[cite: 31, 32, 33].',
    tags: ['Python', 'FastAPI', 'Groq API', 'Next.js', 'TypeScript', 'Tailwind'],
    codeUrl: 'https://github.com/YogeshKumar-0',
    liveUrl: 'https://yogesh-mallik.vercel.app/',
  },
  {
    title: 'Styora | Full-Stack E-Commerce Platform',
    description: 'Architected a scalable full-stack e-commerce application using Spring Boot and React with JWT authentication[cite: 66, 67]. Migrated application data to cloud-hosted PostgreSQL (Supabase) and optimized Vercel CI/CD pipelines[cite: 68, 69].',
    tags: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'Supabase', 'JWT'],
    codeUrl: 'https://github.com/YogeshKumar-0',
    liveUrl: 'https://yogesh-mallik.vercel.app/',
  },
  {
    title: 'IoT-Integrated Wildlife Monitoring System',
    description: 'Architected a distributed IoT system with ESP32-CAM nodes and PIR sensors; reduced idle power consumption by 65% via Deep-Sleep optimization and achieved sub-150ms inference over local Wi-Fi using YOLOv5[cite: 56, 59, 60, 61].',
    tags: ['Python', 'YOLOv5', 'ESP32', 'OpenCV', 'Flask', 'C++'],
    codeUrl: 'https://github.com/YogeshKumar-0/Animal-Detection',
    liveUrl: '#',
  },
];

function ProjectsPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-center text-gray-100 mb-10">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ThreeDCard key={index}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#64ffda] mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-slate-800 text-gray-300 px-2.5 py-1 rounded-md border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4 pt-2">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-gray-200 text-xs font-semibold px-4 py-2 rounded transition border border-slate-700"
                  >
                    <FaGithub /> View Code
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20 text-xs font-semibold px-4 py-2 rounded transition border border-[#64ffda]/30"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default ProjectsPage;