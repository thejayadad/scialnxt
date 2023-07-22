/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#ef23c3",
                    
            "secondary": "#bf461e",
                    
            "accent": "#e8c576",
                    
            "neutral": "#27283a",
                    
            "base-100": "#313335",
                    
            "info": "#386ecc",
                    
            "success": "#146153",
                    
            "warning": "#fcb954",
                    
            "error": "#ed6466",
                    },
                  },
                ],
              },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
