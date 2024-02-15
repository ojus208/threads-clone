/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg":"rgba(16,16,16,1)", 
       },
      backgroundColor:{
        "bg-black-1" : "rgba(30,30,30,1)"
      },
      colors:{
        "gray-t" : "rgba(119,119,119,1)",
        "gray-t-l" : "rgba(119,119,119,0.5)"
      }
    },
  },
  plugins: [],
};
