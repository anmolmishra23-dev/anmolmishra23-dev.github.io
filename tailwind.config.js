/**
 * Tailwind config for the portfolio.
 *
 * The compiled output lives inline in index.html (see the block marked
 * "Tailwind — compiled, replaces the Play CDN"). Regenerate after adding
 * or changing any Tailwind class in the markup:
 *
 *   npx tailwindcss@3.4.17 -c tailwind.config.js -i src/input.css -o src/output.css --minify
 *
 * then paste src/output.css back into that <style> block.
 */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy:   '#12263F',
        'navy-deep': '#0B1A2E',
        paper:  '#F2F6F8',
        card:   '#FFFFFF',
        ink:    '#16283E',
        graphite: '#51637A',
        faint:  '#8AA0B4',
        steel:  '#9FB3C8',
        teal:   '#0D9488',
        mint:   '#5EEAD4',
      },
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
};
