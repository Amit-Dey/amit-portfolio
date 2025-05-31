'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useCallback } from 'react';
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaDatabase, FaDocker
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiTypescript } from 'react-icons/si';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Define interfaces for type safety
interface AboutInfo {
  fieldName: string;
  fieldValue: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SectionData {
  title: string;
  description: string;
  icon?: string;
  items?: AboutInfo[] | ExperienceItem[] | EducationItem[];
  skillList?: Skill[];
}

// Data
const about: SectionData = {
  title: 'About Me',
  description: 'I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am always looking to learn new things and improve my skills.',
  items: [
    { fieldName: 'Name', fieldValue: 'Amit Dey' },
    { fieldName: 'Phone', fieldValue: '(+880) 1867-134455' },
    { fieldName: 'Experience', fieldValue: '2+ years' },
    { fieldName: 'Nationality', fieldValue: 'Bangladeshi' },
    { fieldName: 'Skype', fieldValue: 'amit.01' },
    { fieldName: 'Email', fieldValue: 'amitdey9020@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'English, Bengali' },
  ],
};

const experience: SectionData = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I have worked on a variety of projects including websites, web applications, and mobile apps. I have experience with both front-end and back-end development, and I am always looking to learn new things and improve my skills.',
  items: [
    { company: 'Ranx', position: 'Software Engineer', duration: 'Jan \'25 - Present' },
    { company: 'Ranx', position: 'Software Engineer Intern', duration: 'Oct \'24 - Dec \'24' },
    { company: 'International Islamic University Chittagong', position: 'Academic Research', duration: 'Jun \'24 - Nov \'24' },
    { company: 'International Islamic University Chittagong', position: 'Teaching Assistant', duration: 'Jan \'24 - Jun \'24' },
    { company: 'Solvrz', position: 'Software Engineer Intern', duration: 'Oct \'23 - Dec \'23' },
  ],
};

const education: SectionData = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'I have a degree in Computer Science from the International Islamic University Chittagong. I have also taken a number of online courses to improve my skills and learn new technologies.',
  items: [
    { institution: 'International Islamic University Chittagong', degree: 'Bachelor of Computer Science and Engineering', duration: '2020 - 2024' },
    { institution: '100xDevs', degree: 'Live 0-100 Complete Choate', duration: '2024 - present' },
    { institution: 'Udemy', degree: 'Full Stack Web Development', duration: '2022 - 2023' },
    { institution: 'Coursera', degree: 'React Native Development', duration: '2021 - 2022' },
  ],
};

const skills: SectionData = {
  title: 'My Skills',
  description: 'I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am always looking to learn new things and improve my skills.',
  skillList: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'PostgreSQL', icon: <FaDatabase /> },
    { name: 'Docker', icon: <FaDocker /> },
  ],
};

const Resume: React.FC = () => {
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = React.useState('experience');

  // IntersectionObserver for scroll-based highlighting
  useEffect(() => {
    if (!scrollAreaRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, root: scrollAreaRef.current }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Handle button click to scroll to section
  const handleScrollToSection = useCallback((sectionId: string) => {
    const section = sectionRefs.current.get(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  // Set ref for each section
  const setSectionRef = (sectionId: string) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current.set(sectionId, el);
    } else sectionRefs.current.delete(sectionId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: 'easeIn' }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
          {/* Sidebar */}
          <div className="w-full max-w-[380px] mx-auto xl:mx-0">
            <h3 className="text-4xl font-bold text-white">Why hire me?</h3>
            <p className="text-white/60 my-6 text-justify">
              I have a strong passion for programming and a keen interest in exploring new technologies, and I am confident that I will be a valuable asset.
            </p>
            <div className="flex flex-col gap-4">
              {['experience', 'education', 'skills', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleScrollToSection(section)}
                  className={`py-3 px-6 text-left text-lg font-medium rounded-lg transition-colors duration-300 cursor-pointer ${
                    activeSection === section
                      ? 'bg-accent text-white'
                      : 'bg-[#232329] text-white/60 hover:bg-[#2a2a31]'
                  }`}
                  aria-label={`Scroll to ${section} section`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <ScrollArea className="w-full xl:h-[70vh]" ref={scrollAreaRef}>
            {/* Experience */}
            <div id="experience" ref={setSectionRef('experience')} className="py-8">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {(experience.items as ExperienceItem[])?.map((item, index) => (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2">
                      <span className="text-accent text-sm">{item.duration}</span>
                      <h3 className="text-xl font-semibold max-w-[260px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education */}
            <div id="education" ref={setSectionRef('education')} className="py-8">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {(education.items as EducationItem[])?.map((item: EducationItem, index) => (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2">
                      <span className="text-accent text-sm">{item.duration}</span>
                      <h3 className="text-lg font-semibold max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div id="skills" ref={setSectionRef('skills')} className="py-8">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6">
                  {skills.skillList?.map((skill, index) => (
                    <TooltipProvider key={index} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-5xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </ul>
              </div>
            </div>

            {/* About */}
            <div id="about" ref={setSectionRef('about')} className="py-8">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[620px] mx-auto xl:mx-0">
                  {(about.items as AboutInfo[])?.map((item: AboutInfo, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60 text-sm">{item.fieldName}:</span>
                      <span className="text-base font-medium">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;