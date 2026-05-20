import React, { useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*';

const ScrambledText = ({ text = '', className = '', radius = 80, as: Tag = 'span' }) => {
    const ref = useRef(null);
    const targetRef = useRef(text);

    useEffect(() => {
        targetRef.current = text;
    }, [text]);

    useEffect(() => {
        const root = ref.current;
        if (!root) return undefined;

        const onMove = (e) => {
            const letters = root.querySelectorAll('[data-letter]');
            letters.forEach((node, i) => {
                const rect = node.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
                if (dist < radius && targetRef.current[i] !== ' ') {
                    node.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
                } else {
                    node.textContent = targetRef.current[i] ?? '';
                }
            });
        };

        const onLeave = () => {
            const letters = root.querySelectorAll('[data-letter]');
            letters.forEach((node, i) => {
                node.textContent = targetRef.current[i] ?? '';
            });
        };

        window.addEventListener('pointermove', onMove);
        root.addEventListener('pointerleave', onLeave);
        return () => {
            window.removeEventListener('pointermove', onMove);
            root.removeEventListener('pointerleave', onLeave);
        };
    }, [radius]);

    return (
        <Tag ref={ref} className={`inline-block ${className}`} aria-label={text}>
            {text.split('').map((ch, i) => (
                <span key={i} data-letter className="inline-block">
                    {ch === ' ' ? '\u00A0' : ch}
                </span>
            ))}
        </Tag>
    );
};

export default ScrambledText;
