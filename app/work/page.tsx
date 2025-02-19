'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';

// Components
import WorkSliderButtons from '@/components/WorkSliderButtons';

const Projects = [

  {
    num: "01",
    catagory: "Web Development",
    title: "Chhapa Ghor – printing services",
    description: "Chapa Ghor specializes in high-quality custom printing on t-shirts, mugs, business cards, banners, and more. We bring your ideas to life with precision and vibrant colors!",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Hono" }, { name: "AI" }, { name: "Drizzle" }, { name: "PostgreSQL" }],
    image: "/assets/work/thumChhapaGhor.png",
    live: "https://chhapa-ghor.vercel.app/",
    github: "https://github.com/Amit-Dey/chhapa-ghor",
  },
  {
    num: "02",
    catagory: "backend Development",
    title: "EasyCart – Simplified Online Shopping Platform",
    description: "A comprehensive e-commerce platform built using Laravel, offering functionalities like product management, user authentication, and order processing.",
    stack: [{ name: "Laravel" }, { name: "MySQL" }, { name: "PHP" }, { name: "JavaScript" }],
    image: "/assets/work/thumEcommarce.png",
    live: "https://github.com/Amit-Dey/EcommerceProject.git",
    github: "https://github.com/Amit-Dey/EcommerceProject.git",
  },
  {
    num: "03",
    title: "SentimentAI – Real-Time Feedback Analysis",
    description: "The system provides real-time sentiment analysis of user feedback using AI, with a clean and responsive UI.",
    stack: [{ name: "React.js" }, { name: "Tailwind" }, { name: "Node.js" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumFeedback.png",
    live: "https://ai-feedback-frontend-git-main-amit-deys-projects.vercel.app/",
    github: "https://github.com/Amit-Dey/SentimentAI",
  },
  {
    num: "04",
    catagory: "AI-driven web",
    title: "Promptify",
    description: "An AI-driven web app that generates creative prompts for writing, brainstorming, and idea generation.",
    stack: [{ name: "Next.js" }, { name: "Framer Motion" }, { name: "Tailwind CSS" }, { name: "MongoDB" }],
    image: "/assets/work/Promptify.png",
    live: "https://promptify-six-dun.vercel.app/",
    github: "https://github.com/Amit-Dey/Promptify",
  },
  {
    num: "05",
    catagory: "Web Development",
    title: "Simple Zerodha App",
    description: "It's allows users to perform basic trading operations.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
    image: "/assets/work/zerodha.png",
    live: "https://amit-dey.github.io/Simple-Zerodha-App/",
    github: "https://github.com/Amit-Dey/Simple-Zerodha-App",
  },
]


function Work() {
  const [project, setProject] = useState(Projects[0])

  const handleSlideChange = (swiper: { activeIndex: string | number; }) => {
    setProject(Projects[swiper.activeIndex as number])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.8,
          ease: 'easeIn'
        }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-0"
    >
      <div className="container mx-auto xl:pb-10">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-fit flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project catagory */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.catagory} project
              </h2>
              {/* Project Title */}
              <h3 className="text-3xl font-bold text-white/40">
                {project.title}
              </h3>

              {/* Project description */}
              <p className="text-white/60">
                {project.description}
              </p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comma */}
                    {index < project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live} target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex bg-white/5 justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent ' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub project button */}
                <Link href={project.github} target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex bg-white/5 justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent ' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper spaceBetween={30} slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {Projects.map((item, index) => (
                <SwiperSlide key={index}
                  className='w-full'
                >
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        fill
                        className='object-contain'
                        alt='Project Image'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:jusitfy-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-white text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work