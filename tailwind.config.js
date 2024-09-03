/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                appBackground: '#272d35',
                sidebarBackgroundDark: '#384049',
                cardBackgroundDark: '#0e1f38',
                primaryText: '#161b23',
                primaryTextDark: '#edf0f4',
                secondaryText: '#9399A1',
            },
            fontFamily: {
                display: ['Inter', 'sans-serif'],
                content: ['Raleway', 'serif'],
            },
        },
    },
    darkMode: ['class'],
    plugins: [],
}
