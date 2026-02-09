import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function BackgroundCircles() {
  const prefersReducedMotion = useReducedMotion();

  // Skip heavy animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 flex justify-center items-center -translate-y-[120px]">
        <div className="absolute border border-zinc-800 rounded-full h-[200px] w-[200px] opacity-30"/>
        <div className="absolute border border-zinc-800 rounded-full h-[300px] w-[300px] opacity-30"/>
        <div className="absolute border border-zinc-800 rounded-full h-[500px] w-[500px] opacity-30"/>
        <div className="absolute border border-accent/20 rounded-full h-[650px] w-[650px] opacity-20"/>
        <div className="absolute border border-zinc-800 rounded-full h-[800px] w-[800px] opacity-20"/>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 flex justify-center items-center -translate-y-[120px]"
    >
      {/* Concentric circles centered with the hero image */}
      <motion.div 
        className="absolute border border-zinc-800 rounded-full h-[200px] w-[200px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute border border-zinc-800 rounded-full h-[300px] w-[300px]"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div 
        className="absolute border border-zinc-800 rounded-full h-[450px] w-[450px]"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div 
        className="absolute border border-accent/20 rounded-full h-[600px] w-[600px]"
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <div className="absolute border border-zinc-800/50 rounded-full h-[750px] w-[750px] opacity-20"/>
    </motion.div>
  );
}