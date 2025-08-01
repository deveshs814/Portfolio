/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      "gradient-bg": "gradient 8s ease infinite",
    },
    keyframes: {
      gradient: {
        "0%, 100%": {
          backgroundPosition: "0% 50%",
        },
        "50%": {
          backgroundPosition: "100% 50%",
        },
      },
    },
  },
},

  plugins: [],
}