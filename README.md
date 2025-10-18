# Year 2 Learning Apps

This repo now hosts a small hub page and any number of mini React apps that build with one Vite configuration.  
`y2-conjuctions-quest/` contains the Conjunctions Quest game, and `templates/react-subapp/` is a starter you can copy for future apps.

## Quick start
```
npm install
npm run dev
```

Visit `http://localhost:5173/` for the landing page, or `http://localhost:5173/y2-conjuctions-quest/` for the existing game.

## Directory layout
- `index.html` – landing page that links to every sub-app
- `y2-conjuctions-quest/` – Conjunctions Quest HTML, React entry, component code, styles
- `templates/react-subapp/` – copy-and-paste starter for new React-based apps
- `vite.config.js` – multi-page Vite build configuration

## Add another app
1. Copy `templates/react-subapp` to a new folder (e.g. `y3-reading-quest`) and rename files/content as needed.
2. Replace placeholder text inside the copied `index.html`, `App.jsx`, `main.jsx`, and `index.css`.
3. Register the new HTML file in `vite.config.js` under `build.rollupOptions.input` so it is bundled.
4. Add a link to the new folder in the root `index.html` so it appears on the landing page.
5. Run `npm run dev` to preview or `npm run build` to ensure production output succeeds.

## Deploy to GitHub Pages
```
npm run deploy
```
This publishes the `dist/` folder (landing page plus every registered sub-app).
