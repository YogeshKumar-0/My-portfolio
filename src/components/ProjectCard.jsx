import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

function ProjectCard({ title, description, imageUrl, tags, liveUrl, codeUrl }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col space-y-4 bg-[#112240]/40 border border-slate-800 rounded-lg p-4 items-start w-full"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-md object-cover h-[200px] w-full border border-slate-800"
        />
      )}
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

      {/* Dynamic Tags Stack */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold bg-[#64ffda]/10 text-[#64ffda] px-2.5 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Trigger Buttons Stack */}
      <div className="flex space-x-3 pt-2 w-full">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#64ffda] border border-[#64ffda] hover:bg-[#64ffda]/10 px-4 py-2 rounded transition duration-150"
          >
            Live Demo
          </a>
        )}
        <a
          href={codeUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-gray-200 px-4 py-2 rounded transition duration-150 border border-slate-700"
        >
          <FaGithub /> View Code
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;