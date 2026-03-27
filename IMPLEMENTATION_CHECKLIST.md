# Mark 46 Redesign — Implementation Checklist

Use this checklist to track your implementation progress. Check items off as you complete them.

## Pre-Implementation

- [ ] Read `DELIVERABLES.md` to understand the full scope
- [ ] Choose your implementation path (Fast/Detailed/Visual)
- [ ] Have `CODE_CHANGES_READY_TO_IMPLEMENT.md` open and ready
- [ ] Create a backup of your code (git commit current state)
- [ ] Test current website in browser (baseline)

## About Section Changes

**File:** `/src/components/About.jsx`
**Time:** ~5 minutes
**Lines:** 117-133

- [ ] Open About.jsx in editor
- [ ] Navigate to lines 117-133 (bio paragraphs)
- [ ] Delete current 3 paragraphs
- [ ] Paste new bio text from `CODE_CHANGES_READY_TO_IMPLEMENT.md`
- [ ] Verify text reads correctly
- [ ] Check links still work (mailto, Calendly)
- [ ] Test responsive design (mobile view)
- [ ] Commit change: "refactor: rewrite About bio with Mark 46 focus"

## Newsletter Section Changes

**File:** `/src/components/Newsletter.jsx`
**Time:** ~3 minutes
**Lines:** 54-62

- [ ] Open Newsletter.jsx in editor
- [ ] Find headline on lines 54-56: "Get the deals I'm watching."
- [ ] Replace with: "What's worth your time."
- [ ] Find body text on lines 57-62
- [ ] Replace with consolidated single-paragraph version
- [ ] Verify text reads naturally
- [ ] Test form still works (input, button)
- [ ] Test responsive design
- [ ] Commit change: "refactor: update newsletter headline and body copy"

## Holdings Section Changes

**File:** `/src/components/Holdings.jsx`
**Time:** ~2 minutes
**Line:** 249

- [ ] Open Holdings.jsx in editor
- [ ] Find line 249 with class: "grid grid-cols-2 md:grid-cols-3 gap-px bg-[#111]"
- [ ] Replace `gap-px bg-[#111]` with `gap-0 bg-[#0a0a0a]`
- [ ] (Optional) Change ChapterTile background from `bg-[#080808]` to `bg-transparent` (line 155)
- [ ] Verify Past section grid looks cleaner (no white border frame)
- [ ] Test responsive design
- [ ] Commit change: "style: remove white border frame from Past holdings section"

## Signal Section Changes

**File:** `/src/components/Signal.jsx`
**Time:** ~1 minute
**Line:** 76

- [ ] Open Signal.jsx in editor
- [ ] Find line 76: `{posts.map((post, i) => (`
- [ ] Change to: `{posts.slice(0, 5).map((post, i) => (`
- [ ] Verify exactly 5 posts display (or fewer if fewer exist)
- [ ] Test responsive design
- [ ] Commit change: "feat: limit Signal posts to maximum 5 items"

## Footer Section Changes

**File:** `/src/components/Footer.jsx`
**Time:** ~10 minutes
**Lines:** 1-116 (Complete file rewrite)

- [ ] Open Footer.jsx in editor
- [ ] Select all content (Cmd+A or Ctrl+A)
- [ ] Copy entire new Footer code from `CODE_CHANGES_READY_TO_IMPLEMENT.md`
- [ ] Paste to replace entire file
- [ ] Verify quote is removed
- [ ] Verify contact column (email) is removed
- [ ] Verify footer is now 2-column minimal layout
- [ ] Verify social links still work (LinkedIn, Twitter)
- [ ] Test responsive design (footer should stack on mobile)
- [ ] Verify copyright year is dynamic (correct year shows)
- [ ] Commit change: "refactor: complete footer redesign - minimal 2-column layout"

## Quote Migration (Choose One Path)

### Path A: Move Quote to About Section (Recommended)

**File:** `/src/components/About.jsx`
**Time:** ~2 minutes
**Location:** After bio paragraphs, before closing section (after line 163)

- [ ] Open About.jsx
- [ ] Go to line 163 (end of CTA callouts)
- [ ] Copy quote code block from `CODE_CHANGES_READY_TO_IMPLEMENT.md`
- [ ] Paste before closing `</motion.div>`
- [ ] Verify quote displays after bio
- [ ] Verify styling looks good (border-top separator)
- [ ] Test responsive design
- [ ] Commit change: "refactor: move inspirational quote from footer to About section"

### Path B: Create New Philosophy Section (Alternative)

**File:** Create new `/src/components/Philosophy.jsx`
**Time:** ~3 minutes

- [ ] Create new file: `/src/components/Philosophy.jsx`
- [ ] Copy Philosophy component code from `CODE_CHANGES_READY_TO_IMPLEMENT.md`
- [ ] Paste into new file
- [ ] Open `/src/App.jsx`
- [ ] Add import: `import Philosophy from './components/Philosophy'`
- [ ] Add component in JSX before Footer (after Signal, before Footer)
- [ ] Verify quote displays in new section
- [ ] Test responsive design
- [ ] Commit changes: "feat: add Philosophy section with inspirational quote"

### Path C: Skip for Now

- [ ] Leave quote removed from footer for now
- [ ] Implement later when user confirms preference
- [ ] Mark as TODO in code comments if desired

## Responsive Design Testing

**Test on Mobile (< 640px)**
- [ ] About: Photo full width, bio stacks below
- [ ] Newsletter: Headline, body, form stack vertically
- [ ] Holdings: 2-column grid displays correctly
- [ ] Footer: Company info stacks above copyright + social
- [ ] Signal: Posts display with single column layout

**Test on Tablet (640px - 1024px)**
- [ ] All sections responsive
- [ ] Holdings: 3-column grid displays
- [ ] Footer: Flex layout wraps appropriately
- [ ] Typography scales correctly

**Test on Desktop (> 1024px)**
- [ ] All sections at full width
- [ ] Holdings: 3-column grid
- [ ] Footer: Single row (company | copyright + social)
- [ ] Typography scales to largest size

## Functionality Testing

- [ ] Newsletter form still works (input + submit button)
- [ ] Email link in About works (mailto:)
- [ ] Calendly link works
- [ ] LinkedIn links work (multiple locations)
- [ ] Twitter links work
- [ ] All company URLs clickable (Holdings section)
- [ ] Signal posts link to LinkedIn articles
- [ ] No broken links in console (F12)
- [ ] No JavaScript errors in console

## Visual Inspection

- [ ] About bio reads naturally and compellingly
- [ ] Newsletter headline is strong CTA
- [ ] Newsletter body emphasizes quality
- [ ] Holdings Past section has no visible white border
- [ ] Footer looks clean and minimal
- [ ] Social links are visible and accessible
- [ ] Colors are consistent throughout
- [ ] Spacing/padding looks balanced
- [ ] No text overflow or truncation issues

## Browser Compatibility

- [ ] Chrome (desktop and mobile)
- [ ] Safari (desktop and mobile)
- [ ] Firefox (desktop)
- [ ] Edge (if needed)

## Performance Check

- [ ] Page loads quickly (no new resources added)
- [ ] No layout shifts after load
- [ ] Animations are smooth (no stuttering)
- [ ] Images load properly

## Code Quality

- [ ] No console errors
- [ ] No console warnings (React, unused vars)
- [ ] No broken imports
- [ ] No syntax errors
- [ ] Clean git history (meaningful commit messages)
- [ ] Code follows existing style conventions

## Waiting Items (Before Final Deployment)

- [ ] User confirms quote location (About vs Philosophy)
- [ ] User approves newsletter headline ("What's worth your time?")
- [ ] New logo files received (Coinbrain, GAMEE)
- [ ] Logos replaced in `/public/logos/`
- [ ] General visual review by user
- [ ] Any additional changes requested

## Pre-Deployment Checklist

- [ ] All changes committed with clear messages
- [ ] All tests pass
- [ ] No outstanding TODOs in code
- [ ] Documentation updated if needed
- [ ] Team/stakeholders reviewed changes
- [ ] Ready for production deployment

## Deployment

- [ ] Merge to main/master branch
- [ ] Build passes (npm run build or similar)
- [ ] Deploy to staging first
- [ ] QA team tests staging
- [ ] Deploy to production
- [ ] Monitor production for 24 hours
- [ ] Check analytics for any issues

## Post-Deployment

- [ ] Monitor error logs
- [ ] Check user feedback
- [ ] Verify all pages load correctly
- [ ] Performance metrics look good
- [ ] No unexpected issues

## Documentation

- [ ] Update any internal docs if needed
- [ ] Archive implementation guides (or keep for reference)
- [ ] Note any lessons learned
- [ ] Update project changelog if maintained

---

## Quick Reference: Files to Modify

```
1. About.jsx          — Lines 117-133 (bio text)
2. Newsletter.jsx     — Lines 54-62 (headline + body)
3. Holdings.jsx       — Line 249 (border removal)
4. Signal.jsx         — Line 76 (slice posts)
5. Footer.jsx         — Lines 1-116 (complete redesign)
6. Philosophy.jsx     — NEW FILE (if quote path selected)
7. App.jsx            — UPDATE (if Philosophy component added)
```

## Help Resources

- `REDESIGN_IMPLEMENTATION_GUIDE.md` — Full details, line numbers
- `CODE_CHANGES_READY_TO_IMPLEMENT.md` — Copy-paste code blocks
- `REDESIGN_VISUAL_REFERENCE.txt` — Visual before/after diagrams
- `REDESIGN_SUMMARY.md` — Quick reference lookup

---

## Time Estimates

- About changes: 5 min
- Newsletter changes: 3 min
- Holdings changes: 2 min
- Signal changes: 1 min
- Footer changes: 10 min
- Quote migration: 2-3 min
- Testing & QA: 10-15 min

**Total: 33-39 minutes**

---

## Notes Section

Use this space to note any issues, decisions, or custom changes:

```
[Your notes here]

Example:
- Changed newsletter headline to "Join the insiders" instead of recommendation
- User requested quote in separate section (not About)
- Logos still pending as of [date]
```

---

**Last Updated:** [Implementation Date]
**Status:** Ready to implement
**Priority:** High
**Risk Level:** Very Low
