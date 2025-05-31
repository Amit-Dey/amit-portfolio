'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define interface for type safety
interface Project {
  num: string;
  title: string;
  description: string;
  tools: { name: string }[];
  image: string;
  live: string;
  store: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Chhapa Ghor – Mobile App',
    description: 'A cross-platform mobile app for custom printing services, offering seamless order placement and tracking.',
    tools: [{ name: 'React Native' }, { name: 'Tailwind CSS' }, { name: 'Node.js' }],
    image: '/assets/work/thumChhapaGhor.png',
    live: 'https://chhapa-ghor.vercel.app/',
    store: 'https://example.com/chhapa-ghor-app', // Placeholder
  },
  {
    num: '02',
    title: 'Promptify – Mobile Interface',
    description: 'A mobile app for generating AI-driven creative prompts, designed for intuitive user interaction.',
    tools: [{ name: 'Flutter' }, { name: 'Figma' }, { name: 'MongoDB' }],
    image: '/assets/work/Promptify.png',
    live: 'https://promptify-six-dun.vercel.app/',
    store: 'https://example.com/promptify-app', // Placeholder
  },
  {
    num: '03',
    title: 'Medium Blog – Mobile Reader',
    description: 'A mobile app for reading and managing blog content, optimized for performance and user engagement.',
    tools: [{ name: 'React Native' }, { name: 'Tailwind CSS' }, { name: 'PostgreSQL' }],
    image: '/assets/work/thumMediumBlog.png',
    live: 'https://medium-blog-eight-plum.vercel.app/',
    store: 'https://example.com/medium-blog-app', // Placeholder
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

const MobileDevelopment: React.FC = () => {
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
            Mobile Development Services
          </h1>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto xl:mx-0">
            We build high-performance, cross-platform mobile apps for iOS and Android using React Native and Flutter. Our apps deliver native-like experiences with seamless functionality and stunning designs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300"
            aria-label="Contact us for mobile development services"
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
            Why Choose Our Mobile Development?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Cross-Platform Apps',
                description: 'Build once, deploy on iOS and Android with React Native or Flutter.',
              },
              {
                title: 'Native Performance',
                description: 'Deliver fast, smooth apps with native-like performance.',
              },
              {
                title: 'UI/UX Design',
                description: 'Craft intuitive and visually appealing mobile interfaces.',
              },
              {
                title: 'API Integration',
                description: 'Seamlessly connect apps with backend services and APIs.',
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
            Featured Mobile Projects
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
                    alt={`${project.title} mobile app preview`}
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
                  {project.tools.map((tool, index) => (
                    <li key={index} className="text-sm text-accent">
                      {tool.name}
                      {index < project.tools.length - 1 && ','}
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
                    href={project.store}
                    className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    aria-label={`View app store page for ${project.title}`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 3h2v6h-2z" />
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
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto mb-6">
            Let’s create a powerful, user-friendly mobile app tailored to your needs. Contact us today to get started!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300"
            aria-label="Contact us to start your mobile development project"
          >
            Start Your Mobile Project
            <BsArrowDownRight className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileDevelopment;