# Samriddhi Mishra — Personal Portfolio Website ♡

A complete, responsive, and accessible personal portfolio website built with a **"Cute Pink Cartoon Digital Room"** aesthetic, reflecting the personality of a first-year Computer Science Engineering student exploring AI, intelligent systems, software development, and neurological data research.

---

## 🌸 Technology Stack & Constraints

This website was built strictly under college **HTML5 + CSS3 + Vanilla JavaScript** portfolio constraints:

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<dialog>`), ARIA accessibility roles and landmarks.
- **CSS3**: Custom property design tokens (CSS variables), CSS Grid (`repeat(auto-fill, minmax(220px, 1fr))`), Flexbox, keyframe animations, mobile-first responsive media queries, and `@media (prefers-reduced-motion: reduce)`.
- **Vanilla JavaScript**: Strict mode, modular event-driven architecture, 100% offline. Zero frameworks, zero external libraries, zero npm dependencies, zero build steps.
- **Offline / `file://` Compatibility**: Fully self-contained. Works by simply double-clicking `index.html` in any modern web browser. Uses relative paths and custom inline/standalone vector SVG illustrations.

---

## 📁 Project Structure

```text
Portfolio/
├── index.html            # Landing page: Hero with custom workspace art, about preview, skills, featured projects
├── about.html            # Detailed story, university affiliation, exploration domains, student philosophy
├── projects.html         # Interactive filterable project portfolio (AI/ML, Intelligent Systems, Research, Web, IoT)
├── gallery.html          # Visual scrapbook grid with interactive lightbox modal preview
├── contact.html          # Accessible contact form with real-time validation and student contact card
│
├── css/
│   └── style.css         # Complete stylesheet: color system, sticker cards, typography, animations, responsive design
│
├── js/
│   └── script.js         # Navigation toggle, active link detection, project filtering, modal dialog, form validation, easter egg
│
├── images/
│   ├── favicon.svg       # Cute pink heart & sparkle browser icon
│   ├── hero-workspace.svg# Original illustration: cute laptop, AI bot, tea mug, starry window, sticky notes
│   ├── project-friday.svg
│   ├── project-neurotrace.svg
│   ├── project-neerdrishti.svg
│   ├── project-webhub.svg
│   ├── project-tinyml.svg
│   ├── project-algo.svg
│   ├── gallery-debugging.svg
│   ├── gallery-friday.svg
│   ├── gallery-notes.svg
│   ├── gallery-experiments.svg
│   ├── gallery-data.svg
│   ├── gallery-iot.svg
│   ├── gallery-terminal.svg
│   └── gallery-desk.svg
│
└── README.md             # Project documentation
```

---

## 🎨 Design System: "Cute Pink Cartoon Digital Room"

- **Palette**: Soft blush pink (`#FFF7F9`), baby pink (`#FFEBF0`), dusty rose (`#FB6F92`), sweet pink (`#FF8FAB`), lavender (`#E0AAFF`), pastel mint (`#D8F3DC`), creamy yellow (`#FFE599`), and dark plum text (`#3C2A3E`) for optimal contrast and readability.
- **Scrapbook Elements**: Washi tape accents, sticker-like borders with 2.5px dark outlines (`#4A2E4B`), drop-pop shadows (`3px 3px 0px #4A2E4B`), rounded corners (`14px` - `28px`), and subtle tilts (`tilt-left`, `tilt-right`).
- **Illustrations**: Vector graphics depicting a cozy developer room, a friendly companion robot, circuit breadboards, and data charts.

---

## ✨ Interactive Features Implemented

1. **Mobile Hamburger Menu**: Accessible slide-down menu with animated bars and click-outside/escape-to-dismiss behavior.
2. **Active Page Indicator**: Automatically highlights the current page in the navbar across all subpages.
3. **Dynamic Project Filtering**: Filter buttons on `projects.html` (`All`, `AI / ML`, `Intelligent Systems`, `Research`, `Web`, `IoT`) show and hide matching project cards with a smooth CSS fade/scale animation without reloading the page.
4. **Scrapbook Lightbox Modal**: Clicking any card on `gallery.html` opens a full preview dialog with high-resolution artwork, detailed story captions, and focus management (supports close button, click-outside backdrop, and `Escape` key).
5. **Form Validation**: Real-time validation on `contact.html` checking required inputs and regex email format, accompanied by friendly error messages and a frontend-only confirmation banner: *"Your message is ready to fly! 💌"*.
6. **Easter Egg**: Clicking the tiny heart button in the footer 5 times reveals the hidden message: *"You found the tiny secret ♡ — welcome to my digital room!"*.
7. **Accessibility & Reduced Motion**: Keyboard accessible focus states (`:focus-visible`), aria labels, and automatic disabling of transitions when `prefers-reduced-motion: reduce` is detected.

---

## 🚀 How to Run the Website

No installation or server setup is required.

1. Navigate to the `Portfolio` directory in your file explorer.
2. Double-click **`index.html`** to open it directly in Google Chrome, Mozilla Firefox, Microsoft Edge, or Apple Safari.
3. Browse between pages using the navigation bar.
