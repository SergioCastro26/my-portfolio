import React, { useRef } from 'react'
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity';

type Props = {
    projects: Project[];
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-6 md:p-16 h-auto">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="spotlight-card p-6 md:p-10 max-w-3xl w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          className="w-full max-h-[280px] object-contain rounded-xl mb-8"
          src={urlFor(project.image).url()}
          alt={project.title}
        />
        <div className="space-y-5">
          <div className="text-center">
            <span className="text-zinc-500 text-sm font-medium tracking-wide">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <h4 className="text-2xl md:text-3xl font-semibold mt-2 tracking-tighter">
              {project?.title}
            </h4>
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            {project?.technologies.map((technology) => (
              <div 
                key={technology._id}
                className="h-9 w-9 rounded-lg bg-zinc-100 p-1.5 border border-zinc-700/50"
              >
                <img 
                  className="w-full h-full object-contain"
                  src={urlFor(technology.image).url()} 
                  alt={technology.title} 
                />
              </div>
            ))}
          </div>

          <p className="text-zinc-400 text-center leading-relaxed text-sm">
            {project?.summary}
          </p>
          
          {project?.linkToBuild && (
            <div className="flex justify-center pt-2">
              <a 
                href={project.linkToBuild}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                View Project →
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen flex flex-col items-center justify-center z-0 py-24"
    >
      {/* Title - same style as About */}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-24 section-heading"
      >
        Projects
      </motion.h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700 pb-8 mt-8">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project._id} 
            project={project} 
            index={i} 
            total={projects.length} 
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center mt-4 gap-2"
      >
        <div className="flex items-center gap-2 text-zinc-600 text-xs">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="tracking-wider uppercase">Swipe to explore</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="w-full absolute top-[30%] bg-accent/[0.02] left-0 h-[500px] -skew-y-12 pointer-events-none" />
    </motion.div>
  )
}