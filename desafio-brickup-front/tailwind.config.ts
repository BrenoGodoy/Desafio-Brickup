import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      primary: {
        "50": "#f5ebfe",
        "100": "#dbc7fd",
        "200": "#b190fc",
        "300": "#9061fa",
        "400": "#7e3af2",
        "500": "#6c2bd9",
        "600": "#55259e",
        "700": "#48217d",
        "800": "#3a1f5d",
        "900": "#2f1d45",
        "950": "#251732",
      },
      secondary: {
        "50": "#f8f9fa",
        "100": "#e2e4e6",
        "200": "#bcc0c4",
        "300": "#95a1a7",
        "400": "#6e777e",
        "500": "#495057",
        "600": "#343a40",
        "700": "#212529",
        "800": "#16181a",
        "900": "#0d0e0f",
        "950": "#070809",
      },
      third: {
        "50": "#edf9ec",
        "100": "#d2f1cc",
        "200": "#a8e68d",
        "300": "#81d94f",
        "400": "#5ec93d",
        "500": "#4db24f",
        "600": "#3d8f4a",
        "700": "#2f6f3d",
        "800": "#22532f",
        "900": "#173d26",
        "950": "#0e271b",
      },
    }
  },
  fontFamily: {
    'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
    'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
