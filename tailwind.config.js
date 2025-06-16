/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}", // For files in root like App.tsx, index.tsx
    "./components/**/*.{js,ts,jsx,tsx}", // For files in components folder
    // Add other paths if you have components elsewhere, e.g., "./src/**/*.{js,ts,jsx,tsx}" if you move files into src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure Inter is primary sans-serif
        poppins: ['Poppins', 'sans-serif'], // Add Poppins if used via utility class
      },
      colors: {
        // You can extend Tailwind's color palette here if needed
        // For example, if your scrollbar colors or specific brand colors
        // are used frequently and you want to give them names.
        // 'scrollbar-track': '#1e293b',
        // 'scrollbar-thumb': '#38bdf8',
        // 'scrollbar-thumb-hover': '#0ea5e9',
      }
    },
  },
  plugins: [],
}