module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'desktop': "url('./images/bg-desktop.png')",
        'mobile': "url('./images/bg-mobile.png')",
      }),
      colors: {
        "pale-blue": "hsl(243, 100%, 93%)",
        "grayish-blue": "hsl(229, 7%, 55%)",
        "dark-blue": "hsl(228, 56%, 26%)",
        "very-dark-blue": "hsl(229, 57%, 11%)",
        "first": "hsl(6, 100%, 80%)",
        "last": "hsl(335, 100%, 65%)",
      },
      borderRadius: {
        "7xl": "60px",
      },
      backgroundPosition: {
        'bottom-4': 'center bottom 6rem',
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }
  }
}