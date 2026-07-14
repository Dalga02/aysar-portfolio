# Aysar Dalgamouni — Portfolio

A premium developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 👉 New to this? Read `SETUP.md` first

`SETUP.md` walks through everything: running locally, configuring the contact form, pushing to GitHub, and deploying to Vercel.

## Stack

- Next.js 15 · React 19 · TypeScript
- Tailwind CSS · Framer Motion · Lucide Icons
- Lenis (smooth scroll) · next-themes (dark mode)
- Embla Carousel · React Hook Form + Zod
- Web3Forms (contact form email delivery)

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires **Node 20+**.

## Where to edit content

Everything is in `data/`:

- `data/site.ts` — name, email, socials, WhatsApp, nav, typing strings, avatar
- `data/projects.ts` — project cards (currently 3 in "Coming soon" state)
- `data/skills.ts` — skill groups + levels
- `data/services.ts` — service cards
- `data/timeline.ts` — experience entries

Colors and typography live in `app/globals.css` and `tailwind.config.ts`.

## Sections

- Hero with typed effect + floating icons + workstation illustration
- About with animated stats + DiceBear avatar
- Skills (3 groups with animated progress bars)
- Services (5 cards)
- Projects (filterable, currently showing 3 "Coming soon" projects)
- Experience Timeline (Junior Dev → Freelance → Training → Uni)
- Testimonials (currently "Coming soon")
- Contact (form wired to Web3Forms + WhatsApp direct link + copy email)
- Footer

## Deploy

Push to GitHub, import to Vercel, add the `NEXT_PUBLIC_WEB3FORMS_KEY` env var, click Deploy. Details in `SETUP.md`.

---

Built in Amman.
