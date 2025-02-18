/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", // Dark blue-gray for a professional yet approachable feel
        secondary: "#94A3B8", // Muted steel blue for subtle accents
        tertiary: "#0F172A", // Even darker blue-gray for depth and contrast
        "black-100": "#1E1B4B", // Deep indigo for a more refined dark theme
        "black-200": "#111827", // Near-black for backgrounds and text
        "white-100": "#E2E8F0", // Soft off-white for readability
        accent: "#22D3EE", // Cyan for a pop of color (buttons, highlights)
        highlight: "#FACC15", // Warm yellow for an engaging, inviting touch
      }
      ,
      animation: {
        gradient: "gradient 6s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
