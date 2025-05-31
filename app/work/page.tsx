'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';

// Define project data with TypeScript interface for better type safety
interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}


const projects = [

  {
    num: "01",
    catagory: "Web Development",
    title: "Chhapa Ghor – printing services",
    description: "Chapa Ghor specializes in high-quality custom printing on t-shirts, mugs, business cards, banners, and more. We bring your ideas to life with precision and vibrant colors!",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Hono" }, { name: "AI" }, { name: "Drizzle" }, { name: "PostgreSQL" }],
    image: "/assets/work/thumChhapaGhor.png",
    live: "https://chhapa-ghor.vercel.app/",
    github: "https://github.com/Amit-Dey/chhapa-ghor",
    date: "March 2025",
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
    date: "February 2023",
  },
  {
    num: "03",
    title: "SentimentAI – Real-Time Feedback Analysis",
    description: "The system provides real-time sentiment analysis of user feedback using AI, with a clean and responsive UI.",
    stack: [{ name: "React.js" }, { name: "Tailwind" }, { name: "Node.js" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumFeedback.png",
    live: "https://ai-feedback-frontend-git-main-amit-deys-projects.vercel.app/",
    github: "https://github.com/Amit-Dey/SentimentAI",
    date: "January 2024",
  },
  {
    num: "04",
    catagory: "Full Stack Web App",
    title: "Medium Blog ",
    description: "A full-stack web app that allows users to create, read, update, and delete blog posts. It also includes user authentication and authorization.",
    stack: [{ name: "Cloudflare Workers" }, { name: "Hono" }, { name: "Tailwind CSS" }, { name: "Postgres" }],
    image: "/assets/work/thumMediumBlog.png",
    live: "https://medium-blog-eight-plum.vercel.app/",
    github: "https://github.com/Amit-Dey/medium-blog/",
    date: "December 2023",
  },
  {
    num: "05",
    catagory: "AI-driven web",
    title: "Promptify",
    description: "An AI-driven web app that generates creative prompts for writing, brainstorming, and idea generation.",
    stack: [{ name: "Next.js" }, { name: "Framer Motion" }, { name: "Tailwind CSS" }, { name: "MongoDB" }],
    image: "/assets/work/Promptify.png",
    live: "https://promptify-six-dun.vercel.app/",
    github: "https://github.com/Amit-Dey/Promptify",
    date: "November 2023",
  },
  {
    num: "06",
    catagory: "Web Development",
    title: "Simple Zerodha App",
    description: "It's allows users to perform basic trading operations.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
    image: "/assets/work/zerodha.png",
    live: "https://amit-dey.github.io/Simple-Zerodha-App/",
    github: "https://github.com/Amit-Dey/Simple-Zerodha-App",
    date: "October 2023",
  },
]


const Work: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: 'easeIn' }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-0"
    >
      <div className="container mx-auto px-4 xl:px-0 space-y-8 lg:space-y-12">
        {projects.map((project, index) => (
          <div key={project.num} className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start xl:items-center bg-white/5 rounded-lg p-6 xl:p-8 shadow-lg transition-transform transform hover:scale-[1.01] group relative overflow-hidden">
            {/* Content Section */}
            <div className="w-full xl:w-1/2 flex flex-col justify-between order-2 xl:order-none">
              <div className="space-y-6">
                {/* Project Number */}
                <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                  {project.num}
                </div>

                {/* Project Category */}
                <h2 className="text-4xl font-bold text-white group-hover:text-accent transition-colors duration-500 capitalize">
                  {project.catagory} project
                </h2>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white/40">
                  {project.title}
                </h3>

                {/* Project Date */}
                <p className="text-white/50 text-base">
                  {project.date}
                </p>

                {/* Project Description */}
                <p className="text-white/60 text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((item, index2) => (
                    <li key={index2} className="text-lg text-accent">
                      {item.name}
                      {index2 < project.stack.length - 1 && ','}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-white/20" />

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <TooltipProvider delayDuration={100}>
                    {/* Live Project Button */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href={project.live} target="_blank">
                          <button className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group hover:bg-accent/10 transition-colors">
                            <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                          </button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* GitHub Button */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href={project.github} target="_blank">
                          <button className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group hover:bg-accent/10 transition-colors">
                            <BsGithub className="text-white text-2xl group-hover:text-accent" />
                          </button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full xl:w-1/2">
              <div className="h-[400px] relative group flex items-center justify-center bg-pink-50/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/10 z-10" />
                <Image
                  src={project.image}
                  fill
                  className="object-contain p-4"
                  alt={`${project.title} preview`}
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;