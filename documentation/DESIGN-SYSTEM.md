# 🎨 Web-Smart.Co - Design System & Theme Documentation

**Project**: Web-Smart.Co Website Redesign
**Original Site**: https://web-smart.co/
**Analysis Date**: 23 October 2025

---

## 🌈 Color Palette

### Primary Colors

```css
/* Purple Theme - Primary Brand Color */
--primary-purple: #672F8F;        /* rgb(103, 47, 143) - Main brand purple */
--primary-dark: #4D2269;          /* rgb(77, 34, 105) - Darker purple */
--primary-light: #8347B1;         /* rgb(131, 71, 177) - Lighter purple */
```

### Secondary Colors

```css
/* Light Purple/Lavender Backgrounds */
--secondary-lavender: #F3F0FB;    /* rgb(243, 240, 251) - Light lavender */
--secondary-purple-light: #E6D9F5; /* rgb(230, 217, 245) - Soft purple tint */
```

### Accent Colors

```css
/* Green Accents */
--accent-green: #34C759;          /* rgb(52, 199, 89) - Success green (checkmarks) */

/* Supporting Accents */
--accent-blue: #3B82F6;           /* rgb(59, 130, 246) - Trust blue (optional) */
--accent-orange: #F97316;         /* rgb(249, 115, 22) - Warning/CTA orange (optional) */
```

### Neutral Colors

```css
/* Backgrounds */
--bg-white: #FFFFFF;              /* rgb(255, 255, 255) - Pure white */
--bg-light-grey: #F9F9F9;         /* rgb(249, 249, 249) - Off-white */
--bg-light: #F8F9FA;              /* rgb(248, 249, 250) - Light grey */

/* Text Colors */
--text-dark: #2C3E50;             /* rgb(44, 62, 80) - Dark charcoal */
--text-body: #333333;             /* rgb(51, 51, 51) - Dark grey */
--text-grey: #4A5568;             /* rgb(74, 85, 104) - Medium grey */
--text-light: #6B7280;            /* rgb(107, 114, 128) - Light grey */
```

### UI Element Colors

```css
/* Buttons */
--button-primary: #672F8F;        /* Purple background */
--button-primary-hover: #8347B1;  /* Lighter purple on hover */
--button-secondary: #FFFFFF;      /* White background with purple border */

/* Borders */
--border-light: #E5E7EB;          /* rgb(229, 231, 235) - Light border */
--border-medium: #D1D5DB;         /* rgb(209, 213, 219) - Medium border */
--border-purple: #672F8F;         /* Purple border for emphasis */
```

---

## 🎨 Color Usage Guidelines

### Primary Purple (#672F8F) - Main Brand

**Use For**:
- Primary CTAs (Call-to-Action buttons)
- Headers and navigation
- Links and interactive elements
- Section backgrounds (with low opacity overlays)
- Brand elements
- Icons and highlights

**Combinations**:
- Purple text on white backgrounds
- White text on purple backgrounds
- Purple borders and accents

### Lavender (#F3F0FB) - Secondary Background

**Use For**:
- Alternating section backgrounds
- Card backgrounds
- Feature boxes
- Testimonial backgrounds
- Light, airy sections

**Combinations**:
- Dark text on lavender
- Purple accents on lavender
- Subtle, professional feel

### Green (#34C759) - Success/Confirmation

**Use For**:
- Checkmarks and ticks
- Success messages
- Completed states
- Positive indicators
- Feature highlights

**Do NOT Overuse**: Reserve for specific success indicators

---

## 📝 Typography

### Font Families

**Recommended for Redesign**:
```css
--font-primary: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
--font-headings: 'Poppins', 'Inter', sans-serif;
--font-mono: 'Roboto Mono', 'Courier New', monospace; /* For code/technical */
```

**Import Fonts**:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700;800;900&display=swap" rel="stylesheet">
```

### Typography Scale

**Headings**:
```css
h1: {
  font-size: clamp(2.5rem, 5vw, 4rem);  /* 40px - 64px */
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-family: 'Poppins', sans-serif;
  color: var(--text-dark);
}

h2: {
  font-size: clamp(2rem, 4vw, 3rem);  /* 32px - 48px */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--text-dark);
}

h3: {
  font-size: clamp(1.5rem, 3vw, 2.25rem);  /* 24px - 36px */
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-dark);
}

h4: {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);  /* 20px - 28px */
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-body);
}

h5: {
  font-size: clamp(1.125rem, 2vw, 1.5rem);  /* 18px - 24px */
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary-purple);
}
```

**Body Text**:
```css
p: {
  font-size: clamp(1rem, 1.25vw, 1.125rem);  /* 16px - 18px */
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-grey);
  font-family: 'Inter', sans-serif;
}

.lead: {
  font-size: clamp(1.125rem, 1.5vw, 1.375rem);  /* 18px - 22px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-body);
}

small: {
  font-size: 0.875rem;  /* 14px */
  line-height: 1.5;
  color: var(--text-light);
}
```

---

## 🧩 Component Styles

### Buttons

**Primary Button (Purple CTA)**:
```css
.btn-primary {
  background: #672F8F;
  color: #FFFFFF;
  padding: 16px 36px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.0625rem;  /* 17px */
  border: 2px solid #672F8F;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(103, 47, 143, 0.25);
  cursor: pointer;
}

.btn-primary:hover {
  background: #8347B1;
  border-color: #8347B1;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(103, 47, 143, 0.35);
}

.btn-primary:active {
  transform: translateY(0);
}
```

**Secondary Button (Outline)**:
```css
.btn-secondary {
  background: transparent;
  color: #672F8F;
  padding: 16px 36px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.0625rem;
  border: 2px solid #672F8F;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #672F8F;
  color: #FFFFFF;
  transform: translateY(-2px);
}
```

**White Button (on Purple)**:
```css
.btn-white {
  background: #FFFFFF;
  color: #672F8F;
  padding: 16px 36px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.0625rem;
  border: 2px solid #FFFFFF;
  transition: all 0.3s ease;
}

.btn-white:hover {
  background: transparent;
  color: #FFFFFF;
  border-color: #FFFFFF;
}
```

### Cards

**Service Card**:
```css
.card-service {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 36px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #E5E7EB;
  transition: all 0.3s ease;
}

.card-service:hover {
  box-shadow: 0 12px 24px rgba(103, 47, 143, 0.15);
  transform: translateY(-8px);
  border-color: #672F8F;
}

.card-service-icon {
  width: 72px;
  height: 72px;
  background: rgba(103, 47, 143, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.card-service-icon svg {
  color: #672F8F;
  width: 36px;
  height: 36px;
}
```

**Feature Card (Lavender Background)**:
```css
.card-feature {
  background: #F3F0FB;
  border-radius: 16px;
  padding: 32px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.card-feature:hover {
  border-color: #672F8F;
  transform: translateY(-4px);
}
```

### Forms

**Input Fields**:
```css
.form-input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #D1D5DB;
  border-radius: 8px;
  font-size: 1rem;
  color: var(--text-dark);
  background: #FFFFFF;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;
}

.form-input:focus {
  outline: none;
  border-color: #672F8F;
  box-shadow: 0 0 0 3px rgba(103, 47, 143, 0.1);
}

.form-input::placeholder {
  color: var(--text-light);
}
```

**Textarea**:
```css
.form-textarea {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #D1D5DB;
  border-radius: 8px;
  font-size: 1rem;
  color: var(--text-dark);
  background: #FFFFFF;
  font-family: 'Inter', sans-serif;
  min-height: 150px;
  resize: vertical;
}

.form-textarea:focus {
  outline: none;
  border-color: #672F8F;
}
```

**Labels**:
```css
.form-label {
  display: block;
  font-size: 0.9375rem;  /* 15px */
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
  letter-spacing: 0.01em;
}
```

---

## 📐 Layout System

### Container

```css
.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 24px;  /* Mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 0 48px;  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 60px;  /* Desktop */
  }
}

@media (min-width: 1440px) {
  .container {
    padding: 0 80px;  /* Large desktop */
  }
}
```

### Full-Width Sections

```css
.section-full-width {
  width: 100%;
  padding-left: 0;
  padding-right: 0;
}

.section-full-width .container {
  /* Container inside full-width section */
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### Section Spacing

```css
.section {
  padding: 64px 0;  /* Mobile */
}

@media (min-width: 768px) {
  .section {
    padding: 96px 0;  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 128px 0;  /* Desktop */
  }
}
```

### Grid System

```css
.grid-services {
  display: grid;
  grid-template-columns: 1fr;  /* Mobile */
  gap: 24px;
}

@media (min-width: 640px) {
  .grid-services {
    grid-template-columns: repeat(2, 1fr);  /* Tablet */
    gap: 32px;
  }
}

@media (min-width: 1024px) {
  .grid-services {
    grid-template-columns: repeat(3, 1fr);  /* Desktop */
    gap: 40px;
  }
}
```

---

## 🎯 Design Patterns

### Hero Section

```tsx
<section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#672F8F] to-[#4D2269]">
  {/* Background pattern or image */}
  <div className="absolute inset-0 opacity-10 bg-pattern"></div>

  <div className="container relative z-10">
    <h1 className="text-white text-5xl lg:text-7xl font-bold mb-6 leading-tight">
      Professional Web Design &<br />
      <span className="text-[#E6D9F5]">SEO Services</span>
    </h1>
    <p className="text-white/90 text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed">
      Hertfordshire's leading digital agency for web design, SEO, and content creation
    </p>
    <div className="flex flex-wrap gap-4">
      <button className="bg-white text-[#672F8F] px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#F3F0FB] transition-all shadow-xl">
        Get Free Consultation
      </button>
      <button className="bg-transparent text-white px-10 py-5 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-[#672F8F] transition-all">
        View Portfolio
      </button>
    </div>
  </div>
</section>
```

### Service Card Pattern

```tsx
<div className="bg-white rounded-2xl p-10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100 group">
  <div className="w-20 h-20 bg-[#672F8F]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#672F8F] transition-colors">
    <svg className="w-10 h-10 text-[#672F8F] group-hover:text-white transition-colors">
      {/* Icon */}
    </svg>
  </div>
  <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Design</h3>
  <p className="text-gray-600 mb-6 leading-relaxed">
    Custom website design tailored to your business needs
  </p>
  <a href="/services/web-design" className="text-[#672F8F] font-semibold flex items-center hover:text-[#8347B1] transition-colors">
    Learn More →
  </a>
</div>
```

---

## 🎨 Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#672F8F',
          dark: '#4D2269',
          light: '#8347B1',
        },
        secondary: {
          lavender: '#F3F0FB',
          purpleLight: '#E6D9F5',
        },
        accent: {
          green: '#34C759',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'Courier New', 'monospace'],
      },
      maxWidth: {
        'container': '1320px',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      },
    }
  }
}
```

---

## ♿ Accessibility Guidelines

### Color Contrast (WCAG AA)

**Purple on White**:
- #672F8F on #FFFFFF: 8.1:1 ✅ Excellent

**White on Purple**:
- #FFFFFF on #672F8F: 8.1:1 ✅ Excellent

**Grey Text on White**:
- #4A5568 on #FFFFFF: 7.5:1 ✅ Excellent

### Focus States

```css
*:focus-visible {
  outline: 3px solid #672F8F;
  outline-offset: 2px;
  border-radius: 4px;
}

button:focus-visible {
  outline: 3px solid #8347B1;
  outline-offset: 3px;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
/* Mobile: Default (0-639px) */
/* Tablet: 640px - 1023px */
/* Desktop: 1024px - 1439px */
/* Large Desktop: 1440px+ */

@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

---

## 🎨 Brand Elements

### Ape/Monkey Mascot
- Use throughout site for brand personality
- Creates memorable, unique identity
- Playful yet professional
- Technology-forward character

### Rounded Corners
- Border radius: 8px (small), 12px (medium), 16px (large), 20px (extra large)
- Consistent rounded design language
- Modern, friendly aesthetic

### Purple Theme Consistency
- Purple as primary throughout
- White and lavender as supporting colors
- Green for success indicators only
- No conflicting color schemes

---

**Document Created**: 23 October 2025
**Created By**: MasterClaude Framework
**For**: Web-Smart.Co Website Redesign Project
