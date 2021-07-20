module.exports = {
  mode: "Jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('./component/logo.webp')",
      },
      backgroundPosition: {
        "1/2": "50%",
      },
      backgroundSize: {
        "auto-100%": "auto-100%",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
