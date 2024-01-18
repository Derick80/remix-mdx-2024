import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [animatePlugin]
} satisfies Config
