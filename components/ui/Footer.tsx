'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

// Define interfaces for type safety
interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Web Development', href: '/web-development' },
  { name: 'Mobile Development', href: '/mobile-development' },
  { name: 'UI/UX Design', href: '/ui-ux-design' },
  { name: 'SEO Optimization', href: '/seo-optimization' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/Amit-Dey/', icon: <FaGithub /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/amitdey9020/', icon: <FaLinkedin /> },
  { name: 'Twitter', href: 'https://x.com/Amitdey01346816', icon: <FaTwitter /> },
];

const contactInfo = [
  { title: 'Phone', description: '(+880) 1867-134455' },
  { title: 'Email', description: 'amitdey9020@gmail.com' },
  { title: 'Address', description: 'Mehedibag, Chattogram, Bangladesh' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: 'easeIn',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-[#1a1a1f] text-white/70 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Brand/Logo */}
          <motion.div variants={itemVariants} className="mb-4">
            <Link href="/" className="flex items-center mb-3" aria-label="Go to homepage">
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                Amit Dey
              </h2>
            </Link>
            <p className="text-xs md:text-sm">
              Crafting innovative web and mobile solutions with a focus on user experience.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base md:text-lg font-semibold text-white mb-3">Quick Links</h3>
            <nav>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm hover:text-accent transition-all duration-300 active:scale-95"
                      aria-label={`Navigate to ${link.name} page`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base md:text-lg font-semibold text-white mb-3">Contact Info</h3>
            <ul className="flex flex-col gap-1">
              {contactInfo.map((item, index) => (
                <li key={index} className="text-xs md:text-sm">
                  <span className="font-medium text-white">{item.title}: </span>
                  {item.description}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base md:text-lg font-semibold text-white mb-3">Follow Me</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl hover:text-accent hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          variants={itemVariants}
          className="my-6 border-white/20"
        />

        {/* Copyright and Back to Top */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs md:text-sm">
            © {new Date().getFullYear()} Amit Dey. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 hover:scale-105 active:scale-95 transition-all duration-300 min-w-[120px] min-h-[44px] justify-center"
            aria-label="Scroll back to top"
          >
            <FaArrowUp className="text-sm" />
            <span className="text-xs md:text-sm">Back to Top</span>
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;