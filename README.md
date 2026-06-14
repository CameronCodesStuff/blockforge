# Blockforge — Visual Site Builder

A drag-and-drop site builder that runs entirely in the browser. Stack blocks, tweak their fields, and export a clean single-file `index.html` — no server, no build step, no dependencies.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | App shell — layout, modal, and links to CSS/JS |
| `style.css` | All editor styles (dark UI, palette, workspace, preview pane) |
| `app.js` | All logic — block definitions, drag & drop, preview, export |
| `README.md` | This file |

Open `index.html` directly in any modern browser to run the app. All three files must stay in the same folder.

---

## Features

**40 blocks across 4 categories:**

- **Structure** — Announcement bar, Navbar, Hero, CTA strip, Image banner, Footer
- **Content** — Heading, Paragraph, Button, Image, Gallery, Video, Audio, List, Quote, Card, Badge, Big stat, Pricing card, Testimonial, Team member, FAQ, Table, Code block, Alert, Progress bar, Social links, Contact form, Map, Countdown, Scrolling text
- **Layout** — Columns (2–4 col), Section band, Spacer, Divider, Anchor target
- **Page style** — Theme, Accent color, Font, Page settings

**18 themes** — 13 static (minimal-light, dark, neon, paper, ocean, sunset, forest, midnight, cyberpunk, candy, terminal, luxury, pastel) and 5 animated (aurora, starfield, gradient-flow, synthwave, lava).

**Block palette navigation** — Category quick-jump buttons (Structure / Content / Layout / Page style) let you scroll straight to the section you need without hunting through the full list.

**Drag & drop** — drag blocks from the palette into the workspace, or reorder them within the workspace. An insertion line shows exactly where the block will land.

**Columns block** — nest content blocks inside 2, 3, or 4-column layouts with card styling options.

**Live preview** — updates instantly as you edit fields. Switch between Desktop, Tablet (768 px), and Mobile (390 px) viewports. Drag the divider to resize the preview panel.

**Export** — outputs a self-contained `index.html` with all styles and runtime JS inlined.

**Save / Load** — save your work as a `blockforge-project.json` and reload it later.

---

## Using the palette

- **Click** any block to append it to the bottom of the page stack.
- **Drag** a block from the palette and drop it at a specific position in the workspace.
- **Search** using the text field at the top of the palette to filter by name.
- **Category buttons** (Structure / Content / Layout / Page style) scroll the palette list to that section instantly. Click **All** to jump back to the top.

---

## Keyboard & accessibility notes

- All buttons and inputs are keyboard-accessible.
- The app respects `prefers-reduced-motion` — all CSS animations are disabled for users who have that setting enabled.
- Block fields (inputs, selects, textareas) are drag-locked so interacting with them does not accidentally trigger a drag.

---

## Browser support

Works in any modern Chromium or Firefox browser. Requires support for:

- CSS Grid and Custom Properties
- `color-mix()` (Chrome 111+, Firefox 113+, Safari 16.2+)
- `srcdoc` on iframes (for the live preview)

---

## Project structure notes

The app is intentionally zero-dependency and zero-build. Everything lives in three files:

- **`style.css`** handles only the editor UI. Exported sites generate their own inline styles.
- **`app.js`** contains the block definitions (`DEFS`), state management, rendering, drag & drop, site generation (`buildSiteHTML`), and all UI event wiring.
- Theme styles for exported sites are stored inside `THEMES` in `app.js` as CSS string snippets and are injected into the exported HTML at export time — they are not loaded into the editor itself.

To add a new block type, add an entry to `DEFS` in `app.js` and a matching `case` in `blockHTMLInner`.
