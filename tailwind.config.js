/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        main: "1400px",
      },
      maxWidth: {
        main: "1500px",
      },
      gridTemplateColumns: {
        main: "repeat(16, minmax(0, 1fr))",
      },
      gridColumn: {
        main: "span 15 / span 15",
      },
      screens: {
        mobile: { max: "490px" },
        sm: { max: "889px" },
        md: { max: "890px" },
        "min-md": { min: "890px" },
        md2: { max: "1120px" },
        "min-md2": { min: "1120px" },
        lg2: { max: "1200px" },
        lg: { max: "1280px" },
        "min-lg": { min: "1280px" },
        xl: { max: "1440px" },
        "min-16": { min: "2000px" },
        "16-inches": { max: "2056px" },
        "min-imac": { min: "2700px" },
        imac: { max: "3200px" },
        short: { raw: "(max-height: 580px)" },
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        "manrope-bold": ["Manrope-Bold", "sans-serif"],
        "generalsans-regular": ["GeneralSans-Regular", "sans-serif"],
        "generalsans-light": ["GeneralSans-Light", "sans-serif"],
        "generalsans-medium": ["GeneralSans-Medium", "sans-serif"],
        "generalsans-semiBold": ["GeneralSans-SemiBold", "sans-serif"],
        "generalsans-extralight": ["GeneralSans-ExtraLight", "sans-serif"],
        "poppins-regular": ["Poppins-Regular", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-semiBold": ["Poppins-SemiBold", "sans-serif"],
        "poppins-extralight": ["Poppins-ExtraLight", "sans-serif"],
        roboto: ["Roboto-Bold", "sans-serif"],
        "roboto-medium": ["Roboto-Medium", "sans-serif"],
        "roboto-regular": ["Roboto-Regular", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      colors: {
        subscribe: "linear-gradient(180deg, #0293F1 0%, #56BDFF 100%)",
        blue: "#1fb6ff",
        pink: "#ff49db",
        orange: "#ff7849",
        red: "#ff4949",
        green: "#13ce66",
        "gray-dark": "#475467",
        gray: "#8492a6",
        "gray-light": "#F2F2F2",
        white: "#ffffff",
        black: "#000000",
        accent1: "#F58220",
        accent2: "#009BFF",
        footer: "#181C42",
        footerHead: "#02ACEB",
      },

      boxShadow: {
        "small-left": "-4px 0px 12px 0px rgba(0,0,0,0.3)",
        card: "0px 0px 14px 1px rgba(0,0,0,0.1)",
        "contact-form": "0px 6px 12px 0px #14142B0A",
        "get-started": "0px 4px 20px 0px #00000059",
        "more-products":
          "0px 4.969696998596191px 14.909090042114258px 0px #00000014",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/about-patterns.svg')",
      },
    },
  },
  plugins: [],
};
