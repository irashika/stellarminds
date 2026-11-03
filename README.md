# Stellarminds website

A static website built with plain HTML, CSS and JavaScript. No build step, no server code.

## Pages

| File           | What it is                                              |
| -------------- | ------------------------------------------------------- |
| `index.html`   | Home page (all main sections + the interest form)       |
| `gallery.html` | Photo and video gallery with filters and a viewer       |
| `privacy.html` | Privacy Policy                                          |
| `terms.html`   | Terms & Conditions                                      |

Shared files:

```
css/style.css        All styles. Brand colours are at the top (:root).
js/main.js           Settings, content lists, gallery items, form and interactions.
assets/              Logos, favicon, share image
assets/clients/      Partner college logos
assets/gallery/      Gallery photos (gNN.jpg + gNN-sm.jpg thumbnails) and the video
```

## Common edits

All in `js/main.js`:

- **WhatsApp number for the form**: `SETTINGS.whatsapp` (country code + number, digits only, e.g. `919629664310`).
- **Form options**: `SETTINGS.orgTypes` and `SETTINGS.interests`.
- **Testimonials**: add, edit or remove entries in `TESTIMONIALS` (quote, name, meta). The scroller adapts automatically.
- **Gallery**: add an entry to `GALLERY` for each new photo.
  1. Save a large version as `assets/gallery/g19.jpg` (about 1600px on the long side).
  2. Save a thumbnail as `assets/gallery/g19-sm.jpg` (about 720px).
  3. Add `{ id: "g19", cat: "sessions", title: "…", place: "…", w: 1600, h: 900 }`.
  4. Categories: `sessions`, `recognition`, `certificates`, `video`.
- **Services, programs, institution offers, "Why choose us"**: the arrays near the top of the file.

Contact details (WhatsApp number shown on the page, email, location, LinkedIn, Instagram) appear in the HTML of each page, in the contact section and footer. Search for the old value across the four HTML files to change it.

## How the interest form works

1. The visitor fills in the form and presses **Continue to WhatsApp**.
2. Required fields are checked in the browser.
3. WhatsApp opens (the app on phones, WhatsApp Web on desktop) with a formatted message to `SETTINGS.whatsapp`.
4. The visitor presses **send**. Nothing is stored on the website.

If the browser blocks the new tab, a panel shows the message and an **Open WhatsApp** button.

## Deploying

Upload the whole folder, keeping its structure, to any static host:

- **Hostinger**: File Manager → `public_html` → upload the contents of this folder.
- **Netlify**: drag the folder onto app.netlify.com/drop.
- **GitHub Pages / Vercel / Cloudflare Pages**: deploy as a static site.

After uploading:

- Send one test enquiry from a phone.
- Update `og:image` in each HTML file to the full URL (e.g. `https://yourdomain.com/assets/og-image.jpg`).
- Have the Privacy Policy and Terms reviewed.
