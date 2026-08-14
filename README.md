# Kestryn — Remote Engineering Team Portfolio

Premium Next.js portfolio for a five-person remote software team.

**Read [`context.md`](./context.md) first.** That file is the full project context for every developer (and for AI tools helping you edit this repo).

## Stack

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS

## Start locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

| File | What to edit |
| --- | --- |
| `src/data/site.ts` | Studio name, email, LinkedIn, GitHub, WhatsApp, SEO |
| `src/data/team.ts` | Each member edits their own card: photo, bio, experience, skills, links |
| `src/data/projects.ts` | Case studies (empty until we add work we can publish) |
| `src/data/services.ts` | Service copy and tags |
| `src/data/technologies.ts` | Stack |
| `src/data/faqs.ts` | FAQ answers |

### Team photos

1. Add a photo to `public/team/` (example: `public/team/shubham-hanmane.jpg`).
2. Set `photo: "/team/shubham-hanmane.jpg"` on that member in `src/data/team.ts`.
3. Leave `photo: ""` to keep the gradient placeholder.

Do not put company or employer names on team cards.

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your production domain.

## Contact form

`POST /api/contact` validates inquiries. Connect an email provider (for example Resend) inside `src/app/api/contact/route.ts` before going live.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
