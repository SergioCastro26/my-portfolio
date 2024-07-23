import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import myProfile from '@/images/myProfile.webp';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Develop",
      "Design"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles/>
      <Image className="relative rounded-full h-32 w-32 mx-auto object-cover" src={myProfile} alt={"myProfile"}></Image>
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#6b7b8a] pb-2 tracking-[12px] font-bold">Full Stack Developer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-20">
          <span className="mr-3">
            I like to {' '}
            <span className='text-[#fe6f61]'>
              {text}
            </span>
          </span>
          <Cursor cursorColor='#fe6f61'></Cursor>
        </h1>

        <div className="pt-5">
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
  )
}