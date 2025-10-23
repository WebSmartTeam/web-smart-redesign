# 🎨 Web-Smart.Co - Complete Redesign Plan

**Project**: Web-Smart.Co Website Redesign
**Original Site**: https://web-smart.co/
**Created**: 23 October 2025
**Status**: Master Preparation Complete - Ready for Farmer Build

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technical Architecture](#technical-architecture)
3. [Design Approach](#design-approach)
4. [Page-by-Page Specifications](#page-by-page-specifications)
5. [Advanced Features](#advanced-features)
6. [Interactive Tools & Calculators](#interactive-tools--calculators)
7. [SEO Strategy](#seo-strategy)
8. [Performance Requirements](#performance-requirements)
9. [Timeline & Milestones](#timeline--milestones)

---

## 🎯 Project Overview

### Business Context
**Company**: Web-Smart.Co - Best SEO Agency in Hertfordshire
**Business Type**: Digital Marketing & Web Design Agency
**Location**: Hitchin, Hertfordshire, UK
**Target Market**: Local Hertfordshire businesses, SMEs, start-ups

### Current State
- **Existing Pages**: 9 main pages (homepage, services, portfolio, blog, contact, about, AI images)
- **Current Issues**: Homepage timeout (heavy content), needs modernisation, missing advanced features
- **Images Available**: 51 images catalogued, 8 screenshots collected

### Redesign Goals
1. **Modernise Design**: Full-width, modern, commercial-grade appearance
2. **Improve UX**: Better navigation, faster loading, mobile-first
3. **Add Features**: Chatbots, popups, sliders, mega menus, WhatsApp, tools
4. **Increase Conversions**: Better CTAs, lead capture, engagement tools
5. **Strengthen SEO**: Content structure, schema markup, local SEO
6. **Showcase Portfolio**: Enhanced case studies and results

---

## 🏗️ Technical Architecture

### Tech Stack (MANDATORY)

```
Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
Forms: React Hook Form + Zod validation
Sliders: Swiper.js
Icons: Lucide React
Chatbot: Tawk.to or Crisp
State: React Context + hooks
SEO: Next.js Metadata API
Analytics: Google Analytics 4
```

### Project Structure

```
web-smart-redesign/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles + Tailwind
│   ├── about/page.tsx              # About page
│   ├── services/
│   │   ├── page.tsx                # Services overview
│   │   ├── web-design/page.tsx     # Web design service
│   │   ├── seo/page.tsx            # SEO service
│   │   ├── content-writing/page.tsx # Content writing
│   │   └── google-ads/page.tsx     # Google Ads
│   ├── portfolio/page.tsx          # Portfolio/case studies
│   ├── ai-images/page.tsx          # FREE AI Generated Images
│   ├── blog/
│   │   ├── page.tsx                # Blog listing
│   │   └── [slug]/page.tsx         # Individual blog posts
│   └── contact/page.tsx            # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Header with mega menu
│   │   ├── Footer.tsx              # Footer
│   │   ├── MegaMenu.tsx            # Mega menu component
│   │   └── MobileNav.tsx           # Mobile navigation
│   ├── home/
│   │   ├── Hero.tsx                # Homepage hero
│   │   ├── ServicesGrid.tsx        # Services overview
│   │   ├── PortfolioSlider.tsx     # Portfolio carousel
│   │   └── CtaSection.tsx          # Call-to-action
│   ├── shared/
│   │   ├── ServiceCard.tsx         # Service card component
│   │   ├── TestimonialCard.tsx     # Testimonial component
│   │   ├── BlogCard.tsx            # Blog post card
│   │   └── Button.tsx              # Reusable button
│   ├── tools/
│   │   ├── WebsiteCostCalculator.tsx  # Cost calculator
│   │   ├── SEOAuditTool.tsx        # SEO checker
│   │   └── ROICalculator.tsx       # ROI calculator
│   ├── features/
│   │   ├── Chatbot.tsx             # Chatbot integration
│   │   ├── PopupManager.tsx        # Smart popups system
│   │   ├── WhatsAppButton.tsx      # WhatsApp floating button
│   │   └── ExitIntentPopup.tsx     # Exit-intent modal
│   └── ui/
│       ├── Modal.tsx               # Modal component
│       ├── Slider.tsx              # Image/content slider
│       └── Form.tsx                # Form components
├── lib/
│   ├── utils.ts                    # Utility functions
│   ├── validators.ts               # Zod schemas
│   └── constants.ts                # Site constants
├── public/
│   └── images/                     # All collected images
├── styles/
│   └── components/                 # Component-specific CSS
└── types/
    └── index.ts                    # TypeScript types
```

### Full-Width Layout System

**Container Strategy**:
```css
/* Full-width sections */
.section-full {
  width: 100%;
  padding: 0;
}

/* Constrained content within full-width */
.section-content {
  max-width: 1280px;  /* Main content constraint */
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Breakpoints */
sm: 640px   - Mobile landscape
md: 768px   - Tablet
lg: 1024px  - Small desktop
xl: 1280px  - Desktop (content width)
2xl: 1536px - Large desktop
```

**Implementation Example**:
```tsx
<section className="section-full bg-purple-50">
  <div className="section-content py-20">
    {/* Content constrained to 1280px */}
  </div>
</section>
```

---

## 🎨 Design Approach

### Brand Identity
- **Primary Colour**: Purple #672F8F (professional, creative)
- **Secondary**: Lavender #F3F0FB (soft, welcoming)
- **Accent**: Green #34C759 (success, growth)
- **Brand Mascot**: Ape/monkey character (playful, memorable)

### Design Principles

1. **Full-Width Sections**: Modern, immersive experience
2. **Purple Theme**: Consistent brand colour throughout
3. **Rounded Corners**: 8px, 12px, 16px, 20px (friendly, modern)
4. **Generous Spacing**: 80px, 100px, 120px section spacing
5. **Card-Based Layouts**: Elevated surfaces with shadows
6. **Mobile-First**: Design for mobile, enhance for desktop
7. **Accessibility**: WCAG 2.1 AA compliance minimum

### Typography Scale
```css
/* Using Inter (body) and Poppins (headings) */
H1: clamp(2.5rem, 5vw, 4rem)       /* 40-64px */
H2: clamp(2rem, 4vw, 3rem)         /* 32-48px */
H3: clamp(1.5rem, 3vw, 2rem)       /* 24-32px */
Body: clamp(1rem, 1.5vw, 1.125rem) /* 16-18px */
```

---

## 📄 Page-by-Page Specifications

### 1. Homepage (`/`)

**Purpose**: Convert visitors, showcase services, demonstrate expertise

**Sections**:

#### Hero Section
- **Layout**: Full-width background, centered content (1280px)
- **Content**:
  - Headline: "Best SEO Agency in Hertfordshire"
  - Subheadline: "Web Design | SEO | Content Writing | Digital Marketing"
  - Primary CTA: "Get Free Consultation"
  - Secondary CTA: "View Our Work"
  - Ape mascot character (animated)
- **Features**:
  - Video background or animated gradient
  - Scroll indicator
  - Trust badges (Google Partner, reviews)

#### About Section
- **Layout**: 2-column (image left, text right)
- **Content**:
  - Company introduction
  - 52 Walsworth Rd studio location
  - Pete Gypps + team
  - Years of experience
- **Features**:
  - Image: Studio/team photo with ape mascot
  - CTA: "Learn More About Us"

#### Services Overview
- **Layout**: 4-card grid (responsive)
- **Cards**:
  1. Web Design Services
  2. SEO Services
  3. Website Content Writing
  4. Google Ads Management
- **Each Card**:
  - Icon (ape-themed)
  - Service name
  - 2-3 sentence description
  - "Learn More" link
  - Hover animation (lift + shadow)

#### Portfolio Slider
- **Layout**: Full-width Swiper carousel
- **Content**: 6-8 case studies
- **Each Slide**:
  - Project image
  - Client name
  - Services provided
  - Results achieved (if available)
  - "View Project" CTA
- **Features**:
  - Autoplay (6s)
  - Navigation arrows
  - Pagination dots
  - Swipe/drag enabled

#### Why Choose Web-Smart
- **Layout**: Feature grid (3 columns)
- **Features**:
  1. Local Expertise (Hitchin, Hertfordshire)
  2. SEO Specialisation
  3. AI-Powered Services
  4. Comprehensive Solutions
  5. Modern Technology
  6. Proven Results
- **Visual**: Icons + short descriptions

#### Testimonials Slider
- **Layout**: Centered slider (speech bubble design)
- **Content**: 5-8 client testimonials
- **Features**:
  - Client name + business
  - Quote (2-3 sentences)
  - Star rating
  - Autoplay
  - Navigation

#### Interactive Tools Preview
- **Layout**: 3-card grid
- **Cards**:
  1. "Website Cost Calculator" - Estimate project cost
  2. "SEO Audit Tool" - Quick site check
  3. "ROI Calculator" - Calculate digital marketing ROI
- **CTA**: "Try [Tool Name] Free"

#### Latest Blog Posts
- **Layout**: 3-column grid
- **Content**: Latest 3 blog posts
- **Each Card**:
  - Featured image
  - Title
  - Excerpt (100 characters)
  - Author (Pete Gypps)
  - Date
  - "Read More" link
- **CTA**: "View All Blog Posts"

#### Final CTA Section
- **Layout**: Full-width purple background
- **Content**:
  - Headline: "Ready to Transform Your Digital Presence?"
  - Subheadline: "Get a free consultation and project quote"
  - Primary CTA: "Book Free Consultation"
  - Secondary: "Call 01462 544738"
- **Features**:
  - Phone number (clickable tel: link)
  - Email link
  - WhatsApp link
  - Animated ape mascot

---

### 2. Web Design Services (`/services/web-design`)

**Purpose**: Showcase web design expertise, convert inquiries

**Sections**:

#### Service Hero
- **Layout**: Split (image right, content left)
- **Content**:
  - H1: "Professional Web Design Services"
  - Subheadline: "Custom websites that drive results"
  - Key benefits (3 bullet points)
  - CTA: "Get Free Quote"
- **Image**: Website mockup or design process

#### What We Offer
- **Layout**: Feature list (icon + text)
- **Services**:
  - Static website design
  - WordPress development
  - Mobile-first responsive design
  - E-commerce solutions
  - Website redesigns
  - Ongoing maintenance
- **Visual**: Icons + descriptions

#### Our Process
- **Layout**: 5-step timeline/roadmap
- **Steps**:
  1. Discovery & Planning
  2. Design & Mockups
  3. Development
  4. Testing & QA
  5. Launch & Support
- **Visual**: Timeline with connecting lines

#### Pricing Packages
- **Layout**: 3-column pricing table
- **Packages**:
  1. Starter (static sites)
  2. Professional (WordPress)
  3. Enterprise (custom solutions)
- **Each Package**:
  - Price range
  - Features included
  - "Get Started" CTA

#### Portfolio Examples
- **Layout**: Grid (2x3)
- **Content**: 6 web design case studies
- **CTA**: "View Full Portfolio"

#### CTA Section
- **Content**: Free consultation offer
- **Form**: Quick inquiry form (name, email, phone, project type)

---

### 3. SEO Services (`/services/seo`)

**Purpose**: Demonstrate SEO expertise, sell SEO Foundation Pack

**Sections**:

#### Service Hero
- **Content**:
  - H1: "SEO Services - Best SEO Agency in Hertfordshire"
  - Subheadline: "Improve rankings, drive traffic, grow revenue"
  - Trust indicator: "Proven results for Hertfordshire businesses"
  - CTA: "Get SEO Foundation Pack"

#### SEO Foundation Pack
- **Layout**: Feature box (highlighted)
- **Content**:
  - Price: £1,499
  - What's included (list)
  - Results expected
  - Money-back guarantee (if applicable)
- **CTA**: "Purchase Foundation Pack"

#### SEO Services List
- **Layout**: Accordion or expandable sections
- **Services**:
  - Keyword research & strategy
  - On-page SEO optimization
  - Technical SEO audits
  - Link building campaigns
  - Local SEO (Hertfordshire)
  - AI-powered SEO strategies
- **Each Section**: Expandable description

#### Why SEO Matters
- **Layout**: Statistics + explanations
- **Stats**:
  - "93% of online experiences begin with a search engine"
  - "75% never scroll past first page"
  - "SEO leads have 14.6% close rate vs 1.7% for outbound"
- **Visual**: Charts or infographics

#### Local SEO Focus
- **Layout**: Map + service areas
- **Content**:
  - Hitchin (primary)
  - Stevenage, Letchworth, Baldock
  - Wider Hertfordshire
- **Visual**: Interactive map or static map image

#### Case Studies
- **Layout**: Before/after comparisons
- **Content**: 3-4 SEO success stories
- **Metrics**: Rankings improved, traffic increased

#### Free SEO Audit Tool
- **Layout**: Embedded tool
- **Functionality**: Enter URL, get basic SEO score
- **Lead Capture**: Email required for detailed report

#### CTA Section
- **Content**: Book SEO consultation

---

### 4. Website Content Writing (`/services/content-writing`)

**Purpose**: Showcase content writing services

**Sections**:

#### Service Hero
- **H1**: "Professional Website Content Writing"
- **Subheadline**: "SEO-optimized content that engages and converts"

#### Content Services
- **Layout**: Grid (2x3)
- **Services**:
  - SEO-optimized blog writing
  - Website copy creation
  - AI-generated content
  - Content strategy development
  - Product descriptions
  - Landing page copy

#### Content Process
- **Steps**:
  1. Brief & Research
  2. Outline & Approval
  3. Writing & Editing
  4. SEO Optimization
  5. Delivery & Revisions

#### Pricing
- **Blog Posts**: From £X per 1,000 words
- **Website Pages**: From £X per page
- **Packages**: Content bundles

#### Samples
- **Layout**: Excerpts from previous work
- **Categories**: Blogs, landing pages, product descriptions

#### CTA Section
- **Content**: Request content quote

---

### 5. Portfolio (`/portfolio`)

**Purpose**: Showcase client work, build trust

**Sections**:

#### Portfolio Hero
- **H1**: "Our Work"
- **Subheadline**: "Delivering results for Hertfordshire businesses"
- **Filter**: All / Web Design / SEO / Content

#### Project Grid
- **Layout**: Masonry grid (responsive)
- **Each Project**:
  - Featured image
  - Client name
  - Services provided
  - Results/stats (if available)
  - "View Case Study" link
- **Load More**: Pagination or infinite scroll

#### Individual Case Study (modal or page)
- **Layout**: Full project details
- **Content**:
  - Client background
  - Challenge/problem
  - Our solution
  - Services provided
  - Results achieved
  - Client testimonial
  - Project images (slider)
- **CTA**: "Start Your Project"

---

### 6. FREE AI Generated Images (`/ai-images`)

**Purpose**: Lead magnet, demonstrate AI capabilities

**Sections**:

#### AI Images Hero
- **H1**: "Free AI Generated Images"
- **Subheadline**: "Professional images created with AI - completely free"

#### How It Works
- **Steps**:
  1. Describe your image
  2. We generate with AI
  3. Download and use
- **Turnaround**: 24-48 hours

#### Image Gallery
- **Layout**: Grid of example AI images
- **Categories**: Business, technology, lifestyle, abstract
- **Lightbox**: Click to enlarge

#### Request Form
- **Fields**:
  - Name
  - Email (required - lead capture)
  - Image description
  - Quantity (1-5)
  - Use case
- **CTA**: "Request Free Images"

#### Why AI Images
- **Benefits**:
  - Cost-effective (free)
  - Unique (no stock photo look)
  - Fast turnaround
  - Custom to your needs

---

### 7. About Us (`/about`)

**Purpose**: Build trust, humanise brand

**Sections**:

#### About Hero
- **Layout**: Image background or video
- **Content**:
  - H1: "Best SEO Agency in Hertfordshire"
  - Subheadline: "Professional web design and digital marketing from Hitchin"

#### Our Story
- **Content**:
  - Company history
  - Studio at 52 Walsworth Rd
  - Hitchin, Hertfordshire base
  - Local expertise

#### Team Section
- **Layout**: Team member cards
- **Featured**:
  - Pete Gypps (photo, bio, LinkedIn link)
  - Design team
- **Visual**: Professional photos with ape mascot

#### Why Choose Us
- **Content**:
  - Local presence (Hitchin)
  - SEO specialisation
  - Modern technology (AI-powered)
  - Comprehensive services
  - Portfolio of success

#### Service Areas
- **Layout**: Map + list
- **Areas**:
  - Hitchin (primary)
  - Stevenage
  - Letchworth
  - Baldock
  - Wider Hertfordshire

#### Values
- **Layout**: Icon + text grid
- **Values**:
  - Quality
  - Innovation
  - Local expertise
  - Modern technology
  - SEO excellence

#### CTA Section
- **Content**: Book consultation

---

### 8. Blog (`/blog`)

**Purpose**: Content marketing, SEO, thought leadership

**Sections**:

#### Blog Hero
- **H1**: "Web Design & SEO Insights"
- **Subheadline**: "Tips, guides, and industry news"

#### Featured Post
- **Layout**: Large hero card
- **Content**: Latest or featured blog post
- **Visual**: Large featured image

#### Blog Grid
- **Layout**: 3-column grid
- **Each Card**:
  - Featured image
  - Title
  - Excerpt (150 chars)
  - Author (Pete Gypps)
  - Date
  - Category tag
  - "Read More" link
- **Pagination**: Load more or page numbers

#### Sidebar (desktop)
- **Categories**: Filter by topic
- **Recent Posts**: List of 5 recent
- **Newsletter Signup**: Email capture
- **Popular Tags**: Tag cloud

#### Individual Blog Post (`/blog/[slug]`)
- **Layout**: Single column (readable width)
- **Content**:
  - Title
  - Author + date
  - Featured image
  - Content (formatted)
  - Tags
  - Author bio
  - Related posts (3)
  - Social share buttons
  - Comments (optional)
- **CTA**: Newsletter signup or consultation

---

### 9. Contact (`/contact`)

**Purpose**: Make it easy to get in touch, convert inquiries

**Sections**:

#### Contact Hero
- **H1**: "Get In Touch"
- **Subheadline**: "Ready to transform your digital presence?"

#### Contact Form
- **Layout**: 2-column (form left, info right)
- **Form Fields**:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Company (optional)
  - Service interested in (dropdown)
  - Message (textarea, required)
  - Budget range (dropdown, optional)
- **Validation**: React Hook Form + Zod
- **Submit**: "Send Message"
- **Success**: Thank you message + auto-redirect

#### Contact Information Cards
- **Layout**: 4 cards
- **Cards**:
  1. **Phone**: 01462 544738 (clickable)
  2. **Email**: enquiries@web-smart.co (clickable)
  3. **Address**: 52 Walsworth Rd, Hitchin, Hertfordshire SG4 9SX
  4. **Hours**: Mon-Fri 09:00-18:00

#### Map
- **Layout**: Full-width embedded Google Map
- **Location**: 52 Walsworth Rd, Hitchin
- **Marker**: Custom ape mascot marker

#### Alternative Contact Methods
- **Layout**: Button row
- **Options**:
  - WhatsApp (opens WhatsApp chat)
  - LinkedIn (Pete Gypps profile)
  - Book Consultation (calendar link)

#### FAQ Section
- **Layout**: Accordion
- **Questions**:
  - "How much does a website cost?"
  - "How long does web design take?"
  - "What's included in SEO Foundation Pack?"
  - "Do you offer support after launch?"
  - "What areas do you serve?"

---

## 🚀 Advanced Features

### 1. Mega Menu (Desktop)

**Purpose**: Showcase all services, improve navigation

**Trigger**: Hover on "Services" in header

**Layout**:
```
┌─────────────────────────────────────────────────┐
│  Services (hover to expand)                      │
├─────────────────────────────────────────────────┤
│  Web Design        SEO Services    Content       │
│  ├ Static Sites    ├ Foundation    ├ Blogs       │
│  ├ WordPress       │   Pack        ├ Website Copy│
│  ├ E-commerce      ├ Local SEO     ├ AI Content  │
│  ├ Redesigns       ├ Technical     └ Strategy    │
│  └ Maintenance     └ Link Building               │
│                                                   │
│  Digital Marketing    Free Tools                 │
│  ├ Google Ads        ├ Cost Calculator           │
│  ├ Social Media      ├ SEO Audit                 │
│  └ Branding          └ ROI Calculator            │
└─────────────────────────────────────────────────┘
```

**Features**:
- Full-width dropdown
- 3-4 column layout
- Service icons
- Smooth fade-in animation
- Purple background with subtle pattern
- Hover states on individual links
- "View All Services" CTA at bottom

**Implementation**: Framer Motion for animations

---

### 2. Chatbot Integration

**Provider**: Tawk.to or Crisp

**Customisation**:
- **Widget Colour**: Purple #672F8F
- **Position**: Bottom right (desktop), bottom center (mobile)
- **Icon**: Custom ape mascot avatar
- **Welcome Message**: "Hi! 👋 I'm here to help with your web design and SEO questions. How can I assist you today?"

**Pre-set Responses**:
1. "I need a website" → Link to Web Design page
2. "Tell me about SEO" → Link to SEO Foundation Pack
3. "What's your pricing?" → Link to pricing/quote
4. "Book consultation" → Calendar link

**Offline Mode**:
- Hours: Mon-Fri 09:00-18:00
- Offline message: "We're currently offline. Leave a message and we'll respond within 24 hours!"

**Lead Capture**:
- Collect name + email before chat
- Store in CRM or email

---

### 3. Smart Popup System

**Purpose**: Capture leads without annoying visitors

**3 Popup Types**:

#### A. Exit-Intent Popup
**Trigger**: Mouse moves toward browser close/back button
**Frequency**: Once per session (cookie-based)
**Content**:
- Headline: "Wait! Before You Go..."
- Subheadline: "Get a FREE website audit worth £500"
- Form: Email + optional phone
- CTA: "Get Free Audit"
- Close: Easy to dismiss (X button)
**Design**: Modal overlay, purple border, ape mascot

#### B. Timed Popup (45 seconds)
**Trigger**: After 45 seconds on site
**Frequency**: Once per visit
**Content**:
- Headline: "New Here? 👋"
- Subheadline: "Get our free guide: '10 Ways to Improve Your Website SEO'"
- Form: Email only
- CTA: "Download Free Guide"
**Design**: Smaller modal, bottom-right corner option

#### C. Scroll-Triggered Popup (60%)
**Trigger**: User scrolls 60% down long pages (blog posts, services)
**Frequency**: Once per page
**Content**:
- Headline: "Enjoying this content?"
- Subheadline: "Get weekly SEO and web design tips"
- Form: Email only
- CTA: "Subscribe"
**Design**: Slide-up from bottom, non-intrusive

**Popup Rules**:
- Only 1 popup per session
- Priority: Exit-intent > Scroll > Timed
- Easy to close (large X, ESC key, click outside)
- Mobile-friendly (full-width on small screens)
- Cookie-based tracking (don't show again for 7 days)

**Implementation**:
```tsx
// components/features/PopupManager.tsx
- Track user behavior (scroll, time, mouse position)
- Cookie management
- Popup queue system
- Form validation
- Email API integration
```

---

### 4. WhatsApp Integration

**Purpose**: Easy mobile contact, instant communication

**Implementation**: Floating WhatsApp button

**Position**: Bottom left (opposite chatbot)

**Button Design**:
- WhatsApp green background
- WhatsApp icon (white)
- Pulse animation (subtle)
- Tooltip on hover: "Chat on WhatsApp"

**Click Behavior**:
Opens WhatsApp with pre-filled message:
```
Hi Web-Smart! I'm interested in [YOUR SERVICES].
I found you on web-smart.co and would like to discuss my project.
```

**Phone Number**: +44 1462 544738 (verify with client)

**Context-Aware Messages** (optional advanced):
- Homepage: "I'm interested in your services"
- SEO page: "I'd like to know more about SEO services"
- Contact page: "I'd like to get in touch"

**Mobile Behavior**:
- Opens WhatsApp app directly
- Desktop: Opens WhatsApp Web

**Responsiveness**:
- Always visible on mobile (higher conversion)
- Desktop: Smaller, bottom left
- Tablet: Medium size, bottom left

---

### 5. Image & Content Sliders

**Using Swiper.js**

#### A. Portfolio Slider (Homepage)
- **Type**: Card carousel
- **Items**: 6-8 portfolio projects
- **Features**:
  - Autoplay (6 seconds)
  - Loop enabled
  - Navigation arrows (purple)
  - Pagination dots
  - Swipe/drag
  - Responsive (1 on mobile, 2 on tablet, 3 on desktop)

#### B. Testimonials Slider (Homepage, Services)
- **Type**: Centered slide
- **Items**: 5-10 testimonials
- **Design**: Speech bubble style
- **Features**:
  - Autoplay (8 seconds)
  - Fade transition
  - Navigation
  - Pagination

#### C. Blog Featured Slider
- **Type**: Hero slider
- **Items**: 3-5 featured posts
- **Features**:
  - Parallax effect
  - Autoplay (10 seconds)
  - Navigation
  - Progress bar

#### D. Service Gallery Sliders
- **Type**: Lightbox gallery
- **Items**: Project images
- **Features**:
  - Click to open lightbox
  - Full-screen viewing
  - Navigation arrows
  - Thumbnails
  - Zoom capability

**Slider Settings**:
```tsx
// Swiper configuration
- Speed: 800ms (smooth)
- Autoplay: True (with pause on hover)
- Loop: True
- Keyboard: True (accessibility)
- A11y: True (screen reader support)
- Lazy loading: True (performance)
```

---

### 6. Mobile Navigation

**Purpose**: Intuitive mobile menu

**Trigger**: Hamburger icon (≡) in header

**Design**: Full-screen overlay

**Animation**: Slide in from right with fade

**Menu Content**:
- Logo at top
- Navigation links (large, readable)
- Services submenu (expandable accordion)
- CTAs: "Free Consultation" button
- Contact info (phone, email)
- Social links
- Close button (X, top right)

**Features**:
- Backdrop blur
- Purple gradient background
- Smooth transitions (Framer Motion)
- ESC key closes
- Prevents body scroll when open

---

## 🧮 Interactive Tools & Calculators

### 1. Website Cost Calculator

**Location**: Homepage + Services pages

**Purpose**: Lead generation, transparency, engagement

**Functionality**:

**Step 1: Project Type**
- [ ] Static Website (5-10 pages)
- [ ] WordPress Website (10-20 pages)
- [ ] E-commerce Website
- [ ] Website Redesign
- [ ] Custom Web Application

**Step 2: Features Needed**
- [ ] Blog/News Section
- [ ] Contact Forms
- [ ] Image Galleries
- [ ] SEO Optimization
- [ ] E-commerce (product listings)
- [ ] User Accounts/Login
- [ ] Booking System
- [ ] Live Chat Integration
- [ ] Custom Animations

**Step 3: Additional Services**
- [ ] Content Writing
- [ ] Logo/Branding Design
- [ ] Social Media Setup
- [ ] Hosting & Maintenance
- [ ] Training

**Step 4: Timeline**
- Rush (2-4 weeks) - 20% premium
- Normal (4-8 weeks) - Standard
- Flexible (8-12 weeks) - 10% discount

**Output**:
```
Estimated Project Cost: £2,500 - £4,000

Breakdown:
- Website Development: £2,000 - £3,000
- Content Writing: £300 - £500
- SEO Setup: £200 - £500

Next Steps:
[Get Detailed Quote] button
→ Opens form with email capture + project details
```

**Lead Capture**:
- Email required to see detailed breakdown
- Option to receive PDF quote
- Auto-follow-up email with consultation booking link

**Design**:
- Multi-step form (4 steps)
- Progress indicator
- Purple gradient buttons
- Checkboxes with custom styling
- Smooth transitions between steps

---

### 2. SEO Audit Tool

**Location**: SEO Services page + Homepage

**Purpose**: Demonstrate expertise, capture leads

**Functionality**:

**Input**:
- Website URL (required)
- Email (required for detailed report)

**Analysis** (basic, instant):
1. **Page Speed**: Load time check
2. **Mobile-Friendly**: Responsive test
3. **Meta Tags**: Title + description check
4. **Headings**: H1-H6 structure
5. **Images**: Alt text check
6. **HTTPS**: Security check

**Output**:
```
SEO Score: 68/100

✅ Strengths:
- HTTPS enabled
- Mobile-friendly design

⚠️ Issues Found:
- Missing meta description (5 pages)
- 12 images without alt text
- Page load time: 4.2s (slow)

[Get Full Audit Report] button
→ Email capture for detailed 20-point PDF report
```

**Premium Upsell**:
- "Want a professional SEO audit?"
- Link to SEO Foundation Pack (£1,499)
- "Book Free Consultation" button

**Technical Implementation**:
- Use Google PageSpeed Insights API
- Basic HTML parsing for meta tags
- Responsive design check
- Email report generation (PDF)

---

### 3. ROI Calculator (Digital Marketing)

**Location**: Homepage + Services pages

**Purpose**: Demonstrate value proposition

**Functionality**:

**Inputs**:
1. **Current Website Traffic** (monthly visitors)
2. **Current Conversion Rate** (%)
3. **Average Order Value** (£)
4. **Investment in Marketing** (£/month)

**Calculations**:

**Scenario 1: Current State**
```
Monthly Revenue = Traffic × Conversion Rate × AOV
ROI = (Revenue - Investment) / Investment × 100
```

**Scenario 2: With Web-Smart Services** (projected)
```
Improved Traffic = Current + 50% (SEO impact)
Improved Conversion = Current + 30% (design impact)
New Revenue = Improved Traffic × Improved Conversion × AOV
New ROI = (New Revenue - Investment) / Investment × 100
```

**Output**:
```
Your Current Situation:
- Monthly Visitors: 1,000
- Conversion Rate: 2%
- Monthly Revenue: £1,000
- ROI: 100%

With Web-Smart Services:
- Projected Visitors: 1,500 (+50%)
- Conversion Rate: 2.6% (+30%)
- Projected Revenue: £1,950 (+95%)
- Projected ROI: 195%

Potential Additional Revenue: £950/month
Annual Impact: £11,400

[Book Free Consultation] button
```

**Lead Capture**:
- Email to receive detailed projection
- Option to book consultation

**Design**:
- Side-by-side comparison (current vs projected)
- Green for positive improvements
- Bar charts or progress indicators
- Purple CTAs

---

### 4. Local SEO Checker

**Location**: SEO Services page

**Purpose**: Local business lead generation

**Functionality**:

**Inputs**:
- Business Name
- Town/City (e.g., Hitchin, Stevenage)
- Industry/Category

**Analysis**:
1. **Google My Business**: Listing presence check
2. **Local Citations**: NAP consistency check
3. **Local Keywords**: Ranking check for "[service] in [location]"
4. **Reviews**: Google reviews count and rating
5. **Local Pack**: Presence in Google 3-pack

**Output**:
```
Local SEO Score: 42/100

✅ What's Working:
- Google My Business listing found
- 23 Google reviews (4.5 stars)

❌ Issues:
- Not appearing in local 3-pack for "web design Hitchin"
- Inconsistent NAP across directories
- Missing location pages on website

[Improve Your Local SEO] CTA
→ Links to Local SEO service package
```

**Lead Capture**:
- Email required for full report
- Book consultation for local SEO strategy

---

## 🔍 SEO Strategy

### On-Page SEO

#### Keyword Strategy

**Primary Keywords**:
- Web design Hertfordshire
- SEO agency Hertfordshire
- Best SEO agency Hertfordshire (claimed in tagline)
- Hitchin web designer
- Stevenage SEO
- Website content writing Hertfordshire

**Long-Tail Keywords** (blog content):
- "How much does a website cost in Hertfordshire"
- "Best SEO practices for local businesses"
- "Website design vs WordPress - which is better"
- "How to improve website SEO"

#### Metadata Optimization

**Homepage**:
```html
<title>Web-Smart.Co - Best SEO Agency in Hertfordshire | Web Design & Digital Marketing</title>
<meta name="description" content="Professional web design, SEO, and digital marketing services in Hitchin, Hertfordshire. Custom websites, proven SEO strategies, and AI-powered content. Call 01462 544738." />
```

**Service Pages**: Template
```html
<title>[Service Name] - Web-Smart.Co | Hertfordshire [Service] Experts</title>
<meta name="description" content="Professional [service] services in Hitchin, Hertfordshire. [Key benefit]. [Key benefit]. Get a free consultation. Call 01462 544738." />
```

#### Schema Markup

**LocalBusiness Schema** (all pages):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Web-Smart.Co",
  "description": "Digital Marketing & Web Design Agency",
  "image": "https://web-smart.co/logo.png",
  "url": "https://web-smart.co",
  "telephone": "+441462544738",
  "email": "enquiries@web-smart.co",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "52 Walsworth Rd",
    "addressLocality": "Hitchin",
    "addressRegion": "Hertfordshire",
    "postalCode": "SG4 9SX",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.9516",
    "longitude": "-0.2834"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "££",
  "areaServed": ["Hitchin", "Stevenage", "Letchworth", "Baldock", "Hertfordshire"]
}
```

**Service Schema** (service pages):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SEO Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Web-Smart.Co"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.9516",
      "longitude": "-0.2834"
    },
    "geoRadius": "50000"
  },
  "offers": {
    "@type": "Offer",
    "price": "1499",
    "priceCurrency": "GBP",
    "name": "SEO Foundation Pack"
  }
}
```

**BlogPosting Schema** (blog posts):
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Blog Post Title",
  "image": "featured-image.jpg",
  "datePublished": "2025-10-23",
  "author": {
    "@type": "Person",
    "name": "Pete Gypps",
    "url": "https://www.linkedin.com/in/pete-gypps"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Web-Smart.Co",
    "logo": {
      "@type": "ImageObject",
      "url": "https://web-smart.co/logo.png"
    }
  }
}
```

#### Internal Linking Strategy

**Homepage Links To**:
- All service pages
- Portfolio
- About
- Blog
- Contact
- Free AI Images

**Service Pages Link To**:
- Related services
- Portfolio examples
- Relevant blog posts
- Tools/calculators
- Contact/quote

**Blog Posts Link To**:
- Relevant service pages (2-3 per post)
- Related blog posts (3-4)
- Tools/calculators
- Contact

**Footer Links** (all pages):
- All main navigation
- Social profiles
- Privacy policy
- Terms of service
- Sitemap

---

### Technical SEO

#### Performance Optimization

**Targets**:
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

**Strategies**:
1. **Image Optimization**:
   - WebP format with fallbacks
   - Responsive images (`srcset`)
   - Lazy loading (below fold)
   - Proper sizing (no oversized images)
   - Compression (TinyPNG/ImageOptim)

2. **Code Optimization**:
   - Next.js automatic code splitting
   - Tree shaking (remove unused code)
   - Minification (CSS, JS)
   - Critical CSS inline
   - Defer non-critical JS

3. **Caching**:
   - Static generation (Next.js SSG)
   - CDN for assets (Vercel/Netlify)
   - Browser caching headers
   - Service worker (optional PWA)

4. **Fonts**:
   - Self-host Google Fonts (Next.js)
   - `font-display: swap`
   - Subset fonts (Latin only)
   - Preload critical fonts

#### Mobile Optimization

**Requirements**:
- Mobile-first design
- Touch-friendly buttons (min 44x44px)
- Readable fonts (min 16px body)
- No horizontal scroll
- Fast mobile load times
- Responsive images

**Testing**:
- Google Mobile-Friendly Test
- Chrome DevTools device emulation
- Real device testing (iOS, Android)

#### Crawling & Indexing

**Files**:

**robots.txt**:
```
User-agent: *
Allow: /

Sitemap: https://web-smart.co/sitemap.xml
```

**sitemap.xml**: Auto-generated by Next.js
- All pages indexed
- Blog posts included
- Priority levels set
- Update frequency indicated

**Canonical URLs**: All pages have self-referencing canonical tags

**Pagination**: Use rel="next" and rel="prev" for blog pagination

---

### Local SEO

#### Google My Business Optimization

**Profile Completeness**:
- Business name: Web-Smart.Co
- Category: Marketing Agency
- Address: 52 Walsworth Rd, Hitchin SG4 9SX
- Phone: 01462 544738
- Website: https://web-smart.co
- Hours: Mon-Fri 09:00-18:00
- Description: 150-character optimized description
- Services: All 4+ services listed
- Photos: 20+ professional photos (exterior, interior, team, work)
- Logo: Ape mascot logo uploaded

**Posts**:
- Weekly Google Posts (using Google Posts Farmer system)
- Mix of updates, offers, events
- Include CTAs and links

**Reviews**:
- Target: 50+ reviews, 4.5+ stars
- Review request system
- Respond to all reviews (positive and negative)
- Showcase reviews on website

#### Local Citations

**Top Directories** (NAP consistency):
- Bing Places
- Apple Maps
- Yell.com
- Thomson Local
- Scoot
- Yelp UK
- Facebook Business Page
- LinkedIn Company Page

**NAP Format** (consistent everywhere):
```
Web-Smart.Co
52 Walsworth Rd
Hitchin
Hertfordshire
SG4 9SX
United Kingdom
01462 544738
enquiries@web-smart.co
```

#### Location Pages

**Create Individual Pages**:
1. Web Design Hitchin
2. SEO Services Stevenage
3. Digital Marketing Letchworth
4. Web Design Baldock
5. SEO Agency Hertfordshire

**Each Page Content**:
- H1: [Service] in [Location]
- 500+ words local content
- Mentions local landmarks
- Service areas map
- Local testimonials
- Local case studies
- FAQ about serving that area

---

### Content Strategy

#### Blog Content Calendar

**Topics** (2-3 posts/month):

**Month 1**:
1. "How Much Does a Website Cost in Hertfordshire? [2025 Guide]"
2. "10 Essential SEO Tips for Local Hertfordshire Businesses"
3. "Static vs WordPress: Which Website Is Right for Your Business?"

**Month 2**:
4. "AI-Powered Content Writing: The Future of Website Content"
5. "How to Choose a Web Design Agency in Hitchin"
6. "Google Ads vs SEO: Which Is Better for Your Business?"

**Month 3**:
7. "Website Redesign Checklist: When and How to Redesign"
8. "Local SEO for Hertfordshire Businesses: Complete Guide"
9. "5 Website Mistakes Killing Your Conversions"

**Ongoing Themes**:
- Local business spotlights
- Case studies (portfolio deep-dives)
- Industry trends
- How-to guides
- SEO tips
- Web design best practices

**Blog Post Structure**:
- 1,500-2,500 words
- H2/H3 structure
- Featured image
- Internal links (3-5 to services/other posts)
- External links (authoritative sources)
- Author bio (Pete Gypps)
- Related posts section
- Social share buttons
- FAQ section (for featured snippets)

---

## 📈 Performance Requirements

### Lighthouse Scores (Minimum Targets)

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1

### Page Load Times

- **Homepage**: < 2 seconds (3G)
- **Service Pages**: < 2.5 seconds
- **Blog Posts**: < 3 seconds

### Accessibility (WCAG 2.1 AA)

**Requirements**:
- Keyboard navigation fully functional
- Screen reader compatible (ARIA labels)
- Sufficient colour contrast (4.5:1 text, 3:1 UI)
- Focus indicators visible
- Alt text on all images
- Semantic HTML (headings hierarchy)
- Skip to main content link
- Form labels and error messages
- No flashing content
- Captions on videos (if added)

**Testing Tools**:
- Lighthouse accessibility audit
- WAVE browser extension
- axe DevTools
- Keyboard-only navigation test
- Screen reader test (VoiceOver/NVDA)

---

## ⏱️ Timeline & Milestones

### Phase 1: Setup & Design System (Days 1-2)

**Day 1**:
- [x] Create Next.js 14 project
- [x] Install dependencies (Tailwind, Framer Motion, Swiper, etc.)
- [x] Configure Tailwind with design system
- [x] Create colour variables
- [x] Setup typography scale
- [x] Create base layout (Header, Footer)

**Day 2**:
- [ ] Build Header component with mega menu
- [ ] Build Footer component
- [ ] Create mobile navigation
- [ ] Setup WhatsApp button component
- [ ] Prepare image assets (optimize, convert to WebP)

**Deliverable**: Working layout system with navigation

---

### Phase 2: Homepage Build (Days 3-4)

**Day 3**:
- [ ] Hero section
- [ ] About section
- [ ] Services overview grid
- [ ] Portfolio slider (Swiper)
- [ ] Why Choose Us section

**Day 4**:
- [ ] Testimonials slider
- [ ] Interactive tools preview
- [ ] Latest blog posts grid
- [ ] Final CTA section
- [ ] Mobile responsiveness check

**Deliverable**: Complete functional homepage

---

### Phase 3: Service Pages (Days 5-7)

**Day 5**:
- [ ] Web Design Services page
- [ ] SEO Services page (with Foundation Pack highlight)

**Day 6**:
- [ ] Website Content Writing page
- [ ] Google Ads page
- [ ] Services overview/hub page

**Day 7**:
- [ ] Pricing tables/packages
- [ ] Service page CTAs and forms
- [ ] Internal linking between services

**Deliverable**: All service pages complete

---

### Phase 4: Portfolio & About Pages (Days 8-9)

**Day 8**:
- [ ] Portfolio grid page
- [ ] Individual case study modals/pages
- [ ] Filtering system
- [ ] Lightbox for images

**Day 9**:
- [ ] About Us page
- [ ] Team section (Pete Gypps profile)
- [ ] Service areas map
- [ ] Company values

**Deliverable**: Portfolio and About complete

---

### Phase 5: Blog & AI Images Pages (Day 10)

- [ ] Blog listing page
- [ ] Blog post template
- [ ] 2-3 sample blog posts (using content from original)
- [ ] FREE AI Images page
- [ ] AI images request form

**Deliverable**: Blog and AI Images pages ready

---

### Phase 6: Contact Page (Day 11)

- [ ] Contact form (React Hook Form + Zod)
- [ ] Contact information cards
- [ ] Google Maps embed
- [ ] FAQ accordion
- [ ] Alternative contact methods
- [ ] Form validation and error handling

**Deliverable**: Complete contact page with working form

---

### Phase 7: Advanced Features (Days 12-14)

**Day 12**:
- [ ] Chatbot integration (Tawk.to/Crisp)
- [ ] Popup system (exit-intent, timed, scroll)
- [ ] WhatsApp context-aware messages

**Day 13**:
- [ ] All sliders configured and tested
- [ ] Mega menu final polish
- [ ] Mobile navigation refinements

**Day 14**:
- [ ] Website Cost Calculator
- [ ] SEO Audit Tool (basic)
- [ ] ROI Calculator

**Deliverable**: All advanced features working

---

### Phase 8: Calculators & Tools (Days 15-16)

**Day 15**:
- [ ] Website Cost Calculator (multi-step)
- [ ] SEO Audit Tool integration
- [ ] Email capture for calculator results

**Day 16**:
- [ ] ROI Calculator
- [ ] Local SEO Checker
- [ ] All tools tested and validated

**Deliverable**: Interactive tools functional

---

### Phase 9: SEO & Performance (Days 17-18)

**Day 17**:
- [ ] Metadata on all pages
- [ ] Schema markup (LocalBusiness, Service, BlogPosting)
- [ ] robots.txt + sitemap.xml
- [ ] Internal linking audit
- [ ] Image alt texts

**Day 18**:
- [ ] Performance optimization (image compression, code splitting)
- [ ] Lighthouse audit and fixes
- [ ] Core Web Vitals optimization
- [ ] Mobile performance testing

**Deliverable**: SEO and performance optimized

---

### Phase 10: Testing & QA (Days 19-20)

**Day 19**:
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Form testing (all submissions)
- [ ] Link checking (no broken links)

**Day 20**:
- [ ] Final bug fixes
- [ ] Content proofreading
- [ ] Final responsive design check
- [ ] Final Lighthouse scores (90+)
- [ ] Client walkthrough preparation

**Deliverable**: Fully tested, QA-approved website

---

### Phase 11: Deployment (Day 21)

- [ ] Client domain DNS setup
- [ ] Vercel/Netlify deployment
- [ ] SSL certificate verification
- [ ] Google Analytics setup
- [ ] Google Search Console setup
- [ ] Google Tag Manager (if needed)
- [ ] Final production checks
- [ ] Launch! 🚀

**Deliverable**: Live production website

---

### Phase 12: Post-Launch (Days 22-30)

**Week 4**:
- [ ] Monitor analytics and performance
- [ ] Fix any post-launch issues
- [ ] Client training (if needed)
- [ ] Google My Business updates
- [ ] Submit sitemap to search engines
- [ ] Initial blog content publication
- [ ] Social media announcements

**Deliverable**: Stable, monitored live website

---

## 📊 Success Metrics (3-Month Goals)

### Traffic Goals
- **Organic Traffic**: +50% increase
- **Direct Traffic**: +30% increase
- **Page Views**: +40% increase
- **Bounce Rate**: Decrease to < 50%

### Conversion Goals
- **Form Submissions**: 20+ per month
- **Phone Calls**: 30+ per month
- **WhatsApp Messages**: 15+ per month
- **Chat Conversations**: 40+ per month
- **Calculator Uses**: 50+ per month

### SEO Goals
- **Primary Keywords**: Top 5 rankings for 5+ keywords
- **Local Pack**: Appear in 3-pack for "web design Hitchin" and "SEO Hertfordshire"
- **Featured Snippets**: 3+ owned snippets
- **Backlinks**: 10+ quality backlinks
- **Domain Authority**: Increase by 5 points

### Performance Goals
- **Lighthouse Performance**: Maintain 90+
- **Core Web Vitals**: Pass all 3 metrics
- **Page Speed**: < 2 seconds average
- **Mobile Speed**: < 3 seconds on 4G

### Engagement Goals
- **Avg Session Duration**: > 2 minutes
- **Pages per Session**: > 3 pages
- **Return Visitor Rate**: > 30%

---

## 🚦 Critical Path & Dependencies

### Must-Have Features (P0 - Blocking Launch)
✅ All 9 pages built and functional
✅ Header with navigation (desktop + mobile)
✅ Footer with contact info and links
✅ Responsive design (mobile, tablet, desktop)
✅ Contact form working
✅ WhatsApp button functional
✅ Lighthouse scores 90+
✅ SEO metadata on all pages
✅ No broken links
✅ Accessibility compliance (WCAG 2.1 AA)

### Should-Have Features (P1 - Launch Week)
🟡 Mega menu
🟡 Chatbot integration
🟡 Exit-intent popup
🟡 Portfolio slider
🟡 Testimonials slider
🟡 Website Cost Calculator
🟡 Schema markup

### Could-Have Features (P2 - Post-Launch)
🔵 Timed popup
🔵 Scroll popup
🔵 SEO Audit Tool
🔵 ROI Calculator
🔵 Local SEO Checker
🔵 Blog post comments

### Won't-Have for V1 (Future Versions)
⚪ E-commerce for selling services directly
⚪ Client portal/dashboard
⚪ Advanced analytics dashboard
⚪ Multi-language support

---

## 🔧 Development Notes

### Environment Variables (.env.local)

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://web-smart.co
NEXT_PUBLIC_SITE_NAME=Web-Smart.Co

# Contact Information
NEXT_PUBLIC_PHONE=01462544738
NEXT_PUBLIC_EMAIL=enquiries@web-smart.co
NEXT_PUBLIC_ADDRESS=52 Walsworth Rd, Hitchin, Hertfordshire SG4 9SX, UK

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=441462544738

# Chatbot (Tawk.to or Crisp)
NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id
NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Form Handling (EmailJS or similar)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# SEO Audit Tool API (if using external service)
SEO_AUDIT_API_KEY=your_api_key
```

### Git Workflow

**Branch Strategy**:
- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - Individual features

**Commit Frequency**: After each major section/component

**Commit Message Format**:
```
feat: Add homepage hero section

- Implement full-width hero
- Add purple gradient background
- Include ape mascot animation
- Add primary/secondary CTAs

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>
```

### Code Quality Standards

**TypeScript**:
- Strict mode enabled
- No `any` types (use proper typing)
- Interface definitions for props
- Type all function parameters and returns

**Components**:
- Functional components only
- Use TypeScript interfaces for props
- Extract repeated logic to custom hooks
- Keep components under 200 lines

**Styling**:
- Tailwind CSS utility-first
- Custom CSS in separate files when needed
- Use CSS variables for theme colours
- Follow BEM naming for custom CSS

**Performance**:
- Dynamic imports for heavy components
- Lazy load below-fold images
- Optimize images (WebP + responsive)
- Minimize bundle size

---

## 📝 Content Checklist

### Before Launch

#### All Pages
- [ ] All content proofread (no typos)
- [ ] All images have alt text
- [ ] All links work (no 404s)
- [ ] All CTAs tested
- [ ] All forms validated
- [ ] Contact information accurate
- [ ] Copyright year correct (2025)

#### SEO
- [ ] Unique title tags (all pages)
- [ ] Unique meta descriptions (all pages)
- [ ] H1 on every page (only one per page)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Schema markup implemented
- [ ] XML sitemap generated
- [ ] robots.txt configured
- [ ] Canonical URLs set

#### Legal & Compliance
- [ ] Privacy Policy page
- [ ] Cookie consent (if using analytics/chat)
- [ ] Terms of Service (if applicable)
- [ ] GDPR compliance (EU visitors)
- [ ] Accessibility statement

---

## 🎉 Launch Checklist

### Pre-Launch (1 Week Before)

- [ ] Client review and approval
- [ ] Final content review
- [ ] Final design review
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete
- [ ] Accessibility audit passed
- [ ] Performance targets met
- [ ] Forms tested end-to-end
- [ ] All assets optimized
- [ ] Backup plan prepared

### Launch Day

- [ ] DNS pointed to new site
- [ ] SSL certificate active
- [ ] Redirects from old site (if applicable)
- [ ] Google Analytics tracking
- [ ] Google Search Console verified
- [ ] Google My Business updated with new URL
- [ ] Social media profiles updated
- [ ] Monitor error logs
- [ ] Monitor analytics for traffic
- [ ] Test critical user journeys

### Post-Launch (First Week)

- [ ] Submit sitemap to Google
- [ ] Submit sitemap to Bing
- [ ] Monitor Core Web Vitals
- [ ] Monitor form submissions
- [ ] Check for broken links
- [ ] Monitor chatbot conversations
- [ ] Review analytics data
- [ ] Fix any bugs reported
- [ ] Client training (if needed)
- [ ] Celebrate launch! 🎊

---

## 🔗 Resources & References

### Design Inspiration
- **Original Site**: https://web-smart.co/
- **Screenshots**: `/screenshots/` directory
- **Images**: `/images/` directory (51 images)
- **Design System**: `/documentation/DESIGN-SYSTEM.md`

### Business Information
- **Complete Details**: `/documentation/BUSINESS-INFO.md`
- **Contact**: 01462 544738, enquiries@web-smart.co
- **Address**: 52 Walsworth Rd, Hitchin, Hertfordshire SG4 9SX

### Technical Documentation
- **Next.js 14**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Swiper.js**: https://swiperjs.com/
- **React Hook Form**: https://react-hook-form.com/

### SEO Resources
- **Google Search Central**: https://developers.google.com/search
- **Schema.org**: https://schema.org/
- **Web.dev**: https://web.dev/

---

**Document Version**: 1.0
**Created**: 23 October 2025
**Status**: Master Preparation Complete
**Ready For**: Farmer Build Phase

**Next Step**: Create FARMER.md with detailed build instructions and code examples.

---

**🚀 This comprehensive redesign plan sets the foundation for a commercial-grade, feature-rich website that will position Web-Smart.Co as the leading digital agency in Hertfordshire!**
