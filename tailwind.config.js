/** @type {import('tailwindcss').Config} */
  module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "550px",
      md: "1024px",
      lg: "1200px",
      xl: "1800px",
    },
    extend: {},
  },
  plugins: [],
};
