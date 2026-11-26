# Project memory

## Product intent & audience

- Website for CliffeTech Accounting Solutions — an accounting/financial services company.
- Audience: prospective clients seeking accounting services (businesses and/or individuals).
- Site is informational/marketing-focused with contact and FAQ support.

## Brand personality & voice

- Inferred: professional, trustworthy, finance-oriented tone appropriate for accounting services.
- Design should feel premium and production-worthy (per global instructions, not cookie-cutter).

## Visual design & UX direction

- Multi-page site with pages: home, services, industries, about, contact, FAQ.
- Homepage flow: hero → services → industries → FAQ (testimonials section removed).
- Tech stack inferred from project setup: Next.js (App Router), JSX, Tailwind CSS, shadcn/ui, React hooks, Lucide React icons.
- Client components using `useState`/`useEffect` must include `"use client"` directive.
- Must avoid hydration attribute warnings (e.g., `class`, `style` mismatches).

## Decisions, constraints & rationale

- Testimonials section removed from homepage because the quotes/ratings were manufactured and not from actual clients — fabricated content is unacceptable.
- Unused imports (`Quote`, `Star` icons) cleaned up after removal.
- All pages compile and build successfully; project is production-ready.
- No extra UI/icon packages beyond the default stack unless explicitly requested.
- Lucide React used for icons/logos throughout.
- Preview updates require successful build; manual refresh may be needed if preview appears stale.

## Open questions & assumptions

- Real client testimonials may be added later if genuine feedback becomes available.
- Exact brand colors, typography, and visual identity not yet specified — assume clean, professional financial-services aesthetic.
- Whether content (copy, service descriptions, industry list) is finalized or placeholder is unknown.
- Responsive breakpoints and accessibility requirements not yet detailed.
- Target deployment platform not confirmed.