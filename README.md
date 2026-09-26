# Rohit GP - Portfolio

A professional, single-page portfolio website built with **React + Vite**. Clean "Editorial meets Terminal" design with light/dark themes.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How to Edit Your Content

All personal data lives in **one file**: `src/data/profile.js`

| What to edit | Where in `profile.js` |
|---|---|
| Name, title, tagline | `name`, `title`, `tagline` |
| Contact info | `contact` object |
| Profile photo | `photo` - set to `'/profile.jpg'` and place image in `public/` |
| About section | `about.summary`, `about.focusAreas` |
| Skills | `skills` array - add/remove categories and items |
| Projects | `projects` array - add new objects with the same shape |
| Experience | `experience` array |
| Education | `education` array |
| Certifications | `certifications` array |
| Achievements | `achievements` array |

**No component code changes needed** - everything renders from this data file.

---

## How to Change Colors & Fonts

Open `src/variables.css`:

### Colors
Edit the CSS custom properties under `[data-theme='light']` and `[data-theme='dark']`:

```css
/* Light theme accent */
--accent: #D9622B;

/* Dark theme accent */
--accent: #F08A4B;

/* Tag color */
--tag-accent: #2F7F79;
```

### Fonts
Change the Google Fonts import at the top and update:

```css
--font-heading: 'Fraunces', Georgia, serif;
--font-body: 'Inter Tight', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

---

## How to Add Your Resume PDF

1. Place your resume file as `public/resume.pdf`
2. The "Download Resume" button in the navbar will automatically link to it

---

## How to Add Your Profile Photo

1. Place your photo in `public/` (e.g., `public/profile.jpg`)
2. In `src/data/profile.js`, set: `photo: '/profile.jpg'`

---

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the `dist/` folder to Netlify, or connect your GitHub repo
```

### GitHub Pages
```bash
npm run build
# Push the `dist/` folder to a `gh-pages` branch
# Or use the `gh-pages` npm package:
npm install -D gh-pages
npx gh-pages -d dist
```

For GitHub Pages, add `base` to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
});
```

---

## Tech Stack

- **React 19** (functional components + hooks)
- **Vite** (build tool)
- **Plain CSS** with custom properties (design tokens)
- **react-icons** (Feather icons)
- **Google Fonts** (Fraunces, Inter Tight, JetBrains Mono)

---

## Project Structure

```
src/
  components/     # All UI components with co-located CSS
  data/           # profile.js - all resume content
  hooks/          # useTheme, useScrollSpy, useReveal
  variables.css   # All the design tokens
  App.jsx         # Root component
  main.jsx        # Entry point
public/
  favicon.svg     # Site favicon
  resume.pdf      # Your resume (add this)
  profile.jpg     # Your Profile (add this)
```

---

## License

MIT
