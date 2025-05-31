'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define interfaces for type safety
interface Project {
  num: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Chhapa Ghor – Printing Services',
    description: 'A high-quality custom printing service for t-shirts, mugs, and more, built with modern web technologies.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind' }, { name: 'Hono' }, { name: 'Drizzle' }, { name: 'PostgreSQL' }],
    image: '/assets/work/thumChhapaGhor.png',
    live: 'https://chhapa-ghor.vercel.app/',
    github: 'https://github.com/Amit-Dey/chhapa-ghor',
  },
  {
    num: '02',
    title: 'Medium Blog',
    description: 'A full-stack blog platform with user authentication and CRUD functionality.',
    stack: [{ name: 'Cloudflare Workers' }, { name: 'Hono' }, { name: 'Tailwind CSS' }, { name: 'Postgres' }],
    image: '/assets/work/thumMediumBlog.png',
    live: 'https://medium-blog-eight-plum.vercel.app/',
    github: 'https://github.com/Amit-Dey/medium-blog/',
  },
  {
    num: '03',
    title: 'Promptify',
    description: 'An AI-driven web app for generating creative prompts for writing and brainstorming.',
    stack: [{ name: 'Next.js' }, { name: 'Framer Motion' }, { name: 'Tailwind CSS' }, { name: 'MongoDB' }],
    image: '/assets/work/Promptify.png',
    live: 'https://promptify-six-dun.vercel.app/',
    github: 'https://github.com/Amit-Dey/Promptify',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: 'easeIn',
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const WebDevelopment: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col py-12 xl:py-8 bg-[#1a1a1f]">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center xl:text-left mb-16"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white mb-4">
            Web Development Services
          </h1>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto xl:mx-0">
            We craft fast, responsive, and SEO-optimized websites using modern technologies like Next.js, React, and Tailwind CSS. From dynamic web apps to stunning landing pages, we bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300"
            aria-label="Contact us for web development services"
          >
            Get in Touch
            <BsArrowDownRight className="text-xl" />
          </Link>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center xl:text-left mb-6">
            Why Choose Our Web Development?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Responsive Design',
                description: 'Websites that look great on all devices, from mobile to desktop.',
              },
              {
                title: 'SEO Optimization',
                description: 'Boost your visibility with search engine-friendly code and structure.',
              },
              {
                title: 'High Performance',
                description: 'Fast-loading pages optimized for user experience and conversions.',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored web applications to meet your unique business needs.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                className="p-6 bg-[#232329] rounded-xl shadow-lg hover:bg-[#2a2a31] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center xl:text-left mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.num}
                variants={sectionVariants}
                className="group flex flex-col p-6 bg-[#232329] rounded-xl shadow-lg hover:bg-[#2a2a31] transition-all duration-300"
              >
                <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    fill
                    className="object-contain"
                    alt={`${project.title} preview`}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white group-hover:from-white group-hover:to-accent transition-all duration-300">
                  {project.num}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-all duration-300 mt-2">
                  {project.title}
                </h3>
                <p className="text-white/70 text-base mt-2 flex-grow">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-sm text-accent">
                      {item.name}
                      {index < project.stack.length - 1 && ','}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 justify-end">
                  <Link
                    href={project.live}
                    className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <BsArrowDownRight className="text-white text-lg" />
                  </Link>
                  <Link
                    href={project.github}
                    className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Next Website?
          </h2>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto mb-6">
            Let’s create a stunning, high-performance website tailored to your needs. Contact us today to get started!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300"
            aria-label="Contact us to start your web development project"
          >
            Start Your Project
            <BsArrowDownRight className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevelopment;