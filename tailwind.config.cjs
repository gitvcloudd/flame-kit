// tailwind.config.cjs - FlameKit Desktop
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            // Custom font families: one sans family everywhere, like Penwise.
            // (Space Grotesk display headings are out.)
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            // Custom font sizes
            fontSize: {
                'h1': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
                'h2': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
                'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
                'h4': ['1.125rem', { lineHeight: '1.4', fontWeight: '500' }],
                'body': ['0.9375rem', { lineHeight: '1.5' }],
                'sm': ['0.8125rem', { lineHeight: '1.5' }],
                'xs': ['0.75rem', { lineHeight: '1.4' }],
            },
            // Brand colors: Penwise blue, measured from the Penwise popup's
            // Reply button (#1769f2). Flat blue, no cyan gradient.
            colors: {
                brand: {
                    50: '#eef5ff',
                    100: '#d9e8ff',
                    200: '#bcd7ff',
                    300: '#8ebdff',
                    400: '#5898fa',
                    500: '#1769f2',
                    600: '#0f56d8',
                    700: '#0d46b0',
                    800: '#123a8a',
                    900: '#14336e',
                },
                accent: {
                    cyan: '#06b6d4',
                    purple: '#8b5cf6',
                    pink: '#ec4899',
                    green: '#10b981',
                    orange: '#f97316',
                },
            },
            // Custom shadows
            boxShadow: {
                'premium': '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.05), 0 16px 32px rgba(0, 0, 0, 0.05)',
                'elevated': '0 2px 4px rgba(0, 0, 0, 0.02), 0 8px 16px rgba(0, 0, 0, 0.04), 0 24px 48px rgba(0, 0, 0, 0.06)',
                'glow-sm': '0 0 20px rgba(14, 165, 233, 0.15)',
                'glow-md': '0 0 40px rgba(14, 165, 233, 0.2)',
                'glow-lg': '0 0 60px rgba(14, 165, 233, 0.25)',
                'glow-brand': '0 0 30px rgba(14, 165, 233, 0.3)',
                'card-hover': '0 4px 20px rgba(14, 165, 233, 0.08), 0 0 0 1px rgba(14, 165, 233, 0.05)',
                'card-hover-dark': '0 4px 30px rgba(56, 189, 248, 0.1), 0 0 0 1px rgba(56, 189, 248, 0.05)',
            },
            // Custom border radius
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.25rem',
                '3xl': '1.5rem',
            },
            // Custom animations
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'slide-down': 'slideDown 0.2s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
                'glow-pulse': 'glowPulse 2s infinite',
                'shimmer': 'shimmer 1.5s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.4)' },
                    '50%': { boxShadow: '0 0 20px 10px rgba(14, 165, 233, 0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            // Transition timing
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.19, 1, 0.22, 1)',
                'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        // Deep dark blue-black for premium feel
                        background: '#0a0a0f',
                        foreground: '#f8fafc',
                        // Card backgrounds with depth
                        content1: '#12121a',
                        content2: '#1a1a24',
                        content3: '#24242e',
                        content4: '#2e2e38',
                        // Layout colors
                        divider: 'rgba(255, 255, 255, 0.1)',
                        overlay: 'rgba(0, 0, 0, 0.6)',
                        // Default - use brand-tinted grays
                        default: {
                            DEFAULT: '#1e293b',
                            50: '#0f172a',
                            100: '#1e293b',
                            200: '#334155',
                            300: '#475569',
                            400: '#64748b',
                            500: '#94a3b8',
                            600: '#cbd5e1',
                            700: '#e2e8f0',
                            800: '#f1f5f9',
                            900: '#f8fafc',
                        },
                        // Brand primary - Penwise blue, lighter for dark mode
                        primary: {
                            DEFAULT: '#4d8ff7',
                            foreground: '#ffffff',
                            50: '#0a2540',
                            100: '#103a66',
                            200: '#155088',
                            300: '#1a66b3',
                            400: '#2b7de0',
                            500: '#4d8ff7',
                            600: '#7aa8fa',
                            700: '#a3c3fc',
                            800: '#c3d8fd',
                            900: '#e2ecfe',
                        },
                        // Secondary accent
                        secondary: {
                            DEFAULT: '#8b5cf6',
                            foreground: '#ffffff',
                        },
                        // Success state
                        success: {
                            DEFAULT: '#10b981',
                            foreground: '#ffffff',
                        },
                        // Warning state
                        warning: {
                            DEFAULT: '#f97316',
                            foreground: '#ffffff',
                        },
                        // Danger state
                        danger: {
                            DEFAULT: '#ef4444',
                            foreground: '#ffffff',
                        },
                        // Focus ring
                        focus: '#4d8ff7',
                    },
                },
                light: {
                    colors: {
                        // Clean white background
                        background: '#fafbfc',
                        foreground: '#0f172a',
                        // Card backgrounds
                        content1: '#ffffff',
                        content2: '#f8fafc',
                        content3: '#f1f5f9',
                        content4: '#e2e8f0',
                        // Default grayscale
                        default: {
                            DEFAULT: '#94a3b8',
                            50: '#f8fafc',
                            100: '#f1f5f9',
                            200: '#e2e8f0',
                            300: '#cbd5e1',
                            400: '#94a3b8',
                            500: '#64748b',
                            600: '#475569',
                            700: '#334155',
                            800: '#1e293b',
                            900: '#0f172a',
                        },
                        // Brand primary - Penwise blue
                        primary: {
                            DEFAULT: '#1769f2',
                            foreground: '#ffffff',
                            50: '#eef5ff',
                            100: '#d9e8ff',
                            200: '#bcd7ff',
                            300: '#8ebdff',
                            400: '#5898fa',
                            500: '#1769f2',
                            600: '#0f56d8',
                            700: '#0d46b0',
                            800: '#123a8a',
                            900: '#14336e',
                        },
                        // Secondary accent
                        secondary: {
                            DEFAULT: '#8b5cf6',
                            foreground: '#ffffff',
                        },
                        // Success state
                        success: {
                            DEFAULT: '#10b981',
                            foreground: '#ffffff',
                        },
                        // Warning state
                        warning: {
                            DEFAULT: '#f97316',
                            foreground: '#ffffff',
                        },
                        // Danger state
                        danger: {
                            DEFAULT: '#ef4444',
                            foreground: '#ffffff',
                        },
                        // Focus ring
                        focus: '#1769f2',
                    },
                },
            },
        }),
    ],
};
