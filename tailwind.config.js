/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
      },
    },
    fontSize: {
      sm: "1.2rem",
      base: "1.6rem",
      md: "2rem",
      xl: "2.2rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "7rem",
      "8xl": "8rem",
      "9xl": "9rem",
    },
    spacing: {
      0: "0",
      0.5: "0.5rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      2.5: "2.5rem",
      3: "3rem",
      3.5: "3.5rem",
      4: "4rem",
      4.5: "4.5rem",
      5: "5rem",
      5.5: "5.5rem",
      6: "6rem",
      6.5: "6.5rem",
      7: "7rem",
      7.5: "7.5rem",
      8: "8rem",
      8.5: "8.5rem",
      9: "9rem",
      9.5: "9.5rem",
      10: "10rem",
    },
    extend: {
      colors: {
        header: "#f84874",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      dropShadow: {
        "3xl": "1rem 2rem 3rem rgba(0,0,0,.7)",
      },
      fontFamily: {
        header: "Moki",
      },
    },
  },
  plugins: [],
}
