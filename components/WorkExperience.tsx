import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from "./ExperienceCard";

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 } }
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#6b7b8a] text-2xl font-bold">
            Experience
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#A4805B]/80">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default WorkExperience