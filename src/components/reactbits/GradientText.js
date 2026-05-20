import React from 'react';

const GradientText = ({
    children,
    className = '',
    colors = ['#5B5BD6', '#FF7A6B', '#8B5CF6'],
    animationSpeed = 6,
    as: Tag = 'span',
}) => {
    const gradient = `linear-gradient(120deg, ${colors.join(', ')})`;
    const id = React.useId();

    return (
        <>
            <style>{`@keyframes gradientText-${id.replace(/:/g, '')} { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }`}</style>
            <Tag
                className={`inline-block ${className}`}
                style={{
                    backgroundImage: gradient,
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    animation: `gradientText-${id.replace(/:/g, '')} ${animationSpeed}s ease infinite`,
                }}
            >
                {children}
            </Tag>
        </>
    );
};

export default GradientText;
