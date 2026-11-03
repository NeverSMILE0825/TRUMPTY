# TRUMPTY DUMPTY — Ethereum static-site adaptation

The supplied ZIP contained browser-saved HTML snapshots of the original homepage and 47-meme vault, **not the editable original source project**. This package reconstructs a standalone static site using the saved HTML, CSS, JS, and original artwork, with the six user-requested Ethereum image replacements.

## Deploy
- **GitHub Pages:** upload these files to a repository root, then enable Pages from the branch root. In a project repo, all links remain relative (base path safe). Make sure the `memes/` folder is deployed.
- **Netlify:** drag the folder `dist` (or upload the contents of this ZIP) to deploy.
- **Local:** run `python -m http.server 8080` from this folder, then open `http://localhost:8080`.

## Before launch
Edit `site-config.js` to add your actual Ethereum token contract (0x + 40 hex characters), official social accounts, and optionally a new music-video URL. An unlaunched contract remains `Coming Soon..`. The Copy address control is functional and copies this placeholder without inventing a contract. The original Solana CA is not used.

The original reference website's social accounts and music-video URL are **not** automatically reused, because they may belong to another token project. Social icons remain visible but disabled until the Ethereum project owners set their own URLs. The original vault video/audio media were not part of the supplied browser-saved ZIP; the vault uses a static image fallback and the audio control is disabled. All 47 gallery thumbnails remain available; the five Solana-marked gallery files were replaced with Ethereum versions. Font faces are requested from Google Fonts as a progressive enhancement (no font binaries are redistributed).

This is a source-snapshot-based static adaptation, not the original development repository. Core layout, copy, scroll film, navigation, FAQ interaction and memes are retained to the extent possible; check the site on your deployment before launch.

## Site map
- `index.html` — home/scroll-film, Ethereum copy, FAQ, tokenomics callout
- `memes/index.html` — 47-card meme vault, lightbox and downloads
- `site-config.js` — editable CA/social/video settings
- `assets/css/` — original CSS and minimal compatibility overrides
- `assets/js/main.js` — bundled homepage effects from the saved site
- `assets/js/vault.js` — gallery lightbox from the saved site
- `assets/js/eth-site.js` — Ethereum-specific contract/link behavior
- `assets/` — scroll film artwork, approved Ethereum space image and previews
- `assets/memes/` — original/converted vault thumbnails
- `assets/full/` — larger download versions of updated gallery images
- `assets/ethereum-originals/` — all six user-approved Ethereum assets for future edits

## Editorial cautions
This is an independently assembled parody adaptation; it must not suggest endorsement or a connection to the original Solana project, any public figure, or any exchange. The token address, rewards and trading mechanics must be verified before public launch. Ethereum mainnet/uniswap references do not establish the existence of a Uniswap V4 liquidity pool.
