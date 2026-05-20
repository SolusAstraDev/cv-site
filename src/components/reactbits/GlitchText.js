import React from 'react';

const GlitchText = ({ children, className = '', as: Tag = 'span' }) => {
    return (
        <>
            <style>{`
                @keyframes glitchA { 0%,100%{transform:translate(0,0)} 20%{transform:translate(-2px,1px)} 40%{transform:translate(2px,-1px)} 60%{transform:translate(-1px,-2px)} 80%{transform:translate(1px,2px)} }
                @keyframes glitchB { 0%,100%{transform:translate(0,0)} 20%{transform:translate(2px,-1px)} 40%{transform:translate(-2px,1px)} 60%{transform:translate(1px,2px)} 80%{transform:translate(-1px,-2px)} }
            `}</style>
            <Tag className={`relative inline-block font-display ${className}`}>
                <span className="relative z-10">{children}</span>
                <span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ color: '#22D3EE', transform: 'translate(0,0)', animation: 'glitchA 1.6s infinite linear', mixBlendMode: 'screen' }}
                >
                    {children}
                </span>
                <span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ color: '#FF7A6B', transform: 'translate(0,0)', animation: 'glitchB 1.4s infinite linear', mixBlendMode: 'screen' }}
                >
                    {children}
                </span>
            </Tag>
        </>
    );
};

export default GlitchText;
