import React, { useState } from 'react';

const PixelTransition = ({
    firstContent,
    secondContent,
    gridSize = 10,
    duration = 380,
    className = '',
    pixelColor = '#1B1B2F',
    hoverable = true,
}) => {
    const [hover, setHover] = useState(false);
    const cells = gridSize * gridSize;

    return (
        <div
            className={`relative overflow-hidden rounded-2xl ${className}`}
            onMouseEnter={() => hoverable && setHover(true)}
            onMouseLeave={() => hoverable && setHover(false)}
        >
            <div className="relative w-full h-full">{firstContent}</div>
            <div
                className="absolute inset-0 transition-opacity"
                style={{ opacity: hover ? 1 : 0, transitionDuration: `${duration}ms`, transitionDelay: `${duration}ms` }}
                aria-hidden={!hover}
            >
                {secondContent}
            </div>
            <div
                className="absolute inset-0 grid pointer-events-none"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                }}
                aria-hidden
            >
                {Array.from({ length: cells }).map((_, i) => {
                    const delay = (Math.random() * duration) | 0;
                    return (
                        <span
                            key={i}
                            style={{
                                background: pixelColor,
                                transition: `opacity ${duration}ms ease`,
                                transitionDelay: `${delay}ms`,
                                opacity: hover ? 0 : 1,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PixelTransition;
