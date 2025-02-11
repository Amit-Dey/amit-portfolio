"use client";

import { Description } from "@radix-ui/react-dialog";
import { title } from "process";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaDatabase, FaDocker
} from "react-icons/fa"

import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiTypescript
} from "react-icons/si"

// about data
const about = {
  title: "About Me",
  description: "I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am always looking to learn new things and improve my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Amit Dey"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1867-134455"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "Skype",
      fieldValue: "amit.01"
    },
    {
      fieldName: "Email",
      fieldValue: "amitdey9020@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bengali"
    }
  ]
}

// Experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: "I have worked on a variety of projects including websites, web applications, and mobile apps. I have experience with both front-end and back-end development, and I am always looking to learn new things and improve my skills.",
  items: [
    {
      company: "Ranx",
      position: "Software Engineer",
      duration: "Jan '25 - Present",
    },
    {
      company: "Ranx",
      position: "Software Engineer Intern",
      duration: "Oct '24 - Dec '24",
    },
    {
      company: "International Islamic University Chittagong",
      position: "Academic Research",
      duration: "Jun ‘24 - Nov ‘24",
    },
    {
      company: "International Islamic University Chittagong",
      position: "Teaching Assistant",
      duration: "Jan ‘24 - Jun ‘24",
    },
    {
      company: "Solvrz",
      position: "Software Engineer Intern",
      duration: "Oct ‘23 - Dec ‘23",
    },

  ]
}

// Education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",
  description: "I have a degree in Computer Science from the International Islamic University Chittagong. I have also taken a number of online courses to improve my skills and learn new technologies.",
  items: [
    {
      institution: "International Islamic University Chittagong",
      degree: "Bachelor of Computer Science and Engineering",
      duration: "2020 - 2024",
    },
    {
      institution: "100xDevs",
      degree: "Live 0-100 Complete Choate",
      duration: "2024 - present",
    },
    {
      institution: "Udemy",
      degree: "Full Stack Web Development",
      duration: "2022 - 2023",
    },
    {
      institution: "Coursera",
      degree: "React Native Development",
      duration: "2021 - 2022",
    },
  ]
}

// Skills data
const skills = {
  title: "My skills",
  description: "I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am always looking to learn new things and improve my skills.",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "PostgreSQL",
      icon: <FaDatabase />,
    },
    {
      name: "Docker",
      icon: <FaDocker />,
    },
  ]
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.8, ease: 'easeIn' }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tabs List */}
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0"
          >
            {/* why hire me */}
            <div className="text-white">
              <h3 className="text-4xl font-bold">Why hire me?</h3>
              <p className="text-white/60 my-8 text-justify">
              I have a strong passion for programming and a keen interest in exploring new technologies, and I am confident that I will be a valuable asset.
              </p>
            </div>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experiance */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg font-bold max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 leading-normal">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <TooltipProvider key={index} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left ">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] mb-8 text-white/60 mx-auto xl:mx-0">{about.description}</p>
              </div>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => (
                  <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-lg">{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume