import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const BlurText = ({
    text = '',
    delay = 60,
    duration = 0.55,
    className = '',
    as: Tag = 'span',
    once = true,
    immediate = false,
}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(immediate);

    useEffect(() => {
        if (immediate) return undefined;
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
    }, [once, immediate]);

    const words = String(text).split(' ');
    return (
        <Tag ref={ref} className={`inline-block ${className}`} aria-label={text}>
            {words.map((word, wi) => (
                <span key={wi} className="inline-block whitespace-pre">
                    {word.split('').map((ch, ci) => (
                        <motion.span
                            key={`${wi}-${ci}`}
                            initial={{ filter: 'blur(10px)', opacity: 0, y: 6 }}
                            animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
                            transition={{ duration, delay: ((wi * 4 + ci) * delay) / 1000, ease: 'easeOut' }}
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

export default BlurText;
