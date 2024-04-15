/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*/*.ejs"
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
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

