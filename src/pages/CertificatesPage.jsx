import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ThreeDCard from '../components/ThreeDCard';
import PageTransition from '../components/PageTransition';

const certificateData = [
  {
    name: 'IBM Machine Learning Professional Certificate (2026)',
    url: 'https://coursera.org/',
    issuer: 'IBM'
  },
  {
    name: 'Software Engineering Specialization, HKUST (Coursera 2025)',
    url: 'https://coursera.org/verify/specialization/SL67DW63RDI8',
    issuer: 'HKUST'
  },
  {
    name: 'AWS Academy Data Engineering Virtual Internship, AICTE EduSkills (2024)',
    url: 'https://coursera.org/',
    issuer: 'AWS Academy'
  },
  {
    name: 'Oracle Cloud Infrastructure AI Foundations Associate',
    url: 'https://coursera.org/',
    issuer: 'Oracle'
  }
];

function CertificatesPage() {
  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-center text-gray-100 mb-10">Certificates</h1>
        <div className="space-y-4">
          {certificateData.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="block w-full no-underline group"
            >
              <ThreeDCard>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-200 group-hover:text-[#64ffda] font-medium transition duration-150">
                      {cert.name}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-[#64ffda] transition duration-150 w-4 h-4 flex-shrink-0 ml-4" />
                </div>
              </ThreeDCard>
            </a>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default CertificatesPage;