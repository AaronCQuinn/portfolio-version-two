import React from 'react'
import CircularImage from '../../public/circle_text_big.png'
import Image from 'next/image'
import Link from 'next/link'

const HirePrompt = () => {
  return (
    <div className='fixed right-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto items-center justify-center relative'>
            <Image src={CircularImage} className='animate-spin-slow' />
            <Link href='mailto:aaron.quinn.nfld@gmail.com' className='w-28 h-28 rounded-full flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark'>
              Hire Me
            </Link>
        </div>        
    </div>
  )
}

export default HirePrompt