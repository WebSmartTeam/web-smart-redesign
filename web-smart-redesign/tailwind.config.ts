import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Web-Smart brand colours
        primary: {
          DEFAULT: '#672F8F',
          50: '#F3F0FB',
          100: '#E7E1F7',
          200: '#CFC3EF',
          300: '#B7A5E7',
          400: '#9F87DF',
          500: '#672F8F',
          600: '#532677',
          700: '#3F1D5F',
          800: '#2B1347',
          900: '#170A2F',
        },
        secondary: {
          DEFAULT: '#F3F0FB',
          light: '#FDFCFE',
        },
        accent: {
          DEFAULT: '#34C759',
          light: '#4CD964',
          dark: '#28A745',
        },
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
