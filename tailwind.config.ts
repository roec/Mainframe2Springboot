import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0 10px 25px -12px rgba(15, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
