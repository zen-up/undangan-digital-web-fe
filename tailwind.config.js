/** @type {import('tailwindcss').Config} */
import colors from './tailwind.colors.mjs';

export default {
    content: [
        './pages/**/*.{vue,js,ts}',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './app.vue',
    ],
    darkMode: ['class'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
                libre: ['Libre Baskerville', 'sans-serif'],
            },
            colors,
            boxShadow: {
                smooth: '0px 5px 40px rgba(10, 10, 10, 0.1)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--reka-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--reka-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-animate'),
    ],
};
