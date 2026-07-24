/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 🍷 Vino / borgoña — el color principal de Sofía (#790216)
        wine: {
          DEFAULT: '#790216',
          50: '#fbeaec',
          100: '#f3c4ca',
          400: '#b03042',
          600: '#8f0a20',
          700: '#790216',
          800: '#5c0212',
          900: '#42010d',
          950: '#2c0109',
        },
        // 🥛 Crema / papel — los fondos cálidos
        cream: {
          DEFAULT: '#F5EBD8',
          50: '#FCF8EF',
          100: '#F5EBD8',
          200: '#ECDCBF',
          300: '#E0C9A2',
        },
        ember: '#C15A2B', // terracota — acento cálido
        gold: '#C79A4B', // dorado suave — detalles finos
        rose: '#E7C4BC', // rosa empolvado — toques tiernos
        ink: {
          DEFAULT: '#2A1114', // texto sobre crema
          soft: '#5A3B3D',
        },
        night: {
          DEFAULT: '#1A0C0D', // fondo del modo oscuro
          800: '#241012',
          700: '#301618',
          600: '#3d1d1f',
        },
      },
      fontFamily: {
        serif: ['Lora', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'ui-serif', 'cursive'],
      },
      letterSpacing: {
        label: '0.28em',
      },
      boxShadow: {
        soft: '0 20px 60px -25px rgba(66, 1, 13, 0.35)',
        card: '0 24px 70px -30px rgba(66, 1, 13, 0.45)',
        glow: '0 0 0 1px rgba(199, 154, 75, 0.25), 0 30px 80px -40px rgba(121, 2, 22, 0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'spin-slow': 'spinSlow 24s linear infinite',
      },
    },
  },
  plugins: [],
};
