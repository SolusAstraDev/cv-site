import React, { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdditiveBlending, NoToneMapping } from 'three';
import useStarryBackground from '../hooks/useStarryBackground';

// A simple random function that we'll use to generate stars at random positions
const randomInRange = (min, max) => Math.random() * (max - min) + min;

// Create a single star particle
const StarParticle = () => {
    const particle = useRef();

    // Set random position for each star
    const position = useMemo(() => [
        randomInRange(-50, 50),  // x
        randomInRange(-30, 30),  // y
        randomInRange(-10, -5)   // z (slightly negative to be "behind" the camera)
    ], []);

    // Set random speed for twinkling effect
    const speed = useMemo(() => randomInRange(0.1, 0.5), []);

    // Animate the star's brightness using opacity
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (particle.current) {
            // Create a subtle twinkling effect
            particle.current.material.opacity = Math.abs(Math.sin(time * speed)) * 0.5 + 0.5;
        }
    });

    return (
        <mesh ref={particle} position={position} renderOrder={-1}>
            <circleGeometry args={[0.05, 32]} />
            <meshBasicMaterial
                color="#ffffff"
                blending={AdditiveBlending}
                transparent={true}
                depthWrite={false}
            />
        </mesh>
    );
};

// Create a group of stars
const Stars = ({ count = 400 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <StarParticle key={i} />
            ))}
        </>
    );
};

// Fallback placeholder when stars are loading
const StarryFallback = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundColor: '#121212',
            }}
        ></div>
    );
};

// Main component that wraps everything
const StarryBackground = () => {
    const starCount = useStarryBackground(200);

    return (
        <div className="starry-background">
            <Suspense fallback={<StarryFallback />}>
                <Canvas
                    dpr={[1, 2]}
                    camera={{ position: [0, 0, 5], fov: 75 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        backgroundColor: 'transparent',
                    }}
                    gl={{
                        antialias: false,
                        toneMapping: NoToneMapping,
                        preserveDrawingBuffer: true
                    }}
                    performance={{ min: 0.1 }}
                >
                    <Stars count={starCount} />
                </Canvas>
            </Suspense>
        </div>
    );
};

export default StarryBackground; 