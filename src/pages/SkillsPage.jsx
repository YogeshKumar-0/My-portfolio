import React from 'react';
import PageTransition from '../components/PageTransition';

function SkillsPage() {
  const skillGroups = [
    {
      title: 'Programming Languages & Core',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'TypeScript']
    },
    {
      title: 'Backend & Databases',
      skills: ['Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate', 'JPA', 'Flask', 'FastAPI', 'RESTful APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Frontend & UI Frameworks',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap 5']
    },
    {
      title: 'Cloud, DevOps & Tools',
      skills: ['AWS (EC2, S3, RDS)', 'Docker', 'Jenkins', 'CI/CD', 'Git & GitHub', 'Postman', 'Maven']
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-10 px-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-100 mb-10">Skills</h1>

        <div className="w-full max-w-2xl bg-[#112240] p-6 md:p-8 rounded-xl border border-slate-800 shadow-xl space-y-6">
          {skillGroups.map((group, index) => (
            <div key={group.title}>
              <h3 className="text-lg font-bold text-[#64ffda] mb-3">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium bg-slate-900/60 text-gray-300 border border-slate-800 px-3.5 py-1.5 rounded-full hover:border-[#64ffda]/40 transition duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {index < skillGroups.length - 1 && (
                <hr className="my-5 border-slate-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default SkillsPage;