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
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Example: if we wanted a specific shade of cyan not in default
        // 'custom-cyan': '#12a3b4',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.3s ease-in forwards',
        scaleUp: 'scaleUp 0.3s ease-out forwards',
        scaleDown: 'scaleDown 0.3s ease-in forwards',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'), // Uncomment if you prefer the official plugin
  ],
}