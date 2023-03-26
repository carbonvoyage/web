module.exports = {
  theme: {
    fontFamily: {
      display: ['bookman-jf-pro', 'serif'],
      body: ['apolline', 'serif']
    },
    extend: {
      colors: {
        'carbon-bronze': '#7D671F',
        'carbon-gold': '#FFF0AD',
        'carbon-light': '#e5d391',
        'carbon-white': '#FFF7D2'
      },
      backgroundImage: {
        hero: "url('/hero-banner.png')"
      },
      height: {
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-3/4': '75vh',
        hero: 'calc(100vh - 104px)'
      }
    }
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
};
