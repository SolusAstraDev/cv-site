import React, { useEffect, useRef } from 'react';

const GRADIENT_STYLE = {
    backgroundImage: 'var(--gradient-accent)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
};

const TextPressure = ({
    text = '',
    className = '',
    minWeight = 400,
    maxWeight = 900,
    radius = 140,
    gradient = false,
    as: Tag = 'span',
}) => {
    const ref = useRef(null);

    useEffect(() => {
        const root = ref.current;
        if (!root) return undefined;

        const onMove = (e) => {
            const letters = root.querySelectorAll('[data-letter]');
            letters.forEach((node) => {
                const rect = node.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const t = Math.max(0, 1 - dist / radius);
                const weight = minWeight + (maxWeight - minWeight) * t;
                const scale = 1 + t * 0.35;
                node.style.fontWeight = `${Math.round(weight)}`;
                node.style.transform = `scale(${scale.toFixed(3)})`;
            });
        };

        const onLeave = () => {
            const letters = root.querySelectorAll('[data-letter]');
            letters.forEach((node) => {
                node.style.fontWeight = `${minWeight}`;
                node.style.transform = 'scale(1)';
            });
        };

        window.addEventListener('pointermove', onMove);
        root.addEventListener('pointerleave', onLeave);
        return () => {
            window.removeEventListener('pointermove', onMove);
            root.removeEventListener('pointerleave', onLeave);
        };
    }, [minWeight, maxWeight, radius]);

    return (
        <Tag ref={ref} className={`inline-block ${className}`} aria-label={text}>
            {text.split('').map((ch, i) => (
                <span
                    key={i}
                    data-letter
                    className="inline-block transition-[transform,font-weight] duration-150 ease-out"
                    style={{
                        fontWeight: minWeight,
                        ...(gradient ? GRADIENT_STYLE : { color: 'var(--accent)' }),
                    }}
                >
                    {ch === ' ' ? '\u00A0' : ch}
                </span>
            ))}
        </Tag>
    );
};

export default TextPressure;
