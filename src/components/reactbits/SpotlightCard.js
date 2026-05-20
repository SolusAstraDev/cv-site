import React, { useRef } from 'react';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(91, 91, 214, 0.18)' }) => {
    const ref = useRef(null);

    const onMove = (e) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        node.style.setProperty('--spot-x', `${x}px`);
        node.style.setProperty('--spot-y', `${y}px`);
        node.style.setProperty('--spot-opacity', '1');
    };

    const onLeave = () => {
        const node = ref.current;
        if (!node) return;
        node.style.setProperty('--spot-opacity', '0');
    };

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] transition-colors ${className}`}
            style={{
                '--spot-color': spotlightColor,
                '--spot-opacity': 0,
                '--spot-x': '50%',
                '--spot-y': '50%',
            }}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: 'var(--spot-opacity)',
                    background:
                        'radial-gradient(380px circle at var(--spot-x) var(--spot-y), var(--spot-color), transparent 60%)',
                }}
            />
            <div className="relative">{children}</div>
        </div>
    );
};

export default SpotlightCard;
