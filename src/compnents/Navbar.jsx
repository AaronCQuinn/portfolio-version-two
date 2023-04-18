import React, { useContext, useState } from 'react'
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

const CustomMobileLink = ({ href, title, toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return (
        <button href={href} onClick={handleClick} className='relative group text-light dark:text-dark'>
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
            h-[1px] bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleThemeChange = () => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'light');
            setTheme('light')
            return;
        }

        localStorage.setItem('theme', 'dark');
        setTheme('dark');
    }

    return (
        <header className='w-full px-32 lg:px-16 py-9 font-medium flex items-center justify-between border-solid border-b-[2.5px] dark:text-light relative'>
            <button className='flex-col justify-center items-center hidden lg:flex lg:py-2' onClick={handleOpen}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : '-translate-y-0.5'}`}></span>    
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>    
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : 'translate-y-0.5'}`}></span>    
            </button>
            
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav className='flex gap-4'>
                    <CustomLink href='/' title='Home'/>
                    <CustomLink href='/about' title='About'/>
                    <CustomLink href='/projects' title='Projects'/>
                    <CustomLink href='/mentors' title='Mentors'/>
                </nav>

                <nav className='flex gap-4 items-center justify-center flex-wrap'>
                    <motion.a href='https://github.com/AaronCQuinn?tab=repositories' target={"_blank"} whileHover={{y: -3}} whileTap={{scale: 0.9}}>
                        <GithubIcon bgFill={theme === 'dark' ? '#fff' : '#121212'}/>
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/aaron-quinn/' target={"_blank"} whileHover={{y: -3}} whileTap={{scale: 0.9}}>
                        <LinkedInIcon bgFill={theme === 'dark' ? '#fff' : '#121212'} />
                    </motion.a>

                    <button
                    onClick={() => handleThemeChange()}
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
            </div>

            {isOpen &&
            <motion.div className='min-w-[70vw] 
            flex gap-4 flex-col 
            fixed justify-between items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
            initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
            animate={{scale: 1, opacity: 1}}

            >
                <nav className='flex items-center flex-col gap-4'>
                    <CustomMobileLink href='/' title='Home' toggle={handleOpen} />
                    <CustomMobileLink href='/about' title='About' toggle={handleOpen}/>
                    <CustomMobileLink href='/projects' title='Projects' toggle={handleOpen}/>
                    <CustomMobileLink href='/mentors' title='Mentors' toggle={handleOpen}/>
                </nav>

                <nav className='flex gap-4 lg:gap-6 items-center justify-center flex-wrap'>
                    <motion.a href='/' target={"_blank"} whileHover={{y: -3}} whileTap={{scale: 0.9}}>
                        <GithubIcon bgFill={theme === 'dark' ? '#fff' : '#121212'}/>
                    </motion.a>
                    <motion.a href='/' target={"_blank"} whileHover={{y: -3}} whileTap={{scale: 0.9}}>
                        <LinkedInIcon bgFill={theme === 'dark' ? '#121212': '#fff'} />
                    </motion.a>

                    <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className={`flex items-center justify-center rounded-full p-1 ${theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                    >
                        {
                            theme === 'dark' ?
                            <SunIcon className='dark:fill-light fill-dark' />
                            :
                            <MoonIcon className='dark:fill-light fill-dark' />
                        }
                    </button>
                </nav>
            </motion.div>
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                    <Logo />
            </div>
        </header>
    )
}

export default Navbar