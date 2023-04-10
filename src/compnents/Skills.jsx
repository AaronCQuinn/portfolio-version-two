import React from 'react'
import SkillCard from './SkillCard'
import AnimatedText from './AnimatedText'

const Skills = () => {
  return (
    <div className='mt-64 lg:mt-32'>
        <AnimatedText text='The Technologies I love' className='mb-16 lg:mb-8 lg:!text-6xl sm:!text-4xl xs:!text-2xl'/>

        <div className='grid grid-cols-2 gap-4 lg:grid-cols-1'>
            <SkillCard text='React' className='place-self-end'/>
            <SkillCard text='Javascript' />
            <SkillCard text='Node.js' className='place-self-end'/>
            <SkillCard text='Next.js' />
            <SkillCard text='Mongo / Mongoose' className='place-self-end'/>
            <SkillCard text='Express.js' />
        </div>
    </div>
  )
}

export default Skills