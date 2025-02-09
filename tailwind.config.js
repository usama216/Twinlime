/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
          'grow': 'grow 2s ease-out forwards',
      },
      keyframes: {
          grow: {
              '0%': { height: '0%' },
              '100%': { height: '100%' },
          },
      },
  },
  },
  plugins: [],
}

