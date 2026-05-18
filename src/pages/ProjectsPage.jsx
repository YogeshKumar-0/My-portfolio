import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ThreeDCard from '../components/ThreeDCard';
import Reveal from '../components/Reveal';

const projects = [
  {
    title: 'MedGuard AI',
    description:
      'AI-powered healthcare risk analysis platform built with FastAPI, Next.js, and Groq LLMs featuring asynchronous diagnostic workflows and real-time clinical assessment.',
    tags: ['Python', 'FastAPI', 'Groq API', 'Next.js', 'TypeScript'],
    codeUrl: 'https://github.com/YogeshKumar-0/MedGuardAI',
    liveUrl: 'http://medguardlive.vercel.app/',
  },
  {
    title: 'Styora E-Commerce Platform',
    description:
      'Full-stack e-commerce platform using Spring Boot and React with JWT authentication, PostgreSQL integration, and optimized CI/CD deployment pipelines.',
    tags: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'JWT'],
    codeUrl: 'https://github.com/YogeshKumar-0/Styora',
    liveUrl: 'http://styora.vercel.app/',
  },
  {
    title: 'Wildlife Monitoring System',
    description:
      'Distributed IoT wildlife monitoring system using ESP32-CAM nodes, YOLOv5 inference, PIR sensors, and low-power optimization for real-time detection.',
    tags: ['Python', 'YOLOv5', 'ESP32', 'OpenCV', 'Flask'],
    codeUrl: 'https://github.com/YogeshKumar-0/Animal-Detection',
    liveUrl: '#',
  },
];

function ProjectsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto pt-10 pb-4 px-4 text-left">

      <Reveal>
        <div className="flex flex-col items-center mb-14">
          <span className="text-[#64ffda] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-100 tracking-tight">
            Featured Projects
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#64ffda] to-blue-500 rounded-full mt-5"></div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

          {projects.map((project, index) => (
            <ThreeDCard key={index}>
              <div className="flex flex-col h-full justify-between space-y-4 text-left">

                <div className="block w-full">
                  <h3 className="text-2xl font-bold text-[#64ffda] mb-3 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-[15px] mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 w-full pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[11px] font-semibold bg-slate-800/90 text-gray-300 px-2.5 py-1 rounded border border-slate-700/50 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/40 w-full">

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-gray-200 text-[12px] font-bold px-4 py-2.5 rounded-lg transition duration-200 border border-slate-700 hover:border-[#64ffda]/30"
                  >
                    <FaGithub />
                    View Code
                  </a>

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20 text-[12px] font-bold px-4 py-2.5 rounded-lg transition duration-200 border border-[#64ffda]/30"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </ThreeDCard>
          ))}

        </div>
      </Reveal>

    </div>
  );
}

export default ProjectsPage;