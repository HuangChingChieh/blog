import primeui from 'tailwindcss-primeui'
import colors from 'tailwindcss/colors'

export default {
  plugins: [primeui],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
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
      },
      transitionProperty: {
        'article-card': 'box-shadow, transform',
      },
      scale: {
        'article-card': '1.025',
      },
    },
  },
}
