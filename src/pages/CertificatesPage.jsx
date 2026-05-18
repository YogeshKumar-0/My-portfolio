import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ThreeDCard from '../components/ThreeDCard';
import Reveal from '../components/Reveal';

const certificateData = [
  {
    name: 'IBM Machine Learning Professional Certificate (2026)',
    url: 'https://coursera.org/',
    issuer: 'IBM',
  },
  {
    name: 'Software Engineering Specialization, HKUST (Coursera 2025)',
    url: 'https://coursera.org/verify/specialization/SL67DW63RDI8',
    issuer: 'HKUST',
  },
  {
    name: 'AWS Academy Data Engineering Virtual Internship, AICTE EduSkills (2024)',
    url: 'https://coursera.org/',
    issuer: 'AWS Academy',
  },
  {
    name: 'Oracle Cloud Infrastructure AI Foundations Associate',
    url: 'https://coursera.org/',
    issuer: 'Oracle',
  },
];

function CertificatesPage() {
  return (
    <div className="max-w-3xl mx-auto pt-10 pb-4 px-6">

      <Reveal>
        <div className="flex flex-col items-center mb-12">
          <span className="text-[#64ffda] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-100 tracking-tight">
            Certifications
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#64ffda] to-blue-500 rounded-full mt-5"></div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
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
                    <span className="text-gray-200 group-hover:text-[#64ffda] font-semibold text-[15px] md:text-base transition duration-150">
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
      </Reveal>

    </div>
  );
}

export default CertificatesPage;