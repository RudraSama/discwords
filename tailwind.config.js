/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': 'rgba(45,37,56, 1)',
        'navy-blue-200': 'rgba(45,37,56, 0.2)',
        'navy-blue-500': 'rgba(45,37,56, 0.5)',
        'navy-blue-700': 'rgba(45,37,56, 0.7)',
        'navy-blue-900': 'rgba(45,37,56, 0.9)',
        'gray-bg-900': '#1e1f22',
        'gray-bg-800': '#2b2d31',
        'gray-bg-700': '#313338',
        'gray-bg-600': '#3d3f45',
        'gray-bg-500': '#949BA4'
      }
    },
    fontFamily: {
      'roboto': ["Roboto", "sans-serif"],
      'fira': ["Fira Code", "monospace"]
    }
  },
  plugins: [],
};
