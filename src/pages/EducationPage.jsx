import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Pimpri Chinchwad University, Pune',
    years: '2023 - 2027 (Expected)',
    score: '8.5 / 10.00 GPA',
  },
  {
    degree: 'Higher Secondary Schooling (Class XII)',
    institution: 'D.A.V. Public School, Bariatu, Ranchi',
    years: '2021 - 2023',
    score: '77%',
  },
  {
    degree: 'Secondary Schooling (Class X)',
    institution: 'D.A.V. Public School, Bariatu, Ranchi',
    years: '2011 - 2021',
    score: '90%',
  },
];

function EducationPage() {
  return (
    <div className="max-w-3xl mx-auto pt-10 pb-4 px-6 w-full text-left">

      <Reveal>
        <div className="flex flex-col items-center mb-14">
          <span className="text-[#64ffda] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Academic
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-100 tracking-tight">
            Education Journey
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#64ffda] to-blue-500 rounded-full mt-5"></div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="border-l-2 border-slate-700/50 ml-4 md:ml-6 relative">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-8 ml-10 relative group"
            >

              <div className="absolute -left-[49px] top-1 h-5 w-5 rounded-full border-4 border-[#0a192f] bg-slate-500 group-hover:bg-[#64ffda] group-hover:shadow-[0_0_15px_#64ffda] transition-all duration-300"></div>

              <div className="bg-[#112240]/60 backdrop-blur-md border border-slate-800/60 p-6 rounded-lg shadow-xl group-hover:border-[#64ffda]/30 transition-all duration-300 transform group-hover:-translate-y-1">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">

                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-[#64ffda] transition-colors">
                    {edu.degree}
                  </h3>

                  <span className="text-sm font-mono text-[#64ffda] bg-[#64ffda]/10 px-3 py-1 rounded mt-2 md:mt-0 w-fit shrink-0">
                    {edu.years}
                  </span>

                </div>

                <p className="font-semibold text-gray-400 mb-3">
                  {edu.institution}
                </p>

                <div className="inline-block bg-slate-800 text-gray-300 font-bold px-3 py-1.5 rounded text-sm border border-slate-700">
                  Grade: {edu.score}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </Reveal>

    </div>
  );
}

export default EducationPage;