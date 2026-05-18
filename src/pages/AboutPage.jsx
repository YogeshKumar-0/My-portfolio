import React from 'react';
import {
  FaCamera,
  FaPlane,
  FaBook,
  FaGamepad,
  FaUtensils,
} from 'react-icons/fa';

import ThreeDCard from '../components/ThreeDCard';
import Reveal from '../components/Reveal';

function AboutPage() {
  const hobbies = [
    { icon: <FaCamera className="text-2xl" />, label: 'Photography' },
    { icon: <FaPlane className="text-2xl" />, label: 'Traveling' },
    { icon: <FaBook className="text-2xl" />, label: 'Reading' },
    { icon: <FaGamepad className="text-2xl" />, label: 'Gaming' },
    { icon: <FaUtensils className="text-2xl" />, label: 'Cooking' },
  ];

  return (
    <div className="max-w-4xl mx-auto pt-10 pb-4 px-4 w-full text-left">

      <div className="flex flex-col space-y-12 items-center w-full">

        <Reveal>
          <div className="flex flex-col items-center">

            <span className="text-[#64ffda] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
              Introduction
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-100 tracking-tight">
              About Me
            </h2>

            <div className="w-24 h-[3px] bg-gradient-to-r from-[#64ffda] to-blue-500 rounded-full mt-5"></div>

          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

            <ThreeDCard>
              <div className="text-left flex flex-col space-y-3">

                <h3 className="text-xl font-bold text-[#64ffda] block">
                  My Story
                </h3>

                <p className="text-md text-gray-300 leading-relaxed block">
                  I'm Yogesh Kumar Mallik, a Computer Science undergraduate focused on full-stack development, scalable backend systems, and modern frontend engineering. I enjoy building performant applications that combine clean UI architecture with efficient APIs and real-time capabilities.
                </p>

              </div>
            </ThreeDCard>

            <ThreeDCard>
              <div className="text-left flex flex-col space-y-3">

                <h3 className="text-xl font-bold text-[#64ffda] block">
                  Professional Target
                </h3>

                <p className="text-md text-gray-300 leading-relaxed block">
                  My current focus is strengthening expertise in React.js, Spring Boot, cloud infrastructure, and distributed systems. I aim to contribute to high-impact engineering teams working on scalable products and performance-driven software solutions.
                </p>

              </div>
            </ThreeDCard>

          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="w-full block pt-6">

            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-100 tracking-wide block">
              My Hobbies
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-300 w-full">

              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-[#112240]/40 border border-slate-800/40 rounded-xl transition-all duration-200 transform hover:scale-110 hover:text-[#64ffda] cursor-default text-center space-y-3"
                >
                  {hobby.icon}

                  <span className="text-sm font-medium block">
                    {hobby.label}
                  </span>

                </div>
              ))}

            </div>

          </div>
        </Reveal>

      </div>
    </div>
  );
}

export default AboutPage;