import React, { createContext, useContext } from 'react';
import { useSoundEffects } from '../utils/sounds';

const SoundContext = createContext(null);

export const SoundProvider = ({ children }) => {
    const sounds = useSoundEffects();

    return (
        <SoundContext.Provider value={sounds}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSounds = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSounds must be used within a SoundProvider');
    }
    return context;
}; 