import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function BackgroundCircles() {
  const prefersReducedMotion = useReducedMotion();

  // Skip heavy animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 flex justify-center items-center -translate-y-16 sm:-translate-y-20 md:-translate-y-[100px] lg:-translate-y-[120px]">
        <div className="absolute border border-zinc-800 rounded-full h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] opacity-30"/>
        <div className="absolute border border-zinc-800 rounded-full h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[300px] md:w-[300px] opacity-30"/>
        <div className="absolute border border-zinc-800 rounded-full h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[450px] md:w-[450px] opacity-30"/>
        <div className="absolute border border-accent/20 rounded-full h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] md:h-[600px] md:w-[600px] opacity-20"/>
        <div className="absolute border border-zinc-800 rounded-full h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[750px] md:w-[750px] opacity-20"/>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 flex justify-center items-center -translate-y-16 sm:-translate-y-20 md:-translate-y-[100px] lg:-translate-y-[120px]"
    >
      {/* Concentric circles centered with the hero image */}
      <motion.div 
        className="absolute border border-zinc-800 rounded-full h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute border border-zinc-800 rounded-full h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[300px] md:w-[300px]"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div 
        className="absolute border border-zinc-800 rounded-full h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[450px] md:w-[450px]"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div 
        className="absolute border border-accent/20 rounded-full h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] md:h-[600px] md:w-[600px]"
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <div className="absolute border border-zinc-800/50 rounded-full h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[750px] md:w-[750px] opacity-20"/>
    </motion.div>
  );
}