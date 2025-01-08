/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'overlay-0': "url('/public/images/organization_background_image_portrait.jpg')",
        'overlay-1': "url('/public/images/organization_background_image.jpg')",
        '404': "url('/public/images/qos_404.png')",
      },
      boxShadow: {
        'custom-1': '0.3vh 0.3vh 1vh rgba(0, 0, 0, 0.3), 0.3vh 0.3vh .5vh rgba(225, 225, 225, 0.25) inset',
        'custom-inner-1': '0 0 1rem rgba(0,0,0,0.625) inset',
      },
      fontFamily: {
        'symbol': '"Material Symbols Outlined"',
        'poppins': '"Poppins", sans-serif',
      },
      screens: {
        'mb-landscape': { 'raw': '(max-height: 528px) and (min-width: 528px)' },
      },
    },
  },
  plugins: [],
}

