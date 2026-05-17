import React from 'react';
import ThreeDCard from '../components/ThreeDCard';
import PageTransition from '../components/PageTransition';

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
    <PageTransition>
      <div className="max-w-2xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-center text-gray-100 mb-10">Education</h1>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <ThreeDCard key={index}>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#64ffda]">{edu.degree}</h3>
                <p className="font-semibold text-gray-200">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm pt-2 text-gray-400">
                  <span>{edu.years}</span>
                  <span className="bg-slate-800 text-gray-300 font-semibold px-2.5 py-1 rounded border border-slate-700">
                    {edu.score}
                  </span>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default EducationPage;