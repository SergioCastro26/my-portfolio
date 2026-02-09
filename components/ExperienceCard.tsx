import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
    index?: number;
}

function ExperienceCard({ experience, index = 0 }: Props) {
  return (
    <article 
      className="relative flex flex-col rounded-3xl items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center glass-card border border-zinc-800/50 overflow-hidden group hover:border-zinc-700/50 transition-all duration-300"
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      
      {/* Header with company image */}
      <div className="w-full p-6 md:p-8 flex flex-col items-center text-center border-b border-zinc-800/30">
        <div className="relative mb-4">
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border border-zinc-700/50"
            src={urlFor(experience.companyImage).url()}
            alt={experience.company}
          />
        </div>
        
        <h4 className="text-xl md:text-2xl font-semibold tracking-tight">{experience.company}</h4>
        <p className="text-accent font-medium mt-1">{experience.jobTitle}</p>
        
        {/* Date badge */}
        <div className="mt-3 px-4 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/30">
          <p className="text-xs text-zinc-400 tracking-wide">
            {new Date(experience.dateStarted).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} — {" "}
            {experience.isCurrentlyWorkingHere
              ? <span className="text-accent">Present</span>
              : new Date(experience.dateEnded).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="w-full p-6 md:p-8 space-y-5">
        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-2">
          {experience.technologies.map(technology => (
            <div 
              key={technology._id}
              className="w-9 h-9 rounded-lg bg-zinc-100 p-1.5 border border-zinc-700/30"
            >
              <img 
                className="w-full h-full object-contain"
                src={urlFor(technology.image).url()} 
                alt={technology.title} 
              />
            </div>
          ))}
        </div>

        {/* Points */}
        <ul className="space-y-3 text-sm md:text-base text-zinc-400 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700">
          {experience.points.map((point, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-accent mt-1.5 flex-shrink-0">•</span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard