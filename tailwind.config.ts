import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          violet: "#8B5CF6",
          purple: "#A855F7",
          pink: "#EC4899",
          light: "#F3F4F6",
          white: "#FFFFFF",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#a855f7',
              '&:hover': {
                color: '#9333ea',
              },
            },
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            h4: {
              color: '#fff',
            },
            h5: {
              color: '#fff',
            },
            h6: {
              color: '#fff',
            },
            strong: {
              color: '#fff',
            },
            code: {
              color: '#fff',
            },
            figcaption: {
              color: '#9ca3af',
            },
            blockquote: {
              color: '#9ca3af',
              borderLeftColor: '#3f3f46',
            },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config

