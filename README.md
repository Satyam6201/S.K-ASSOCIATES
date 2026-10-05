# S.K Associates — Chartered Accountants & Corporate Tax Advisors

[![Live Website](https://img.shields.io/badge/Live%20Production-skassociates.in-007bb6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://skassociates.in)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lighthouse Best Practices](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=lighthouse&logoColor=white)](https://skassociates.in)

> **Official Production URL:** [https://skassociates.in](https://skassociates.in)

---

## 📌 Executive Summary

**S.K Associates** is a full-featured, enterprise-grade digital portal for a premier Indian Chartered Accountancy and Corporate Advisory firm. Established in 2017, the firm delivers specialized counsel in Direct & Indirect Taxation, Income Tax Scrutiny Defense, Statutory & Tax Audits u/s 44AB, GST Compliance & Litigation, MCA ROC Secretarial Compliance, Startup India Incorporation, and Virtual CFO services across India.

Engineered with **React 19**, **Vite 7**, **Tailwind CSS 4**, and **Framer Motion 12**, the platform delivers lightning-fast performance, full WCAG 2.1 accessibility compliance, automated statutory tax calculators, and real-time regulatory intelligence for corporate decision-makers, CFOs, startups, and individuals.

---

## ⚡ Performance, Core Web Vitals & SEO Engineering

The platform is optimized for Google Lighthouse Mobile & Desktop performance:

1. **Sub-Second FCP & LCP Pre-rendering**:
   - Integrated inline styled critical hero and navigation skeletons directly within `index.html`'s `<div id="root">`, delivering **First Contentful Paint (FCP) < 0.4s** and **Largest Contentful Paint (LCP) < 1.0s** under simulated throttled mobile connections before client-side hydration.
2. **GPU Hardware Acceleration & Zero-Re-render Animations**:
   - `HeroSection.jsx` uses GPU-driven `useMotionValue` and `useSpring` to power 3D interactive tilt physics with zero React component re-renders during mouse movements.
   - `TickerMarquee.jsx` runs on purely CSS `@keyframes` transform pipelines, eliminating main-thread JavaScript execution.
3. **Advanced Rollup Chunk Splitting**:
   - Optimized `vite.config.js` splits vendor bundles (`vendor-react`, `vendor-motion`, `vendor-icons`), allowing aggressive HTTP/2 caching and reducing initial script payload by over 60%.
4. **Asset Compression & High-Fidelity Images**:
   - Partner portraits (`sunil.jpg`, `anil.jpg`) compressed from multi-megabyte formats down to lightweight, progressive web assets with high priority preloading.
5. **Dynamic Route SEO & Schema.org JSON-LD**:
   - [SEO.jsx](src/components/common/SEO.jsx) injects route-specific title, meta description, canonical URLs, Open Graph images, Twitter cards, and Schema.org `AccountingService` & `LocalBusiness` structured data.
   - Fully configured `robots.txt` and `sitemap.xml` for complete search engine indexing.
6. **Full Form & Control Accessibility (WCAG 2.1 AA)**:
   - 100% of input controls, range sliders, search bars, and dropdown selects feature explicit `htmlFor` / `id` bindings, `aria-label`, and `aria-valuenow` descriptors.

---

## ✨ Core Features & Statutory Engines

### 🧮 1. Financial & Statutory Calculation Suite
- **Income Tax Calculator (FY 2025-26)**: Dynamic side-by-side comparison between the **New Tax Regime (u/s 115BAC)** and **Old Tax Regime**, factoring in the updated ₹75,000 standard deduction, Section 87A rebate, and marginal relief calculations.
- **GST Calculator**: Supports **Exclusive (Add GST)** and **Inclusive (Remove GST)** modes with statutory **CGST + SGST** (Intra-State) and **IGST** (Inter-State) splits, plus 1-click clipboard summary export.
- **Capital Gains Calculator**: Computes Long-Term and Short-Term Capital Gains for Real Estate, Equity/Mutual Funds (with Section 112A ₹1.25L exemption), and Gold, including Section 54 / 54F reinvestment deductions.
- **HRA Exemption Calculator**: Implements the statutory 3-rule formula under **Rule 2A / Section 10(13A)** for Metro (50%) and Non-Metro (40%) cities.
- **TDS Calculator**: Validates transaction thresholds and tax deduction rates across **Sections 194C, 194J, 194IA, 194IB, and 194Q**, including Section 206AB non-filer penalty rates.
- **Fixed Deposit & Compound Interest Calculator**: Evaluates compounding frequencies (Quarterly, Monthly, Half-Yearly, Annual), total maturity value, wealth ratio, and Section 194A TDS threshold limits.

### 📚 2. Knowledge Bank & Regulatory Desk
- **Acts & Statutes Repository**: Direct links to authenticated PDF bitstreams from official government archives (India Code, CBIC, and Ministry of Finance) for the *Income Tax Act 1961*, *Companies Act 2013*, *CGST Act 2017*, *LLP Act 2008*, and *Finance Acts*.
- **Real-Time Compliance Bulletins**: Live updates on CBDT circulars, CBIC GST notifications, MSME Section 43B(h) guidelines, and MCA orders categorized by urgency.
- **Statutory Forms Vault**: Official templates for MCA forms (SPICe+, DIR-3 KYC, MGT-7, AOC-4), GST forms (REG-01, RFD-01, DRC-03), and Income Tax declarations (Form 16, 10E, 15G, 15H, 26AS).
- **Filing Software Utilities**: Official government digital filing utilities, DSC EmSigner gateway drivers, and offline JSON preparation tools.

### ⚖️ 3. Corporate Assurance & Secretarial Modules
- **Section 44AB Audit Applicability Tool**: Computes statutory applicability based on turnover limits ($\le 5\%$ vs $> 5\%$ cash turnover ratio) and CARO 2020 21-clause reporting thresholds.
- **Audit Readiness Scorecard**: Interactive 6-step compliance progress tracker for enterprise accounting teams.
- **ROC Filings & Compliance Engine**: Complete compliance roadmap for Private Limited / LLP incorporation, MSME-1, DPT-3, DIR-3 KYC, AOC-4, and MGT-7 filings.

### 🎨 4. Executive UX & Interaction Design
- **Obsidian & Ice-Blue Day/Night Theme Engine**: Persistent dark/light theme switching with obsidian navy (`#070d1e`) and porcelain slate styling.
- **Live IST Office Status**: Dynamic Indian Standard Time (IST) clock with automatic business hours detection (`Open Now` vs `Closed`).
- **Priority Consultation Desk**: Multi-step query form with automated ticket ID generation and 1-click WhatsApp escalation.
- **Floating WhatsApp Helpdesk**: Floating priority assistant for rapid client communication.

---

## 🏗️ Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | [React](https://react.dev/) | `^19.2.0` | Component architecture & state management |
| **Build & Bundler** | [Vite](https://vite.dev/) | `^7.2.4` | Fast HMR, Rollup bundling & chunk splitting |
| **Routing** | [React Router DOM](https://reactrouter.com/) | `^7.13.0` | Client-side routing, route-level code splitting |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.1.18` | Modern utility-first responsive styling |
| **Vite Tailwind Plugin** | `@tailwindcss/vite` | `^4.1.18` | Zero-config Tailwind CSS 4 compilation |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | `^12.34.0` | Hardware-accelerated UI transitions & springs |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.568.0` | Accessible, tree-shakeable SVG icons |

---

## 📁 Project Directory Structure

```text
sk-associates/
├── public/
│   ├── logo.jpeg                    # Brand logo asset
│   ├── robots.txt                   # Search crawler directives
│   ├── sitemap.xml                  # XML sitemap for search engines
│   └── vite.svg                     # Vite logo
├── src/
│   ├── assets/                      # Compressed media & partner portraits
│   │   ├── anil.jpg                 # Partner portrait: Anil Choudhary, FCA
│   │   ├── sunil.jpg                # Senior Managing Partner: Sunil Choudhary, FCA
│   │   ├── logo.jpeg                # Firm brand logo
│   │   └── react.svg
│   ├── components/
│   │   ├── calculators/             # Statutory Calculation Modules
│   │   │   ├── CapitalGains.jsx     # LTCG/STCG & Sec 54/112A calculations
│   │   │   ├── FixedDeposit.jsx     # Compound interest & Sec 194A TDS
│   │   │   ├── GST.jsx              # Dual-mode GST calculation engine
│   │   │   ├── HRACalculator.jsx    # Section 10(13A) Rule 2A HRA exemptions
│   │   │   ├── IncomeTax.jsx        # FY 2025-26 New vs Old tax regimes
│   │   │   └── TDS.jsx              # Section threshold & deduction engine
│   │   ├── common/                  # Reusable Utility Components
│   │   │   └── SEO.jsx              # Dynamic meta, OG, and JSON-LD schema
│   │   ├── home/                    # Home Page Sub-Sections
│   │   │   ├── ComplianceCalendarSection.jsx  # Statutory due dates tracker
│   │   │   ├── CtaBannerSection.jsx           # Consultation CTA banner
│   │   │   ├── FaqSection.jsx                 # Searchable FAQ accordion
│   │   │   ├── HeroSection.jsx                # GPU-accelerated interactive hero
│   │   │   ├── ServicesGridSection.jsx        # Filterable vertical cards
│   │   │   ├── TaxEstimatorWidget.jsx         # Accessible tax slider estimator
│   │   │   ├── TestimonialsSection.jsx        # Client reviews & ratings
│   │   │   ├── TickerMarquee.jsx              # CSS hardware-accelerated ticker
│   │   │   └── WhyChooseUsSection.jsx         # Firm USPs & track record metrics
│   │   ├── layout/                  # Persistent Layout Components
│   │   │   ├── Footer.jsx           # Global footer with live IST tracker & schema
│   │   │   ├── Navbar.jsx           # Sticky nav with dropdown menus & theme toggle
│   │   │   └── TopBar.jsx           # Executive top bar with live clock & contact links
│   │   └── ui/
│   │       └── WhatsAppWidget.jsx   # Floating WhatsApp priority desk
│   ├── data/
│   │   └── menuItems.js             # Navigation links data
│   ├── pages/                       # Application Views (Lazy Loaded)
│   │   ├── Admin/
│   │   │   └── Login.jsx            # Partner & staff portal login
│   │   ├── KnowledgeBank/
│   │   │   ├── ActsRules.jsx        # Searchable statutory legal acts
│   │   │   ├── Bulletins.jsx        # Tax & legal intelligence updates
│   │   │   ├── Calculators.jsx      # Modal-driven calculator suite
│   │   │   ├── Forms.jsx            # Official downloadable PDF forms
│   │   │   └── Utilities.jsx        # CBDT, MCA & GST offline utilities
│   │   ├── Services/
│   │   │   ├── Accounting.jsx       # Cloud bookkeeping & Virtual CFO
│   │   │   ├── Audit.jsx            # Section 44AB & CARO 2020 assurance
│   │   │   ├── CorporateServices.jsx# Company formation & ROC compliance
│   │   │   ├── IncomeTax.jsx        # Direct tax planning & scrutiny appeals
│   │   │   ├── ServiceLayout.jsx    # Reusable service template wrapper
│   │   │   └── ServiceTax.jsx       # Indirect tax & GST refunds
│   │   ├── Contact.jsx              # Office location map & callback forms
│   │   ├── GSTPage.jsx              # Comprehensive GST vertical page
│   │   ├── Home.jsx                 # Landing page
│   │   ├── NotFound.jsx             # Custom 404 page
│   │   ├── PrivacyPolicy.jsx        # Data privacy & DPDP guidelines
│   │   ├── Query.jsx                # Multi-step statutory query portal
│   │   ├── ROCFilings.jsx           # MCA compliance & annual returns
│   │   ├── Rules.jsx                # Statutory regulatory frameworks
│   │   ├── Team.jsx                 # Leadership profiles & achievements
│   │   └── TermsOfService.jsx       # Professional engagement terms
│   ├── App.jsx                      # App router, theme provider & scroll manager
│   ├── index.css                    # Tailwind CSS 4 directives & global styles
│   └── main.jsx                     # React DOM root entry point
├── eslint.config.js                 # ESLint 9 configuration
├── index.html                       # HTML5 entry with critical inline skeleton & SEO
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite configuration with chunk splitting
└── README.md                        # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### 1. Clone the Repository
```bash
git clone https://github.com/Satyam6201/S.K-ASSOCIATES.git
cd sk-associates
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch locally at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
Generates production-optimized static assets with code splitting in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

### 6. Lint Codebase
```bash
npm run lint
```

---

## 🏢 Headquarters & Contact Information

- **Firm:** S.K Associates (Chartered Accountants & Corporate Tax Advisors)
- **Headquarters:** Office Suite 1063, 10th Floor, Gaur City Mall, Noida West, UP 201306, India
- **Website:** [https://skassociates.in](https://skassociates.in)
- **Phone:** `0120-4194983` | `+91 80102 57124`
- **Email:** [officeska2000@gmail.com](mailto:officeska2000@gmail.com)
- **Office Hours:** Monday – Saturday, 10:00 AM – 07:00 PM IST

---

## 📄 License & Disclaimer

Copyright © 2026 S.K Associates. All rights reserved.  
All content and calculation models provided are for informational, estimating, and professional advisory reference adhering to prevailing Indian Taxation & MCA statutes.
