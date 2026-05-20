import React, { useRef } from 'react';

const TiltedCard = ({ children, className = '', max = 12, scale = 1.02 }) => {
    const ref = useRef(null);

    const onMove = (e) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const ry = x * max;
        const rx = -y * max;
        node.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    };

    const onLeave = () => {
        const node = ref.current;
        if (!node) return;
        node.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`transition-transform duration-200 will-change-transform ${className}`}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {children}
        </div>
    );
};

export default TiltedCard;
