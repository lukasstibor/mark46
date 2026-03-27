# Ready-to-Implement Code Changes

Copy-paste these code blocks into the specified files. Each section shows the exact code change with line numbers.

---

## FILE 1: `/src/components/About.jsx`

### Change: Rewrite Bio Paragraphs (Lines 117-133)

**DELETE These Lines (117-133):**
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

**REPLACE WITH:**
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

**Lines to Keep Unchanged:**
- Line 116 opening `<motion.div>`
- Lines 136-164 (CTA callouts section) — NO CHANGES
- All styling and layout

---

## FILE 2: `/src/components/Holdings.jsx`

### Change 1: Main Heading (Line 213-215)

**Current (optional change - verify user wants this):**
```jsx
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#f0ede8] mt-3 tracking-tight">
              Where the conviction is.
            </h2>
```

**Optional Change To:**
```jsx
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#f0ede8] mt-3 tracking-tight">
              Current Holdings.
            </h2>
```

**Note:** Keep the label "Current Portfolio" (line 210) as-is. This change is optional — the current heading is good.

### Change 2: Remove White Border Frame (Line 249)

**Current (Line 249):**
```jsx
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#111]"
```

**Change To:**
```jsx
          className="grid grid-cols-2 md:grid-cols-3 gap-0 bg-[#0a0a0a]"
```

OR if you want to remove even more visual separation, also modify the ChapterTile component (Line 155):

**Current (Line 155):**
```jsx
      className="group relative bg-[#080808] hover:bg-[#0d0d0d] transition-colors duration-300"
```

**Change To:**
```jsx
      className="group relative bg-transparent hover:bg-[#0a0a0a] transition-colors duration-300"
```

This removes the solid background that creates the border effect.

---

## FILE 3: `/src/components/Newsletter.jsx`

### Change 1: Headline (Lines 54-56)

**Current:**
```jsx
                <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[#f0ede8] mb-2 tracking-tight leading-tight">
                  Get the deals I'm watching.
                </h2>
```

**Change To:**
```jsx
                <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[#f0ede8] mb-2 tracking-tight leading-tight">
                  What's worth your time.
                </h2>
```

### Change 2: Body Text (Lines 57-62)

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

**Change To:**
```jsx
                <p className="text-[#555] text-sm leading-relaxed">
                  Startups, technology, and what's moving. Sent when something is genuinely
                  worth your time — not on a schedule. 2,000+ founders, operators, and builders already in.
                </p>
```

**Keep:**
- Lines 49-52 (container div and grid structure)
- Lines 67-114 (form input and button)
- Line 103 button text "Get access →" (no change)

---

## FILE 4: `/src/components/Signal.jsx`

### Change: Limit Posts to Last 5 (Line 76)

**Current (Line 76):**
```jsx
            {posts.map((post, i) => (
```

**Change To:**
```jsx
            {posts.slice(0, 5).map((post, i) => (
```

**That's it!** Single line change. Everything else stays the same.

---

## FILE 5: `/src/components/Footer.jsx`

### COMPLETE FOOTER REWRITE

**Delete Everything from Line 1-116** and replace with:

```jsx
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#111]">

      {/* Minimal footer - clean 2-column layout */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#111]">

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
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">

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
                  <span className="font-mono text-[10px] tracking-widest hidden sm:inline">LinkedIn</span>
                </a>
                <span className="text-[#1e1e1e]">·</span>
                <a
                  href="https://twitter.com/lukastibor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#555] hover:text-[#f0ede8] transition-colors duration-200"
                >
                  <TwitterIcon />
                  <span className="font-mono text-[10px] tracking-widest hidden sm:inline">Twitter</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

    </footer>
  )
}
```

**Key Changes in New Footer:**
1. ✓ Removed entire quote section
2. ✓ Removed "Contact" column with email
3. ✓ Removed "Follow" column header
4. ✓ Changed from 3-column grid to 2-column flex
5. ✓ Simplified company info to "Mark 46 · Private Investment"
6. ✓ Integrated social links into right column
7. ✓ Kept copyright year dynamic
8. ✓ Clean, minimal, premium look

**Notes:**
- Footer is now 1/3 the code complexity
- Mobile responsive with proper stacking
- Social labels hidden on very small screens (show only icons)
- Single horizontal line separating sections (minimal borders)

---

## QUOTE MIGRATION (Choose Your Approach)

The quote "Sometimes you gotta run before you walk" — Tony Stark · Mark XLVI needs a new home.

### Option A: Add to About Section (After Bio Paragraphs)

**Add this code after line 163 in About.jsx (before closing motion.div on line 165):**

```jsx
            {/* Inspirational quote */}
            <div className="mt-12 pt-12 border-t border-[#1e1e1e]">
              <p className="font-display font-bold text-[clamp(1.3rem,2.5vw,1.8rem)] text-[#f0ede8] tracking-tight leading-[1.2] mb-3">
                "Sometimes you gotta run{' '}
                <span className="text-[#B22222]">before you walk."</span>
              </p>
              <p className="font-mono text-[10px] text-[#333] tracking-[0.3em] uppercase">
                — Tony Stark · Mark XLVI
              </p>
            </div>
```

### Option B: Create New Callout Section

**Or create `/src/components/Philosophy.jsx` (new file):**

```jsx
import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section className="py-24 px-6 border-t border-[#111]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="font-display font-bold text-[clamp(1.6rem,4vw,2.8rem)] text-[#f0ede8] tracking-tight leading-[1.15]">
          "Sometimes you gotta run{' '}
          <span className="text-[#B22222]">before you walk."</span>
        </p>
        <p className="font-mono text-[10px] text-[#333] tracking-[0.3em] uppercase mt-4">
          — Tony Stark · Mark XLVI
        </p>
      </motion.div>
    </section>
  )
}
```

Then import in App.jsx and place it (before Footer makes sense):
```jsx
import Philosophy from './components/Philosophy'
// ... in JSX:
<Philosophy />
<Footer />
```

**Recommendation:** Use Option A (add to About) to keep section count manageable. Cleaner UX.

---

## SUMMARY OF CHANGES

| File | Type | Lines | Change |
|------|------|-------|--------|
| About.jsx | Text | 117-133 | Rewrite 3 paragraphs |
| Holdings.jsx | CSS | 249 | Remove border frame |
| Newsletter.jsx | Text | 54-56 | Change headline |
| Newsletter.jsx | Text | 57-62 | Consolidate body text |
| Signal.jsx | Code | 76 | Add `.slice(0, 5)` |
| Footer.jsx | Complete | 1-116 | Full redesign + delete |

**Total Files to Edit: 6**
**Estimated Time: 20-30 minutes**

---

## VALIDATION CHECKLIST

After making changes:

- [ ] All links still work (email in About, social links, Calendly)
- [ ] Responsive design looks good (mobile/tablet/desktop)
- [ ] Newsletter CTA button is prominent
- [ ] Footer looks clean and minimal
- [ ] About bio reads naturally
- [ ] Signal section shows max 5 posts
- [ ] No broken imports or components
- [ ] No TypeScript/JSX syntax errors
- [ ] Quote is displayed (in About or new section)
- [ ] No duplicate content

---

## WAIT FOR BEFORE FINALIZING

1. **Logo Files** — Coinbrain + GAMEE (user sending)
2. **Quote Placement Confirmation** — About vs new section?
3. **Newsletter Headline Approval** — Alternative options: "Join the insiders", "Build smarter", "Get early signals"
4. **General Design Review** — Any other tweaks?

---

## Need Help?

All 5 code blocks above are ready to copy-paste. Each one is self-contained with full context. Test one component at a time.
