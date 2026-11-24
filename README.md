# TwinPlay website

Static marketing site for [TwinPlay](https://apps.apple.com/us/app/twinplay-dual-screen-emulator/id6824603080), built for free GitHub Pages.

**Do not enable GitHub Pages or push this live until Charlie has reviewed the previews and said it is OK to publish.**

## Local preview

```bash
cd /workspace/twinplay-site
python3 -m http.server 8080
```

Then open <http://127.0.0.1:8080/>. Review screenshots are in `previews/` (desktop and mobile). Those preview images are for review only and do not need to be published.

## What this site includes

- Landing page in English, with a cheap EN/ES toggle (preference is saved in the browser)
- Official App Store link and the official “Download on the App Store” badge
- Privacy policy (TwinPlay text, last updated October 19, 2026) and a support page
- A small “Open source licenses” link to https://github.com/Chariio/TwinPlay

The current live App Store version is **1.4.2**. Systems listed as available now are the ones already in that release. TwinPlay 1.5 (PlayStation, PSP, Sega systems, Mac, iCloud saves) is described only as **in review**. Dreamcast, GameCube, and PlayStation Vita are **coming later**, with preview skins only.

## How to publish (after Charlie says OK)

The existing developer site at https://chariio.github.io/ is the older NDUO Pages site. Do not overwrite it until there is a plan for the current `/privacy` and `/support` URLs, which the App Store listing may still use.

Recommended first publish: a **project** Pages site, so the old NDUO site stays up.

1. Create a new public GitHub repository under the `Chariio` account, for example `twinplay-site`. Do not enable Pages yet if Charlie has not approved the design.
2. Push this folder to the `main` branch (omit `previews/` and `tools_build_assets.py` if you prefer a clean public tree).
3. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `root` (or `/docs` if you move the files there).**
4. The site will be at `https://chariio.github.io/twinplay-site/`.
5. After it is live, set absolute Open Graph URLs (`og:image`, `og:url`, `twitter:image`) to that address, and consider pointing the App Store seller URL and privacy-policy URL at this site.
6. A custom domain (optional, paid) can be added later without rebuilding the pages.

If Charlie later wants this at the root of `chariio.github.io`, move these files into that user Pages repo and keep redirects for `/privacy` and `/support`.

## Notes for a later update

- After publish, prefer absolute `https://` URLs in the `og:` and Twitter image tags so link previews work in Messages, X, and iMessage.
- The privacy policy is the official October 19, 2026 TwinPlay text. It may need a revision for the live cover finder, RetroAchievements, and (once 1.5 ships) iCloud saves. Do not invent new policy language without Charlie reviewing it.
- US IAP prices ($0.99 Plus, $4.99 Pro) and the “5.0 from 5 ratings” line should be checked against the App Store if they change.


## Gameplay media

Charlie’s original recordings live in `source-media/` (git-ignored), along with extracted review frames.

The site uses cropped, muted, looping clips in `assets/media/` (top 3DS screen only, so a “Coming soon to TwinPlay” watermark on the hinge is not shown):

- `zelda-oot3d` — Ocarina of Time 3D title (hero + first card)
- `mario-3d-land` — Super Mario 3D Land, World 1-1 gameplay
- `pokemon-x` — Pokémon X title

Each clip has H.264 MP4 + VP9 WebM, a poster JPG/WebP, and a dual-screen still (top + touch screen stacked). Videos autoplay only when muted, in view, and when the visitor has not requested reduced motion.

## Photos

The landing page also uses eight product photos from Charlie: a real foldable iPhone running Ocarina of Time 3D in a lime skin, the library with a Super Mario 64 card and Cover Flow, and six skin mockups (Tetris DS, Metroid Fusion, Pokémon Yellow, Killer Instinct, Super Mario 64, and Super Mario 3D Land). Optimized WebP and JPEG versions live in `assets/photos/`. Originals stay in `source-media/` and are not committed.

