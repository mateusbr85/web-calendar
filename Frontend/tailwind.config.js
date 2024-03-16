/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      background_dark: '#070727',
      primary_dark: '#3A31D8',
      secundary_dark: '#020024',
      accent_dark: '#0600C2',
      text_dark: '#EAE9FC',
      background_light: '#F9F9F9',
      primary_light: '#2F27CE',
      secundary_light: '#DDDBFF',
      accent_light: '#443DFF',
      text_light: '#040316',
      white: '#FFF'
    }
  },
plugins: [],
  darkMode: 'class'
}

