import React, { Suspense, lazy } from 'react';
import ReducedMotionGate from './ReducedMotionGate';

const Galaxy = lazy(() => import('../reactbits/Galaxy'));
const Aurora = lazy(() => import('../reactbits/Aurora'));
const Noise = lazy(() => import('../reactbits/Noise'));

const StaticFallback = ({ darkMode }) => (
    <div
        className="bg-layer"
        style={{
            background: darkMode
                ? 'radial-gradient(1200px 600px at 20% 20%, rgba(91,91,214,0.35), transparent 60%), radial-gradient(900px 700px at 80% 70%, rgba(139,92,246,0.25), transparent 60%), #0B0E1A'
                : 'radial-gradient(1200px 600px at 20% 20%, rgba(91,91,214,0.18), transparent 60%), radial-gradient(900px 700px at 80% 70%, rgba(255,122,107,0.18), transparent 60%), #FBF7F0',
        }}
    />
);

const BackgroundLayer = ({ darkMode }) => {
    return (
        <ReducedMotionGate fallback={<StaticFallback darkMode={darkMode} />}>
            <div className="bg-layer">
                <Suspense fallback={<StaticFallback darkMode={darkMode} />}>
                    {darkMode ? (
                        <Galaxy colorA="#0B0E1A" colorB="#1a1238" colorC="#5B5BD6" density={1.2} />
                    ) : (
                        <Aurora colorA="#FBF7F0" colorB="#E5E0F5" colorC="#C7D2FE" amplitude={0.55} speed={0.9} />
                    )}
                </Suspense>
            </div>
            <Suspense fallback={null}>
                <Noise opacity={darkMode ? 0.05 : 0.03} className="bg-noise" />
            </Suspense>
        </ReducedMotionGate>
    );
};

export default BackgroundLayer;
