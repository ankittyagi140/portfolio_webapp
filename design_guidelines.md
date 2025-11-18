# Portfolio Web Application - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from modern developer portfolios (Linear, Stripe, Vercel) combined with creative interactive portfolios. Focus on clean layouts with strategic interactive moments that showcase technical capabilities without overwhelming the content.

## Layout & Structure

### Hero Section (Full Viewport - 100vh)
- Large, striking hero image: Abstract code visualization, geometric patterns, or modern tech aesthetic (dark-themed with subtle lighting)
- Centered content overlay with strong typographic hierarchy
- Animated typing effect for role/specialization
- Primary CTA button with blurred background treatment when over image
- Subtle scroll indicator at bottom

### Projects Showcase
- 2-column grid (desktop), single column (mobile/tablet)
- Each project card: large preview image, title, tech stack tags, brief description
- Hover state: slight lift (translate), enhanced shadow, reveal "View Details" overlay
- Modal popup system for expanded project details with additional screenshots, full description, tech stack breakdown, and links to live demo/GitHub

### Skills/Tech Stack Section
- Multi-column grid layout (3-4 columns desktop, 2 tablet, 1 mobile)
- Skill cards with technology icons (use Font Awesome or Heroicons)
- Visual proficiency indicators (avoid progress bars - use filled/outlined icons or simple rating dots)
- Categorize: Frontend, Backend, Tools/DevOps, Database

### About/Experience Section
- 2-column layout: professional headshot on left, bio/career highlights on right (stack on mobile)
- Timeline component for career milestones
- Compact, scannable format

### Contact Section
- 2-column: form on left, contact info/social links on right
- Form fields: name, email, message with clear validation states
- Animated submit button with loading state
- Include: email, GitHub, LinkedIn, Twitter links

## Typography System

**Font Stack:**
- Headers: Inter or Space Grotesk (Google Fonts) - bold, modern
- Body: Inter or system fonts for optimal performance
- Code snippets: JetBrains Mono or Fira Code

**Hierarchy:**
- Hero Title: text-5xl to text-7xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold  
- Card Titles: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg
- Captions/Meta: text-sm

## Spacing System
Use Tailwind units: **4, 6, 8, 12, 16, 20** for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Card padding: p-6 to p-8
- Grid gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8

## Component Library

### Navigation
- Fixed header with blur backdrop effect (backdrop-blur-md)
- Logo/name on left, navigation links center/right
- Smooth scroll to sections with active state indicators
- Mobile: hamburger menu with slide-in drawer

### Cards (Projects/Skills)
- Rounded corners (rounded-lg to rounded-xl)
- Subtle border treatment
- Shadow on hover (transition-shadow)
- Image aspect ratio: 16:9 for project cards

### Buttons
- Primary: solid fill, rounded, medium padding (px-6 py-3)
- Secondary: outlined variant
- All buttons: smooth hover transitions (scale-105, enhanced shadow)
- Blurred backgrounds when overlaying images

### Forms
- Input fields: rounded borders, padding py-3 px-4
- Focus states: enhanced border, subtle glow
- Error states: red border with message below
- Labels: text-sm, slight weight increase

### Modal/Dialog
- Centered overlay with backdrop blur
- Close button top-right
- Smooth fade-in animation
- Project details with image carousel, full tech stack, links

## Interactive Features

### Animations (Minimal, Strategic)
- Hero typing effect (using typed.js or similar)
- Scroll-triggered fade-in for sections (use Intersection Observer)
- Hover effects on cards: subtle transform + shadow
- Smooth scroll navigation (CSS scroll-behavior: smooth)
- Background: subtle particle effect or animated gradient mesh (low opacity, non-distracting)

**Critical:** Avoid excessive animations. Focus on smooth, purposeful micro-interactions.

## Icons & Assets
- **Icons:** Font Awesome via CDN (single library consistency)
- **Tech Stack Icons:** Simple Devicons or similar for recognizable logos
- **Custom SVG:** Use placeholders (<!-- ICON: description -->) for any specialized needs

## Images

**Required Images:**
1. **Hero Background:** Large (1920x1080+) abstract tech/code visualization with dark aesthetic and subtle color accents - geometric patterns or matrix-style elements
2. **Project Previews:** 4-6 project screenshots/mockups (16:9 ratio, 800x450px minimum)
3. **Professional Headshot:** About section (400x400px, square crop)

**Optional Enhancements:**
- Technology logo icons for skills section
- Additional project detail images for modals

## Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support for all interactions
- Focus indicators on all interactive elements
- Alt text for all images
- Sufficient contrast ratios maintained

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation: full menu on desktop, hamburger on mobile
- Grid systems: adapt columns at each breakpoint
- Typography: scale down 1-2 sizes on mobile
- Touch-friendly tap targets (min 44x44px)