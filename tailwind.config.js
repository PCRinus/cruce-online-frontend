/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node*/
/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
});
