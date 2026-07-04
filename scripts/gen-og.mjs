import sharp from 'sharp';

const W = 1200, H = 630;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="cyber" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#15111f"/><stop offset="1" stop-color="#0c0d15"/>
    </linearGradient>
    <linearGradient id="title" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ff5db1"/><stop offset="0.5" stop-color="#c9a6e6"/><stop offset="1" stop-color="#31e0e0"/>
    </linearGradient>
    <radialGradient id="glowc" cx="18%" cy="20%" r="60%">
      <stop offset="0" stop-color="#ff3ea5" stop-opacity="0.45"/><stop offset="1" stop-color="#ff3ea5" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowt" cx="82%" cy="18%" r="60%">
      <stop offset="0" stop-color="#31e0e0" stop-opacity="0.4"/><stop offset="1" stop-color="#31e0e0" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft"><feGaussianBlur stdDeviation="0.5"/></filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#cyber)"/>
  <rect width="${W}" height="${H}" fill="url(#glowc)"/>
  <rect width="${W}" height="${H}" fill="url(#glowt)"/>

  <!-- three keycap chips, one per aesthetic -->
  <g transform="translate(96,150)">
    <rect x="0" y="0" width="150" height="150" rx="24" fill="#141019" stroke="#ff3ea5" stroke-width="3"/>
    <rect x="26" y="26" width="42" height="42" rx="9" fill="#ff3ea5"/>
    <rect x="82" y="26" width="42" height="42" rx="9" fill="#31e0e0"/>
    <rect x="26" y="82" width="42" height="42" rx="9" fill="#8b2fd6"/>
    <rect x="82" y="82" width="42" height="42" rx="9" fill="#f0a24b"/>
    <text x="75" y="196" font-family="Georgia, serif" font-size="21" fill="#ff86c8" text-anchor="middle" font-style="italic">bi-lighting</text>
  </g>
  <g transform="translate(525,150)">
    <rect x="0" y="0" width="150" height="150" rx="24" fill="#f3eff7" stroke="#b79ad6" stroke-width="3"/>
    <rect x="26" y="26" width="42" height="42" rx="9" fill="#c9b6e6"/>
    <rect x="82" y="26" width="42" height="42" rx="9" fill="#a8d4a0"/>
    <rect x="26" y="82" width="42" height="42" rx="9" fill="#f2e6a8"/>
    <rect x="82" y="82" width="42" height="42" rx="9" fill="#eec4dd"/>
    <text x="75" y="196" font-family="Georgia, serif" font-size="21" fill="#b79ad6" text-anchor="middle" font-style="italic">pastel</text>
  </g>
  <g transform="translate(954,150)">
    <rect x="0" y="0" width="150" height="150" rx="24" fill="#f4ead6" stroke="#b5462e" stroke-width="3"/>
    <rect x="26" y="26" width="42" height="42" rx="9" fill="#1f3a5f"/>
    <rect x="82" y="26" width="42" height="42" rx="9" fill="#e9ddc4"/>
    <rect x="26" y="82" width="42" height="42" rx="9" fill="#b5462e"/>
    <rect x="82" y="82" width="42" height="42" rx="9" fill="#c98a3a"/>
    <text x="75" y="196" font-family="Georgia, serif" font-size="21" fill="#b5462e" text-anchor="middle" font-style="italic">ukiyo-e heroes</text>
  </g>

  <text x="${W/2}" y="450" font-family="Helvetica, Arial, sans-serif" font-size="66" font-weight="800" fill="url(#title)" text-anchor="middle" letter-spacing="-1">PBT Keycap Lookbook</text>
  <text x="${W/2}" y="500" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="#c7c8d6" text-anchor="middle">18 hand-verified sets · Etsy + specialist retailers</text>
  <text x="${W/2}" y="556" font-family="Helvetica, Arial, sans-serif" font-size="19" fill="#8f90a2" text-anchor="middle">every listing opened &amp; confirmed live · prices as of Jul 2026</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(process.argv[2] || 'og.png');
console.log('wrote og.png');
