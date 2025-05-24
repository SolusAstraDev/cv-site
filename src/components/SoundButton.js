import React from 'react';
import { useClickSound, useHoverSound } from '../utils/sounds';

const SoundButton = ({
    children,
    onClick,
    className = '',
    clickVolume = 0.5,
    hoverVolume = 0.2,
    ...props
}) => {
    const [playClick] = useClickSound(clickVolume);
    const [playHover] = useHoverSound(hoverVolume);

    const handleClick = (e) => {
        playClick();
        if (onClick) onClick(e);
    };

    return (
        <button
            className={`py-2 px-4 rounded-md ${className}`}
            onClick={handleClick}
            onMouseEnter={() => playHover()}
            {...props}
        >
            {children}
        </button>
    );
};

export default SoundButton; 