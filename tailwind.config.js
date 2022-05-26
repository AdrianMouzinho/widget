module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'brand': '#8257E5',
        'brand-hover': '#996DFF',
        text: {
          400: '#f4f4f5',
          500: '#a1a1aa'
        },
        surface: {
          400: '#3F3F46',
          400: '#27272A',
          500: '#18181B'
        },
        stroke: {

        },
        background: '#09090A'
      },
      boxShadow: {
        'brand-bx': '0px 8px 24px rgba(130, 87, 229, 0.25)',
        'surface-bx': '0px 8px 32px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
