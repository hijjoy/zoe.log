/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: { max: "1200px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        pretendard: ['"Pretendard"', "sans-serif"],
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      colors: {
        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },
        heading: "var(--heading)",
        base: "var(--text-body)",
        second: "var(--text-second)",
        page: "var(--page-background)",
        border: "var(--gray-200)",
      },
    },
  },
  plugins: [],
};
