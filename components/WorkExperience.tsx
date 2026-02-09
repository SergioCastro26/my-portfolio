import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from "./ExperienceCard";
import { Experience } from '@/typings';

type Props = {
    experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-24"
    >
      {/* Title - same style as About */}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-24 section-heading"
      >
        Experience
      </motion.h3>

      {/* Experience cards carousel */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl"
      >
        <div className="flex space-x-6 overflow-x-scroll py-8 px-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience._id} experience={experience} index={index} />
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-6 gap-2">
          <div className="flex items-center gap-2 text-zinc-600 text-xs">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="tracking-wider uppercase">Scroll to explore</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default WorkExperience