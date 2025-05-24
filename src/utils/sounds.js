import useSound from 'use-sound';

// Get the base URL from the environment or default to '/cv-site'
const BASE_URL = process.env.PUBLIC_URL || '/cv-site';

// Initialize AudioContext after user interaction
const initializeAudio = () => {
    // Create and resume AudioContext
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
};

// Preload all sound effects for better performance
export const useSoundEffects = () => {
    const [playClick] = useSound(`${BASE_URL}/sounds/click.mp3`, {
        volume: 0.35,
        onload: () => console.log('Click sound loaded'),
        onloaderror: (err) => console.error('Click sound failed to load:', err)
    });
    const [playHover] = useSound(`${BASE_URL}/sounds/hover.mp3`, {
        volume: 0.1,
        onload: () => console.log('Hover sound loaded'),
        onloaderror: (err) => console.error('Hover sound failed to load:', err)
    });
    const [playOpen] = useSound(`${BASE_URL}/sounds/open.mp3`, {
        volume: 0.6,
        onload: () => console.log('Open sound loaded'),
        onloaderror: (err) => console.error('Open sound failed to load:', err)
    });
    const [playClose] = useSound(`${BASE_URL}/sounds/close.mp3`, {
        volume: 0.6,
        onload: () => console.log('Close sound loaded'),
        onloaderror: (err) => console.error('Close sound failed to load:', err)
    });

    return {
        playClick: (...args) => {
            initializeAudio();
            playClick(...args);
        },
        playHover: (...args) => {
            initializeAudio();
            playHover(...args);
        },
        playOpen: (...args) => {
            initializeAudio();
            playOpen(...args);
        },
        playClose: (...args) => {
            initializeAudio();
            playClose(...args);
        }
    };
};

// For even more lightweight usage, create individual hooks
export const useClickSound = (volume = 0.5) => {
    const [play] = useSound(`${BASE_URL}/sounds/click.mp3`, {
        volume,
        onload: () => console.log('Individual click sound loaded'),
        onloaderror: (err) => console.error('Individual click sound failed to load:', err)
    });
    return [(...args) => {
        initializeAudio();
        play(...args);
    }];
};

export const useHoverSound = (volume = 0.2) => {
    const [play] = useSound(`${BASE_URL}/sounds/hover.mp3`, {
        volume,
        onload: () => console.log('Individual hover sound loaded'),
        onloaderror: (err) => console.error('Individual hover sound failed to load:', err)
    });
    return [(...args) => {
        initializeAudio();
        play(...args);
    }];
};

export const useOpenSound = (volume = 0.6) => {
    const [play] = useSound(`${BASE_URL}/sounds/open.mp3`, { volume });
    return [(...args) => {
        initializeAudio();
        play(...args);
    }];
};

export const useCloseSound = (volume = 0.6) => {
    const [play] = useSound(`${BASE_URL}/sounds/close.mp3`, { volume });
    return [(...args) => {
        initializeAudio();
        play(...args);
    }];
}; 