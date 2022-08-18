/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        Over: ['Overpass Mono', 'monospace'],
        Inter: ['Inter', 'sans-serif']
      },
      
    },
    
  },
  daisyui: {
    styled: true,
    themes: ["pastel", "dracula", "night"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
