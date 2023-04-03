import React from 'react'
import { motion } from 'framer-motion';

const headerText = {
    animate: {
        transition: {
            staggerChildren: 0.08
        }
    }
}

const subText = {
    initial: {
        opacity: 0,
        y:50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        }
    }
}

const AnimatedText = ({ text, className=''}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
        
    <motion.h1 
    className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
    variants={headerText}
    initial="initial"
    animate="animate"
    >
        {text.split(" ").map((word, index) => 
        <motion.span key={word + '-' + index} className='inline-block'
        variants={subText}
        >
            {word}&nbsp;
        </motion.span>
        )}
    </motion.h1>
        
    </div>
  )
}

export default AnimatedText