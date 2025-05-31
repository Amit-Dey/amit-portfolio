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
  figma: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Chhapa Ghor – UI Design',
    description: 'Designed intuitive and visually appealing interfaces for a custom printing service, focusing on user-friendly navigation and vibrant aesthetics.',
    tools: [{ name: 'Figma' }, { name: 'Adobe XD' }, { name: 'Tailwind CSS' }],
    image: '/assets/work/thumChhapaGhor.png',
    live: 'https://chhapa-ghor.vercel.app/',
    figma: 'https://www.figma.com/community/file/1234567890', // Placeholder
  },
  {
    num: '02',
    title: 'Promptify – UX Prototype',
    description: 'Created wireframes and interactive prototypes for an AI-driven prompt generator, ensuring seamless user flow and accessibility.',
    tools: [{ name: 'Figma' }, { name: 'Sketch' }, { name: 'InVision' }],
    image: '/assets/work/Promptify.png',
    live: 'https://promptify-six-dun.vercel.app/',
    figma: 'https://www.figma.com/community/file/9876543210', // Placeholder
  },
  {
    num: '03',
    title: 'Medium Blog – Interface Design',
    description: 'Developed clean and modern blog interfaces with a focus on readability and user engagement, optimized for desktop and mobile.',
    tools: [{ name: 'Figma' }, { name: 'Adobe Illustrator' }, { name: 'Tailwind CSS' }],
    image: '/assets/work/thumMediumBlog.png',
    live: 'https://medium-blog-eight-plum.vercel.app/',
    figma: 'https://www.figma.com/community/file/1122334455', // Placeholder
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

const UIUXDesign: React.FC = () => {
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
            UI/UX Design Services
          </h1>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto xl:mx-0">
            We create user-centered, visually stunning interfaces using tools like Figma and Adobe XD. Our designs prioritize usability, accessibility, and engagement to deliver exceptional user experiences.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300"
            aria-label="Contact us for UI/UX design services"
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
            Why Choose Our UI/UX Design?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: 'User Research',
                description: 'In-depth analysis to understand user needs and behaviors.',
              },
              {
                title: 'Wireframing & Prototyping',
                description: 'Interactive prototypes to test and refine user flows.',
              },
              {
                title: 'Visual Design',
                description: 'Beautiful, consistent designs that align with your brand.',
              },
              {
                title: 'Usability Testing',
                description: 'Iterative testing to ensure intuitive user experiences.',
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
            Featured UI/UX Projects
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
                    alt={`${project.title} design preview`}
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
                    href={project.figma}
                    className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    aria-label={`View Figma design for ${project.title}`}
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
            Ready to Elevate Your User Experience?
          </h2>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto mb-6">
            Let’s design intuitive and beautiful interfaces that delight your users. Contact us today to start your project!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300"
            aria-label="Contact us to start your UI/UX design project"
          >
            Start Your Design Project
            <BsArrowDownRight className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UIUXDesign;