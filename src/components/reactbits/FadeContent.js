import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const FadeContent = ({
    children,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    distance = 20,
    threshold = 0.15,
    once = true,
    className = '',
}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) obs.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, [threshold, once]);

    const offset = direction === 'up'
        ? { y: distance }
        : direction === 'down'
            ? { y: -distance }
            : direction === 'left'
                ? { x: distance }
                : direction === 'right'
                    ? { x: -distance }
                    : { y: 0, x: 0 };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...offset }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration, delay, ease: [0.2, 0.65, 0.3, 0.95] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeContent;
