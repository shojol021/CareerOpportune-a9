/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#9e35f4",
        
"secondary": "#dcb4f7",
        
"accent": "#ef70a7",
        
"neutral": "#222335",
        
"base-100": "#E8E3ED",
        
"info": "#6ACAE2",
        
"success": "#28E2B0",
        
"warning": "#BF7A12",
        
"error": "#F06688",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

