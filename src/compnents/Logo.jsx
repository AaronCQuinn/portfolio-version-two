import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink 
        href='/' 
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
        whileHover={{
            backgroundColor: ['#121212', '#cb2d3e', '#ef473a', '#42275a', '#734b6d', '#000428', '#004e92', '#EECDA3', '#EF629F', '#121212'],
            transition: { repeat: Infinity, duration: 3 }
         }}
        >
        AQ
        </MotionLink>
    </div>
  )
}

export default Logo