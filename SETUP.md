# Setup Guide

## What Aysar needs to do when opening this on his personal machine

### 1. Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site should load. Everything except the contact form will work immediately.

### 2. Set up the contact form (5 minutes)

The contact form sends messages to `aesrdalgamouni@gmail.com` through Web3Forms.

**Steps:**

1. Go to https://web3forms.com
2. Enter your email: `aesrdalgamouni@gmail.com`
3. Web3Forms will email you an **Access Key** (a long string like `abc123...`)
4. In the project root, create a file called `.env.local`
5. Paste this in, replacing `your_key_here` with the real key:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
```

6. Restart the dev server (`Ctrl+C`, then `npm run dev` again)
7. Test the form — any message should arrive in your Gmail inbox

**Later on Vercel:** you'll add the same env var in the Vercel dashboard (Settings → Environment Variables).

### 3. Push to GitHub

```bash
git init
git add .
git commit -m "chore: initial portfolio"
git branch -M main
git remote add origin https://github.com/Dalga02/portfolio.git
git push -u origin main
```

Create the empty repo first at https://github.com/new (name it `portfolio`).

### 4. Deploy to Vercel

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Import the `portfolio` repo
4. Add the env var: `NEXT_PUBLIC_WEB3FORMS_KEY` = your key
5. Click **Deploy**

You'll get a live URL like `portfolio-xxx.vercel.app` within a minute.

### 5. Custom domain (optional, when ready)

Buy `aysardalgamouni.com` from Namecheap or Cloudflare (~$12/year). In Vercel → Settings → Domains, add it. Vercel will show you the DNS records to add at the registrar.

---

## Where the data lives

Everything you might want to edit is in `data/`:

- `data/site.ts` — name, email, socials, nav, typing effect
- `data/skills.ts` — skill groups and levels
- `data/services.ts` — services offered
- `data/projects.ts` — project cards
- `data/timeline.ts` — experience

Change the file, save, the site updates instantly.
