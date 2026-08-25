# anmolmishra23-dev.github.io

Personal portfolio website — built with Tailwind CSS, hosted on GitHub Pages.

## About

I'm Anmol Mishra, a full-stack developer based in Gurugram, India.
I work primarily with Laravel and Next.js, and I'm currently leading
development on Imagive AI at Ekaleido Innovations.

- **Live site:** https://anmolmishra23-dev.github.io
- **GitHub:** https://github.com/anmolmishra23-dev
- **Email:** anmolmishra2304@gmail.com
- **LinkedIn:** https://linkedin.com/in/anmolmishra23

## Stack

- HTML5
- Tailwind CSS (compiled ahead of time, inlined into `index.html`)
- Vanilla JavaScript (Intersection Observer for scroll reveals)
- Google Fonts: Inter, JetBrains Mono

## Run locally

This is a single-file static site. To run locally, just open `index.html`
in a browser, or serve the directory with any static server:

```bash
# Python 3
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Rebuilding the CSS

Tailwind is **not** loaded from the Play CDN — that shipped a 407 KB
runtime compiler and hurt Core Web Vitals. The stylesheet is compiled
ahead of time and inlined into `index.html`.

After adding or changing any Tailwind class in the markup, regenerate it:

```bash
npx tailwindcss@3.4.17 -c tailwind.config.js -i src/input.css -o src/output.css --minify
```

Then paste the contents of `src/output.css` into the `<style>` block in
`index.html` marked `Tailwind — compiled from tailwind.config.js`.

Custom colours, fonts and the content glob live in `tailwind.config.js`.
Hand-written CSS lives in the second `<style>` block and is not generated.

## Deploy

Deployed automatically via GitHub Pages from the `main` branch.
