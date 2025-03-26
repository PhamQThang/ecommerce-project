module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // Nếu dùng Next.js với `src/`
    "./app/**/*.{js,ts,jsx,tsx}",   // Nếu có thư mục `app/`
    "./pages/**/*.{js,ts,jsx,tsx}", // Nếu có thư mục `pages/`
    "./components/**/*.{js,ts,jsx,tsx}", // Nếu có thư mục `components/`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
