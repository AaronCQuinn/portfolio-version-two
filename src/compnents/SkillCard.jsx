import React, { useRef } from 'react'
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const SkillCard = ({ text, className='' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const motionOptions = {
        initial: {
            opacity: 0,
            y:50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            }
        }
    }

  return (
    <div className={`flex bg-dark h-full border-2 border-dark p-6 items-center gap-2 w-3/4 ${className}`}>
        <div ref={ref} className='animation-ctn'>
            <div className={isInView ? "icon icon--order-success svg" : ""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38.5px" height="38.5px" >
            <g fill="none" stroke="#fff" strokeWidth="0.5">
                <circle
                    cx="19.25"
                    cy="19.25"
                    r="18"
                    style={{
                        strokeDasharray: "120px, 120px",
                        strokeDashoffset: "240px"
                    }}
                ></circle>
                <circle
                    id="colored"
                    fill="#fff"
                    cx="19.25"
                    cy="19.25"
                    r="18"
                    style={{
                        strokeDasharray: "120px, 120px",
                        strokeDashoffset: "240px"
                    }}
                ></circle>
                <polyline
                    className="st0"
                    stroke="#121212"
                    strokeWidth="2.5"
                    points="10.875,19.45 15.925,24.475 28.05,12.35 "
                    style={{
                        strokeDasharray: "25px, 25px",
                        strokeDashoffset: "50px"
                    }}
                />
            </g>
        </svg>


            </div>
        </div>

        <motion.span className='text-light text-2xl'
            variants={motionOptions}
            initial="initial"
            animate={isInView ? 'animate' : 'null'}
            ref={ref}
        >{text}</motion.span>
    </div>
  )
}

export default SkillCard