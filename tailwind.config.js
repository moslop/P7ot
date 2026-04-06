/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F9F6EE",
          dark: "#B8860B",
        },
        navy: {
          DEFAULT: "#001f3f",
          light: "#003366",
          dark: "#001122",
        },
      },
    },
  },
  plugins: [],
};
