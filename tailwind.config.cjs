const { fontFamily } = require("tailwindcss/defaultTheme")
// const config = require("@wrapcbdc/tailwind-config")

/** @type {import("tailwindcss").Config} */
module.exports = {
  // content:config.content,
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
    "../../../packages/**/*.{js,ts,jsx,tsx}",
    "../../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../ui/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: ["class"],
  fontFamily: {
    sans: ["var(--font-sans)", ...fontFamily.sans],
  },
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
