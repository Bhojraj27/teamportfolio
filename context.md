# Kestryn — Project Context

Read this file first. It is the shared source of truth for the website, the team, and how to change content.

If you are an AI assistant helping a teammate: follow this file before inventing structure, copy, or brand details.

---

## What this project is

**Kestryn** is a 5-person remote software development team. This repository is our public portfolio site. The goal is to attract **international clients** for remote, work-from-home engineering work.

The site should feel like a high-end software studio — not a basic personal developer page.

Primary conversion action: **Hire Our Team**.

Secondary actions: View Our Work, Start a Project, Let's Work Together.

Target clients: startups, SaaS companies, international businesses, agencies, founders, SMBs, and companies that need a dedicated remote engineering team.

---

## Brand

| Item | Value |
| --- | --- |
| Name | Kestryn |
| Meaning | Coined name, close to *kestrel* (focus, precision, a small sharp team). Not a dictionary word. |
| Tagline | Remote engineering. Global collaboration. Production-ready software. |
| Headline | Five Engineers. One Reliable Remote Development Team. |
| Email | teamkestryn@gmail.com |
| LinkedIn | https://www.linkedin.com/in/team-kestryn-191b79429 |
| WhatsApp | https://wa.me/917887780210 |
| GitHub (site default) | https://github.com/Bhojraj27 — replace with the team org when we have one |

Visual direction:

- Dark-first: deep black / charcoal
- Type: white / off-white
- Accents: electric blue, indigo, violet, subtle cyan
- Premium, minimal, lots of whitespace
- Subtle glow and motion — not neon, not cartoon, not a generic template

Logo mark on the site: 5 connected nodes (one per engineer).

---

## Team

Five engineers. Two focus on **React Native**. Three focus on **MERN + Next.js + AWS + deployment**.

| ID | Name | Role | Stack focus | Profile status |
| --- | --- | --- | --- | --- |
| 01 | Bhojraj Chavan | Senior Full-Stack Engineer | React, Next.js, TypeScript, Node.js, MongoDB, AWS | Filled (photo + experience) |
| 02 | Shubham Hanmane | React Native Engineer | React Native, JS, REST APIs | Placeholder — update your own card |
| 03 | Atharv Mirajkar | React Native Engineer | React Native, TS, REST APIs | Placeholder — update your own card |
| 04 | Vikas Vitekar | Full-Stack Engineer | React, Next.js, Node.js, MongoDB, AWS | Placeholder — update your own card |
| 05 | Pranil Veer | Full-Stack / DevOps Engineer | React, Node.js, AWS, Docker, CI/CD | Placeholder — update your own card |

### Team card rules

On team cards, show only:

- Photo
- Name
- Role
- Short intro
- Years of experience
- Skills
- LinkedIn, GitHub, email

**Do not** put company names, employer brands, client names, awards, or fake stats on team cards.

---

## What we sell (capabilities)

We take products from idea → development → deployment.

- Web applications (React, Next.js, MERN, TypeScript)
- Backend and APIs (Node.js, Express, REST, auth, databases)
- SaaS products (MVP to production)
- Mobile (React Native for iOS and Android)
- Cloud and DevOps (AWS, Docker, CI/CD)
- Databases (MongoDB, MySQL, PostgreSQL, SQL)
- Dashboards / admin panels
- Legacy modernization
- Join existing engineering teams or take a full project

Engagement models (no fake prices on the site):

1. Project-based
2. Dedicated team
3. Remote engineering partner

---

## Current portfolio

Only **real work** should be published.

| Project | Status | Live |
| --- | --- | --- |
| Bynaus AI | Live on the site | https://bynaus.ai |
| Other work | Add when ready | — |

Bynaus AI is a multi-tenant construction operations SaaS PWA: attendance, timecards, daily reports, sheets/annotation, AI companion, AWS, Node.js API, MongoDB. Case study: `/projects/bynaus-ai`.

When adding a project, use `src/data/projects.ts`. Do not invent clients, revenue, user counts, or results.

---

## Tech stack of this website

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- lucide-react (UI icons; GitHub/LinkedIn are custom SVGs)

Scripts:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

Environment:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Copy from `.env.example`. Set the production URL before deploy.

Contact form posts to `POST /api/contact`. It validates the inquiry. Wire a real email provider (Resend, SES, etc.) in `src/app/api/contact/route.ts` before relying on it in production.

---

## Folder map

```
src/
  app/
    page.tsx                     Homepage
    layout.tsx                   SEO, fonts, navbar, footer
    projects/[slug]/page.tsx     Case study pages
    api/contact/route.ts         Inquiry endpoint
  components/                    UI sections (Hero, Team, Projects, Contact, …)
  data/                          ALL editable content lives here
  lib/utils.ts                   className helper
public/
  team/                          Member photos
  favicon.svg
```

Homepage section order:

Hero → TrustBar → Services → TechStack → ProductLifecycle → Projects → Team → WhyUs → RemoteWork → Process → EngagementModels → FAQ → Contact → Footer

---

## How each developer updates their profile

Edit **only your object** in `src/data/team.ts`.

1. Replace `intro`, `yearsOfExperience`, `technologies`, `linkedin`, `github`, `email`.
2. Add a photo to `public/team/` using a clear filename, for example:
   - `public/team/shubham-hanmane.jpg`
3. Set `photo: "/team/shubham-hanmane.jpg"`.
4. If the face is cropped wrong, change `photoPosition`:
   - Face too low / sky showing: raise the % (`center 70%`)
   - Headshot / face near the top: use `center top`
5. Leave `photo: ""` until you have a photo. The gradient placeholder will show.

Do not rewrite other people's cards.

---

## How to add a project

1. Open `src/data/projects.ts`.
2. Copy the Bynaus AI object and change the fields.
3. Set a unique `slug` (used in the URL: `/projects/your-slug`).
4. Set `liveUrl` to the real URL, or `"#"` if there is no live demo.
5. Set `githubUrl` to the repo, or `""` to hide the GitHub button.
6. Keep `results` honest. Empty or qualitative is better than fake numbers.

`mockup` options for the CSS product preview: `"saas"` | `"commerce"` | `"ios"` | `"dashboard"`.

---

## Content files (edit these, not random JSX)

| File | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, contact, nav, SEO, trust bar |
| `src/data/team.ts` | Team cards |
| `src/data/projects.ts` | Case studies |
| `src/data/services.ts` | Services |
| `src/data/technologies.ts` | Engineering stack pills |
| `src/data/faqs.ts` | FAQ |
| `src/data/process.ts` | How we work |
| `src/data/engagement.ts` | Hiring models |
| `src/data/lifecycle.ts` | First commit → production steps |
| `src/data/whyUs.ts` | Why work with us + remote points |
| `src/data/contact.ts` | Form dropdowns |

---

## Content rules (do not break these)

Do **not** fabricate:

- Client names
- Company / employer names on team cards
- Reviews or testimonials
- Fake logos
- Revenue
- User counts
- Awards or certifications
- Country-by-country client lists

Credibility comes from design, real projects, real skills, and clear process.

---

## Git workflow for teammates

1. Pull the latest `main`.
2. Create a branch named after your change, for example `update/shubham-profile`.
3. Change only the files you need (`src/data/team.ts` + your photo).
4. Run `npm run dev` and check your card on `/#team`.
5. Open a pull request. Keep the description short: what you changed and why.

Do not commit `.env.local` or secrets.

---

## Design tokens (quick)

Background `#05060A`. Text `#F4F5F8`. Muted `#9AA1B5`. Accent `#4F8CFF`. Indigo `#6D7BFF`. Violet `#8B7DFF`. Cyan `#4FD1C5`.

Fonts: Geist (body), Syne (headings), Geist Mono (labels).

---

## Open follow-ups

- Connect the contact API to `teamkestryn@gmail.com`
- Replace site GitHub with a team organization when it exists
- Teammates: fill photos, bios, experience, and links
- Add more real projects as they are ready
- Add the official Kestryn logo to the navbar when the mark is finalized
