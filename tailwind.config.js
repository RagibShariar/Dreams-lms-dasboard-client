/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        profileBg: "url('./src/assets/profile-bg.jpg),",
        banner: "url('./src/assets/breadcrumb-bar.png')",
        courseBanner: "url('./src/assets/courseDetail/inner-banner.jpg')",
      },
    },
    fontFamily: {
      inter: "'Inter', sans-serif",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
