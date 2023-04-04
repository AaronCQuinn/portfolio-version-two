import React, { useEffect } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedNumbers = ({ value }) => {

    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const inView = useInView(ref, {once: true});

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    });

    return <span ref={ref}> </span>;
};
