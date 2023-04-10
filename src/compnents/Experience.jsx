import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'

const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between min-w-full'>
            <motion.div className='w-full '
            initial={{y:50}}
            whileInView={{y:0}}
            trainsition={{duration: .5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl flex justify-between items-center dark:text-light'>{position}&nbsp;
                <span className='capitalize dark:text-light text-dark/50'>
                    @
                    <a href={companyLink} className='hover:underline'>{company}</a>
                </span>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {address}
                </span>

                <ul className='list-disc'>
                    {work.map((item, index) => {
                        return (
                        <li className='font-medium w-full dark:text-light/75' key={index}>
                            {item}
                        </li>
                        )
                    })}
                </ul>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "-200px start"] });

    return (
        <div className='my-64 flex flex-col justify-center items-center'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light'>
                What I've Been Up To
            </h2>

            <div ref={ref} className='w-full relative flex flex-col items-center'>

                <motion.div 
                className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'
                style={{scaleY: scrollYProgress}}
                />

                <ul className='flex flex-col items-start justify-between ml-4 w-[75%]'>
                    <Details 
                        position={"Assessment Processing Officer"} 
                        company={"Government of Canada"}
                        address={"290 Empire Avenue"}
                        time={"2020-Present"}
                        work={["Executed comprehensive reviews related to fraudulent activity on taxpayer accounts",
                        "Applied fiscal eligibility criteria to make approval decisions for federal level benefit programs",
                        "Elected by senior management to mentor new employees into the Identity Protection Services program"]}
                        companyLink={"https://www.canada.ca/en/revenue-agency.html"}
                    />
                    <Details 
                        position={"Student"} 
                        company={"Get Coding NL"}
                        address={"Online"}
                        time={"2021-2022"}
                        work={["Collaboration with senior members in St. John's local tech environment to learn through practical application of skills",
                        "Facilitated education in web development, specifically React / Node.js", 
                        "Focus in React / Node.js",
                        ]}
                        companyLink={"https://www.getcoding.ca/"}
                    />
                    <Details 
                        position={"Bachelor of Commerce (Co-op)"} 
                        company={"MUN"}
                        address={"Memorial University of Newfoundland"}
                        time={"2015-2020"}
                        work={["Pursued work placements in all sectors: Private, Public, and Not-for-profit", "Completed accounting major", ]}
                        companyLink={"https://www.mun.ca/business/"}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience