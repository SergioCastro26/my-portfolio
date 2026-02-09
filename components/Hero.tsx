import React, { useState, useEffect, useRef } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';
import MagneticButton from './MagneticButton';

type Props = {
    pageInfo: PageInfo | null;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function Hero({ pageInfo }: Props) {
  const TEXTS = [
    "Create Amazing Apps",
    "Build Intuitive UI",
    "Solve Complex Problems",
    "Innovate Every Day"
  ];

  const [index, setIndex] = useState(0);
  const [isInView, setIsInView] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 2500);

      return () => clearInterval(intervalId);
    }
  }, [isInView]);

  return (
    <div ref={heroRef} className='h-screen flex flex-col items-center justify-center text-center overflow-hidden relative px-4'>
      <BackgroundCircles />
      
      {/* Hero image centered with circles */}
      {pageInfo?.heroImage && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 flex items-center justify-center z-10 -translate-y-32 sm:-translate-y-36 md:-translate-y-[100px] lg:-translate-y-[120px]"
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-125 -translate-y-32 sm:-translate-y-36 md:-translate-y-[100px] lg:-translate-y-[140px]" />
            <div className="relative">
              <Image 
                className="rounded-full mx-auto object-cover border-2 border-zinc-700/50 shadow-2xl -translate-y-32 sm:-translate-y-36 md:-translate-y-[100px] lg:-translate-y-[140px]"
                src={urlFor(pageInfo.heroImage).url()}
                alt={pageInfo?.name || "Profile"}
                width={120}
                height={120}
                style={{
                  boxShadow: '0 0 40px rgba(251, 191, 36, 0.15), 0 0 80px rgba(251, 191, 36, 0.05)'
                }}
              />
              {/* Subtle ring decoration */}
              <div className="absolute -inset-2 rounded-full border border-zinc-700/30 -translate-y-32 sm:-translate-y-36 md:-translate-y-[100px] lg:-translate-y-[140px]" />
              <div className="absolute -inset-4 rounded-full border border-zinc-800/20 -translate-y-32 sm:-translate-y-36 md:-translate-y-[100px] lg:-translate-y-[140px]" />
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-20 flex flex-col items-center mt-24 sm:mt-28 md:mt-24 lg:mt-[100px]"
      >
        
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-[10px] sm:text-xs uppercase text-zinc-500 tracking-[4px] sm:tracking-[6px] font-medium">
            {pageInfo?.role}
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold px-2 sm:px-6 md:px-20 tracking-tighter">
            I love to{' '}
            <span className='text-accent'>
              {isInView && (
                <TextTransition springConfig={presets.wobbly} direction="up" inline>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              )}
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-6 flex flex-wrap justify-center gap-3">
          <Link href="#about">
            <MagneticButton className="heroButton">About</MagneticButton>
          </Link>
          <Link href="#experience">
            <MagneticButton className="heroButton">Experience</MagneticButton>
          </Link>
          <Link href="#skills">
            <MagneticButton className="heroButton">Skills</MagneticButton>
          </Link>
          <Link href="#projects">
            <MagneticButton className="heroButton">Projects</MagneticButton>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
