import { motion } from 'framer-motion'

//  Variants
const stairAnimation = {
    initial: {
        top: '0%'
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    }
}

// Calculate the reverse index for the subsequent delay
const reverseIndex = (index: number) => {
    const totalSteps = 6 // Total number of steps
    return totalSteps - index - 1
}

const Stairs = () => {
    return (
        <>

            {/* Render 6 motions divs, each repeating a step of the stairs 
        
        Each div will have the same animatin defined in the stairAnimation object 
        The delay of each div will be calculated simentaniously based on it reverse index,
        creating a staggered effect with decending delay for each subsequent step.
        */}
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    className="h-full w-full bg-white relative "
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        delay: reverseIndex(index) * 0.1

                    }}
                />
            ))}


        </>
    )
}

export default Stairs