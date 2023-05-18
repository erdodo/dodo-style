const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js,stories,mdx,json}","./src-vue/**/*.{html,js,jsx,ts,tsx,vue}"],
  darkMode: ['class'],
  theme: {
    extend: {
        colors: {
            'primary': colors.teal,
            'secondary': colors.fuchsia,
            'danger': colors.rose,
            'success': colors.green,
            'warning': colors.amber,
            'info': colors.blue,
            'light': colors.gray,
            'dark': colors.coolGray,
        }
    }
  },
  plugins: [],
}

