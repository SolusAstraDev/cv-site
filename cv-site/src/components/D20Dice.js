import React, { useState } from 'react';

const D20Dice = () => {
    const [result, setResult] = useState(null);
    const [isRolling, setIsRolling] = useState(false);

    // Easter egg messages for special numbers
    const getSpecialMessage = (num) => {
        switch (num) {
            case 11:
                return {
                    message: "Geronimo!",
                    class: "text-blue-500 dark:text-blue-400",
                    subtext: "— Eleventh Doctor"
                };
            case 13:
                return {
                    message: "Brilliant!",
                    class: "text-yellow-500 dark:text-yellow-400",
                    subtext: "— Thirteenth Doctor"
                };
            case 47:
                return {
                    message: "Resistance is futile!",
                    class: "text-red-500 dark:text-red-400",
                    subtext: "— The Borg"
                };
            case 1701:
                return {
                    message: "To boldly roll!",
                    class: "text-blue-400 dark:text-blue-300",
                    subtext: "— USS Enterprise"
                };
            case 20:
                return {
                    message: "Critical Hit!",
                    class: "text-green-500 dark:text-green-400",
                    subtext: "Natural 20"
                };
            case 1:
                return {
                    message: "Critical Miss!",
                    class: "text-red-500 dark:text-red-400",
                    subtext: "Natural 1"
                };
            default:
                return null;
        }
    };

    const rollDice = () => {
        setIsRolling(true);
        // Simulate dice roll animation
        const rolls = 5; // Number of intermediate rolls for animation
        let currentRoll = 0;

        const rollInterval = setInterval(() => {
            // Add easter egg numbers to the possible results
            const specialRoll = Math.random() < 0.1; // 10% chance for easter egg
            let roll;
            if (specialRoll) {
                const easterEggs = [11, 13, 47, 1701];
                roll = easterEggs[Math.floor(Math.random() * easterEggs.length)];
            } else {
                roll = Math.floor(Math.random() * 20) + 1;
            }
            setResult(roll);
            currentRoll++;

            if (currentRoll >= rolls) {
                clearInterval(rollInterval);
                setIsRolling(false);
            }
        }, 150);
    };

    const specialResult = result ? getSpecialMessage(result) : null;
    const resultClass = specialResult?.class || '';

    return (
        <div className="inline-block">
            <button
                onClick={rollDice}
                disabled={isRolling}
                className={`
                    relative
                    w-20 h-20
                    text-white
                    transform
                    transition-all
                    duration-200
                    ${isRolling ? 'animate-bounce' : 'hover:scale-105'}
                    focus:outline-none
                    focus:ring-2
                    focus:ring-purple-500
                    focus:ring-opacity-50
                    group
                `}
                style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
            >
                <div className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-purple-500
                    to-purple-700
                    dark:from-purple-600
                    dark:to-purple-900
                    group-hover:from-purple-600
                    group-hover:to-purple-800
                    dark:group-hover:from-purple-500
                    dark:group-hover:to-purple-700
                    transform
                    transition-all
                    duration-200
                    shadow-lg
                    ${specialResult ? 'animate-pulse' : ''}
                `}
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}>
                    {/* Highlight effect */}
                    <div className="absolute inset-0 bg-white opacity-10"
                        style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 50% 50%, 0% 25%)',
                        }}
                    />
                    {/* Shadow effect */}
                    <div className="absolute inset-0 bg-black opacity-10"
                        style={{
                            clipPath: 'polygon(50% 50%, 100% 75%, 50% 100%, 0% 75%)',
                        }}
                    />
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {result ? (
                            <span className={`text-xl font-bold font-mono transform -translate-y-1 ${resultClass}`}>{result}</span>
                        ) : (
                            <span className="text-xl font-bold font-mono transform -translate-y-1">d20</span>
                        )}
                    </div>
                </div>
            </button>
            {result && (
                <div className="mt-3 text-center">
                    <div className={`text-sm font-medium ${specialResult?.class || ''}`}>
                        {specialResult?.message || 'Roll'}
                    </div>
                    {specialResult?.subtext && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {specialResult.subtext}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default D20Dice; 