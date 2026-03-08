# The Tyken Group Website

A modern, responsive website for The Tyken Group — a full-service staffing and recruiting consultancy serving the Puget Sound region since 2006.

**Live Site:** [https://iurman.github.io/tyken-updated/](https://iurman.github.io/tyken-updated/)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (static export)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── leadership/         # Leadership page
│   ├── opportunities/      # Opportunities page
│   └── contact/            # Contact page
├── components/
│   ├── Header.tsx          # Site header with navigation
│   ├── Footer.tsx          # Site footer
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx      # Button (primary/secondary/outline)
│       ├── Card.tsx        # Card and IconCard components
│       ├── PageHero.tsx    # Hero section with background
│       └── Section.tsx     # Section wrapper and header
├── lib/
│   └── constants.ts        # Site config and shared constants
└── app/globals.css         # Global styles and CSS variables
```

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Dark | `#322c1d` | Background, dark elements |
| Medium | `#7b5d1a` | Hover states, borders |
| Golden | `#b8860b` | Primary buttons, accents |
| Light Golden | `#a5965d` | Links, secondary accents |
| Tan | `#c3b98b` | Body text |
| Cream | `#eae4ce` | Headings, button text |

### Components

- **Button:** Three variants — `primary` (gold), `secondary` (white), `outline` (bordered)
- **Card:** Glass-effect cards with subtle borders
- **PageHero:** Full-width hero with background image
- **Section:** Consistent padding with optional backgrounds (`default`, `muted`, `accent`)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Deployment

The site deploys automatically to GitHub Pages when pushing to `main`. The workflow:

1. Builds the Next.js app with static export
2. Uploads the `out/` directory as an artifact
3. Deploys to GitHub Pages

To deploy manually:

```bash
npm run build
# The static site is in the `out/` directory
```

## Configuration

Site-wide configuration is centralized in `src/lib/constants.ts`:

```typescript
export const siteConfig = {
  name: "The Tyken Group",
  tagline: "A Full-Service Consultancy",
  contact: {
    email: "seth@tykengroup.com",
    phone: "+1 206.851.3894",
    location: "Woodinville, WA",
  },
  // ...
};
```

## License

All rights reserved. This website was built for The Tyken Group.
