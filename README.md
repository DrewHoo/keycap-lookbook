# PBT Keycap Lookbook

A hand-curated Etsy lookbook of **PBT** keycap sets in the flat / uniform profile family
(**DSA · SA · XDA · MOA · MDA**), sorted into three aesthetics:

1. **Cyberpunk / Synthwave / Blade Runner** — neon-on-dark, orange-teal dystopia
2. **Pastel / Mintlodify / Cottagecore-Witch** — sage, matcha, lavender; botanical & celestial
3. **Ukiyo-e** — genuine Japanese woodblock (Hokusai waves, Fuji, cranes)

Live at **https://drewhoover.com/keycap-lookbook/**

Every listing was opened in a browser and confirmed live (dead / sold-out / ABS / wrong-profile
listings removed). Prices captured **2026-07-04**; Etsy listings expire and reprice, so treat every
figure as "as of that date." Canonical `etsy.com/listing/…` links only — no affiliate wrappers or trackers.

## Structure

Fully static, no build step. `index.html` is self-contained (inline CSS/JS); card data lives in the
`SETS` / `NEARMISS` arrays at the bottom of the file. Product images are hot-linked from Etsy's
`i.etsystatic.com` CDN. `og.png` is a pre-generated social card (regenerate with
`scripts/gen-og.mjs` + `sharp` if you change the design). Deployed via GitHub Actions → Pages
(`.github/workflows/deploy.yml`).
