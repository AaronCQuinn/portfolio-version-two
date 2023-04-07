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
                <AnimatedText text='Lorem Ipsum Placeholder' className='mb-16'/>

                <div className='grid w-full grid-cols-8 gap-16'>

                    <div className='col-span-3 flex flex-col justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                            About Me
                        </h2>
                        <p className='font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias placeat, ea ab optio numquam. Quibusdam inventore iusto consequatur libero minus vel fuga sequi eum! Totam molestiae at sit maiores! Consectetur quo suscipit dignissimos, vero veritatis a, numquam, aut placeat minus illo consequatur doloremque corrupti! Ducimus tempora voluptas nihil maxime!
                        </p>
                        <p className='font-medium my-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias placeat, ea ab optio numquam. Quibusdam inventore iusto consequatur libero minus vel fuga sequi eum! Totam molestiae at sit maiores! Consectetur quo suscipit dignissimos, vero veritatis a, numquam, aut placeat minus illo consequatur doloremque corrupti! Ducimus tempora voluptas nihil maxime!
                        </p>
                        <p className='font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias placeat, ea ab optio numquam. Quibusdam inventore iusto consequatur libero minus vel fuga sequi eum! Totam molestiae at sit maiores! Consectetur quo suscipit dignissimos, vero veritatis a, numquam, aut placeat minus illo consequatur doloremque corrupti! Ducimus tempora voluptas nihil maxime!
                        </p>
                    </div>
                    
                    <div className='justify-center col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                        <Image src={HeroImage} alt='Aaron Quinn' className='w-full h-auto rounded-2xl' />
                    </div>

                    <div className='col-span-2 flex flex-col items-center justify-between'>
                
                        <div className='flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={10}/>+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={3} />+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Local Mentors</h2>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={2}/>+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
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