/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily:{
        'young-Serif': [' "Young Serif" ', 'sans'],
        'outfit' : [' "Outfit" ', 'mono'],
      },
      colors:{
        'White': 'hsl(0, 0%, 100%)',
        'Stone-100': 'hsl(30, 54%, 90%)',
        'Stone-150': 'hsl(30, 18%, 87%)',
        'Stone-600': 'hsl(30, 10%, 34%)',
        'Stone-900': 'hsl(24, 5%, 18%)',
        'Brown-800': 'hsl(14, 45%, 36%)',
        'Rose-800': 'hsl(332, 51%, 32%)',
        'Rose-50': ''
      }
    },
  },
  plugins: [],
}

/*
- White: hsl(0, 0%, 100%)

- Stone 100: hsl(30, 54%, 90%)
- Stone 150: hsl(30, 18%, 87%)
- Stone 600: hsl(30, 10%, 34%)
- Stone 900: hsl(24, 5%, 18%)

- Brown 800: hsl(14, 45%, 36%)

- Rose 800: hsl(332, 51%, 32%)
- Rose 50: hsl(330, 100%, 98%)
*/