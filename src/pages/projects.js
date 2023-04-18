import React, { useContext } from 'react'
import Head from 'next/head'
import Layout from '@/compnents/Layout'
import AnimatedText from '@/compnents/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/compnents/Icons'
import project1 from '../../public/8OakmxU.png'
import project2 from '../../public/qp2SeTunY2UCMGVHlKL8T2amFju1-219_1243268_01.jpeg'
import project3 from '../../public/s5CW7qY.png'
import { motion } from 'framer-motion'
import { ThemeContext } from '@/context/ThemeContext'

const FeaturedProject = ({ type, title, summary, img, link, ghLink }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid 
        border-dark bg-light shadow-2xl p-2 relative rounded-br-3xl
        dark:border-light
        dark:bg-dark
        lg:flex-col
        lg:p-8
        xs:rounded-2xl
        xs:rounded-br-3xl
        '>
            <div className='absolute top-0 -right-2 -z-10 w-[100.5%] h-[102%] rounded-[1.8rem] bg-dark dark:bg-light'/>
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-3xl mb-2' href={link} target={'_blank'}>
                <motion.img whileHover={{scale: .98}} src={img.src} alt={title} className='w-full h-auto rounded-3xl'               
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw" />
            </Link>

            <div className='flex flex-col items-start justify-between pl-6 '>
                <span className='font-medium text-xl dark:text-light'>{type}</span>
                <Link href={link} target={'_blank'} className=' transition-colors hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light/75'>
                    {summary}
                </p>

                <div className='mt-2 flex items-center'>
                    <Link href={ghLink} target={'_blank'} className='w-10'>
                        <GithubIcon bgFill={theme === 'dark' ? "#fff" : "#121212"}/>
                    </Link>
                    <Link href={link} target={'_blank'} className='ml-4 
                    rounded 
                    bg-dark 
                    text-light 
                    p-2 
                    px-6 
                    text-lg 
                    transition 
                    font-semibold 
                    border 
                    border-dark 
                    hover:bg-light 
                    hover:text-dark
                    dark:bg-light
                    dark:text-dark
                    dark:hover:border-light
                    dark:hover:bg-dark
                    dark:hover:text-light
                    '>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, summary, ghLink }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <article className='w-full flex flex-col items-center just rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-2 -z-10 w-[100.5%] h-[101%] rounded-3xl bg-dark dark:bg-light'/>
            <Link className='w-full cursor-pointer overflow-hidden rounded-3xl' href={link} target={'_blank'}>
                <motion.img whileHover={{scale: .98}} src={img.src} alt={title} className='w-full rounded-3xl h-[425px]' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between pl-6 mt-2'>
                <span className='font-medium text-xl dark:text-light'>{type}</span>
                <Link href={link} target={'_blank'} className=' transition-colors hover:underline underline-offset-2 dark:text-light text-dark'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light/75'>
                    {summary}
                </p>

                <div className='mt-2 flex items-center justify-between'>
                    <Link href={ghLink} target={'_blank'} className='w-8'>
                        <GithubIcon bgFill={theme === 'dark' ? "#fff" : "#121212"}/>
                    </Link>
                    <Link href={link} target={'_blank'} className='ml-4 rounded font-semibold underline dark:text-light'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Aaron Quinn | Projects</title>
            <meta name='description' content='Information about Aaron Quinn and his journey to software development.' />
        </Head>

        <main className='w-full flex flex-col items-center justify-center pb-32'>
            <Layout>
                <AnimatedText text={"My Recent Works"} className='mb-16 !text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                
                <div className="grid grid-cols-12 gap-24 lg:gap-x-16 md:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    
                    <div className='col-span-12'>
                        <FeaturedProject 
                        title={'Twitter Clone'}
                        summary={"My own personal spin on the social platform Twitter. Includes all the functionality you've come to know from Twitter such as direct messaging, retweeting, liking tweets. Built with React and Node."}
                        link={'https://www.aaronquinn.ca'} // Needs to be replaced when project is live
                        ghLink={'https://github.com/AaronCQuinn/twitter-clone'}
                        img={project1}
                        type={"My Most Recent Project"}
                        />
                    </div>

                    <div className='col-span-6 lg:col-span-12'>
                        <Project 
                            title={'Housing Classifieds'}
                            summary={"A React application developed with a mobile-first view, alongside of Firebase V9. Users may authenticate via their Google account and then proceed to post, view, and contact others about their housing offers."}
                            link={'https://effervescent-basbousa-77ae4b.netlify.app/'} // Needs to be replaced when project is live
                            ghLink={'https://github.com/AaronCQuinn/housing-classifieds'}
                            img={project2}
                        />
                    </div>

                    <div className='col-span-6 lg:col-span-12'>
                        <Project 
                            title={"Aaron's Adoptions"}
                            summary={"A mock adoption services website where the administrators to the website can easily control the flow of incoming and out going foster animals. Heavy focus on backend functionality in this project."}
                            link={'https://fierce-dawn-98520.herokuapp.com/'} // Needs to be replaced when project is live
                            ghLink={'https://github.com/AaronCQuinn/Adoption-Website'}
                            img={project3}
                        />
                    </div>
                </div>


            </Layout>
        </main>
    </>
  )
}

export default projects