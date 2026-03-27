# Mark 46 Comprehensive Redesign Implementation Guide

## Overview
This document provides detailed implementation instructions for the Mark 46 website redesign based on user feedback. All changes have been analyzed from the current codebase and are organized by component.

---

## 1. ABOUT SECTION — `/src/components/About.jsx`

### Current State
- Generic bio explaining career progression
- Two CTA callouts: "Open to invest" and "Consulting"
- Mentions Cleevio, products (GAMEE, Spendee, CoinBrain), and 8-year away period
- Includes Dubai mentions (to be removed)

### Required Changes

#### 1.1 Bio Text Rewrite
**Current (Lines 117-133):**
```jsx
<p className="text-[#777] text-[1rem] leading-[1.85]">
  I've been a tech entrepreneur since I built my first website at 14. Co-founded
  Cleevio in 2008 — started as a software studio, grew into a group working with
  brands like McDonald's, Coca-Cola, and Oreo. Forbes 30 Under 30. Deloitte Fast 50 & 500.
</p>

<p className="text-[#777] text-[1rem] leading-[1.85]">
  Along the way I co-founded several B2C products with millions of users — GAMEE
  (8M+ MAU, acquired by Animoca Brands), Spendee, CoinBrain, TradingAnalyzer.ai.
  Some I still hold, some I've exited.
</p>

<p className="text-[#777] text-[1rem] leading-[1.85]">
  Stepped away from Cleevio for 8 years. Came back in 2025 as CEO. Now turning
  Cleevio Group into an AI-first organization and investing through Mark 46
  on the side.
</p>
```

**Suggested Rewrite (Based on LinkedIn voice):**
```jsx
<p className="text-[#777] text-[1rem] leading-[1.85]">
  I'm Lukas Stibor, founder and operator. Mark 46 is my private investment vehicle.
</p>

<p className="text-[#777] text-[1rem] leading-[1.85]">
  I've been building since 14. Co-founded Cleevio in 2008 — grew it into a digital studio
  and venture builder. Built products used by millions: GAMEE (8M+ MAU, acquired Animoca Brands),
  Spendee, CoinBrain. Stepped back for 8 years. Came back in late 2025 as CEO to transform
  the entire group into an AI-first organization.
</p>

<p className="text-[#777] text-[1rem] leading-[1.85]">
  Now I run Cleevio Group and invest through Mark 46. Looking for exceptional founders
  and teams building the future. Always open to consulting if it's the right fit.
</p>
```

**Key Changes:**
- Add opening statement: "I'm Lukas Stibor, founder and operator. Mark 46 is my private investment vehicle."
- Consolidate narrative flow around: building since 14 → Cleevio studio → products → 8 years away → came back
- Remove Dubai mentions (currently not visible in About text, but if mentioned elsewhere, remove)
- Add explicit mention of Mark 46 as private investment vehicle
- Make it more personal and direct (LinkedIn voice)

#### 1.2 Keep CTA Callouts
**Status: KEEP** (Lines 136-164)
- "Open to invest" CTA is correct
- "Consulting" CTA is correct
- Both visual callouts should remain and work with the new bio narrative

---

## 2. HOLDINGS SECTION — `/src/components/Holdings.jsx`

### Current State
- Header: "Where the conviction is."
- Current portfolio grid with 6 holdings
- Past section labeled "Exits & Acquisitions" with white box/frame styling

### Required Changes

#### 2.1 Rename Section Headers
**Current (Line 210-215):**
```jsx
<span className="font-mono text-[11px] text-[#B22222] tracking-[0.3em] uppercase">
  Current Portfolio
</span>
<h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#f0ede8] mt-3 tracking-tight">
  Where the conviction is.
</h2>
```

**Change to:**
```jsx
<span className="font-mono text-[11px] text-[#B22222] tracking-[0.3em] uppercase">
  Current Portfolio
</span>
<h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#f0ede8] mt-3 tracking-tight">
  Current Holdings.
</h2>
```

**Note:** The superscript label already says "Current Portfolio" (line 210), which is correct. Keep it.

#### 2.2 Rename Past Section Header
**Current (Line 239-241):**
```jsx
<span className="font-mono text-[11px] text-[#333] tracking-[0.3em] uppercase">
  Past
</span>
```

**Status: ALREADY CORRECT** — Header is already "Past" ✓

#### 2.3 Remove White Border/Frame Around Past Section
**Current (Lines 244-254):**
```jsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#111]"  // <- This bg-[#111] + gap-px creates the white border effect
>
```

**Change to:**
```jsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 md:grid-cols-3 gap-0"  // <- Remove bg-[#111], use gap-0 instead
>
```

**Alternative (if you want complete removal of grid borders):**
Change the `ChapterTile` component styling (lines 154-156):
```jsx
// Current:
className="group relative bg-[#080808] hover:bg-[#0d0d0d] transition-colors duration-300"

// Change to:
className="group relative bg-transparent hover:bg-[#0a0a0a] transition-colors duration-300"
```

This removes the solid background and the implied border effect.

---

## 3. NEWSLETTER SECTION — `/src/components/Newsletter.jsx`

### Current State
- Headline: "Get the deals I'm watching."
- Body text: "What I'm investing in, building, and paying attention to. Sent only when there's something real to share."
- Current subscriber count: "2,000+ founders & operators already in"
- CTA Button: "Get access →"

### Required Changes

#### 3.1 Rewrite Headline (Line 54-56)
**Current:**
```jsx
<h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[#f0ede8] mb-2 tracking-tight leading-tight">
  Get the deals I'm watching.
</h2>
```

**Change to (more CTA-focused and shorter):**
```jsx
<h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[#f0ede8] mb-2 tracking-tight leading-tight">
  What's worth your time.
</h2>
```

**Alternative options:**
- "Join the insiders."
- "Build smarter."
- "Get early signals."

#### 3.2 Rewrite Body Text (Lines 57-62)
**Current:**
```jsx
<p className="text-[#555] text-sm leading-relaxed">
  What I'm investing in, building, and paying attention to.
  Sent only when there's something real to share.
</p>
<p className="font-mono text-[10px] text-[#333] tracking-[0.2em] mt-3">
  2,000+ founders & operators already in
</p>
```

**Change to (more compelling, shows social proof, emphasizes quality):**
```jsx
<p className="text-[#555] text-sm leading-relaxed">
  Startups, technology, and what's moving. Sent when something is genuinely
  worth your time — not on a schedule. 2,000+ founders, operators, and builders already in.
</p>
```

**Explanation:**
- Consolidates the body + subscriber count into one compelling paragraph
- Emphasizes quality over frequency ("genuinely worth your time — not on a schedule")
- Shows impressive subscriber number as social proof
- More urgent/compelling tone

#### 3.3 Keep Button
**Status: KEEP** (Line 98-104)
- Button text "Get access →" is clear and works well
- No changes needed

---

## 4. SIGNAL SECTION — `/src/components/Signal.jsx`

### Current State
- Displays ALL posts from `/posts.json`
- Currently 5 posts exist in posts.json
- Each post shows with numbering, tags, and date

### Required Changes

#### 4.1 Limit to Last 5 Posts
**Current (Lines 76-114):**
```jsx
{posts.map((post, i) => (
  <motion.a
    key={i}
    variants={itemVariants}
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    className="..."
  >
    {/* Post content */}
  </motion.a>
))}
```

**Change to (only show last 5):**
```jsx
{posts.slice(0, 5).map((post, i) => (
  <motion.a
    key={i}
    variants={itemVariants}
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    className="..."
  >
    {/* Post content */}
  </motion.a>
))}
```

**Implementation:** Simply add `.slice(0, 5)` to the posts array on line 76. This ensures even if posts.json grows beyond 5 items, only the first 5 (latest) are displayed.

**Note:** The current posts.json already has exactly 5 posts, so this change future-proofs the implementation.

---

## 5. FOOTER SECTION — `/src/components/Footer.jsx`

### Current State
- Quote section: "Sometimes you gotta run before you walk." - Tony Stark · Mark XLVI
- 3-column layout: Brand | Contact (with email) | Social
- Contact section includes: hello@mark46.com + Book a call CTA
- Bottom bar with copyright

### Required Changes

#### 5.1 Move Quote OUT of Footer
**Current (Lines 19-35):**
The quote section needs to be removed from footer entirely.

**Options for Quote Placement:**
1. **Move to About Section** — Add after bio paragraphs as an inspirational callout
2. **Move to Hero Section** — Add as a subtle element
3. **Move to separate callout section** — Create a new minimal section for the quote

**Recommended:** Move to About section or create a standalone callout section. Here's a suggested structure for About (after bio):

```jsx
{/* Inspirational quote callout */}
<div className="mt-10 pt-10 border-t border-[#1e1e1e]">
  <p className="font-display font-bold text-[clamp(1.3rem,2.5vw,1.8rem)] text-[#f0ede8] tracking-tight leading-[1.2] mb-3">
    "Sometimes you gotta run{' '}
    <span className="text-[#B22222]">before you walk."</span>
  </p>
  <p className="font-mono text-[10px] text-[#333] tracking-[0.3em] uppercase">
    — Tony Stark · Mark XLVI
  </p>
</div>
```

#### 5.2 Redesign Footer to Minimal 2-Column Layout
**Current (Lines 37-101):** Full 3-column contact section

**New Minimal Footer Structure:**

```jsx
// REMOVE the entire Contact section (Lines 51-70)
// REMOVE the Quote section entirely (Lines 19-35)

// New Footer Structure:
<footer className="border-t border-[#111] px-6 py-12">
  <div className="max-w-6xl mx-auto">

    {/* Minimal footer - left column (company info) + right column (copyright) */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8 pb-8 border-b border-[#111]">

      {/* Left: Company info */}
      <div>
        <span className="font-display font-bold text-lg text-[#f0ede8] tracking-tight">
          Mark 46
        </span>
        <p className="font-mono text-[10px] text-[#333] tracking-[0.2em] mt-2">
          Private Investment
        </p>
      </div>

      {/* Right: Copyright + Social */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">

        {/* Copyright */}
        <span className="font-mono text-[9px] text-[#222] tracking-widest">
          © 2023–{year} Mark 46
        </span>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/stibor/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#555] hover:text-[#f0ede8] transition-colors duration-200"
          >
            <LinkedInIcon />
            <span className="font-mono text-[10px] tracking-widest">LinkedIn</span>
          </a>
          <span className="text-[#1e1e1e]">·</span>
          <a
            href="https://twitter.com/lukastibor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#555] hover:text-[#f0ede8] transition-colors duration-200"
          >
            <TwitterIcon />
            <span className="font-mono text-[10px] tracking-widest">Twitter</span>
          </a>
        </div>

      </div>

    </div>

  </div>
</footer>
```

**Key Changes:**
1. Remove entire "Contact" column with email and book-a-call CTA
2. Remove "Follow" column header (integrate social links directly)
3. Simplify to: Left side (company name + "Private Investment") | Right side (copyright year + social links)
4. Single row layout (flexbox) instead of 3-column grid
5. Remove the quote section entirely

**Visual Design:**
- Premium, minimal footer
- Left: "Mark 46 · Private Investment"
- Right: "© 2023–2026 Mark 46 · LinkedIn · Twitter"
- Single line on desktop, stacked on mobile
- Clean borders, lots of breathing room

---

## 6. OTHER REQUIRED REMOVALS

### 6.1 Remove Dubai Mentions
**Status:** Checked About.jsx — No Dubai mentions currently visible. If found elsewhere:
- Check all text content
- Remove any references to Dubai
- Update posts.json if needed

### 6.2 Contact Information
**Current:** Footer contains hello@mark46.com
**Change:** Remove from footer (as per section 5.2)
**Note:** Keep email in About section callout if it exists (currently it's in the "Open to invest" mailto link on line 138 of About.jsx)

---

## 7. UNCHANGED COMPONENTS (Keep As-Is)

### 7.1 Header/Navigation (`/src/components/Nav.jsx`)
**Status: NO CHANGES** — User confirmed header/nav is good

### 7.2 Hero Section (`/src/components/Hero.jsx`)
**Status: NO CHANGES** — No feedback provided, keep as-is

### 7.3 Holdings Logos
**Status: PENDING** (User mentioned)
- Coinbrain logo: User sending both logos again
- GAMEE logo: Still too small/not right
- Wait for new logo files before updating

---

## 8. IMPLEMENTATION CHECKLIST

- [ ] **About.jsx** - Rewrite bio paragraphs (3 paragraphs → new version with Mark 46 private investment focus)
- [ ] **About.jsx** - Move quote to About section (or create new quote section)
- [ ] **Holdings.jsx** - Change main heading text if needed (verify current text)
- [ ] **Holdings.jsx** - Remove white border/frame around "Past" section (modify grid styling)
- [ ] **Newsletter.jsx** - Change headline to "What's worth your time."
- [ ] **Newsletter.jsx** - Rewrite body text to consolidated version
- [ ] **Signal.jsx** - Add `.slice(0, 5)` to limit posts to last 5
- [ ] **Footer.jsx** - Remove entire quote section
- [ ] **Footer.jsx** - Remove Contact column (email, calendar link)
- [ ] **Footer.jsx** - Redesign footer to 2-column minimal layout
- [ ] **Footer.jsx** - Integrate social links into footer right side
- [ ] **All files** - Remove Dubai mentions (search entire codebase)
- [ ] **Holdings.jsx** - Update logos when new files received (Coinbrain, GAMEE)

---

## 9. FILE PATHS FOR REFERENCE

- `/Users/lukasstibor/Mark46/src/components/About.jsx` — Bio text, CTA callouts
- `/Users/lukasstibor/Mark46/src/components/Holdings.jsx` — Portfolio header, past section grid
- `/Users/lukasstibor/Mark46/src/components/Newsletter.jsx` — Headline, body text
- `/Users/lukasstibor/Mark46/src/components/Signal.jsx` — Posts mapping/filtering
- `/Users/lukasstibor/Mark46/src/components/Footer.jsx` — Footer layout, quote, contact, social
- `/Users/lukasstibor/Mark46/dist/posts.json` — LinkedIn posts data

---

## 10. DESIGN NOTES

### Footer Redesign Rationale
The new footer is designed to be:
- **Premium & minimal** — Less is more, whitespace is key
- **Modern** — 2-column flex layout instead of outdated 3-column grid
- **Scannable** — Company info on left, legal/social on right
- **Mobile-friendly** — Stacks cleanly on small screens
- **Focused** — Removes distraction of contact section; directs to About/Hero for inquiries

### Newsletter Copy Rationale
The rewrite is designed to be:
- **Action-oriented** — "What's worth your time" (CTA-focused)
- **Quality-emphasized** — "Sent when something is genuinely worth your time — not on a schedule"
- **Social proof** — Integrates subscriber count naturally
- **Compelling** — Shorter, punchier, more urgent tone

### About Bio Rationale
The rewrite is designed to:
- **Lead with identity** — "I'm Lukas Stibor, founder and operator. Mark 46 is my private investment vehicle."
- **Establish Mark 46 focus** — Private investment vehicle, not side project
- **Tell a compelling narrative** — Building since 14 → Cleevio → products → away → return → current role
- **LinkedIn voice** — More personal, direct, achievement-focused
- **Future-oriented** — Emphasizes current Mark 46 role and investment focus

---

## NEXT STEPS

1. Implement all text changes in the components listed
2. Test responsive design on mobile/tablet/desktop
3. Wait for logo files (Coinbrain, GAMEE) and integrate
4. Verify all Dubai mentions are removed
5. QA all links (email, social, calendar, company URLs)
6. Get user approval on new copy before deployment
