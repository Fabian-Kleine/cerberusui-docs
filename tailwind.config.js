/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cuiprimary: "#3D78CD",
        cuiprimaryhover: "#3160a4",
        cuiprimarydisabled: "#244b82",
        cuiprimarybg: "#0c1829",
        cuisecondary: "#BD342F",
        cuisecondaryhover: "#972a26",
        cuisecondarydisabled: "#7a211d",
        cuisecondarybg: "#4c1513",
        cuitertiary: "#BDE763",
        cuitertiaryhover: "#97b94f",
        cuitertiarydisabled: "#6f8a37",
        cuitertiarybg: "#39451e",
        cuidefault: "#52706E",
        cuidefaulthover: "#425a58",
        cuidefaultdisabled: "#3c4f4e",
        cuiwarning: "#ffd60a",
        cuiwarninghover: "#ccab08",
        cuiwarningdisabled: "#edc531",
        cuiwarningbg: "#998006",
        cuibase: "#020108",
      }
    }
  },
  plugins: [],
};
