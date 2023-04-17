import Layout from "@/compnents/Layout";
import Image from "next/image";
import Aaron from '../../public/test720.png'
import AnimatedText from "@/compnents/AnimatedText";
import { motion } from 'framer-motion'
import Link from "next/link";
import HirePrompt from "@/compnents/HirePrompt";
import Transition from "@/compnents/Transition";
import Head from "next/head";

export default function Home() {

  const heroImage = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: {
            duration: .5,
        }
    }
  }

  return (
    <>
    <Head>
      <title>Aaron Quinn | Portfolio</title>
      <meta name='description' content='Aaron Quinns portfolio'></meta>
    </Head>
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center w-full lg:flex-col lg:w-full lg:gap-4">

        <div className="w-1/2 flex justify-center">
          <motion.div className="hover: cursor-pointer" 
            variants={heroImage}
            initial='initial'
            animate='animate'
            whileHover={{scale: 0.95}} 
            transition={{duration: 0.1 }} 
          >
            <Image src={Aaron} 
              alt="Aaron" 
              className="rounded-lg lg:hidden md:inline-block" 
              style={{ boxShadow: '0 6px 8px rgba(0, 0, 0, 0.7), 0 10px 16px rgba(0, 0, 0, 0.9)' }}
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
            />
          </motion.div>
        </div>

        <div className="w-1/2 lg:w-full flex flex-col items-center self-center">
          <h1>
            <AnimatedText text='Hello.' className="!text-8xl !text-left xl:!text-8xl lg:!text-center lg:!text-8xl md:!text-8xl sm:!text-6xl" />
            <AnimatedText text='My name is Aaron Quinn.' className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
          </h1>
          <p className="my-4 text-base font-medium">
            As of 2023, I am looking to merge my passion for software development into my career path and find meaningful employment in St. John&apos;s local tech industry.
          </p>

          <div className="flex items-center self-start mt-2 gap-4 lg:self-center">
            <Link href='/AARON_QUINN_RESUME.pdf' target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:bg-light dark:text-dark transition">
              My Resume
            </Link>

            <Link href="mailto:aaron.quinn.nfld@gmail.com" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:bg-light dark:text-dark transition">
              Email Me
            </Link>
          </div>

        </div>

        </div>
      </Layout>

      <HirePrompt />
    </main>
    </>
  )
}
