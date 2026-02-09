import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
    pageInfo: PageInfo | null;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-24"
    >
      <motion.h3 
        variants={itemVariants}
        className="absolute top-24 section-heading"
      >
        About
      </motion.h3>

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image with glow effect */}
        <motion.div 
          variants={itemVariants}
          className="relative flex-shrink-0"
        >
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-110 md:scale-125" />
          <div className="relative">
            <img
              src={urlFor(pageInfo?.profilePicture).url()}
              alt={pageInfo?.name || "Profile"}
              className="relative z-10 w-48 h-48 md:w-72 md:h-80 xl:w-80 xl:h-96 
                rounded-full md:rounded-2xl object-cover 
                border border-zinc-800/50 shadow-2xl"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(251, 191, 36, 0.08)'
              }}
            />
            {/* Decorative corner accent - desktop only */}
            <div className="hidden md:block absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-2xl" />
            <div className="hidden md:block absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-zinc-700/50 rounded-tl-2xl" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          variants={itemVariants}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <div className="space-y-2">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Get to know me
            </p>
            <h4 className="text-3xl md:text-4xl font-semibold tracking-tight">
              This is what I am
            </h4>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50">
            <p className="text-base md:text-lg leading-relaxed text-zinc-400">
              {pageInfo?.backgroundInformation}
            </p>
          </div>

          {/* Stats or highlights - optional decorative element */}
          <div className="flex justify-center md:justify-start gap-8 pt-4">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-accent">5+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Years Exp</p>
            </div>
            <div className="w-px bg-zinc-800" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground">19+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
