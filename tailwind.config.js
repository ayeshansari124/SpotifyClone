module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        darkgray: "#1F1F1F",
        lightblack: "#121212"
      },
    },
  },
  plugins: [
     require('tailwind-scrollbar-hide')
  ],
};
