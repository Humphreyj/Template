/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                appBackground: '#FFFAFC',
                appBackgroundDark: '#272d35',
                sidebarBackground: '#b8d4fc',
                sidebarBackgroundDark: '#0f172a',
                cardBackgroundDark: '#0e1f38',
                primaryText: '#2c3649',
                primaryTextDark: '#edf0f4',
                primary: {
                    100: '#e1effd',
                    200: '#bbdffc',
                    300: '#80c4f9',
                    400: '#3ca6f4',
                    500: '#138ce4',
                    600: '#077ad9',
                    700: '#06579e',
                    800: '#0a4b82',
                    900: '#0e3e6c',
                    950: '#092848',
                },
                secondary: {
                    50: '#eef0f9',
                    100: '#dee3ef',
                    200: '#b5c1dc',
                    300: '#758ebd',
                    400: '#405882',
                    500: '#27344c',
                    600: '#1e283f',
                    700: '#182034',
                    800: '#161d2b',
                    900: '#131722',
                    950: '#0d1019',
                },
            },
            fontFamily: {
                display: ['Inter', 'sans-serif'],
                content: ['Nunito Sans', 'serif'],
            },
        },
    },
    darkMode: ['class'],
    plugins: [],
}
