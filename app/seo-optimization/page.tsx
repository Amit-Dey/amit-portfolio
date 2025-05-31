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
  techniques: { name: string }[];
  image: string;
  live: string;
  report: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Chhapa Ghor – SEO Campaign',
    description: 'Improved search rankings for a printing service by optimizing keywords and on-page elements, increasing organic traffic by 40%.',
    techniques: [{ name: 'Keyword Research' }, { name: 'On-Page SEO' }, { name: 'Link Building' }],
    image: '/assets/work/thumChhapaGhor.png',
    live: 'https://chhapa-ghor.vercel.app/',
    report: 'https://example.com/chhapa-ghor-seo-report', // Placeholder
  },
  {
    num: '02',
    title: 'Medium Blog – SEO Enhancement',
    description: 'Boosted blog visibility through technical SEO and content optimization, achieving top 10 rankings for key terms.',
    techniques: [{ name: 'Technical SEO' }, { name: 'Content Strategy' }, { name: 'Meta Tags' }],
    image: '/assets/work/thumMediumBlog.png',
    live: 'https://medium-blog-eight-plum.vercel.app/',
    report: 'https://example.com/medium-blog-seo-report', // Placeholder
  },
  {
    num: '03',
    title: 'Promptify – Organic Growth',
    description: 'Enhanced organic reach for an AI-driven app with targeted keyword strategies, doubling click-through rates.',
    techniques: [{ name: 'Keyword Research' }, { name: 'On-Page SEO' }, { name: 'Analytics' }],
    image: '/assets/work/Promptify.png',
    live: 'https://promptify-six-dun.vercel.app/',
    report: 'https://example.com/promptify-seo-report', // Placeholder
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

const SEOOptimization: React.FC = () => {
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
            SEO Optimization Services
          </h1>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto xl:mx-0">
            Boost your online visibility with our expert SEO services. We optimize websites for higher search engine rankings, increased organic traffic, and better user engagement using proven strategies and analytics.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300"
            aria-label="Contact us for SEO optimization services"
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
            Why Choose Our SEO Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Keyword Research',
                description: 'Identify high-impact keywords to target your audience effectively.',
              },
              {
                title: 'On-Page Optimization',
                description: 'Optimize content, meta tags, and structure for search engines.',
              },
              {
                title: 'Technical SEO',
                description: 'Improve site speed, mobile-friendliness, and crawlability.',
              },
              {
                title: 'Content Strategy',
                description: 'Create SEO-friendly content that engages and converts.',
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
            Featured SEO Projects
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
                    alt={`${project.title} SEO project preview`}
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
                  {project.techniques.map((technique, index) => (
                    <li key={index} className="text-sm text-accent">
                      {technique.name}
                      {index < project.techniques.length - 1 && ','}
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
                    href={project.report}
                    className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    aria-label={`View SEO report for ${project.title}`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
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
            Ready to Boost Your Search Rankings?
          </h2>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto mb-6">
            Let’s optimize your website for maximum visibility and traffic. Contact us today to start your SEO journey!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300"
            aria-label="Contact us to start your SEO optimization project"
          >
            Start Your SEO Project
            <BsArrowDownRight className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOOptimization;