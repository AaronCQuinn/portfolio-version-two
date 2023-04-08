import React from 'react'
import Head from 'next/head'
import Layout from '@/compnents/Layout'
import AnimatedText from '@/compnents/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/compnents/Icons'

const FeaturedProject = ({ type, title, summary, img, link, ghLink }) => {
    return (
        <article>
            <Link href={link} target={'_blank'}>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div>
                <span>{type}</span>
                <Link href={link} target={'_blank'}>
                    <h2>
                        {title}
                    </h2>
                </Link>
                <p>
                    {summary}
                </p>

                <div>
                    <Link href={ghLink} target={'_blank'}>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target={'_blank'}>
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

        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout>
                <AnimatedText className='pt-16' text={"Lorem Ipsum"} />
                
                <div className="grid grid-cols-12 gap-24">
                    <div className='col-span-12'>
                        <FeaturedProject />
                    </div>
                    <div className='col-span-6'>
                        Project-1
                    </div>
                    <div className='col-span-6'>
                        Project-2
                    </div>
                </div>


            </Layout>
        </main>
    </>
  )
}

export default projects