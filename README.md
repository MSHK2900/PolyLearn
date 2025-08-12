
# PolyLearn (Static Site)

A lightweight, **multi-page** static website to learn about ~100 common polymers.  
Built with plain HTML/CSS/JS — no build step. Perfect for **GitHub Pages**.

## Structure
- `index.html` — start page with **type icons**
- `type.html?type=Thermoplastics` — lists polymers for a category, with search
- `polymer.html?slug=polyethylene-hdpe` — detail page populated from JSON
- `data/polymers.json` — the single source of truth (edit this file to add/modify polymers)
- `styles.css`, `js/*` — presentation and logic

## Deploy on GitHub Pages
1. Create a new repo named `polylearn` (or any name).
2. Upload the contents of this folder.
3. In **Settings → Pages**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`) / root (`/`)
4. Your site will be available at `https://<your-username>.github.io/<repo>/`.

> Tip: Since this is **multi-page** with plain HTML, there are no client-side routing 404 issues.

## Customize
- Open `data/polymers.json` and fill in:
  - `repeatUnit`, `monomers`, `overview`, `structure`, `uses`, `manufacturing`, `properties`, `safety`, `links`.
- Add icons or images by linking to absolute URLs in `structure` or `links`.

## Credits
Made for learning & quick reference. Always consult material-specific **SDS** and standards for safety-critical work.
