module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('./Images/logo.webp')",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
