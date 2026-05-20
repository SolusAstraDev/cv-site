import React, { useEffect, useRef, useState } from 'react';

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

const DecryptedText = ({
    text = '',
    speed = 45,
    maxIterations = 14,
    characters = DEFAULT_CHARS,
    className = '',
    animateOn = 'view',
    revealDirection = 'start',
}) => {
    const ref = useRef(null);
    const [display, setDisplay] = useState(text);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (animateOn !== 'view') return undefined;
        const node = ref.current;
        if (!node) return undefined;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, [animateOn]);

    useEffect(() => {
        if (!active) return undefined;
        let iter = 0;
        const target = text;
        const len = target.length;
        const interval = setInterval(() => {
            iter += 1;
            const reveal = Math.min(len, Math.floor((iter / maxIterations) * len));
            const next = target
                .split('')
                .map((ch, i) => {
                    if (ch === ' ') return ' ';
                    let revealed;
                    if (revealDirection === 'end') revealed = i >= len - reveal;
                    else if (revealDirection === 'center') {
                        const mid = Math.floor(len / 2);
                        revealed = Math.abs(i - mid) < reveal / 2;
                    } else revealed = i < reveal;
                    if (revealed) return ch;
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join('');
            setDisplay(next);
            if (iter >= maxIterations) {
                clearInterval(interval);
                setDisplay(target);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [active, text, speed, maxIterations, characters, revealDirection]);

    return (
        <span ref={ref} className={`font-mono ${className}`} aria-label={text}>
            {display}
        </span>
    );
};

export default DecryptedText;
