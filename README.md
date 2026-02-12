Project Title: Dhruvi Malusare — UX Portfolio (AGENTS)

Live Link: http://127.0.0.1:3000/site/public/index.html?serverWindowId=f79303a6-37f3-40b6-9ea4-c47f47c9824e

Description
This repository contains the source and static scaffold for the AGENTS portfolio site — a research-first UX portfolio showcasing long-form and short-form case studies, accessibility notes, and downloadable resume assets.

The Orchestration Log
During scaffolding an automated edit attempt initially failed due to a malformed tool call parameter (the apply_patch call was missing a required field). I corrected the input and re-ran the patch command to successfully create `AGENTS.md` and the site scaffold. All important files were validated after the retry.

Status: site structure and initial static pages are complete. Replace the Live Link above after deploying to Cloudflare Pages, Netlify, Vercel, or GitHub Pages.

Structure overview:
- public/index.html — skeleton page and layout placeholders
- public/styles.css — implemented styling (bold, clean, pop of color)
- public/js/main.js — light interaction (smooth scroll, reveal)
- public/case-studies/*.html — static case-study pages (placeholders)
- src/styles/ — editable source styles
- content/case-studies/*.md — source content for case studies
- assets/images/ — image assets (placeholders)
- package.json — minimal metadata and placeholder scripts
- DEPLOY.md — deploy notes and recommendations

Next steps: replace Figma share links in `content/case-studies/*.md`, add your resume PDF to `assets/`, and deploy the `site/public/` folder to your chosen host. If you want, I can perform the deployment for you.