# She Is Bridal — Website

Luxury wedding-dress boutique landing page. Nasr City, Cairo.

## What was fixed vs. the previous version
- File renamed from `Index.html` to `index.html` (lowercase) — GitHub Pages only
  auto-serves a lowercase `index.html` at the root; the capitalized name is why
  the site wasn't loading correctly.
- All `<img>` references now point to real files that exist in `/images`
  (previously `logo.png`, `dress1.jpg`, `dress2.jpg`, `dress3.jpg` were referenced
  but never uploaded to the repo, so every image was broken).
- The Google Maps embed previously contained a truncated placeholder URL
  (`...!1m18!...`). It's now a working embed built from your shared location link.
- Full redesign: quiet-luxury visual identity (ivory / charcoal / gold),
  Cormorant Garamond + Jost typography, responsive layout, mobile menu,
  scroll-reveal animation (disabled automatically for users with
  "reduce motion" turned on).
- Added `.nojekyll` so GitHub Pages serves the files as-is.

## Deploy to GitHub Pages
1. Delete the old `Index.html` and any unused image files from the repo
   (`amrhussie/sheisbridal.github.io`), or start fresh.
2. Upload everything in this folder (`index.html`, `style.css`, `script.js`,
   `.nojekyll`, and the `images/` folder) to the root of the repo, on the
   `main` branch.
3. In the repo, go to **Settings → Pages** and confirm the source is
   "Deploy from a branch" → `main` → `/ (root)`.
4. Wait 1–2 minutes, then visit https://amrhussie.github.io/sheisbridal.github.io/

## Editing later
- Text content: edit `index.html` directly.
- Colors / fonts / spacing: edit the `:root` variables at the top of `style.css`.
- Swapping photos: replace files inside `images/` and keep the same filenames,
  or update the `src` paths in `index.html`.

## SEO Verification Automation
If you need to verify the site in Google Search Console or Bing Webmaster Tools using HTML meta tags,
use the automation helper script:

```bash
node seo-verify.js --google=YOUR_GOOGLE_TOKEN --bing=YOUR_BING_TOKEN
```

This adds the correct `<meta name="google-site-verification">` and
`<meta name="msvalidate.01">` tags to `index.html`. Then deploy the site and complete the verification step in the console.
