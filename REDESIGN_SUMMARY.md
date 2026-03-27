# Mark 46 Redesign — Quick Reference Summary

## 1. ABOUT SECTION
**File:** `/src/components/About.jsx` (Lines 117-133)

**Change Type:** Text Rewrite — 3 paragraphs

**Current Opening:**
"I've been a tech entrepreneur since I built my first website at 14..."

**New Opening:**
"I'm Lukas Stibor, founder and operator. Mark 46 is my private investment vehicle."

**Key Points:**
- Lead with identity + Mark 46 focus
- Consolidate narrative: building → Cleevio → products → away → back
- Remove Dubai mentions
- More personal/direct tone

---

## 2. HOLDINGS SECTION
**File:** `/src/components/Holdings.jsx`

**Change 1:** Past Section Header (Line 239)
- Already says "Past" ✓ (correct)
- Previously was "Exits & Acquisitions" but already fixed

**Change 2:** Remove White Border Frame (Lines 244-254)
```jsx
// CHANGE THIS:
className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#111]"

// TO THIS:
className="grid grid-cols-2 md:grid-cols-3 gap-0"
```

Or remove background from ChapterTile component:
```jsx
// Line 155: className="group relative bg-[#080808]..."
// Change bg-[#080808] to bg-transparent
```

---

## 3. NEWSLETTER SECTION
**File:** `/src/components/Newsletter.jsx`

**Change 1:** Headline (Line 54-56)
```jsx
// FROM:
"Get the deals I'm watching."

// TO:
"What's worth your time."
```

**Change 2:** Body Text (Lines 57-62)
```jsx
// FROM:
"What I'm investing in, building, and paying attention to.
Sent only when there's something real to share."
+ separate subscriber count line

// TO:
"Startups, technology, and what's moving. Sent when something is genuinely
worth your time — not on a schedule. 2,000+ founders, operators, and builders already in."
```

**Button:** Keep "Get access →" as-is ✓

---

## 4. SIGNAL SECTION
**File:** `/src/components/Signal.jsx` (Line 76)

**Change:** Limit posts to last 5
```jsx
// FROM:
{posts.map((post, i) => (

// TO:
{posts.slice(0, 5).map((post, i) => (
```

**Current posts.json:** Already has exactly 5 posts. This future-proofs if more are added.

---

## 5. FOOTER SECTION
**File:** `/src/components/Footer.jsx`

### 5.1 Remove Quote Section (Lines 19-35)
The quote "Sometimes you gotta run before you walk" should be:
- Moved to About section (suggested position: after bio paragraphs)
- OR moved to a new standalone section
- REMOVED from footer

### 5.2 Redesign Footer Layout (Lines 37-114)

**Current:** 3-column grid
- Col 1: Brand (Mark 46)
- Col 2: Contact (hello@mark46.com, Book a call)
- Col 3: Follow (LinkedIn, Twitter)

**New:** Minimal 2-column flex layout
- **Left:** Company info (Mark 46 · Private Investment)
- **Right:** Copyright © 2023–{year} + Social links (LinkedIn · Twitter)
- Single row on desktop, stacked on mobile

### 5.3 Remove Contact Column
- Remove "hello@mark46.com" link
- Remove "Book a call" link
- Remove "Contact" section header

---

## COMPONENT CHANGE SUMMARY TABLE

| Component | File | Change Type | Priority |
|-----------|------|-------------|----------|
| About | `About.jsx` | Text rewrite (3 para) | HIGH |
| About | `About.jsx` | Move quote out | MEDIUM |
| Holdings | `Holdings.jsx` | Remove border frame | HIGH |
| Newsletter | `Newsletter.jsx` | Headline rewrite | HIGH |
| Newsletter | `Newsletter.jsx` | Body text rewrite | HIGH |
| Signal | `Signal.jsx` | Slice posts to 5 | LOW |
| Footer | `Footer.jsx` | Remove quote | MEDIUM |
| Footer | `Footer.jsx` | Remove contact col | HIGH |
| Footer | `Footer.jsx` | Redesign layout | HIGH |

---

## NOT CHANGING (Per User Feedback)
- Header/Navigation (Nav.jsx) ✓ User likes it
- Hero section ✓ No feedback
- Logo styling ✓ Waiting for new logo files

---

## PENDING (Waiting on User)
- Coinbrain logo file
- GAMEE logo file
- Quote placement confirmation (About vs new section?)
- Newsletter headline approval (alternative options available)

---

## COPYWRITING NOTES

### Newsletter Headlines (Choose One)
1. "What's worth your time." ← Recommended
2. "Join the insiders."
3. "Build smarter."
4. "Get early signals."

### Footer Approach
**Removes:** Contact/email CTA from footer
**Keeps:** Social links (LinkedIn, Twitter)
**Adds:** Minimal company descriptor

**Rationale:** Premium minimal design. Inquiries should come through About section CTAs or social channels, not footer email link.

---

## CHECKLIST FOR IMPLEMENTATION

- [ ] Copy all suggested text to have ready
- [ ] Update About.jsx paragraphs (3 new texts)
- [ ] Decide quote location (About section? New section?)
- [ ] Update Holdings.jsx grid border
- [ ] Update Newsletter.jsx headline & body
- [ ] Update Signal.jsx with .slice(0, 5)
- [ ] Delete Footer quote section
- [ ] Delete Footer contact column
- [ ] Restructure Footer to 2-column layout
- [ ] Test responsive (mobile/tablet/desktop)
- [ ] Verify all links still work
- [ ] Wait for logo files, update when received
- [ ] Search codebase for Dubai mentions (remove if found)

---

## LIVE FILE REFERENCES

**About Bio Text:** Lines 117-133 in `/Users/lukasstibor/Mark46/src/components/About.jsx`

**Holdings Border:** Lines 244-254 in `/Users/lukasstibor/Mark46/src/components/Holdings.jsx`

**Newsletter Copy:** Lines 54-62 in `/Users/lukasstibor/Mark46/src/components/Newsletter.jsx`

**Signal Posts:** Line 76 in `/Users/lukasstibor/Mark46/src/components/Signal.jsx`

**Footer:** All of `/Users/lukasstibor/Mark46/src/components/Footer.jsx`
