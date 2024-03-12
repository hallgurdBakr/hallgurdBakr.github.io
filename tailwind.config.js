const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  darkMode: "selector",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        xl: "6rem",
        "2xl": "7rem",
      },
    },
    fontFamily: {
      kurdish: ["Vazirmatn", "Ubuntu", ...defaultTheme.fontFamily.sans],
      english: ["Ubuntu", "Vazirmatn", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation: {
        spin: "spin 4s linear infinite",
        text: "text_animation 10s ease-in-out infinite",
      },
      keyframes: {
        text_animation: {
          "0%, 55%": {
            opacity: 0,
            filter: "blur(10px)",
          },
          "5%, 50%": {
            opacity: 1,
            filter: "blur(0px)",
          },
          "100%": {
            opacity: 0,
            filter: "blur(0px)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
