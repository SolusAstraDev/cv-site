import React from 'react';

const ShinyText = ({ text, speed = 4, className = '', disabled = false, as: Tag = 'span' }) => {
    return (
        <>
            <style>{`@keyframes shinyText { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
            <Tag className={`relative inline-block ${className}`}>
                <span className="relative z-[1]" style={{ color: 'var(--text)' }}>
                    {text}
                </span>
                {!disabled && (
                    <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 z-[2] pointer-events-none whitespace-nowrap"
                        style={{
                            color: 'transparent',
                            backgroundImage:
                                'linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.9) 50%, transparent 65%)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: `shinyText ${speed}s linear infinite`,
                        }}
                    >
                        {text}
                    </span>
                )}
            </Tag>
        </>
    );
};

export default ShinyText;
