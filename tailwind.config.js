module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
      },
      maxWidth: {
        "8xl": "1920px",
      },
      animation: {
       spin: "spin 5s linear infinite",
       
      },
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
