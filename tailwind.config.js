/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "spotify-black": "#121212",
        "spotify-light-black": "#212121",
        "spotify-gray": "#535353",
      },
      animation: {
        "hover": "hover 4s ease-in-out infinite",
      },
      keyframes: {
        hover: {
          "0%, 100%": { transform: "translateY(-10px)"},
          "50%": { transform: "translateY(10px)"},
        },
      },
    },
    fontFamily: {
      "oswald": ["Oswald"],
      "terminal": ["Terminal"],
      "inter": ["Inter"]
    }
  },
  plugins: [],
}

