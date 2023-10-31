/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        color: {
          "primary": "#16ABF8",
          "secondary": "#888888"
        }
      }
    },
  },
  plugins: [
    "flowbite/plugin"
  ],
}