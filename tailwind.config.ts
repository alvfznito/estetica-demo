import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rosa: '#F2C4CE',
        nude: '#E8D5C4',
        negro: '#1A1A1A',
        dorado: '#C9A84C',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        dm: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
