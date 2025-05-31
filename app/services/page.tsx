'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define interface for type safety
interface Service {
  num: string;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    num: '01',
    title: 'Web Development',
    description: 'We build fast, responsive websites that are easy to navigate and optimized for search engines.',
    href: '/web-development',
  },
  {
    num: '02',
    title: 'Mobile Development',
    description: 'We develop mobile apps that are compatible with both iOS and Android devices.',
    href: '/mobile-development',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: 'We design user-friendly interfaces that are visually appealing and easy to use.',
    href: '/ui-ux-design',
  },
  {
    num: '04',
    title: 'SEO Optimization',
    description: 'We optimize websites to rank higher on search engines and increase organic traffic.',
    href: '/seo-optimization',
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Services: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.num}
              variants={cardVariants}
              className="group flex flex-col p-8 bg-[#232329] rounded-xl shadow-lg hover:bg-[#2a2a31] transition-all duration-300"
            >
              {/* Number */}
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white group-hover:from-white group-hover:to-accent transition-all duration-300">
                {service.num}
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white group-hover:text-accent transition-all duration-300 mt-4">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/70 text-base mt-2 flex-grow">{service.description}</p>

              {/* Link Button */}
              <div className="mt-4 flex justify-end">
                <Link
                  href={service.href}
                  className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <BsArrowDownRight className="text-white text-xl group-hover:text-white" />
                </Link>
              </div>

              {/* Divider */}
              <div className="mt-4 border-t border-white/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;