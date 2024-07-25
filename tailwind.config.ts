/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "./app/**/*.{js,jsx}",
      "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
      container: {
          center: true,
          padding: "15px",
      },
      screens: {
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1200px",
      },
      fontFamily: {
          primary: "var(--font-jetbrainsMono)",
      },
      extend: {
          colors: {
              primary: "#62a4a6",
              accent: {
                  DEFAULT: "#d9d93f",
                  hover: "#ffff70",
              },
          },
          keyframes: {
              "accordion-down": {
                  from: { height: "0" },
                  to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                  from: { height: "var(--radix-accordion-content-height)" },
                  to: { height: "0" },
              },
              "disappear": {
                  "0%": { opacity: "100%" },
                  "99%": { opacity: "0%" },
                  "100%": { display: "none" },
              },
          },
          animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
              "disappear": "disappear 0.3s ease-out forwards",
          },
      },
  },
  plugins: [require("tailwindcss-animate")],
};