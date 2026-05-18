import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

function ThreeDCard({ children }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      className="relative p-6 md:p-8 bg-[#112240]/60 backdrop-blur-xl border border-white/5 rounded-xl transition-all duration-300 hover:bg-[#112240]/90 hover:border-[#64ffda]/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] w-full group overflow-hidden text-left"
    >
      {/* Decorative inner glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-gradient-to-br from-[#64ffda]/5 to-transparent"></div>

      <div style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }} className="relative z-10 w-full">
        {children}
      </div>
    </motion.div>
  );
}

export default ThreeDCard;