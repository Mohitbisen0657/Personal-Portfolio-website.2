/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  
  theme: {
    extend: {
      display: ['contents'],
      transitionTimingFunction : {
        jump: "cubic-bezier(0.68, -0.55, 0-265, 1.55)",
      },
    },
  },
  plugins: [],
}

