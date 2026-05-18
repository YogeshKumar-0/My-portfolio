import React from 'react';
import Reveal from '../components/Reveal';

function SkillsPage() {
  const marqueeSkills = [
    'React.js',
    'Next.js',
    'Spring Boot',
    'AWS',
    'Docker',
    'PostgreSQL',
    'TypeScript',
    'Tailwind CSS',
    'FastAPI',
    'Jenkins',
  ];

  const infiniteSkills = [...marqueeSkills, ...marqueeSkills];

  const skillGroups = [
    {
      title: 'Programming Languages & Core',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'TypeScript'],
    },
    {
      title: 'Backend & Databases',
      skills: [
        'Spring Boot',
        'Spring Security',
        'Hibernate',
        'Flask',
        'FastAPI',
        'PostgreSQL',
        'MongoDB',
        'Redis',
      ],
    },
    {
      title: 'Frontend & UI Frameworks',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap 5'],
    },
    {
      title: 'Cloud, DevOps & Tools',
      skills: ['AWS (EC2, S3, RDS)', 'Docker', 'Jenkins', 'CI/CD', 'Git & GitHub', 'Postman'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-4 flex flex-col items-center w-full text-left overflow-hidden">

      <Reveal>
        <div className="flex flex-col items-center mb-10">
          <span className="text-[#64ffda] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-100 tracking-tight">
            Technical Skills
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#64ffda] to-blue-500 rounded-full mt-5"></div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="w-[100vw] max-w-[100vw] bg-[#112240] border-y border-slate-800/80 py-5 mb-10 overflow-hidden relative">

          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a192f] to-transparent z-10"></div>

          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a192f] to-transparent z-10"></div>

          <div className="animate-marquee flex space-x-12 px-6 items-center">
            {infiniteSkills.map((skill, index) => (
              <span
                key={index}
                className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 hover:from-[#64ffda] hover:to-blue-500 transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4">

          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="bg-[#112240]/40 p-6 rounded-xl border border-slate-800/60 hover:border-[#64ffda]/30 transition-all text-left"
            >
              <h3 className="text-lg font-bold text-[#64ffda] mb-4 tracking-wide">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block text-sm font-medium bg-[#0a192f] text-gray-300 border border-slate-700/50 px-3.5 py-1.5 rounded-md hover:text-[#64ffda] hover:border-[#64ffda]/50 transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </Reveal>

    </div>
  );
}

export default SkillsPage;