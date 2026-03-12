/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#ee2b8c',
                'bg-primary': '#221019',
                'bg-secondary': '#2d1822',
                'bg-tertiary': '#1a0c13',
                'accent-primary': '#ee2b8c',
                'accent-secondary': '#a855f7',
                'accent-emerald': '#10b981',
                'text-primary': '#ffffff',
                'text-secondary': '#999999',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
                'success': '#10b981',
                'warning': '#f59e0b',
                'error': '#ef4444',
            },
            fontFamily: {
                main: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
            },
            boxShadow: {
                'glow-pink': '0 0 20px rgba(238, 43, 140, 0.4)',
                'glow-violet': '0 0 20px rgba(168, 85, 247, 0.4)',
            },
            backdropBlur: {
                xl: '24px',
            },
        },
    },
    plugins: [],
}
