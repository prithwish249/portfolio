/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // sm: "640px",
        md: "768px",
        lg: "1024px",
        // custom screen size
        sm: { max: "700px" }, // This line ensures that sm applies to screens less than 700px
      },
    },
  },
  plugins: [],
};
