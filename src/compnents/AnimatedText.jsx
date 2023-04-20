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
    const textArray = text.split(" ");
    
    return (
        <div className='w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden'>
            
        <motion.h1 
            className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
            variants={headerText}
            initial="initial"
            animate={isInView ? 'animate' : 'null'}
            ref={ref}
        >
            {textArray.map((word, index) => 
            <motion.span key={word + '-' + index} className='inline-block'
            variants={subText}
            >
                {word}
                {
                    index !== textArray.length - 1 && <>&nbsp;</>
                }
            </motion.span>
            )}
        </motion.h1>
            
        </div>
  )
}

export default AnimatedText