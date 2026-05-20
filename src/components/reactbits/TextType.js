import React, { useEffect, useRef, useState } from 'react';

const TextType = ({
    text = '',
    speed = 32,
    startDelay = 200,
    cursor = '|',
    className = '',
    triggerOnView = true,
    as: Tag = 'span',
}) => {
    const ref = useRef(null);
    const [display, setDisplay] = useState('');
    const [done, setDone] = useState(false);
    const [armed, setArmed] = useState(!triggerOnView);

    useEffect(() => {
        if (!triggerOnView) return undefined;
        const node = ref.current;
        if (!node) return undefined;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setArmed(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, [triggerOnView]);

    useEffect(() => {
        if (!armed) return undefined;
        let i = 0;
        const start = setTimeout(() => {
            const id = setInterval(() => {
                i += 1;
                setDisplay(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(id);
                    setDone(true);
                }
            }, speed);
        }, startDelay);
        return () => clearTimeout(start);
    }, [armed, text, speed, startDelay]);

    return (
        <Tag ref={ref} className={`font-mono ${className}`} aria-label={text}>
            {display}
            <span className={`inline-block ml-0.5 ${done ? 'opacity-50 animate-pulse' : 'animate-pulse'}`}>{cursor}</span>
        </Tag>
    );
};

export default TextType;
