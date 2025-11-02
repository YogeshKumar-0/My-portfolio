// src/components/ThreeDCard.jsx
import { Box } from '@chakra-ui/react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

// Wrap Box with motion so it can be animated
const MotionBox = motion.create(Box);

function ThreeDCard({ children }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12.5deg', '-12.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12.5deg', '12.5deg']);

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
    <MotionBox
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      // Use Chakra UI style props
      p={6}
      bg="rgba(23, 25, 35, 0.5)"
      backdropFilter="blur(10px)"
      border="1px"
      borderColor="rgba(255, 255, 255, 0.18)"
      borderRadius="lg"
      transition="all 0.3s ease"
      _hover={{
        borderColor: 'brand.500',
        boxShadow: '0 0 25px rgba(100, 255, 218, 0.4)',
      }}
    >
      <div style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </MotionBox>
  );
}

export default ThreeDCard;