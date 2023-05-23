const colors = require('tailwindcss/colors')
const myCustomColors = {
    'primary': {
            '50': '#f1f4fd',
            '100': '#dee4fb',
            '200': '#c5d1f8',
            '300': '#9db4f3',
            '400': '#6f8deb',
            '500': '#556ee5',
            '600': '#3849d8',
            '700': '#2f38c6',
            '800': '#2c2fa1',
            '900': '#292d7f',
            '950': '#1d1e4e',
    },
    success: {
        '50': '#edfcf5',
        '100': '#d3f8e5',
        '200': '#aaf0d0',
        '300': '#73e2b6',
        '400': '#33c38f',
        '500': '#18b17f',
        '600': '#0c8f67',
        '700': '#097355',
        '800': '#0a5b44',
        '900': '#094b39',
        '950': '#042a21',
    },
    info:{
        '50': '#f0f8fe',
        '100': '#dceffd',
        '200': '#c1e4fc',
        '300': '#97d4f9',
        '400': '#65bbf5',
        '500': '#50a5f1',
        '600': '#2c80e4',
        '700': '#236bd2',
        '800': '#2357aa',
        '900': '#224b86',
        '950': '#192e52',
    },
    danger:{
        '50': '#fef2f2',
        '100': '#fde3e3',
        '200': '#fdcbcb',
        '300': '#faa7a7',
        '400': '#f46969',
        '500': '#eb4848',
        '600': '#d82a2a',
        '700': '#b52020',
        '800': '#961e1e',
        '900': '#7d1f1f',
        '950': '#440b0b',
    },
    "warning": {
        '50': '#fefaee',
        '100': '#fdf4d7',
        '200': '#f9e4af',
        '300': '#f6cf7b',
        '400': '#f1b34c',
        '500': '#ed9822',
        '600': '#de7e18',
        '700': '#b86116',
        '800': '#934d19',
        '900': '#764018',
        '950': '#401f0a',
    }
}
module.exports = {
  content: ["./src/**/*.{html,js,stories,mdx,json}","./src-vue/**/*.{html,js,jsx,ts,tsx,vue}"],
  darkMode: ['class'],
  theme: {
    extend: {
        colors: {
            'primary': myCustomColors.primary,
            'secondary': colors.fuchsia,
            'danger': myCustomColors.danger,
            'success': myCustomColors.success,
            'warning': myCustomColors.warning,
            'info': myCustomColors.info,
            'light': colors.gray,
            'dark': colors.gray,
        }
    }
  },
  plugins: [],
}

