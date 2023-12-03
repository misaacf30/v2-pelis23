import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slideInRight: {
          'from': {
            transform: 'translateX(-100%)'
          },
          'to': {
            transform: 'translateX(0%)'
          }
        }
      },
    },
    colors: {
      ...colors,
      primary: '#e5e5e5',
      secondary: '#0EA5E9',
      background: '#141414',
      pageLoader: '#3e3c3c'
    }
  },
  plugins: [],
}
export default config
