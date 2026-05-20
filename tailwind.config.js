/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sora: ['Sora', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
            },
            colors: {
                brand: {
                    cream: '#FBF7F0',
                    ink: '#1B1B2F',
                    indigo: '#5B5BD6',
                    coral: '#FF7A6B',
                    tardis: '#1F6FEB',
                    space: '#0B0E1A',
                    star: '#F2F4FF',
                    violet: '#8B5CF6',
                    cyan: '#22D3EE',
                },
            },
            boxShadow: {
                glow: '0 10px 40px -10px rgba(91, 91, 214, 0.45)',
                glowDark: '0 10px 40px -10px rgba(139, 92, 246, 0.5)',
            },
            keyframes: {
                'gradient-pan': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'star-twinkle': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '1' },
                },
            },
            animation: {
                'gradient-pan': 'gradient-pan 6s ease infinite',
                'star-twinkle': 'star-twinkle 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
