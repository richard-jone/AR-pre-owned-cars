# AR Pre-Owned Cars — Static React Website

A responsive, static multi-page website built with React 19, React Router, Tailwind CSS 4 and Vite.

## Pages
- Home (`/`)
- About Us (`/about`)
- Services (`/services`)
- Buying Guide (`/buying-guide`)
- Contact (`/contact`)

## Folder structure

```text
ar-pre-owned-cars/
├── public/
├── src/
│   ├── assets/
│   │   ├── logo.jpeg
│   │   └── ar-garage.jpg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Reveal.jsx
│   │   ├── Header.jsx
│   │   ├── SectionHeading.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── BuyingGuide.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Static website notes
- No backend or database.
- Phone links use `tel:`.
- WhatsApp links open WhatsApp with a pre-filled enquiry.
- Google Maps opens a search for the supplied business address.
- Facebook and Justdial links use the URLs supplied by the business owner.
- Motion includes animated hero entrance, floating layered car artwork, scroll reveals and hover transitions.

- Inner page hero sections use the same dark navy/orange typography direction as the home hero, with subtle transparent car artwork.
- Enquiry and call-to-action buttons use an orange/navy inverse hover treatment.

- Inner page heroes now match the home hero's 650px / 690px minimum height and headline scale, with distinct page-specific transparent automotive artwork.
- Navigation hover and header Call Us normal/hover colors are enforced with explicit CSS states to avoid utility-class conflicts.


## Version 6 updates
- Replaced the four inner-page hero visuals with the four supplied sunset car images. The Home page hero image is unchanged.
- Removed the Call Us action from the mobile navigation menu while retaining the Call Us button at desktop (`lg`) widths.
- Added scroll-triggered fade-and-rise reveals for page sections and cards, including mobile layouts, with reduced-motion accessibility support.
- Replaced the floating generic chat icon with a recognizable WhatsApp brand glyph.


## Version 7 corrections
- Replaced the four inner-page hero images with transparent car cutouts styled to match the Home hero composition.
- Kept the Home page hero image untouched.
- Added an explicit CSS breakpoint rule that hides the header Call Us CTA below 1024px, overriding any specificity conflict; desktop CTA remains visible.
- Reworked scroll reveals to target page content containers/cards with an IntersectionObserver after route rendering, with a mobile-specific fade-and-rise and reduced-motion support.
