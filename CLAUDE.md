# Granville De Villiers Website

## Project Overview
Personal/professional website for Granville De Villiers, CEO and Founder of Microstone Mining (Pty) Ltd - a Zimbabwean mining company specializing in gold, lithium, tantalite, and rare earth minerals.

## Hosting & Deployment
- **Repository**: https://github.com/osandmac/granville-de-villiers-portfolio
- **Hosting**: Vercel (static deployment from main branch)
- **Domain**: granvilledevilliers.com

## Tech Stack
- **Static HTML** - Single-page website with inline CSS
- **Fonts**: Google Fonts (Cormorant Garamond, Outfit)
- **No build process** - Direct HTML editing, Vercel serves as-is

## Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Gold | `#C9A962` | Primary accent, links, highlights |
| Gold Light | `#E5D4A1` | Secondary gold |
| Charcoal | `#1A1A1A` | Dark backgrounds, headings |
| Charcoal Light | `#2D2D2D` | Section backgrounds |
| Cream | `#FAF8F3` | Light backgrounds |
| Cream Dark | `#F0EDE5` | Alternate light sections |
| Text Muted | `#6B6B6B` | Secondary text |

### Typography
- **Headlines**: Cormorant Garamond (serif, elegant)
- **Body**: Outfit (sans-serif, modern)

### Design Philosophy
- Refined editorial luxury aesthetic
- Earthy, mineral-inspired gold tones (ties to gold mining business)
- Alternating dark/light sections for visual rhythm

## Deployed File Structure (in git)
```
/
├── index.html                         # Main website (all HTML + CSS inline)
├── GDV_2.png                          # Hero image
├── Granville_De_Villiers_Favicon.png  # Favicon
├── CLAUDE.md                          # This file
└── .gitignore                         # Excludes docs and unused assets
```

### Local-only files (gitignored)
```
SEO-GUIDE.md, *.pages, extra PNGs, WhatsApp images
```

## Page Sections
1. **Hero** - Name, title, key stats (300+ employees, 6 countries, 4 licenses)
2. **About** - Microstone Mining overview + credentials sidebar
3. **Journey** - Timeline from Hanover Park to present
4. **Business** - Global presence across 6 African countries
5. **Foundation** - Granville De Villiers Foundation philanthropy
6. **Contact** - Email and LinkedIn links
7. **Footer** - Copyright

## Contact Links
- **Microstone Mining button** → `mailto:admin@granvilledevilliers.com`
- **Foundation button** → `mailto:admin@granvilledevilliers.com`
- **LinkedIn button** → https://www.linkedin.com/in/granville-de-villiers-39320942/

## SEO
- Schema.org JSON-LD structured data included for Person entity
- Target keywords: "Granville De Villiers", "Microstone Mining", "Zimbabwe mining", "gold mining Zimbabwe", "lithium mining Africa"
- Meta tags optimized for search

## Development Notes
- All styles are inline in `<style>` tag (no external CSS)
- Responsive breakpoints at 1024px and 600px
- Hero image visible on mobile (50vh height)
- CSS animations for hero section fade-in effects
- No JavaScript beyond schema markup
- Only site-essential files are tracked in git; docs and unused assets are gitignored

## Brand Voice
- Authoritative but warm
- "Against all odds" narrative (Hanover Park origins)
- Balance business achievement with community roots
- Professional without being corporate-cold
