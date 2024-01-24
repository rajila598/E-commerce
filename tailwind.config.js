/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
        fontFamily: {
            josefin: ["Josefin Sans"]
            // sans: ["Josefin Sans"]
        },
        colors: {
            "primary": "#151875",
            "primary-second": "rgb(126,51,224)",
            "secondary": "#FB2E86",
            "background": "#F2F0FF"
        }
    },
  },
  plugins: [],
}

