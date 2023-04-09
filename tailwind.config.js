/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      raleway: 'Raleway, sans-serif',
      oswald: 'Oswald, sans-serif',
      droid: 'Droid Sans, Helvetica, Arial, sans-serif',
    },
    extend: {
      colors: {
        gold: '#dec35f',
      },
      animation: {
        moveactive: 'moveactive 1s cubic-bezier(.6,-.28,.735,.045) reverse',
        movepassive: 'movepassive 1s cubic-bezier(.6,-.28,.735,.045) reverse',

        smmoveactive: 'smmoveactive 1s cubic-bezier(.6,-.28,.735,.045) reverse',
        smmovepassive:
          'smmovepassive 1s cubic-bezier(.6,-.28,.735,.045) reverse',

        movehomeactive: 'movehomeactive 0.5s linear',
        movehomepassive: 'movehomepassive 1s linear',
      },
      keyframes: {
        smmoveactive: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-1000px)', opacity: 0 },
        },
        smmovepassive: {
          '0%': { transform: 'translateY(-1000px) ', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },

        moveactive: {
          '0%': { transform: 'translateY(-50%) translateX(-50%)', opacity: 1 },
          '100%': {
            transform: 'translateY(-1000px) translateX(-50%)',
            opacity: 0,
          },
        },
        movepassive: {
          '0%': {
            transform: 'translateY(-1000px) translateX(-50%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(-50%) translateX(-50%)',
            opacity: 1,
          },
        },

        movehomeactive: {
          '0%': { transform: 'translateX(500px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },

        movehomepassive: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(500px)', opacity: 0 },
        },
      },
    },
  },

  plugins: [],
};
