/** @type {import('tailwindcss').Config} */

import primeui from 'tailwindcss-primeui'
import colors from 'tailwindcss/colors'

const aspectRatio = {
  '9/16': '9 / 16',
  '4/3': '4 / 3',
  '3/4': '3 / 4',
}

export default {
  plugins: [primeui],
  darkMode: ['selector', `[data-bs-theme="dark"]`],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.teal[500],
          ...colors.teal,
        },
        foreground: {
          DEFAULT: '#e9ecef',
          dark: '#343a40',
        },
        background: {
          DEFAULT: '#fff',
          dark: '#212529',
        },
      },
      spacing: {
        normal: '24px',
        paragraph: '28px',
      },
      transitionProperty: {
        'article-card': 'box-shadow, transform',
      },
      scale: {
        'article-card': '1.025',
      },
      aspectRatio,
    },
  },
  safelist: Object.keys(aspectRatio).map((aspect) => `aspect-${aspect}`),
}
