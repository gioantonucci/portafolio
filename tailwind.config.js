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
        Inter: ['Inter', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif']
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
   screens: {
    'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  }
}
