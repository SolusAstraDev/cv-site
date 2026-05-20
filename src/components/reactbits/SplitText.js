import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const SplitText = ({
    text = '',
    delay = 40,
    duration = 0.5,
    className = '',
    as: Tag = 'span',
    direction = 'up',
    once = true,
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
            { threshold: 0.2 }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, [once]);

    const from = direction === 'down' ? { y: -24 } : { y: 24 };
    const words = String(text).split(' ');

    return (
        <Tag ref={ref} className={`inline-block ${className}`} aria-label={text}>
            {words.map((word, wi) => (
                <span key={wi} className="inline-block whitespace-pre">
                    {word.split('').map((ch, ci) => (
                        <motion.span
                            key={`${wi}-${ci}`}
                            initial={{ ...from, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration, delay: ((wi * 5 + ci) * delay) / 1000, ease: [0.2, 0.65, 0.3, 0.95] }}
                            className="inline-block"
                        >
                            {ch}
                        </motion.span>
                    ))}
                    {wi < words.length - 1 ? '\u00A0' : ''}
                </span>
            ))}
        </Tag>
    );
};

export default SplitText;
