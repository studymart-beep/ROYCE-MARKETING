# Royce Marketing — Lead Generation Funnel

Upgraded agency site focused on Meta Ads (Facebook & Instagram) and TikTok Ads.

## Quick start

```bash
npm install
npm run dev
```

Preview runs on port 8080. Database uses embedded PGLite when `DATABASE_URL` is unset.

## Routes

| Path | Description |
|------|-------------|
| `/` | Homepage conversion funnel |
| `/free-audit` | Free ad audit + qualification form |
| `/book-call` | Strategy call (WhatsApp + form path) |
| `/thank-you` | Form confirmation |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/login` | Admin sign-in |
| `/admin` | Protected lead management |

## Environment

- **Preview:** no env required (PGLite + auth via Grok preview client when enabled)
- **Deploy:** platform injects `DATABASE_URL` (Neon). Do not commit `.env` files.

Auth is enabled (Better Auth + Grok broker). Sign in at `/login` to use `/admin`.

## Lead form fields

Full name, email, business name, website/social, service, marketing goal, budget range, optional message, privacy consent.

## Admin features

View/filter/search leads, update status (new → contacted → qualified → proposal sent → won/lost), internal notes, CSV export.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build + migrations
- `npm run typecheck` — TypeScript check
- `npm run lint` — ESLint
