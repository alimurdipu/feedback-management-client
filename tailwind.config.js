/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "bg-login": "url('./src/assets/images/bglogin.png')",
        "white-bg": "url('./src/assets/images/whitebg.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
