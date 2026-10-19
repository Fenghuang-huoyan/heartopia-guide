# Heartopia Fan Guide

Unofficial English wiki for [Heartopia](https://store.steampowered.com/app/4025700/Heartopia/) (Steam AppID **4025700**), aimed at **heartopiaguide.wiki**.

Not affiliated with XD. The site does not try to be a second fish or bug database. It keeps four jobs current: redeem codes, the first week, the DG level path, and seasonal farming and gold.

## Layout

Three layers, same idea as a small static wiki:

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/heartopiaguide/site.config.ts` | Domain, Steam AppID, analytics, nav |
| Ads | `sites/heartopiaguide/ads.config.ts` | Adsterra Native Banner after Quick Answer |
| Active site | `sites/active` → `heartopiaguide` | What the build actually reads |
| Framework | `framework/` | Layout, Quick Answer, ad slot, SEO |
| Content | `content/heartopia/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so Google Analytics is not injected. Guide pages load one Adsterra Native Banner after Quick Answer (`afterQuickAnswer`). Website and placement ids are documented in [ADS.md](ADS.md) and are not the script key. Adult ads stay off.

## Scripts

```bash
npm install
npm run dev      # http://localhost:4327
npm run build
npm run preview
```

## Routes

- `/` — home (Steam library hero, six image doors, guide cards)
- `/redeem-codes`
- `/beginner-guide`
- `/dg-level`
- `/farming-seasons`
- `/friendship-gifts`
- `/make-money`
- `/fishing`
- `/cooking`
- `/seasons-events`
- `/npcs-gifts`
- `/hobbies`
- `/faq`
- `/sitemap.xml` and `/robots.txt`

## Vercel and the custom domain

Do this in the Vercel dashboard when you are ready. Nothing here buys a domain or edits DNS.

1. Import this GitHub repo as a Vercel project. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
2. Deploy. The `*.vercel.app` URL should show the homepage hero before you attach a domain.
3. In the project, open **Settings → Domains** and add `heartopiaguide.wiki` (and `www` if you want it).
4. Vercel will show the records to create at the registrar you already use. Add only those records. This repository does not contain them, and setup should not purchase the name.
5. Wait until Vercel marks the domain valid, then confirm `https://heartopiaguide.wiki` serves this build.

Steam art on the homepage is stored under `public/images/official/steam/` with `ATTRIBUTION.txt`.
