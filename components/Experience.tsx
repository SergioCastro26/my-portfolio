import React, { useState } from "react";
import { motion } from "framer-motion";
import ReacTooltip from "react-tooltip";
import Image from "next/image";

type Props = {};

export default function Experience({}: Props) {
  const [skills, setSkills] = useState([]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      className="flex flex-col relative overflow-hidden h-screen text-left
      md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#6b7b8a] text-2xl font-bold">
        Experience
      </h3>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {/* {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <Image src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </motion.div>
  );
}
