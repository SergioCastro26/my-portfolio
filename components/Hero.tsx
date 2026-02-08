import React, { useState, useEffect, useRef } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import myProfile from '@/images/myProfile.webp';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo | null;
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
      }, 1500); // Cambia cada 3 segundos

      return () => clearInterval(intervalId); // Limpieza del intervalo
    }
  }, [isInView]);

  return (
    <div ref={heroRef} className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      {pageInfo?.heroImage && (
        <Image 
          className="relative rounded-full mx-auto object-cover" 
          src={urlFor(pageInfo.heroImage).url()} 
          alt="myProfile"
          width={128}
          height={128}
        />
      )}
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#6b7b8a] pb-2 tracking-[12px] font-bold">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-20">
          <span className="mr-3">
            I love to {' '}
            <span className='text-[#fe6f61]'>
              {isInView && (
                <TextTransition springConfig={presets.wobbly} direction="up">
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              )}
            </span>
          </span>
        </h1>

        <div className="pt-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
