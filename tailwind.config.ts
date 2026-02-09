import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: 'rgba(24, 24, 27, 0.5)',
        border: '#27272a',
        foreground: '#fafafa',
        muted: {
          DEFAULT: '#a1a1aa',
          foreground: '#71717a',
        },
        accent: {
          DEFAULT: '#fbbf24',
          hover: '#f59e0b',
          muted: 'rgba(251, 191, 36, 0.1)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "spotlight": "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(251, 191, 36, 0.06), transparent 40%)",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(251, 191, 36, 0.2)',
        'glow-sm': '0 0 10px rgba(251, 191, 36, 0.15)',
      },
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
