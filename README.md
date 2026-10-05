# S.K Associates — Tax Consultants & Corporate Advisors

[![Live Website](https://img.shields.io/badge/Live%20Website-skassociates.in-007bb6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://skassociates.in)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **Live Production URL:** [https://skassociates.in](https://skassociates.in)

---

## 📌 Overview

**S.K Associates** is a full-featured, modern web platform for a premier Indian Chartered Accountancy and Corporate Advisory firm. Founded in 2017, the firm specializes in Direct & Indirect Taxation, Income Tax Scrutiny Defense, Statutory Audits, GST Compliance, MCA/ROC Corporate Legal Secretarial services, and Virtual CFO solutions across India.

Built with **React 19**, **Vite 7**, **Tailwind CSS 4**, and **Framer Motion 12**, the web application provides clients, CFOs, startups, and individuals with interactive financial calculators, statutory compliance deadline trackers, official legal repositories, and priority consultation inquiry dispatchers.

---

## ✨ Key Features & Capabilities

### 🧮 1. Financial & Statutory Calculation Suite
- **Income Tax Calculator (FY 2025-26)**: Compares **New Tax Regime (u/s 115BAC)** vs. **Old Tax Regime** with ₹75,000 standard deduction, Section 87A rebate, and marginal relief calculations.
- **GST Calculator**: Supports **Exclusive (Add GST)** and **Inclusive (Remove GST)** modes with automatic **CGST + SGST** (Intra-State) and **IGST** (Inter-State) breakdown and 1-click summary clipboard copying.
- **Capital Gains Calculator**: Evaluates Long-Term & Short-Term Capital Gains for Real Estate, Equity/Mutual Funds (with Section 112A ₹1.25L exemption), and Gold, including Section 54/54F reinvestment deductions.
- **HRA Exemption Calculator**: Implements the statutory 3-rule formula under **Rule 2A / Section 10(13A)** for Metro (50%) and Non-Metro (40%) cities.
- **TDS Calculator**: Validates transaction thresholds and tax deduction rates for **Section 194C, 194J, 194IA, 194IB, and 194Q**.
- **Fixed Deposit & Compounding Calculator**: Computes maturity value, interest wealth gain ratio, quarterly/monthly compounding, and Section 194A TDS threshold warnings.

### 📚 2. Knowledge Bank & Regulatory Vault
- **Acts & Rules Gallery**: Direct reference links to official government bitstreams for the *Income Tax Act 1961*, *Companies Act 2013*, *CGST Act 2017*, *LLP Act 2008*, and *Finance Acts*.
- **Intelligence Bulletins**: Real-time regulatory updates categorized with priority tags (*Critical, High, Normal*) and search filtering.
- **Official Forms Repository**: Instant downloads for MCA forms (SPICe+, DIR-3, MGT-7, AOC-4), GST forms (REG-01, RFD-01, DRC-03), and Income Tax forms (Form 16, 10E, 15G, 26AS).
- **Software Utilities**: Official CBDT, MCA V3, and GSTN tools including *GST Offline Tool*, *DSC EmSigner*, and *ITR JSON Utility*.

### ⚖️ 3. Corporate & Assurance Workflows
- **Interactive Audit Applicability Tool**: Computes statutory applicability for **Section 44AB Tax Audits** ($\le 5\%$ vs $> 5\%$ cash turnover ratio) and **CARO 2020** 21-clause reporting.
- **Audit Readiness Scorecard**: Interactive 6-step checklist with real-time preparedness percentage for seamless auditor sign-off.
- **ROC Filings & Compliance Engine**: Step-by-step guidance for Private Limited / LLP incorporation, MSME-1, DPT-3, DIR-3 KYC, AOC-4, and MGT-7 filings with penalty schedules.

### 🎨 4. Executive UX & Interaction Design
- **Day / Night Theme Engine**: Seamless dark and light themes with Obsidian Sapphire (`#070d1e`) and Porcelain Ice-Blue styling, persisted in `localStorage`.
- **Live IST Office Status**: Dynamic Indian Standard Time (IST) clock with automatic business hours detection (`Open Now` vs `Closed`).
- **Interactive Multi-Step Query Portal**: Client inquiry submission with automated ticket ID generation and 1-click WhatsApp escalation.
- **Floating Priority WhatsApp Widget**: Floating quick-prompt assistant for rapid CA consultation.

---

## 🏗️ Tech Stack

- **Framework:** [React 19](https://react.dev/) (`19.2.0`)
- **Build Tool:** [Vite 7](https://vite.dev/) (`7.2.4`)
- **Routing:** [React Router DOM 7](https://reactrouter.com/) (`7.13.0`)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (`4.1.18`) via `@tailwindcss/vite`
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (`12.34.0`)
- **Icons:** [Lucide React](https://lucide.dev/) (`0.568.0`)
- **Language & Runtime:** ECMAScript Modules (ESM) / Node.js

---

## 📁 Project Directory Structure

```text
sk-associates/
├── public/
│   ├── logo.jpeg                    # Firm brand logo
│   └── vite.svg                     # Vite asset
├── src/
│   ├── assets/                      # Media and brand imagery
│   │   ├── anil.jpg                 # Partner portrait: Anil Choudhary
│   │   ├── sunil.png                # Senior Managing Partner portrait: Sunil Choudhary
│   │   ├── logo.jpeg                # Brand logo
│   │   └── react.svg
│   ├── components/
│   │   ├── calculators/             # Interactive Calculation Engines
│   │   │   ├── CapitalGains.jsx     # LTCG/STCG & Sec 54/112A calculations
│   │   │   ├── FixedDeposit.jsx     # Compound interest & Sec 194A TDS
│   │   │   ├── GST.jsx              # Dual-mode GST calculation engine
│   │   │   ├── HRACalculator.jsx    # Section 10(13A) Rule 2A HRA exemptions
│   │   │   ├── IncomeTax.jsx        # FY 2025-26 New vs Old tax regimes
│   │   │   └── TDS.jsx              # Section threshold & deduction engine
│   │   ├── home/                    # Home Page Sub-Sections
│   │   │   ├── ComplianceCalendarSection.jsx  # Statutory due dates tracker
│   │   │   ├── CtaBannerSection.jsx           # Conversion CTA card
│   │   │   ├── FaqSection.jsx                 # Searchable FAQ accordion
│   │   │   ├── HeroSection.jsx                # 3D interactive hero banner
│   │   │   ├── ServicesGridSection.jsx        # Filterable vertical cards
│   │   │   ├── TaxEstimatorWidget.jsx         # Live slider tax calculator
│   │   │   ├── TestimonialsSection.jsx        # Client reviews & ratings
│   │   │   ├── TickerMarquee.jsx              # Animated ticker strip
│   │   │   └── WhyChooseUsSection.jsx         # Firm USPs & metrics
│   │   ├── layout/                  # Persistent Layout Components
│   │   │   ├── Footer.jsx           # Global footer with live IST tracker
│   │   │   ├── Navbar.jsx           # Sticky nav with dropdown menus & theme toggle
│   │   │   └── TopBar.jsx           # Executive top bar with live clock
│   │   └── ui/
│   │       └── WhatsAppWidget.jsx   # Floating WhatsApp quick-action desk
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
│   ├── index.css                    # Tailwind CSS 4 directives & animations
│   └── main.jsx                     # React DOM root entry point
├── eslint.config.js                 # ESLint 9 configuration
├── index.html                       # HTML5 entry with meta SEO tags
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite configuration with Tailwind plugin
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
Generates optimized static assets with code-splitting in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

### 6. Lint Codebase
```bash
npm run lint
```

---

## 🏢 Headquarters & Contact Information

- **Firm:** S.K Associates (Tax Consultants & Corporate Advisors)
- **Headquarters:** Office Suite 1063, 10th Floor, Gaur City Mall, Noida West, UP 201306, India
- **Website:** [https://skassociates.in](https://skassociates.in)
- **Phone:** `0120-4194983` | `+91 80102 57124`
- **Email:** [officeska2000@gmail.com](mailto:officeska2000@gmail.com)
- **Office Hours:** Monday – Saturday, 10:00 AM – 07:00 PM IST

---

## 📄 License & Disclaimer

Copyright © 2026 S.K Associates. All rights reserved.  
All content and calculation models provided are for informational, estimating, and professional advisory reference adhering to prevailing Indian Taxation & MCA statutes.
