import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec2 } from 'ogl';

const vertex = /* glsl */ `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const fragment = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 78.233);
    return fract(p.x * p.y);
}

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 cell = floor(uv * vec2(80.0, 36.0));
    float n = hash(cell + floor(uTime * 8.0));
    float scan = 0.5 + 0.5 * sin(uv.y * uResolution.y * 0.5 + uTime * 6.0);
    float flicker = 0.85 + 0.15 * sin(uTime * 18.0);
    float on = step(0.55, n);
    vec3 col = uColor * on * scan * flicker;
    col += 0.02 * uColor;
    gl_FragColor = vec4(col, 1.0);
}
`;

const FaultyTerminal = ({ className = '', color = '#22D3EE' }) => {
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

        const hex = color.replace('#', '');
        const colVec = [0, 2, 4].map((o) => parseInt(hex.substring(o, o + 2), 16) / 255);

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new Vec2(1, 1) },
                uColor: { value: colVec },
            },
        });
        const mesh = new Mesh(gl, { geometry, program });

        const resize = () => {
            renderer.setSize(container.clientWidth, container.clientHeight);
            program.uniforms.uResolution.value.set(
                container.clientWidth * renderer.dpr,
                container.clientHeight * renderer.dpr
            );
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
    }, [color]);

    return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }} />;
};

export default FaultyTerminal;
