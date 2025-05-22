import { useState, useEffect } from 'react';

const useStarryBackground = (initialCount = 200) => {
    const [starCount, setStarCount] = useState(initialCount);

    useEffect(() => {
        // Adjust star count based on device performance
        const adjustStarCount = () => {
            // Check for mobile devices which typically have lower performance
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            // Check screen width to adjust density
            const screenWidth = window.innerWidth;

            if (isMobile) {
                // Reduce stars on mobile devices
                setStarCount(Math.min(100, initialCount));
            } else if (screenWidth < 768) {
                // Small screens
                setStarCount(Math.min(150, initialCount));
            } else if (screenWidth < 1200) {
                // Medium screens
                setStarCount(initialCount);
            } else {
                // Large screens can handle more stars
                setStarCount(Math.min(300, initialCount * 1.5));
            }
        };

        // Adjust initially and on window resize
        adjustStarCount();
        window.addEventListener('resize', adjustStarCount);

        return () => {
            window.removeEventListener('resize', adjustStarCount);
        };
    }, [initialCount]);

    return starCount;
};

export default useStarryBackground; 