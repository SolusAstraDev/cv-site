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
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uAmplitude;
uniform float uSpeed;

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

float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 4; i++) {
        v += amp * noise(p);
        p *= 2.0;
        amp *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= uResolution.x / uResolution.y;

    float t = uTime * uSpeed * 0.2;
    float n = fbm(p * 1.2 + vec2(t, t * 0.6));
    float n2 = fbm(p * 2.0 - vec2(t * 0.4, -t));

    vec3 col = mix(uColorA, uColorB, smoothstep(0.2, 0.9, n + uv.y * 0.5));
    col = mix(col, uColorC, smoothstep(0.4, 1.0, n2));

    float band = sin((uv.y + n * uAmplitude) * 6.2831);
    col += 0.04 * vec3(band);

    gl_FragColor = vec4(col, 1.0);
}
`;

const Aurora = ({
    className = '',
    colorA = '#FBF7F0',
    colorB = '#E5E0F5',
    colorC = '#C7D2FE',
    amplitude = 0.6,
    speed = 1.0,
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const renderer = new Renderer({ alpha: true, antialias: false });
        const gl = renderer.gl;
        container.appendChild(gl.canvas);
        gl.canvas.style.width = '100%';
        gl.canvas.style.height = '100%';
        gl.canvas.style.display = 'block';

        const hexToVec3 = (hex) => {
            const v = hex.replace('#', '');
            return [0, 2, 4].map((o) => parseInt(v.substring(o, o + 2), 16) / 255);
        };

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new Vec2(1, 1) },
                uColorA: { value: hexToVec3(colorA) },
                uColorB: { value: hexToVec3(colorB) },
                uColorC: { value: hexToVec3(colorC) },
                uAmplitude: { value: amplitude },
                uSpeed: { value: speed },
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
            if (gl.canvas.parentNode === container) container.removeChild(gl.canvas);
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, [colorA, colorB, colorC, amplitude, speed]);

    return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }} />;
};

export default Aurora;
