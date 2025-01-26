/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Blue - Calm and professional
        secondary: "#9333EA", // Purple - Vibrant and engaging
        accent: "#22C55E", // Green - Fresh and lively
        highlight: "#FACC15", // Yellow - Attention-grabbing and energetic
      },
      fontFamily: {
        header: ['"Smooch Sans"', "serif"], // Header font
        body: ['"Kanit"', "serif"], // Normal text font
      },
    },
  },
  plugins: [],
};
