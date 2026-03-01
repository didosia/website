/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#d8b48d',
          secondary: '#b5886b',
        },
        bg: {
          dark: '#2a2f31',
          muted: '#eee9e0',
          section: '#f3f4f6',
          surface: '#ffffff',
        },
        text: {
          primary: '#211e1d',
          secondary: '#4a5968',
          muted: '#9a9a92',
          heading: '#111827',
        },
        border: {
          brand: '#d8b48d',
          default: '#d1d5db',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // for headings if used
      },
      spacing: {
        section: '96px',
      }
    },
  },
  plugins: [],
}