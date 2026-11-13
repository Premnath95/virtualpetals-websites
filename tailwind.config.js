/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#35A853",
          teal: "#12B8A6",
          dark: "#123B32",
          light: "#F3FAF6",
          charcoal: "#253B38",
          grey: "#F5F7F6",
          greenDark: "#2B8742",
          tealDark: "#0F9B8C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(18, 59, 50, 0.05), 0 1px 2px -1px rgba(18, 59, 50, 0.05)",
        card: "0 4px 24px -2px rgba(18, 59, 50, 0.08)",
        cardHover: "0 16px 36px -4px rgba(18, 59, 50, 0.14)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
