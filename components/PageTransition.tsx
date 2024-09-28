"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";


import React, { ReactNode } from 'react';

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.1, duration: 0.3, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition