/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'background-dark': 'var(--background-dark)',
        text: 'var(--text)',
        'text-dark': 'var(--text-dark)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
      },
    },
  },
  plugins: [],
}; 