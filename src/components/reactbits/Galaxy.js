import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec2 } from 'ogl';

const vertex = /* glsl */ `
attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uDensity;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 78.233);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
    vec2 m = (uMouse - 0.5 * uResolution.xy) / uResolution.y;
    uv += m * 0.15;

    // Nebula base
    float n = noise(uv * 1.5 + vec2(uTime * 0.03, uTime * 0.02));
    n += 0.5 * noise(uv * 3.0 - vec2(uTime * 0.02, 0.0));
    float nebula = smoothstep(0.4, 1.2, n);
    vec3 base = mix(uColorA, uColorB, uv.y * 0.5 + 0.5);
    base = mix(base, uColorC, nebula * 0.6);

    // Star layer (procedural points)
    float stars = 0.0;
    for (float i = 0.0; i < 3.0; i++) {
        vec2 g = uv * (60.0 + i * 30.0);
        vec2 id = floor(g);
        vec2 fr = fract(g) - 0.5;
        float h = hash(id + i);
        float size = step(0.985 - 0.005 * uDensity, h);
        float d = length(fr);
        float twinkle = 0.5 + 0.5 * sin(uTime * (2.0 + h * 4.0) + h * 10.0);
        stars += size * smoothstep(0.06, 0.0, d) * twinkle;
    }

    vec3 col = base + stars * vec3(1.0, 0.95, 1.05);

    // Vignette
    float vig = smoothstep(1.2, 0.2, length(uv));
    col *= mix(0.7, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
}
`;

const Galaxy = ({
    className = '',
    colorA = '#0B0E1A',
    colorB = '#1a1238',
    colorC = '#5B5BD6',
    density = 1.0,
    mouseInteraction = true,
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const renderer = new Renderer({ alpha: true, antialias: false });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);
        container.appendChild(gl.canvas);
        gl.canvas.style.width = '100%';
        gl.canvas.style.height = '100%';
        gl.canvas.style.display = 'block';

        const hexToVec3 = (hex) => {
            const v = hex.replace('#', '');
            const r = parseInt(v.substring(0, 2), 16) / 255;
            const g = parseInt(v.substring(2, 4), 16) / 255;
            const b = parseInt(v.substring(4, 6), 16) / 255;
            return [r, g, b];
        };

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new Vec2(1, 1) },
                uMouse: { value: new Vec2(0, 0) },
                uColorA: { value: hexToVec3(colorA) },
                uColorB: { value: hexToVec3(colorB) },
                uColorC: { value: hexToVec3(colorC) },
                uDensity: { value: density },
            },
        });
        const mesh = new Mesh(gl, { geometry, program });

        const resize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            renderer.setSize(w, h);
            program.uniforms.uResolution.value.set(w * renderer.dpr, h * renderer.dpr);
        };
        resize();
        window.addEventListener('resize', resize);

        const onMove = (e) => {
            if (!mouseInteraction) return;
            program.uniforms.uMouse.value.set(e.clientX * renderer.dpr, (window.innerHeight - e.clientY) * renderer.dpr);
        };
        window.addEventListener('pointermove', onMove);

        let raf = 0;
        const start = performance.now();
        const tick = () => {
            program.uniforms.uTime.value = (performance.now() - start) / 1000;
            renderer.render({ scene: mesh });
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
            window.removeEventListener('pointermove', onMove);
            if (gl.canvas.parentNode === container) container.removeChild(gl.canvas);
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, [colorA, colorB, colorC, density, mouseInteraction]);

    return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }} />;
};

export default Galaxy;
