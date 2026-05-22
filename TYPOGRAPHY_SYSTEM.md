# Premium Typography System

## Vue d'ensemble
Système typographique moderne et responsive basé sur CSS custom properties.

## Font Stack
- **Primary**: Inter (body, UI, clarity)
- **Weights**: 400 (body), 500 (accent), 600 (semi-bold), 700 (bold)

## Responsive Font Sizes (Mobile First)

### Core Sizes
- `--fs-xs`: 0.75rem (12px)
- `--fs-sm`: 0.875rem (14px) 
- `--fs-base`: 1rem (16px)
- `--fs-lg`: 1.125rem (18px)
- `--fs-xl`: 1.25rem (20px)
- `--fs-2xl`: 1.5rem (24px)
- `--fs-3xl`: 1.875rem (30px)
- `--fs-4xl`: 2.25rem (36px)
- `--fs-5xl`: 3rem (48px) ← Mobile H1
- `--fs-6xl`: 3.75rem (60px) ← Tablet H1
- `--fs-7xl`: 4.5rem (72px) ← Desktop H1

### Line Heights
- `--lh-tight`: 1.1 (headlines)
- `--lh-snug`: 1.25 (subheadings)
- `--lh-normal`: 1.5 (default)
- `--lh-relaxed`: 1.65 (body text premium)
- `--lh-loose`: 1.8 (enhanced readability)

### Letter Spacing
- `--ls-tight`: -0.02em (headlines - compression)
- `--ls-normal`: 0em (default)
- `--ls-wide`: 0.025em (labels)
- `--ls-wider`: 0.05em (UI labels)
- `--ls-widest`: 0.1em (UPPERCASE labels)

## Component Scales

### Hero Title (H1)
- Mobile: 3xl (30px) / lh:tight / ls:tight / w:700
- Tablet: 4xl (36px) → 5xl (48px) 
- Desktop: 6xl (60px) → 7xl (72px)
- **Usage**: Main page title `<h1 class="text-hero">`

### Section Title (H2)
- Mobile: 2xl (24px) / lh:snug / ls:tight / w:600
- Tablet: 3xl (30px)
- Desktop: 4xl (36px)
- **Usage**: Section headings `<h2 class="text-section">`

### Subsection Title (H3)
- Constant: 2xl (24px) / lh:snug / ls:normal / w:600
- **Usage**: Card titles, feature headings `<h3 class="text-subsection">`

### Body Text
- Constant: 1rem (16px) / lh:relaxed (1.65) / ls:normal / w:400
- **Usage**: Paragraphs `<p class="text-body">`

### Labels & UI
- Size: 0.75rem (12px) / lh:snug / ls:widest / w:600
- **Usage**: Tags, badges `<span class="text-label">`

## Utility Classes

```css
.text-hero      /* H1 scale: color, size, weight, spacing */
.text-section   /* H2 scale */
.text-subsection /* H3 scale */
.text-body      /* Body scale */
.text-label     /* Label/UI scale */

.leading-tight  /* 1.1 */
.leading-snug   /* 1.25 */
.leading-normal /* 1.5 */
.leading-relaxed /* 1.65 */
.leading-loose  /* 1.8 */

.tracking-wide-label /* 0.05em */
```

## Content Strategy

### Section Purposes
1. **HERO**: Who (name/role), What (offer), CTA (action)
2. **ABOUT**: Vision, Values, Approach philosophy
3. **SKILLS**: Core technologies (no services repetition)
4. **SERVICES**: What you deliver (offerings, not tech)
5. **PROJECTS**: Proof and execution (brief tech only)
6. **EXPERIENCE**: Journey and learning trajectory
7. **CONTACT**: Conversion and accessibility

### Anti-Redundancy Rules
- Each section has unique strategic purpose
- No duplicate technology mentions across sections
- No repeating adjectives (premium, modern, etc.)
- One mention per technology per page

## Responsive Breakpoints
- Mobile: default (< 640px)
- Tablet: `sm:` (640px+)
- Desktop: `lg:` (1024px+)
- Large Desktop: `xl:` (1280px+)

## Implementation Checklist
- [ ] Update Hero component typography classes
- [ ] Update About component typography classes
- [ ] Update Skills component typography classes
- [ ] Update Services component typography classes
- [ ] Update Projects component typography classes
- [ ] Update Contact form labels
- [ ] Test responsive typography mobile/tablet/desktop
- [ ] Verify WCAG contrast ratios
- [ ] Test readability at all breakpoints
