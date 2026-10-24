/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0E0E0E',
        'bg-secondary': '#131313',
        'bg-card': 'rgba(20, 20, 20, 0.6)',
        'accent-primary': '#8B0000',
        'accent-secondary': '#4A0404',
        'text-primary': '#F4F1E8',
        'text-secondary': '#9A9590',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
