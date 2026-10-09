# Girls Who Build the Future 🌟

A premium fashion campaign website for a women-empowerment T-shirt brand called **Girls Who Build**.

> **Tagline:** Smart. Strong. Unstoppable.

---

## What is this?

It's a full e-commerce campaign website — like a real clothing brand's online store — but built as a frontend demo. Think Zara or H&M meets a women's empowerment movement.

You can browse T-shirts, add them to a shopping bag, view product details, search, and explore the brand story. No real payments — it's a showcase.

---

## What's on the site?

| Section | What it does |
|---|---|
| **Hero** | Big editorial photo of 3 women, campaign headline, "Shop the Collection" button |
| **Manifesto Strip** | Bold brand statement in deep plum — *"Not here to fit in. Here to build what's next."* |
| **Featured Collection** | 4 signature T-shirts with size picker and add-to-bag |
| **Campaign Banner** | Urban editorial photo split with dramatic copy |
| **Our Story** | Brand purpose and values with lifestyle photo |
| **Community** | 3 editorial photos celebrating women who create |
| **Newsletter** | Email signup form (demo, no real backend) |
| **Footer** | Brand links, social, size guide, support info |

---

## The 4 T-Shirts

| Product | Color | Price |
|---|---|---|
| The Builder Tee | Ivory | ₹799 |
| The Unstoppable Tee | Deep Plum | ₹899 |
| The Dream Big Tee | Lavender | ₹799 |
| The Future Maker Tee | Black | ₹899 |

---

## What actually works?

- ✅ Add items to cart (saved in your browser)
- ✅ Pick sizes — can't add to bag without selecting one
- ✅ Cart drawer shows items, quantities, subtotal
- ✅ Increase / decrease / remove items from cart
- ✅ Search bar finds products by name, color, or slogan
- ✅ Quick View modal — see product details without leaving the page
- ✅ Size Guide modal with real measurements
- ✅ Collection page with filters (All / Best Sellers / New) and sorting
- ✅ Individual product detail pages
- ✅ Works on mobile, tablet, and desktop
- ✅ Toast notifications when you add something to cart
- ✅ Demo checkout screen (no real payment)

---

## Tech used

- **Next.js 16** — the React framework
- **Tailwind CSS 4** — for all the styling
- **Lucide React** — clean minimal icons
- **Google Fonts** — Playfair Display (headings) + Inter (body text)
- All product data is stored locally in `data/products.js`
- Cart is saved in `localStorage` so it survives page refreshes

---

## Run it locally

```bash
# Install packages (only needed once)
npm install

# Start the dev server
npm run dev
```

Then open **http://localhost:3000** in your browser. That's it.

---

## Project structure (simplified)

```
app/
  page.js              ← Homepage
  collection/page.js   ← All products with filters
  product/[slug]/      ← Individual product pages

components/
  Header.jsx           ← Navigation bar + mobile menu
  Hero.jsx             ← Big hero section
  ProductCard.jsx      ← Single product card
  CartDrawer.jsx       ← Sliding cart panel
  SearchDrawer.jsx     ← Search overlay
  QuickViewModal.jsx   ← Product quick-view popup
  SizeGuideModal.jsx   ← Size chart popup
  CartProvider.jsx     ← Cart logic shared across the whole site

data/
  products.js          ← All product info (prices, images, descriptions)

public/images/
  ← All campaign photos (generated for this project)
```

---

## Color palette

| Name | Hex | Used for |
|---|---|---|
| Deep Plum | `#35163F` | Buttons, footer, headings |
| Electric Lavender | `#9B7AE8` | Accents, highlights |
| Soft Lavender | `#F0E9FA` | Backgrounds |
| Warm Ivory | `#FAF8F3` | Main page background |
| Charcoal | `#242126` | Body text |

---

*Built as a campaign showcase. No real orders are processed.*
