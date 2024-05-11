/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0079FF",
        dark: "#303F50",
        light: {
          100: "#FEFEFE",
          200: "#FAFAFB",
          300: "#EAECF0",
        },
        ashes: {
          100: "#41505F",
          200: "#677685",
          300: "#7E8C97",
          400: "#DBDDE0",
        },
      },
    },
  },
  plugins: [],
};
