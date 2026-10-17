# Cureloom landing page

Marketing site for **Cureloom**, the prevention-first chronic care management platform. One page, built with Vite, React 19 and TypeScript, using [React Bits](https://reactbits.dev) components for the motion and interaction layer.

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

Fonts (Fraunces, Inter, JetBrains Mono) load from Google Fonts via `index.html`.

## How it is put together

```
src/
  main.tsx                 entry
  App.tsx                  page order, wrapped in ClickSpark
  site.ts                  copy, nav items, stats, steps, features, principles
  styles/global.css        design tokens and all page styles
  components/
    ProductGlimpse.tsx     the "Today queue" mock in the hero (fictional data)
    SectionHeading.tsx     eyebrow + title + lede with a scroll reveal
    Logo.tsx, icons.tsx    inline SVGs, no icon dependency
    reactbits/             vendored React Bits components (see below)
  sections/                one file per section, top to bottom
```

Page order: `Nav` → `Hero` → `TrustStrip` → `Stats` → `Manifesto` → `HowItWorks` → `Marquee` → `Platform` → `Teams` → `Principles` → `CTA` → `Footer`.

### React Bits components used

React Bits is distributed as source you copy into your project rather than an npm package, so the components live under `src/components/reactbits/` (TypeScript + CSS variants) and can be edited freely.

| Component | Where it is used |
|---|---|
| `Backgrounds/Aurora` | Hero and CTA backdrops (WebGL) |
| `TextAnimations/SplitText` | Hero headline, "Prevention first." |
| `TextAnimations/BlurText` | Hero subheading |
| `TextAnimations/RotatingText` | Rotating list of conditions in the hero |
| `TextAnimations/ShinyText` | Hero eyebrow badge |
| `TextAnimations/CountUp` | Stats band |
| `TextAnimations/ScrollReveal` | Manifesto paragraph |
| `TextAnimations/ScrollVelocity` | Typographic marquee |
| `TextAnimations/GradientText` | CTA headline accent |
| `Animations/AnimatedContent` | Scroll reveals and staggered grids |
| `Animations/StarBorder` | Primary buttons |
| `Animations/Magnet` | Magnetic pull on primary buttons |
| `Animations/ClickSpark` | Click sparks across the page |
| `Animations/GlareHover` | Team cards |
| `Animations/LogoLoop` | "Built for" strip |
| `Components/SpotlightCard` | Platform feature grid |
| `Components/ScrollStack` | "How a month runs" stacked cards |
| `Components/PillNav` | Navigation |

Dependencies these components bring in: `gsap` and `@gsap/react` (SplitText, ScrollTrigger based reveals) and `motion` (BlurText, RotatingText, CountUp, ScrollVelocity). Everything else is plain React and CSS.

React Bits is licensed MIT + Commons Clause; the vendored files keep their original structure so they can be refreshed from upstream.

## Content notes

- Product claims follow the Cureloom prototype: the EHR export column mapper and opportunity matrix, AI check-in script, red-flag rules, the 30-minute urgent acknowledgement window, the four nurse queues, physician care plan approval and escalations, the 20-minute CCM threshold, month-end notes, attestation, the CMS-1500 export with pre-flight checks, and billing codes 99490, 99439, 99487, 99489, G0556, G0557 and G0558.
- Population statistics in the stats band cite the CDC. There are no customer testimonials or usage metrics on the page; add them only once they are real.
- Patient names and readings in the hero mock and step illustrations are fictional.
