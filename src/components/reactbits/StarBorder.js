import React from 'react';

const StarBorder = ({
    children,
    as: Tag = 'span',
    className = '',
    color = '#5B5BD6',
    speed = '5s',
    thickness = 1,
}) => {
    return (
        <>
            <style>{`
                @keyframes star-border-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>
            <Tag className={`relative inline-flex isolate rounded-full overflow-hidden ${className}`}
                style={{
                    padding: `${thickness}px`,
                    background: `conic-gradient(from 0deg, transparent 0%, ${color} 25%, transparent 50%, ${color} 75%, transparent 100%)`,
                }}
            >
                <span aria-hidden className="pointer-events-none absolute inset-[-50%]"
                    style={{
                        background: `conic-gradient(from 0deg, transparent 0%, ${color} 25%, transparent 50%, ${color} 75%, transparent 100%)`,
                        animation: `star-border-rotate ${speed} linear infinite`,
                    }}
                />
                <span className="relative z-10 inline-flex w-full rounded-full bg-[var(--bg-elev)]">
                    {children}
                </span>
            </Tag>
        </>
    );
};

export default StarBorder;
