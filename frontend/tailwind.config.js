/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-light": "var(--color-primary-light)",
        
        white: "var(--color-white)",
        "off-white": "var(--color-off-white)",
        muted: "var(--color-muted)",
        "light-bg": "var(--color-light-bg)",
      },

      fontFamily: {
        heading: ["var(--headingFont)"],
        body: ["var(--bodyFont)"],
        inter: ["var(--interFont)"],
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },

      transitionProperty: {
        DEFAULT: "var(--transition)",
      },
    },
  },
  plugins: [],
};
