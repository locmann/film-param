/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx,woff}',
    './entities/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        border: 'var(--border-color)',
        label: 'var(--label-text)',
        'disabled-bg': 'var(--disabled-bg)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      height: {
        13: '3.375rem',
      },
    },
  },
  plugins: [],
};
