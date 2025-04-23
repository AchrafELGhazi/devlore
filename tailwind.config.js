/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        devBlack: '#000000',
        devOffBlack: '#111111',
        devDarkGray: '#222222',
        devMediumGray: '#444444',
        devLightGray: '#DDDDDD',
        devWhite: '#FFFFFF',
        devOffWhite: '#F8F8F8',
        devYellow: '#FED792',
        devDarkYellow: '#e9b04f',
        devBrown: '#8A6534',
        devDarkBrown: '#644726',
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'Menlo',
          'Monaco',
          'Cascadia Mono',
          'Segoe UI Mono',
          'Roboto Mono',
          'Oxygen Mono',
          'Ubuntu Monospace',
          'Source Code Pro',
          'Fira Mono',
          'Droid Sans Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
};
