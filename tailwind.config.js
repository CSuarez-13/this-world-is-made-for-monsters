/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*/*.ejs"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#8b5cf6",
          "secondary": "#a78bfa",
          "accent": "#6d28d9",
          "neutral": "#6366f1",
          "base-100": "#111827",
          "info": "#c4b5fd",
          "success": "#22d3ee",
          "warning": "#fda4af",
          "error": "#9f1239",
        },
      },
      "light",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

