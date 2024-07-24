import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import about from "@/images/about.webp";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#6b7b8a] text-2xl font-bold">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
      >
        <Image
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[3200px] md:h-[400px] xl:w-[3200px] xl:h-[400px]"
          src={about}
          alt={""}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">This is what I am:</h4>
        <p className="text-base">
          I am a passionate Full-Stack Developer with a solid technical
          background and experience in creating web and mobile applications. I
          consider myself a proactive individual with a positive attitude,
          patience, and a strong inclination towards teamwork. I firmly believe
          in the importance of staying up-to-date with new technologies and
          continuously enhancing my skill set. My focus is on delivering
          efficient and high-quality technological solutions, quickly adapting
          to changes, and solving problems creatively. I regard myself as a
          professional with effective communication skills, critical thinking,
          and attention to detail, which enables me to tackle complex projects
          and collaborate effectively with multidisciplinary teams.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
