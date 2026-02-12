# AGENTS — Portfolio Web Strategy

## The Mandate
Get hired as a research-first UX/Product Designer (internship → entry-level) for NJ/NY employers by showcasing rigorous qualitative research, accessibility-driven design, and measurable impact.

## The Tech Stack (Chosen tools & why)
- Figma / FigJam — primary design, prototyping, and collaborative research artifacts (you already use these).
- GitHub (repo) + Cloudflare Pages (hosting) — fast, free static deploys with global CDN and easy previews; minimal setup for a quick launch. (If previews or serverless needed later, move to Vercel/Netlify.)
- Simple static template (HTML/CSS/JS) or lightweight SSG — minimal dependencies, fast load times, full accessibility control.
- Form endpoint: Formspree or Netlify Forms — lightweight lead capture without backend maintenance.
- Analytics: Plausible (privacy-friendly) or Google Analytics — track visits and referral sources for outreach.
- Domain registrar: Namecheap / Google Domains — buy a personal domain when ready.

## The Sitemap (priority)
- Hero (above the fold): one-line value prop, short tagline, `Download Resume` button, primary `Contact` CTA.
- Flagship Case Study (Wayfinding): long-form case study with methods, artifacts, Figma embed, metrics, downloadable one-pager.
- Two Short Case Studies: Research Gate and Thrive — 1–2 page summaries with prototypes and key takeaways.
- About: 1-paragraph bio, headshot, LinkedIn, availability.
- Resume: downloadable PDF(s) and link to detailed resume page.
- Contact / Lead-Gen Form: simple form to capture name, role interest (UX/Product), and a brief message; mailto fallback.
- Accessibility Statement & Project Index: short statement + links to research artifacts.
- Footer: email, LinkedIn, GitHub (optional).

## Non-Negotiables
- Mobile-responsive: responsive layout and touch-friendly interactions across breakpoints.
- Accessibility: semantic HTML, keyboard navigation, ARIA where needed, and color-contrast checks (WCAG AA as baseline).
- SEO: target NJ/NY hiring keywords in titles/meta and copy, e.g.:
  - "UX Designer New Jersey", "UX Designer NJ",
  - "Product Designer NYC", "UX researcher NJIT",
  - city + role phrases and college affiliation where relevant.
- Performance: fast initial paint (static hosting + CDN, optimized images).
- CTA (specific): primary CTA should be "Request a 20‑minute portfolio review" — this is the action recruiters/hiring managers can take to trigger contact. Place it on the hero, case-study headers, and contact page.

## Quick Launch Priorities
1. Publish Wayfinding long-form case study (metric-backed) and embed Figma link.
2. Prepare resume PDF and hero CTA + contact form.
3. Deploy minimal static site to Cloudflare Pages and connect domain when ready.

---
If you want, I can scaffold the repo and start the site build now (content-first) or produce final case-study copy for you to review.
