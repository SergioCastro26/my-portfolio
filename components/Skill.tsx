import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '@/typings';
import { urlFor } from '@/sanity';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
}

function Skill({ skill, directionLeft }: Props) {
  const prefersReducedMotion = useReducedMotion();

  // Reduce animation distance for better performance, skip if reduced motion preferred
  const initialX = prefersReducedMotion ? 0 : (directionLeft ? -50 : 50);

  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
          initial={{
            x: initialX,
            opacity: prefersReducedMotion ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={urlFor(skill.image).url()}
          alt={skill.title}
          className="rounded-full border border-zinc-800 object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out bg-zinc-100 p-0.5"
        />
        <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-accent h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 xl:w-28 xl:h-28 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white opacity-100">
                    {skill.progress}%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill