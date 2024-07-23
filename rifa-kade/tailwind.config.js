/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adicione as extensões necessárias
  theme: {
    fontFamily:{
      principalT: ['Lato', 'sans-serif'],
      destaqueT: ['Anton', 'serif'],
    },
    colors: {
      "principal": "#4B0082",
      "secundario": "#FFA500",
      "fundo": "#F5F5F5",
      "destaque": "81C784",
      "textoBranco": "#FAFAFA",
      "textoPreto": "#212121",
      "textoVermelho": "#FF0000",
    },
    extend: {},
  },
  plugins: [],
}
