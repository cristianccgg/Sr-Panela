/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "1Green": "#AAD0A5",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      backgroundImage: {
        background: "url('/images/Diseño sin título (1).png')",
      },
    },
  },
  plugins: [],
};
