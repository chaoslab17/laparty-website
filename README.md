# La Party Corporate Website

Modern bilingual enterprise website for La Party Corp, built with React + Vite + TypeScript.

This project presents La Party’s manufacturing capabilities, export operations, certifications, and product catalog through a highly visual enterprise-grade frontend experience.

The original static `index.html` and `product.html` implementations have been fully converted into reusable React components with routing, localization, and modular architecture.

---

# Tech Stack

## Core

- React 18
- TypeScript
- Vite 5
- React Router DOM

## Localization

- i18next
- react-i18next
- i18next-browser-languagedetector
- i18next-http-backend

---

# Features

## Enterprise Landing Page

The homepage is composed of modular React sections:

### Sticky Navigation

- Glassmorphism / blur backdrop
- Industries mega menu
- Capabilities mega menu
- ⌘K search trigger
- Language switcher
- Request Quote CTA

### Hero Section

Enterprise logistics visualization including:

- Live extrusion metrics
- In-transit shipment card
- SKU detail panel
- QC pass indicator
- Manufacturing routing grid visuals

### Certification Strip

Typography-based certification showcase:

- HACCP
- GMP
- Silliker®
- SQF
- SGS
- ISO 9001

All certifications link to their official organizations.

### Operations & Footprint

Key manufacturing metrics:

- 12k tons annual production
- 30+ export markets
- 99.4% on-time shipment rate
- 31 years manufacturing experience

### Product Catalog

- 49 real SKUs imported from CSV
- 5 filterable categories
- SVG product bag illustrations
- Dynamic product detail routing

### Capabilities Section

6 manufacturing pillars with operational feature lists.

### CTA Section

Interactive quote request form.

### Footer

Enterprise footer containing:

- Tainan HQ
- Binh Duong manufacturing plant
- certification references
- contact information

---

# Product Detail System

Dynamic React-powered product detail pages using route params.

Example:

```url
/products/:slug
```
