"use client";

import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

// Components
import Stairs from "@/components/Stairs"


const StairTransition = () => {
  const pathName = usePathname()
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                delay: 0,
                duration: 0.1,
                ease: 'easeInOut',
              }
            }}
          />

        </div>

      </AnimatePresence>
    </>
  )
}

export default StairTransition