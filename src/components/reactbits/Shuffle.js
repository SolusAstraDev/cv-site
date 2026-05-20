import React, { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&';

const Shuffle = ({ text = '', duration = 700, className = '', as: Tag = 'span' }) => {
    const ref = useRef(null);
    const [display, setDisplay] = useState(text);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;
        let raf = 0;
        let start = 0;
        let running = false;

        const tick = (t) => {
            if (!start) start = t;
            const progress = Math.min(1, (t - start) / duration);
            const len = text.length;
            const next = text
                .split('')
                .map((ch, i) => {
                    if (ch === ' ') return ' ';
                    const threshold = (i + 1) / len;
                    if (progress >= threshold) return ch;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join('');
            setDisplay(next);
            if (progress < 1 && running) raf = requestAnimationFrame(tick);
            else setDisplay(text);
        };

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !running) {
                    running = true;
                    start = 0;
                    raf = requestAnimationFrame(tick);
                    obs.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        obs.observe(node);
        return () => {
            obs.disconnect();
            cancelAnimationFrame(raf);
            running = false;
        };
    }, [text, duration]);

    return (
        <Tag ref={ref} className={className} aria-label={text}>
            {display}
        </Tag>
    );
};

export default Shuffle;
