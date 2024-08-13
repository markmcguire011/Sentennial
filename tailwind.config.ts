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
        'brand-dark': '#1E1E1E',
        'background-secondary': '#F5F5F5',
        'brand-color': '#4D88B8',
        'psychology': '#bccce6',
        'computer-science': '#dfd1e6',
        'history': '#e6d1d6',
        'architecture': '#e6d7d1',
        'politics': '#d1e3e6'
      },
      content: {
        'counter': 'counter(test, decimal-leading-zero)'
      }
    }, 
    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '835px',
      'l-md': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
