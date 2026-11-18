# LAF 3.0 — FINAL Brochure Edition

A standalone React 18 + Vite + Tailwind CSS website using React Router DOM v6.

## Based on final 12-page brochure
The original **LAF3.0 Brochure_ FINAL.pdf** (provided by the user) supersedes the earlier sponsorship-only brochure. This project deliberately **removes** the earlier sponsorship rates, stalls, payment, T&C and participation form because they do not come from the final brochure.

## Website design
The earlier minimalist white / cream editorial theme, larger fonts, premium hero composition, navbar and shared layout are retained. Some hero imagery is editorial concept imagery, while the festival logo, original team/committee rosters, last event, press/media, key brand board, venue floorplan and partner boards are taken from the final PDF.

### Correct brochure facts
- **Theme**: Expressway Pradesh, Vision 2047: Designing the Future
- **Dates**: 22, 23, 24 January 2027
- **Venue**: Bharat Ratna Shri Atal Bihari Vajpayee Ekana International Stadium, Sector 7, Gomti Nagar, Amar Shaheed Path, Lucknow 226010
- The 3-day agenda retains the brochure's printed times (including Day 2 film screening time). Event organisers may revise them.

## Included homepage sections
1. Hero (p.1)
2. About Uttar Pradesh (p.2)
3. About LAF + history (p.2)
4. Highlights and festival formats (p.3)
5. Focus sectors and key highlights (p.3)
6. Three-day agenda (p.4)
7. Pre-publicity and outreach (p.4)
8. Visitors' profile (p.4)
9. Bouquet of opportunities (p.4)
10. Event convenors, curators, directors, coordinators and joint coordinators (pp.5–6)
11. Corporate committee (p.6)
12. Supporting organisations (p.6)
13. About Lucknow Architects Association (p.7)
14. LAA mentor, patrons, office bearers, executive committee and intellect council (p.7)
15. LAA committees for LAF 3.0 (p.8)
16. Last event at a glance (p.9)
17. LAF in media (p.10)
18. Key brands present in past editions (p.11)
19. Layout and location (p.12)
20. Participating chapters and knowledge partners (p.12)
21. Contact (p.12)

Homepage `src/pages/Home.jsx` contains **only section component calls**. Each `src/components/home/*.jsx` is reusable and also can be visited through a React Router route configured in `src/App.jsx`. `src/layouts/SiteLayout.jsx` provides the shared Header and Footer.

## Run
```
npm install
npm run dev
```
Visit http://localhost:5173

Production build:
```
npm run build
```

## Notes
- The PDF's page 2 and 3 explanatory copy is primarily raster artwork; that content has been summarized for accessible web cards without introducing new event claims.
- The official team and committee photos/rosters, brand board, press clippings, venue plan and partner logos are exported from PDF images; click on the rosters or venue plan to view them at higher resolution.
- Website is a frontend-only festival information prototype. No backend/API, live ticketing or payment integration has been claimed.
- Official final brochure is copied to `public/assets/LAF3.0-Final-Brochure.pdf` for visitors to download.
- Some external hero image loads from Unsplash; fallback to brochure artwork is provided.
