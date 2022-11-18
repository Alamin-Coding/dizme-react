/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        xs: '.5rem',
        sm: '1rem',
        md: '1.5rem',
      },
    },
    screens: {
      'sm': '575px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024px',
      'xxl': '1170px',
    },
    fontFamily: {
      'jost': ['Jost', 'sans-serif',],
      'open': ['Open Sans', 'sans-serif',]
    },
    extend: {
      colors: {
        'dark-bg': '#2B2D33',
        'primary': '#f75023',
      },
      backgroundImage: {
        'banner': "url('/public/images/banner-bg.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      animation: {
        'bounce': 'bounce 3s linear 0s infinite alternate',
        'stickyanimation': 'stickyanimation .5s linear',
      },
      
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        stickyanimation: {
          '0%': { top: '-100px' },
          '100%': { top: '0px' },
        },
      }
    },
  },
  plugins: [],
}
