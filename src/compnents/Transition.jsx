import React from 'react'
import { motion } from 'framer-motion'

const Transition = () => {
  const duration = 0.7;
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20  bg-dark/100' 
      initial={{x: "100%", width: '100%'}}
      animate={{x: "0%", width:"0%"}}
      exit={{x:['0%', '100%'], width:['0%', '100%']}}
      transition={{delay: 0.2, duration: duration, ease: "easeInOut"}}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10  bg-dark/75' 
      initial={{x: "100%", width: '100%'}}
      animate={{x: "0%", width:"0%"}}
      transition={{delay: 0.4, duration: duration, ease: "easeInOut"}}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30  bg-dark/50' 
      initial={{x: "100%", width: '100%'}}
      animate={{x: "0%", width:"0%"}}
      transition={{ duration: duration, ease: "easeInOut"}}
      />
    </>
  )
}

export default Transition