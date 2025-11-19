import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00FFC6',
          dark: '#00D1A0'
        }
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
        glow: 'radial-gradient(600px circle at 50% 0%, rgba(0,255,198,0.15), transparent 40%)'
      }
    }
  },
  plugins: []
}
export default config
