/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lab_primary: "#1b282b",
        lab_secondary: "#ecf1f5", 
        lsseg_primary: "#d1d2d0",
        lsseg_secondary: "#0d0d0c",
        apptibiogram_primary: "#ffffff",
        apptibiogram_secondary: "#5DAAE8",
        hovercraft_primary: "#e76c00",
        hovercraft_secondary: "#171717",
        portfolio_primary: "#4e524c",
        portfolio_secondary: "#f7c9bd",
        teeth_primary: "#d5c4b3",
        teeth_secondary: "#0c1722",
        about_primary: "gray",
        about_secondary: "black",

      },
      fontFamily: {
        'heading': ['Josefin Sans', 'sans-serif'],
        'subtitle': ['sans-serif'],
        'sans': ['Roboto', 'sans-serif', 'Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}