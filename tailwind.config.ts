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
        // Paleta Estética Sonia (antes "Lumière")
        base: '#2E2620',           // marrón chocolate profundo
        crudo: '#F5EFE8',          // fondo primario
        beige: '#EBE3D7',          // fondo secundario
        champagne: '#C2185B',      // color de marca — blanco encima: 5.87:1, sobre crudo: 5.14:1
        'champagne-light': '#e181a7', // versión clara — sobre fondo oscuro (base): 5.59:1
        salvia: '#4C6640',         // oscurecido desde #7A8B6D para AA
        muted: '#6E645A',          // oscurecido desde #8F8478 para AA
        white: '#FDFCFA',
        // Compatibilidad con nombres antiguos ya usados en componentes
        rosa: '#EBE3D7',
        nude: '#EBE3D7',
        negro: '#2E2620',
        dorado: '#C2185B',
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
