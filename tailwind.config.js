module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'brand': {
          400: '#996DFF',
          500: '#8257E5',
        },
        text: {
          400: '#f4f4f5',
          500: '#a1a1aa'
        },
        surface: {
          400: '#3F3F46',
          400: '#27272A',
          500: '#18181B'
        },
        background: '#09090A'
      },
      boxShadow: {
        'brand': '0px 8px 24px rgba(130, 87, 229, 0.25)',
        'surface': '0px 8px 32px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar'),
  ],
}
