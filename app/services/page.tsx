"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";


const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'We build fast, responsive websites that are easy to navigate and are optimized for search engines.',
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
]



function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.3,
              ease: 'easeIn'
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index}
              className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline
                text-transparent group-hover:text-outline-hover transitiion-all duraration-500">
                  {service.num}
                </div>
                <Link href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white 
                  group-hover:bg-accent transition-all duration-500 flex
                   justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white
               group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services