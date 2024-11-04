/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        "custom-1": "#032B33",
        "custom-2": "#0B4955",
        "custom-3": "#267180",
        "custom-4": "#4F9BAA",
        "custom-5": "#87C8D5",
      },
    },
  },
  plugins: [],
};
