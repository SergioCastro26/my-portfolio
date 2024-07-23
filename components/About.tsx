import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import myGf from '@/images/gf.jpg';

type Props = {}

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#6b7b8a] text-2xl font-bold">About</h3>

      {/* <motion.div 
        initial={{

        }}
      >
        <Image src={myGf} alt={""}></Image>
      </motion.div> */}
    </div>
  )
}

export default About