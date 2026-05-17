import React from 'react';
import { FaCamera, FaPlane, FaBook, FaGamepad, FaUtensils } from 'react-icons/fa';
import ThreeDCard from '../components/ThreeDCard';
import PageTransition from '../components/PageTransition';

function AboutPage() {
  const hobbies = [
    { icon: <FaCamera size="40px" />, label: 'Photography' },
    { icon: <FaPlane size="40px" />, label: 'Traveling' },
    { icon: <FaBook size="40px" />, label: 'Reading' },
    { icon: <FaGamepad size="40px" />, label: 'Gaming' },
    { icon: <FaUtensils size="40px" />, label: 'Cooking' },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-10 px-6">
        <div className="flex flex-col space-y-12 items-center">
          <h2 className="text-3xl font-bold text-gray-100 border-b border-[#64ffda]/20 pb-2">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <ThreeDCard>
              <h3 className="text-xl font-bold mb-4 text-[#64ffda]">My Story</h3>
              <p className="text-md text-gray-300 leading-relaxed">
                Hello! I'm Yogesh Kumar Mallik, a Computer Science undergraduate currently pursuing my degree at Pimpri Chinchwad University, Pune. I specialize in crafting robust web architectures, bridging the gap between dynamic frontend layers and highly optimized backend microservices.
              </p>
            </ThreeDCard>

            <ThreeDCard>
              <h3 className="text-xl font-bold mb-4 text-[#64ffda]">Professional Target</h3>
              <p className="text-md text-gray-300 leading-relaxed">
                I have hands-on experience working with tools like React.js, Next.js, and Spring Boot. My goal is to build secure, scalable solutions that consume optimal resources while offering real-time performance updates and sub-millisecond responsiveness.
              </p>
            </ThreeDCard>
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-100">My Hobbies</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-300">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 transition-all duration-200 transform hover:scale-110 hover:text-[#64ffda] cursor-default"
                >
                  {hobby.icon}
                  <span className="text-sm font-medium">{hobby.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default AboutPage;