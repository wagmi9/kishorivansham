# Kishorivansham — E-commerce Storefront + Admin Dashboard

A full-stack Next.js (App Router) e-commerce app for the Kishorivansham brand.

## Tech stack

- Next.js 14 (App Router), Tailwind CSS (royal / gold / cream palette, Playfair Display + Inter)
- lucide-react icons
- React Context + localStorage for cart persistence
- Upstash Redis (via Vercel Storage) for persistent order storage
- Razorpay for real online payments (Cards/UPI/wallets), plus Cash on Delivery
- HTTP Basic Auth on `/admin` via `middleware.js`

## Getting started locally

```bash
npm install
npm run dev
```

## Environment variables required (set these in Vercel → Settings → Environment Variables)

| Variable | Where it comes from |
|---|---|
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | Auto-added when you connect an Upstash Redis database via Vercel's Storage tab |
| `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` | Razorpay Dashboard → Settings → API Keys |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Same value as `RAZORPAY_KEY_ID` (this one is exposed to the browser, the Key Secret never is) |
| `ADMIN_USER`, `ADMIN_PASS` | Any username/password you choose, to protect `/admin` |

After adding/changing env vars, redeploy from the Deployments tab for them to take effect.

## Pages

- `/` — storefront (hero, catalog, about, cart, checkout)
- `/darshan` — immersive fade-in-on-scroll page on the names of Krishna and Kishori, the Maha Mantra, and devotional seva products
- `/admin` — order tracking dashboard (password protected)
- `/privacy-policy`, `/terms`, `/refund-policy`, `/shipping-policy`, `/contact` — required for Razorpay account activation

## Still to do

- Replace every `[FILL: ...]` placeholder in the 5 policy pages with real details (support email, business address, refund/shipping timelines)
- Add a real logo (swap the text wordmark in `components/Header.js` and `components/Footer.js` for an `<img>` once the logo file is ready)
- Complete Razorpay KYC (Individual/Proprietorship, PAN + address proof + bank account) on razorpay.com to move from test mode to live payments
- Add real product photography in place of the icon placeholders (`components/ProductPlaceholderImage.js`)
