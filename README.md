# Boulevard 01 — Enterprise Real Estate Platform
**"Landmark of trust"**

An enterprise-grade, SEO-optimized property marketing, inventory tracking, and client acquisition platform engineered for **Boulevard 01** across Bahria Town Lahore and Islamabad.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript 5.4+**, and **Tailwind CSS v4**, specifically architected for instant, zero-config deployment on **Vercel**.

---

## 🏛️ Executive Platform Architecture

- **9+ Years Audited Track Record**: Over 500 delivered units, 15 completed high-rise developments, and an unbroken record of scheduled handovers.
- **Dual Investor Focus**:
  - **Domestic Investors**: High-yield commercial retail spaces, food courts, and corporate lofts in Bahria Town Lahore.
  - **Non-Resident Pakistani (NRP) Expatriates**: State Bank of Pakistan Roshan Digital Account (RDA) compliance, full capital repatriation, and consular title attestation.
- **Brand Palette & Design Language**:
  - **Midnight Navy (`#101B2E`)**: 50% Primary luxury foundation, frosted-glass headers, and executive cards.
  - **Warm Ivory (`#F5F2EB`)**: 30% Editorial paper tint, soft surfaces, and pill tags.
  - **Champagne Gold (`#C4A46A`)**: 15% Metallic accents, active tabs, and verified metric counters.
  - **Onyx Black (`#111214`)**: 5% Deep high-contrast grounding wells.
  - **WhatsApp Emerald (`#25D366` & `#6FF09B`)**: Primary conversion triggers for instant unit holds and advisory chats.
- **Headquarters Geolocation**: Plaza No. 39 AA Commercial, Sector D, Main Boulevard, Bahria Town Lahore (Sat–Thu: 10:00 AM – 8:00 PM).
- **Twin Cities Regional Desk**: Business District, Phase 8, Bahria Town Islamabad (Adjacent to Statue of Liberty monument).
- **Direct Telephony & WhatsApp Routing**: `+92 321 000 4000` (`923210004000`).

---

## 🚀 Key Platform Routes & Features

| Route | Template / Purpose | Key Features |
|---|---|---|
| `/` | **Homepage** | Hero positioning banner, animated performance metrics (9+ years, 500+ units, 15 towers), active project grid, 8-point verified amenity array, client testimonials, and consultation capture. |
| `/projects` | **Master Portfolio** | Full development catalog across Lahore and Islamabad with typology and regional filters. |
| `/projects/[slug]` | **Project Single Dossier** | Dynamic 3D walkthrough video, 4K render gallery, value drivers, tabbed payment schedules (residential vs commercial), and gated PDF download gates. |
| `/inventory` | **Live Inventory Sheet** | Real-time multi-city availability ledger (Bahria Town Lahore vs Islamabad), unit search, status filtering (Available, On Hold, Reserved), and 1-click WhatsApp reservation. |
| `/compare` | **Parametric Matrix** | Horizontal comparison matrix evaluating active towers by municipality, footfall, height, typology, price, and investor fit. |
| `/strategic-partners` | **Etihad Town Chapter** | Broker value propositions, guaranteed 14-day escrow commissions, partner FAQ accordion, and online agency onboarding form. |
| `/partners/etihad/[slug]` | **Co-Branded Microsites** | Dedicated landing pages for authorized brokerages (e.g. `apex-properties`, `al-haya-associates`, `qaswa-marketing`) with attributed WhatsApp lead routing. |
| `/blog` | **Knowledge Hub** | Educational repository covering RDA remittances, Pakistan Origin Cards (POC), commercial vs. residential yields, and legal handbooks. |
| `/blog/[slug]` | **Knowledge Hub Article** | Single article with semantic `Article` and `FAQPage` schema markup and contextual project recommendation cards. |
| `/team` | **Corporate Leadership** | Executive profiles for Lahore and Islamabad Sales Directorates (Naeem Ahsan, Sheikh Zahid, Ans Jamil, Waqas Ayub, Khawaja Nadeem Lone, Iqra Nadeem, Ali Hamza). |
| `/career` | **Careers & Talent Pipeline** | Job openings, candidate requirements, drag-and-drop resume upload (PDF/DOCX max 5MB), and direct HR WhatsApp pipeline. |
| `/about` | **About Boulevard 01** | Detailed engineering governance, self-funded capital reserves, and wholly owned civil machinery fleet. |
| `/contact` | **Contact & Geolocation** | Plaza 39 AA Commercial directions, Google Maps GPS launcher, operating schedule, and consultation intake. |

---

## 🏗️ Active High-Rise Developments

1. **The Grand Lifestyle — Grand 15** (`/projects/grand-15`): Flagship luxury residences facing the Eiffel Tower replica, dancing fountains, and central parklands in Bahria Downtown Lahore.
2. **The Oasis Grand 14** (`/projects/grand-14`): Main Boulevard Bahria Town Lahore serviced residences and turnkey high-yield retail with dual boulevard and park vistas.
3. **Grand X** (`/projects/grand-x`): G+12 structural height facing Bahria Theme Park & Carnival. Houses Bahria Town's largest dedicated food court and 4-star serviced hotel apartments.
4. **Grand 11** (`/projects/grand-11`): Midway Commercial's tallest architectural tower, adjacent to Talwar Chowk with executive corporate lofts and boulevard showrooms.
5. **The View — Grand 12** (`/projects/grand-12`): Phase 8 Business District, Bahria Town Islamabad (Beside Statue of Liberty monument). 5-in-1 hybrid mixed-use (corporate offices, retail, hotel suites, penthouses).

---

## 🔍 Technical SEO & Schema Markup

The platform includes production-grade real estate structured data:
- **`RealEstateAgent` Schema**: Embedded in `src/app/layout.tsx` for Boulevard 01 organization metadata, geolocation coordinates, and business hours.
- **`ApartmentComplex` Schema**: Embedded in each `/projects/[slug]` route detailing coordinates, amenities, and price tiers.
- **`Article` & `FAQPage` Schema**: Embedded in each `/blog/[slug]` route for Google Rich Results.
- **Native Next.js Sitemaps**: `src/app/sitemap.ts` automatically maps static routes, dynamic projects, partner pages, and blog posts.
- **Robots Specification**: `src/app/robots.ts` configured for global search crawling.

---

## ⚡ Deployment to Vercel (Step-by-Step)

The project is already optimized with `vercel.json` and zero-config settings.

### Option 1: Vercel CLI (Fastest)
```bash
npm i -g vercel
vercel --prod
```

### Option 2: Deploy via GitHub
1. This repository is hosted on GitHub:
   `https://github.com/zaimstechnologies-creator/boulevard-01.git`
2. Go to [vercel.com/new](https://vercel.com/new), import your `boulevard-01` repository, and click **Deploy**. Vercel will automatically detect Next.js and build with zero extra configuration.

---

## 🛠️ Local Development & Build Verification

```bash
# Run local dev server (default port 3000)
npm run dev

# Run production build (Turbopack)
npm run build

# Start production server
npm run start
```
