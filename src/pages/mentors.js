import React from 'react'
import Head from 'next/head'
import Layout from '@/compnents/Layout'
import AnimatedText from '@/compnents/AnimatedText'
import Esteban from '../../public/Esteban.c6d155eaf95f7e56de89.jpg'
import Karthik from '../../public/Karthik.a24268a7f32bc249c145.jpg'
import Shiwei from '../../public/Shiwei.961cfc69cf8238389f7a.jpeg'
import Image from 'next/image'

const MentorArticle = ({ name, module, feedback, title, src }) => {
    return (
        <li className='relative w-4/5 mx-auto p-4 my-4 rounded-xl flex lg:flex-col lg:gap-4 items-center justify-between bg-light text-dark dark:bg-dark dark:text-light/75 dark:border-light first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
            <Image src={src} className='w-2/12 lg:mr-0 mr-4 rounded-xl border border-dark lg:w-6/12'
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
            />
            <div className=' w-11/12 '>
                <h2 className='capitalize text-xl font-bold mb-2 lg:text-center dark:text-light text-dark'>
                    {name + " - "}
                    <span className='font-semibold'>{title}</span>
                </h2>
                <div>{feedback}</div>
            </div>
            <div className='w-1/12 lg:w-full lg:pl-0 text-xl flex justify-center text-center text-dark dark:text-light font-semibold mx-4'>{module}</div>
        </li>
    )
}

const mentors = () => {
  return (
    <>
    <Head>
        <title>Aaron Quinn | Mentors</title>
        <meta name='description' content='Information about Aaron Quinn and his journey to software development.' />
    </Head>

    <main>
        <Layout className='pt-16 pb-32'>
            <AnimatedText className='mb-8 lg:mb-8 lg:!text-6xl sm:!text-4xl xs:!text-2xl' text={"Some Help Along The Way"} />

            <div className={`flex bg-dark h-full border-2 border-dark p-6 items-center gap-2 w-3/4 lg:w-full text-light mx-auto mb-16 dark:text-dark dark:bg-light font-semibold`}>
                In the Get Coding program, which is based in St. John&apos;s, students learn web development concepts through practical application. Each student is paired with a senior member of the local tech industry, and together they collaborate on creating a portfolio project that is seen through to completion. Below is a list of the mentors I had the privilege of working with, along with their feedback on my work.
            </div>
            <MentorArticle 
                module={'React'} 
                src={Esteban}
                feedback={"Aaron and I only worked together for 6 sessions. He is a really hard working and smart developer. I was able to see a significant improvement during that time. The fact he was able to be proficient in React after 6 sessions shows how fast he learns and can adapt to new technologies. Aaron is also very proactive and self-directed. He learnt most of the basic React concepts before we started working together."}
                name={'Esteban Ricalde'}
                title={"Senior Software Developer, Mysa"}
            />
            <MentorArticle 
                module={'Node.js'} 
                src={Karthik}
                feedback={"Aaron is a great addition to a team who brings great dedication and curiosity towards problem solving. He is a inquisitive individual who shows great excitement towards implementing new technologies."}
                name={'Karthik Poomalraj'}
                title={"Software Developer, PointClickCare"}
            />
            <MentorArticle 
                module={'HTML CSS Javascript'} 
                src={Shiwei}
                feedback={"Aaron is an independent learner and eager to put hands down to build things, and also knows when to ask for help when blocked. Aaron had already eastablished a good foundation of learning Java himself before meeting me, which really helped him understand some of the fundamentals of Javascript."}
                name={'Shiwei Han'}
                title={"Software Developer, Verafin"}
            />
        </Layout>
    </main>

    </>
  )
}

export default mentors