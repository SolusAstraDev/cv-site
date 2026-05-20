import React from 'react';
import ClickSpark from '../reactbits/ClickSpark';
import ReducedMotionGate from './ReducedMotionGate';

const ClickSparkRoot = ({ darkMode }) => {
    return (
        <ReducedMotionGate fallback={null}>
            <ClickSpark
                sparkColor={darkMode ? '#8B5CF6' : '#5B5BD6'}
                sparkCount={10}
                sparkSize={9}
                sparkRadius={26}
            />
        </ReducedMotionGate>
    );
};

export default ClickSparkRoot;
