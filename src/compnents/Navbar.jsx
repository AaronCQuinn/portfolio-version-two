import React, { useContext } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import { ThemeContext } from '@/context/ThemeContext'

const CustomLink = ({ href, title }) => {
    const router = useRouter();
    return (
        <Link href={href} className='relative group'>
            {title}
            <span className=

            /* 
            1. We want the nav item to appear selected when on the corresponding route.
            2. Inline block is set so it doesn't start a new line, and the width fits the content. But in this case we need to have access to the width property to alter it.
            3. Absolute positioning as we need to place it below the text.
            */
           
            {`${router.asPath === href ? 'w-full' : 'w-0'}
            inline-block
            absolute
            h-[1px] bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header className='w-full px-32 py-9 font-medium flex items-center justify-between border-solid border-b-[2.5px] dark:text-light'>       
            <nav className='flex gap-4'>
                <CustomLink href='/' title='Home'/>
                <CustomLink href='/about' title='About'/>
                <CustomLink href='/projects' title='Projects'/>
                <CustomLink href='/mentors' title='Mentors'/>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

            <nav className='flex gap-4 items-center justify-center flex-wrap'>
                <motion.a href='/' target={"_blank"} whileHover={{y: -3}} whileTap={{scale: 0.9}}>
                    <GithubIcon />
                </motion.a>
                <motion.a href='/' target={"_blank"} whileHover={{y: -3}} whileTap={{scale: 0.9}}>
                    <LinkedInIcon />
                </motion.a>

                <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`flex items-center justify-center rounded-full p-1 ${theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                >
                    {
                        theme === 'dark' ?
                        <SunIcon className={'fill-dark'} />
                        :
                        <MoonIcon className={'fill-light'} />
                    }
                </button>
            </nav>
        </header>
    )
}

export default Navbar