/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nothing': '#211F20'
      },
      backgroundImage: {
        "everything-image": "url('/everything.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'move-left': 'move-left 3s ease-in-out forwards',
        'move-right': 'move-right 3s ease-in-out forwards',
        'grow-to-size': 'grow-to-size 4s ease-in-out 1',
        'grow-beyond-size': 'grow-beyond-size 4s ease-in-out 1',
        'shrink-from-beyond': 'shrink-from-beyond 500ms ease-in-out 1'
      },
      keyframes: {
        'move-left': {
          '0%': {transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-100%)'}
        },
        'move-right': {
          '0%': {transform: 'translateX(0)'},
          '100%': { transform: 'translateX(100%)'}
        },
        'grow-to-size': {
          '0%': {transform: 'scaleX(0) scaleY(0)'},
          '100%': {transform: 'scaleX(1) scaleY(1)'}
        },
        'grow-beyond-size': {
          '0%': {transform: 'scaleX(1) scaleY(1)'},
          '100%': {transform: 'scaleX(100) scaleY(100)'}
        },
        'shrink-from-beyond': {
          '0%': {transform: 'scaleX(100) scaleY(100)'},
          '100%': {transform: 'scaleX(1) scaleY(1)'}
        }
      }
    },
  },
  plugins: [],
};
