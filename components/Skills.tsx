import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "@/typings";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
    skills: SkillType[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function Skills({ skills }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-16 md:py-24 md:justify-center"
    >
      {/* Title - same style as About */}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-heading mb-6 md:mb-0 md:absolute md:top-24"
      >
        Skills
      </motion.h3>

      {/* Skills grid with glass container */}
      <motion.div 
        className="glass-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl border border-zinc-800/50 max-w-4xl w-full mx-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 60px rgba(251, 191, 36, 0.03)'
        }}
      >
        {/* Decorative accent */}
        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills?.map((skill, index) => (
            <motion.div key={skill._id} variants={itemVariants}>
              <Skill skill={skill} directionLeft={index >= skills.length / 2} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom decorative text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-6 sm:mt-10 text-zinc-600 text-xs tracking-widest uppercase"
      >
        Always learning · Always growing
      </motion.p>
    </motion.div>
  );
}
