import colors from "tailwindcss/colors";

export default {
  content: ["/src/components/index.tsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
