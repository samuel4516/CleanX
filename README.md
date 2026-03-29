# CleanX Reinigung (Next.js + TypeScript)

This project has been migrated from static `HTML/CSS/JS` to:
- `Next.js` (App Router)
- `React`
- `TypeScript`

The visual design and page structure were preserved from the original site.

## Run locally

1. Install Node.js (LTS) if it is not installed.
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open:

`http://localhost:3000`

## Project structure

- `app/layout.tsx` - root layout + metadata
- `app/page.tsx` - React page with the original markup and behavior
- `app/globals.css` - global styles (same design styling)

Legacy static files are still present in the repo:
- `index.html`
- `styles.css`
- `script.js`
