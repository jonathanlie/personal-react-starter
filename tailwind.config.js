/** @type {import('tailwindcss').Config} */
export default {
  // CRITICAL: This 'content' array must correctly point to ALL files
  // where you use Tailwind classes (HTML, JS, JSX, TS, TSX).
  // The current setup looks for all .html, .js, .jsx, .ts, .tsx files
  // within the current directory and its subdirectories in 'src'.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme here if needed
  },
  plugins: [], // Add Tailwind plugins here if needed (e.g., @tailwindcss/forms)
}
