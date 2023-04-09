import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            
        <motion.h1 
            className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
            variants={headerText}
            initial="initial"
            animate={isInView ? 'animate' : 'null'}
            ref={ref}
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