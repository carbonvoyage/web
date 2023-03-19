module.exports = {
  theme: {
    fontFamily: {
      display: ['bookman-jf-pro', 'serif'],
      body: ['apolline', 'serif']
    },
    extend: {
      colors: {
        'carbon-bronze': '#7D671F',
        'carbon-gold': '#FFF0AD'
      },
      backgroundImage: {
        hero: "url('/hero-banner.png')"
      }
    }
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
};