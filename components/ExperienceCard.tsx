import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#445e78] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://res.cloudinary.com/dphpfdsk3/image/upload/v1769876692/profile-hand-drawn_qofhyp.png"
            alt="Profile"
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Sergio Luis</h4>
            <p className="font-bold text-2xl mt-1">Full Stack Developer</p>
            <div className="flex space-x-2 my-2">
                <img 
                    className="w-10 h-10"
                    src="https://res.cloudinary.com/dphpfdsk3/image/upload/v1769877307/JavaScript_gi0wxc.png" 
                    alt="" 
                />
            </div>
            <p className="uppercase py-5 text-gray-300">MON FEB 2022 - PRESENT</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Construcción y despliegue de aplicaciones usando los stacks MERN y MEAN</li>
                <li>Creación de aplicaciones web con scraping utilizando Puppeteer y Playwright, e integración con Docker</li>
                <li>Desarrollo y despliegue de aplicaciones móviles con React Native</li>
                <li>Adición de funcionalidad API RESTful a un panel administrativo en Angular</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard