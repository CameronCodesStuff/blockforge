# Blockforge — Visual Site Builder

A drag-and-drop visual site builder that runs entirely in the browser. Stack blocks, tweak fields, and export clean, self-contained HTML files — no frameworks, no build step, no server required.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | App shell and markup |
| `blockforge.css` | All editor styles |
| `blockforge.js` | All logic — block definitions, drag & drop, preview, export |

Open `index.html` directly in any modern browser. No installation needed.

---

## Features

### 40 blocks across 4 categories

**Structure** — Announcement bar, Navbar, Hero, CTA strip, Image banner, Footer

**Content** — Heading, Paragraph, Button, Image, Gallery, Video, Audio, List, Quote, Card, Badge, Big stat, Pricing card, Testimonial, Team member, FAQ, Table, Code block, Alert/notice, Progress bar, Social links, Contact form, Map, Countdown, Scrolling text

**Layout** — Columns (2–4 col with drag-and-drop nesting), Section band, Spacer, Divider, Anchor target

**Page style** — Theme, Accent colour, Font, Page settings

### 18 themes — 13 static + 5 animated
Minimal Light, Dark, Neon, Paper, Ocean, Sunset, Forest, Midnight, Cyberpunk, Candy, Terminal, Luxury, Pastel + Aurora ✨, Starfield ✨, Gradient Flow ✨, Synthwave ✨, Lava ✨

### Block Navigator
A toolbar below "Page stack" lets you step through every block in order without scrolling. Use the **↑ / ↓ buttons** or the keyboard shortcuts **Alt + ↑ / Alt + ↓**. The navigator shows the block name, its category colour, and your position (e.g. `3 / 12`). Jumping to a block scrolls it into view and highlights it with a blue flash.

### Drag and drop
- Drag blocks from the palette to any position in the workspace
- Drag existing workspace blocks to reorder them
- Drop content blocks inside Columns zones
- Auto-scroll while dragging near the top or bottom edge

### Live preview
- Split-pane preview updates on every field change
- Drag the divider to resize the preview panel
- Desktop / Tablet / Mobile device emulation
- Hide/show preview with a button or close it from within the preview panel

### Save / Load / Export
- **Save** — downloads a `blockforge-project.json` file you can reload later
- **Load** — opens a saved `.json` project
- **Export site ↓** — downloads a fully self-contained `index.html` with all styles and scripts inlined, ready to host anywhere

---

## Usage

1. Open `index.html` in your browser.
2. Click a block in the left palette to append it to the stack, or drag it into position.
3. Edit fields in the workspace — the live preview updates instantly.
4. Use the **Block Navigator** (↑ / ↓ buttons under "Page stack") to jump between blocks without scrolling.
5. Change the **Theme** block to switch colour schemes; add an **Accent colour** block to override the highlight colour.
6. Click **⚙ Site setup** to set a title, favicon, and meta description.
7. Click **Export site ↓** when you're done. The downloaded `index.html` is ready to upload.

---

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `Alt + ↑` | Navigate to previous block |
| `Alt + ↓` | Navigate to next block |

---

## Browser support

Works in any browser that supports CSS Grid, Custom Properties, and the Drag and Drop API — all evergreen browsers (Chrome, Firefox, Safari, Edge).

---

## Project structure

```
blockforge/
├── index.html        ← open this in your browser
├── blockforge.css    ← editor styles
├── blockforge.js     ← all application logic
└── README.md
```

---

## Tips

- **Style blocks** (Theme, Accent, Font, Page) can be placed anywhere in the stack — they apply globally regardless of position.
- **Columns** containers accept most content blocks via drag and drop. Structure blocks (Navbar, Hero, etc.) cannot be nested.
- The **Anchor target** block creates an `id` on the page that Navbar links can jump to — just match the anchor name to a navbar link label.
- Animated themes respect the user's `prefers-reduced-motion` setting and will disable their animations automatically.
- Exported sites include only the CSS and JS they actually need (countdown timer and contact form logic are only bundled if those blocks are present).
