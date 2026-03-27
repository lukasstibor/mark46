# Mark 46 Website Redesign — Complete Documentation

Welcome! This folder contains comprehensive documentation for the Mark 46 website redesign based on user feedback.

## Quick Start

1. **New to the redesign?** Start here: `DELIVERABLES.md`
2. **Ready to implement?** Use: `CODE_CHANGES_READY_TO_IMPLEMENT.md`
3. **Track progress?** Use: `IMPLEMENTATION_CHECKLIST.md`

## Documentation Files

### For Learning (Choose Your Style)

| File | Purpose | Best For | Size |
|------|---------|----------|------|
| `REDESIGN_IMPLEMENTATION_GUIDE.md` | Complete detailed guide with exact line numbers | Deep understanding, reference material | 5,500 words |
| `REDESIGN_SUMMARY.md` | Quick lookup reference | Quick answers during implementation | 1,500 words |
| `REDESIGN_VISUAL_REFERENCE.txt` | ASCII diagrams and visual before/after | Visual learners | 2,000 words |

### For Implementation

| File | Purpose | Best For |
|------|---------|----------|
| `CODE_CHANGES_READY_TO_IMPLEMENT.md` | Copy-paste ready code blocks | Fastest implementation (20 min) |
| `IMPLEMENTATION_CHECKLIST.md` | Step-by-step checklist | Tracking progress and QA |

### Overview

| File | Purpose | Best For |
|------|---------|----------|
| `DELIVERABLES.md` | Index of all deliverables and summary | Getting oriented |
| `README_REDESIGN.md` | This file | Navigation |

## What's Being Changed

**5 Components Need Updates:**

1. **About Section** — Rewrite bio to emphasize Mark 46 as private investment vehicle
2. **Newsletter Section** — New headline + consolidated body copy for stronger CTA
3. **Holdings Section** — Remove white border frame around Past section
4. **Signal Section** — Limit posts display to maximum 5 items
5. **Footer Section** — Complete redesign: minimal 2-column layout, remove contact column, move quote

**Time Estimate:** 33-39 minutes total

## Key Changes at a Glance

### About Bio
"I'm Lukas Stibor, founder and operator. Mark 46 is my private investment vehicle."
More LinkedIn voice, emphasizes Mark 46 focus.

### Newsletter
OLD: "Get the deals I'm watching."
NEW: "What's worth your time."
Body emphasizes quality over frequency.

### Holdings
Remove white border/frame from Past section grid
Change: gap-px bg-[#111] to gap-0 bg-[#0a0a0a]

### Signal
Limit posts display to 5 items maximum
Add: .slice(0, 5) to post mapping

### Footer
FROM: 3-column grid with quote + contact section
TO: 2-column flex (company info | copyright + social)
Quote moved to About section, contact column removed.

## Files to Modify

| File | Lines | Change Type | Complexity |
|------|-------|-------------|------------|
| About.jsx | 117-133 | Text rewrite | Low |
| Newsletter.jsx | 54-62 | Text rewrite | Low |
| Holdings.jsx | 249 | CSS change | Low |
| Signal.jsx | 76 | Code logic | Very Low |
| Footer.jsx | 1-116 | Complete redesign | High |

## Next Steps

### Immediate
1. Choose your implementation path
2. Have required documentation open
3. Backup current code (git commit)
4. Start implementing changes

### Before Deployment
1. Implement all changes
2. Test responsive design (mobile/tablet/desktop)
3. Verify all links work
4. Confirm quote location with user
5. Confirm newsletter headline with user
6. Wait for logo files
7. Final visual review

## Where to Find What

"I need exact line numbers" → REDESIGN_IMPLEMENTATION_GUIDE.md
"I need code to copy-paste" → CODE_CHANGES_READY_TO_IMPLEMENT.md
"I need a quick overview" → REDESIGN_SUMMARY.md
"I need to see before/after visually" → REDESIGN_VISUAL_REFERENCE.txt
"I need to track my progress" → IMPLEMENTATION_CHECKLIST.md
"I need the big picture" → DELIVERABLES.md

## Risk Assessment

Risk Level: Very Low
- No breaking changes
- No new dependencies
- No component prop changes
- Only text, CSS, and layout modifications
- All changes are backward compatible

## Summary Statistics

- Total Documentation: 12,000+ words
- Number of Files: 6 markdown/text docs
- Components to Modify: 5
- Lines of Code Changed: 100 total
- Estimated Implementation Time: 33-39 minutes
- Testing Time: 10-15 minutes
- Total Time: ~50 minutes
- Risk Level: Very Low

---

Status: Ready to implement
Last Updated: March 27, 2026
Version: 1.0 Complete

All 6 documentation files are ready in /Users/lukasstibor/Mark46/
Choose your path above and get started!
