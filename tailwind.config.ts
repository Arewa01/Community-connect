import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',      // Inter
        heading: 'var(--font-heading)' // Calistoga
      },
      colors: {
        background: '#ffffff',
        foreground: '#111111',
      }
    },
  },
  plugins: [],
}
export default config
