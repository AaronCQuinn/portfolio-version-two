import React, { useContext } from 'react'
import LightModeImage from '../../public/circle_text_big.png'
import DarkModeImage from '../../public/circle_text_big_white.png'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeContext } from '@/context/ThemeContext'

const HirePrompt = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className='fixed right-4 bottom-4 md:right-0 md:left-auto md:-top-4 md:bottom-auto sm:-top-12 sm:-right-10 flex items-center justify-center overflow-hidden'>
        <div className='w-48 md:scale-75 sm:scale-[45%] h-auto items-center justify-center relative'>
            <Image src={theme === 'light' ? LightModeImage : DarkModeImage} className='animate-spin-slow' alt="spinning text" />
            <Link href='mailto:aaron.quinn.nfld@gmail.com' 
            className='
            transition
            font-semibold
            w-28 
            h-28 
            rounded-full 
            flex 
            items-center 
            justify-center 
            absolute 
            left-1/2 
            top-1/2 
            -translate-x-1/2 
            -translate-y-1/2 
            bg-dark 
            text-light 
            shadow-md 
            border 
            border-solid 
            border-dark 
            hover:bg-light 
            hover:text-dark
            dark:bg-light
            dark:text-dark
            dark:hover:border-light
            dark:hover:bg-dark
            dark:hover:text-light
            '>
              Hire Me
            </Link>
        </div>        
    </div>
  )
}

export default HirePrompt