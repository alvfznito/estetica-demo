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
        // Paleta Lumière
        base: '#2E2620',           // marrón chocolate profundo
        crudo: '#F5EFE8',          // fondo primario
        beige: '#EBE3D7',          // fondo secundario
        champagne: '#7A6740',      // acento — oscurecido para pasar contraste 4.5:1 en labels 12px
        'champagne-light': '#B8A88A', // versión clara para líneas/badges grandes sobre fondo oscuro
        salvia: '#4C6640',         // oscurecido desde #7A8B6D para AA
        muted: '#6E645A',          // oscurecido desde #8F8478 para AA
        white: '#FDFCFA',
        // Compatibilidad con nombres antiguos ya usados en componentes
        rosa: '#EBE3D7',
        nude: '#EBE3D7',
        negro: '#2E2620',
        dorado: '#7A6740',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        manrope: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        dm: ['var(--font-manrope)', 'system-ui', 'sans-serif'], // alias
      },
      boxShadow: {
        soft: '0 2px 12px rgba(46,38,32,0.04)',
      },
      borderRadius: {
        sm: '2px',
      },
    },
  },
  plugins: [],
}

export default config
