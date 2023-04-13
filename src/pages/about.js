import React from 'react'
import AnimatedText from '@/compnents/AnimatedText'
import Layout from '@/compnents/Layout'
import Head from 'next/head'
import Image from 'next/image'
import HeroImage from '../../public/Qwinny_front-on_realistic_headshot_attractive_smiling_full_bear_132e6df7-9b94-4fe9-be2c-f4b94fc03006.png'
import { AnimatedNumbers } from '../compnents/AnimatedNumbers'
import Skills from '@/compnents/Skills'
import Experience from '@/compnents/Experience'

const about = () => {
    
  return (
    <>
        <Head>
            <title>Aaron Quinn | About</title>
            <meta name='description' content='Information about Aaron Quinn and his journey to software development.' />
        </Head>

        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text='About Myself' className='mb-16 lg:mb-8 lg:!text-6xl sm:!text-4xl xs:!text-2xl '/>

                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

                    <div className='col-span-3 xl:col-span-4 flex flex-col justify-start md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                            About Me
                        </h2>
                        <p className='font-medium dark:text-light/75'>
                            During the final semester of my Bachelor of Commerce, I filled a mandatory elective slot with the Introduction to Computer programming within Memorial's computer science faculty.
                        </p>
                        <p className='font-medium my-4 dark:text-light/75'>
                            This course served as a catalyst into my interest in software development. After graduating directly into the beginning of the covid pandemic, I dedicated the spare time I had while the job market recovered into self-teaching myself the basic concepts of OOP by developing in Java.
                        </p>
                        <p className='font-medium mb-4 dark:text-light/75'>
                            In May 2021, I joined the local Get Coding group based here in St. John's where I learned web development concepts from the basics of HTML, CSS, and JavaScript to developing webpages and servers in both React and Node.js.
                        </p>
                        <p className='font-medium dark:text-light/75'>
                            Although I withdrew from the program in December of 2021 due to changes in my finances, I still pressed on in self-teaching to accrue more knowledge through practically applying myself in developing personal projects. Through my persistence, I am confident I can bring value to your organization as a Junior Developer.
                        </p>
                    </div>
                    
                    <div className='justify-center md:order-1 md:col-span-8 col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
                        <div className='absolute top-0 -right-2 -z-10 w-[102%] h-[101.5%] rounded-3xl bg-dark dark:bg-light'/>
                        <Image src={HeroImage} alt='Aaron Quinn' className='w-full h-auto rounded-2xl' />
                    </div>

                    <div className='col-span-2 xl:col-span-8 xl:flex-row flex flex-col items-center justify-between md:order-3'>
                
                        <div className='flex flex-col items-center justify-center xl:items-center'>
                            <span className='inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold dark:text-light'><AnimatedNumbers className='dark:text-light' value={10}/>+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light text-center'>projects completed</h2>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold dark:text-light'><AnimatedNumbers value={3} className='dark:text-light' />+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light text-center'>Local Mentors</h2>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold dark:text-light'><AnimatedNumbers value={2} className='dark:text-light'/>+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light text-center'>years of experience</h2>
                        </div>

                    </div>
                </div>
                <Skills />
                <Experience />
            </Layout>
        </main>
    
    </>
  )
}


export default about