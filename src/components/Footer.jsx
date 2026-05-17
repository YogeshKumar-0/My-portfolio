import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-[#0a192f] py-8 px-8 mt-16 border-t border-slate-800/60">
      <div className="flex flex-col items-center space-y-4">
        {/* Social Icons Container */}
        <div className="flex items-center space-x-6 text-gray-400">
          <a
            href="https://github.com/YogeshKumar-0"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-200 hover:text-[#64ffda] hover:scale-125"
          >
            <FaGithub size="24px" />
          </a>
          <a
            href="https://www.linkedin.com/in/yogesh-kumar-mallik-1254281b2/"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-200 hover:text-[#64ffda] hover:scale-125"
          >
            <FaLinkedin size="24px" />
          </a>
          <a
            href="https://instagram.com/yogesh_kumar.05"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-200 hover:text-[#64ffda] hover:scale-125"
          >
            <FaInstagram size="24px" />
          </a>
        </div>
        {/* Copyright Area */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Yogesh Kumar Mallik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;