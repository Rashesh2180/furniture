/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#054C73",
        "secondary":"#333333",
        "text-gray":"#666666",
        "sky-blue":"#DFE9F4",
        "custom-bg":"#F2F5FF"
      }
    },
  },
  plugins: [],
}