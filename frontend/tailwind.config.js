/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vi: '#7C5CFC',
        'vi-light': '#A48BFD',
        'vi-dim': 'rgba(124,92,252,.12)',
        'vi-border': 'rgba(124,92,252,.28)',
        gold: '#C9A84C',
        'gold-dim': 'rgba(201,168,76,.12)',
        blue: '#4A8FD4',
        'blue-dim': 'rgba(74,143,212,.12)',
        green: '#3CC47C',
        'green-dim': 'rgba(60,196,124,.12)',
        amber: '#D4A82A',
        red: '#E05555',
      },
      borderRadius: {
        sm: '6px',
        md: '14px',
        lg: '20px',
        xl: '28px',
        pill: '100px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
