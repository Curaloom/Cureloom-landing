# Cureloom landing page

Marketing site for **Cureloom**, the prevention-first chronic care management platform. One page, built with Vite, React 19 and TypeScript. A small set of [React Bits](https://reactbits.dev) components provides the motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands:

- `npm run build` runs the type check and produces `dist/`.
- `npm run preview` serves the production build locally.
- `npm run typecheck` runs `tsc --noEmit` on its own.

Node 20 or newer.

## Before going live

All copy and configuration lives in `src/site.ts`. Two values there are placeholders:

- `contactEmail` is set to `hello@cureloom.com`. Replace it with the real inbox.
- `bookingHref` points at the contact section (`#contact`). Swap it for a scheduling link when you have one.

Fonts (Newsreader, Inter) load from Google Fonts via `index.html`.

### APCM revenue estimator (`/estimate.html`)

A lead-capture page: the visitor enters an NPI, sees three APCM revenue scenarios, and leaves their details for the full report. Its settings live in `ESTIMATE` in `src/site.ts`.

- **NPI lookup.** The CMS NPPES registry sends no CORS headers, so the page calls `/api/npi`. Vite proxies that in `dev` and `preview` (`vite.config.ts`). On Vercel, `vercel.json` does the same rewrite (`/api/npi` to `https://npiregistry.cms.hhs.gov/api/`). Another host needs an equivalent proxy rule.
- **Leads.** Set `leadEndpoint` to a URL that accepts a JSON POST (a form service, CRM webhook or your own API). While it is empty, the form opens a prefilled email to `contactEmail`.
- **Rates and assumptions.** The tier rates, panel mix and enrolment scenarios are approximate. Check them against the current Physician Fee Schedule before going live.

## Design principles

The page follows the approach of the best health-tech marketing sites (cadence.care is the reference): warm and light rather than dark and glowing, one brand colour, an editorial serif at large sizes, copy that leads with the patient and the outcome, product shown honestly in calm frames, and motion kept to gentle reveals.

- **Palette.** Cream canvas (`--cream`), one deep green (`--green`) for emphasis and primary actions, green-black text. Clay and amber appear only as status colours inside product frames.
- **Type.** Newsreader for display and numerals, Inter for everything else. Sentence case throughout. Headlines are short declarative statements.
- **Layout.** Left-aligned, generous section spacing, hairline rules instead of boxes wherever possible, rounded product frames.
- **Motion.** Fade-and-rise reveals on scroll, a word-by-word rise on the headline, numbers that count once. Nothing loops.
- **Honesty.** Population statistics cite the CDC. There are no testimonials, logos or usage metrics; add them only once they are real. Patient names and readings in product frames are fictional, from the simulated practice in the Cureloom prototype.

## How it is put together

```
src/
  main.tsx                 entry
  App.tsx                  page order
  site.ts                  copy, nav items, facts, stats, steps, features, principles
  styles/global.css        design tokens and all page styles
  components/
    AppWindow.tsx          the "Today queue" product frame in the hero
    SectionHeading.tsx     eyebrow + title + lede with a scroll reveal
    Logo.tsx, icons.tsx    inline SVGs, no icon dependency
    reactbits/             vendored React Bits components
  sections/                one file per section, top to bottom
```

Page order: `Nav` → `Hero` (with facts strip) → `Why` → `HowItWorks` → `Platform` → `Teams` → `Principles` → `CTA` → `Footer`.

### React Bits components used

React Bits is distributed as source you copy into your project rather than an npm package, so the components live under `src/components/reactbits/` and can be edited freely.

| Component | Where it is used |
|---|---|
| `Animations/AnimatedContent` | Every scroll reveal and staggered grid |
| `TextAnimations/SplitText` | Hero headline, "Prevention first." |
| `TextAnimations/CountUp` | Population statistics |

They bring in `gsap` and `@gsap/react` (SplitText and ScrollTrigger based reveals) and `motion` (CountUp). Everything else is plain React and CSS. React Bits is licensed MIT + Commons Clause.
