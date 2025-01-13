/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                "fade-up": {
                    "0%": {opacity: "0", transform: "translateY(10px)"},
                    "100%": {opacity: "1", transform: "translateY(0)"},
                },
            },
            animation: {
                "fade-up": "fade-up 0.5s ease-out",
            },
            backgroundColor: {
                'purple-gray': '#111112'
            },
            colors: {
                'light-purple': "#5F4772"
            }
        },
        screens: {
            '2xl': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {'max': '1279px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }

            'md': {'max': '767px'},
            // => @media (max-width: 767px) { ... }

            'sm': {'max': '639px'},
            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [],
}
