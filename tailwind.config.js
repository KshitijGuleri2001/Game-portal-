// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-background': "url('./assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
}
