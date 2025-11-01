# Delight Home Bakery - Web Development Project

## Student Information

**Student Name**: Vishay Gosai

**Student ID**: ST10478785

**Course**: WEDE5020 - Web Development

**Group**: 1

**Submission Date**: 27 August 2025 (Part 1); 
29 September 2025 (Part 2); 3 November 2025 (Part 3) POE

**GitHub Repository**: [st10478785/delight-home-bakery](https://github.com/st10478785/delight-home-bakery)

## Project Overview

Delight Home Bakery is a local artisanal bakery established in 2004, specializing in handcrafted bread, pastries, and cakes made with high quality, locally sourced ingredients. This comprehensive website serves as both a digital storefront and online ordering platform, designed to enhance the bakery's online presence, facilitate orders, and communicate the bakery's brand story and values.

[Delight Home Bakery Logo](<_images/logo/logo%20(1).png>)

## Table of Contents

1. [Features](#features)
2. [User Experience](#user-experience)
3. [Design System](#design-system)
4. [Website Goals and Objectives](#website-goals-and-objectives)
5. [Website Structure](#website-structure)
6. [Technical Implementation](#technical-implementation)
7. [Development Timeline](#development-timeline)
8. [Part 2: CSS Styling and Responsive Design](#part-2-css-styling-and-responsive-design)
9. [Changelog](#changelog)
10. [References](#references)

## Features

### Core Functionality

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **E-commerce** - Product catalog with shopping cart functionality
- **Online Ordering** - Integrated order forms for pickup and delivery
- **User Profiles** - Account management and order history tracking
- **Contact Integration** - Multiple contact methods including interactive forms

### Technical Features

- **HTML** - Proper structure for accessibility and SEO
- **CSS** - Class leaned styling and YouTube learned styling, css contains CSS Grid and Flexbox
- **Mobile-First Approach** - Adaptability for all devices
- **Performance Optimized** - Fast loading times and efficient code
- **Cross-Browser Compatible** - Website works on all to most browsers

## User Experience

### Navigation & Accessibility

- **Navigation** - Consistent menu placement across all pages
- **Keyboard Navigation** - Full accessibility support
- **Screen Reader** - ARIA labels and semantic structure
- **Quick Access** - Key information within is with in 3 clicks rule and applys to any page

### Visual Design

- **High Quality Imagery** - Professional product photography mainly from and unsplash
- **Interactive Elements** - Smooth transitions and hover effects ( learnt from Youtube and W3Schools)
- **Visual Product Display** - Always visible badges and clear pricing
- **Professional Layout** - Clean, modern design with appropriate spacing and colour scheme

### Customer Overview

- **Streamlined Checkout** - Minimal step by step ordering process (3-step flow)
- **Guest Checkout Option** - No forced account creation
- **Order Tracking** - Complete order history and status updates
- **Multiple Payment Methods** - Credit card, cash, EFT, and cryptocurrency

## Design System

### Color Palette

| Color                     | Hex Code  | Usage                           |
| ------------------------- | --------- | ------------------------------- |
| Primary (Deep Forest)     | `#1c2d26` | Headings, primary elements      |
| Secondary (Golden Orange) | `#E8A735` | Buttons, Accents, Highlights    |
| Accent (Dark Orange)      | `#D35400` | Hover states, Secondary accents |
| Background (Warm Cream)   | `#FDF6E3` | Main background                 |
| Light Background          | `#FFFFFF` | Card backgrounds, Sections      |
| Text Color                | `#333333` | Primary text                    |
| Light Text                | `#777777` | Secondary text                  |
| Border Color              | `#E5E5E5` | Dividers, borders               |
| Success                   | `#27AE60` | Positive actions, notifications |
| Error                     | `#E74C3C` | Errors, warnings                |

### Typography

- **Headings**: Playfair Display (Serif)
- **Body Text**: Lato, Open Sans (Sans-serif) - Readable
- **Font Weights**: Regular (400), Semi-bold (600), Bold (700)
- **Font Sizes**: Hierarchical scale from 3.2rem (h1) to 1rem (body)

### Product Badges

| Badge Type       | Color              | Usage                       |
| ---------------- | ------------------ | --------------------------- |
| **Best Seller**  | `#E8A735` (Orange) | Top selling items           |
| **Popular**      | `#3498db` (Blue)   | Customer favorites          |
| **Favorite**     | `#e74c3c` (Red)    | Staff picks and specialties |
| **New**          | `#2ecc71` (Green)  | Recent additions to menu    |

## Website Goals and Objectives

### Primary Goals

- **Establish Professional Online Presence** - Digital storefront reflecting bakery quality
- **Increase Online Sales** - E-commerce functionality for revenue growth
- **Enhance Brand Awareness** - Effective storytelling and community engagement
- **Improve Customer Convenience** - Streamlined online ordering experience
- **Drive Customer Engagement** - Newsletter signups and loyalty program

### SMART Objectives

1. **E-commerce Implementation** - Process minimum 15 online orders weekly within one month of launch
2. **Content Engagement** - Achieve average 2+ minutes session duration on key content pages
3. **Customer Self-Service** - Reduce informational phone calls by 50% through clear website content
4. **Marketing Database** - Acquire 100+ email subscribers within first 30 days
5. **Mobile Optimization** - Ensure 95%+ satisfaction rate on mobile user experience

## Website Structure

### Page Overview

#### Home Page (`index.html`)

- Welcoming hero section with compelling call-to-action
- Featured products and daily specials display
- Customer testimonials and reviews
- Store hours and location information
- Newsletter signup integration

#### About Page (`about.html`)

- Detailed history of bakery's founding (since 2004)
- Mission, vision, and values statements
- Head baker profile and team information
- Core values and quality commitment
- Community involvement and sustainability practices

#### Products Page (`products.html`)

- Comprehensive menu organized by categories:
  - Artisan Breads (6+ varieties)
  - Pastries & Croissants (4+ varieties)
  - Cakes & Desserts (4+ varieties)
  - Cookies & Biscuits (4+ varieties)
  - Coffee & Beverages (4+ varieties)
- Detailed product descriptions with ingredients
- High-quality imagery with pricing
- Seasonal specials section

#### Order/Enquiry Page (`enquiry.html`)

- Google Forms integration for order requests
- Custom order specifications
- Delivery area information (Ruimsig and surrounding areas)
- Order policies and notice requirements
- Contact information for urgent orders

#### Checkout Page (`checkout.html`)

- Shopping cart with itemized order summary
- Customer information collection forms
- Delivery scheduling with time slots
- Multiple payment method options (Credit Card, Cash, Crypto, EFT)
- Order confirmation and tracking

#### Profile Page (`profile.html`)

- User account management dashboard
- Complete order history with status tracking
- Address book management (primary and secondary addresses)
- Communication preferences
- Loyalty points and reward tracking

#### Contact Page (`contact.html`)

- Complete contact information with multiple methods
- Interactive Google Maps integration
- Detailed operating hours table
- Comprehensive FAQ section
- Social media links and following options

## Technical Implementation

### CSS Architecture

- **External Stylesheet** (`style.css`) - Centralized styling
- **CSS Reset** - Consistent cross-browser baseline
- **Modular Components** - Reusable UI patterns
- **Responsive Breakpoints** - Mobile-first approach

### File Structure

delight_home_bakery/

├── index.html              # Home page

├── about.html              # About us page

├── products.html           # Products catalog

├── enquiry.html            # Order form page

├── contact.html            # Contact information

├── checkout.html           # Checkout process

├── profile.html            # User profile

├── style.css               # Main stylesheet

├── script.js               # JavaScript functionality

├── _images/

│   ├── logo/               # Brand assets

│   ├── home/               # Homepage images

│   ├── about/              # About page images

│   ├── product/            # Product categories

│   │   ├── bread/

│   │   ├── pastries/

│   │   ├── cakes/

│   │   ├── cookies/

│   │   └── beverages/

│   ├── testimonials/       # Customer photos

│   └── unused/             # Additional assets

├── _private/

│   ├── text/                 # File containing text

│   │   ├── description.txt/  # Detailed description of project

└── README.md               # Project documentation

## Development Timeline

### Phase 1: Planning & Design (1 August - 15 August)

- Requirement analysis and content planning
- Sitemap creation and information architecture
- Wireframing (mobile versions created using Procreate)
- Gantt chart development (created using Procreate)
- Logo design (created using Procreate on iPad)

### Phase 1: HTML Development (15 August - 25 August)

- Semantic HTML structure for all 7 pages
- Accessibility features implementation
- Form structure and validation attributes
- Content organization and hierarchy

### Phase 1: Due 25 August

### Phase 2: CSS Styling (26 August - 10 September) - **CURRENT PHASE**

- External stylesheet creation and linking
- Base style establishment with CSS reset
- Typography system implementation
- Layout structure with CSS Grid and Flexbox
- Visual styling and interactive elements
- CSS Reset

### Phase 2: Responsive Design (11 September - 25 September)

- Mobile-first responsive breakpoints
- Cross browser compatibility testing
- Performance optimization
- Adaptability Testing if it works on mobile, desktop and tablet

### Phase 2: Due 29 September

## Part 2: CSS Styling and Responsive Design

### Learning Outcomes Demonstrated

#### 1. External CSS Stylesheet Implementation

- Created `style.css` with comprehensive styling
- Linked across all HTML pages consistently
- Organized CSS with logical sections and comments

#### 2. Advanced Selector Strategy

- Class based selectors for reusable components (`.feature`, `.menu-item`)
- Efficient specificity hierarchy implementation
- Pseudo-classes for interactive states (`:hover`, `:focus`, `:active`)

#### 4. Comprehensive Typography System

- Hierarchical font scaling (3.2rem h1 to 1rem body)
- Font family pairing (Playfair Display + Lato/Open Sans)
- Advanced properties (`letter-spacing`, `text-shadow`, `line-height`)

### Responsive Testing Evidence

#### Cross Browser Compatibility

- **Chrome**: Works on Chrome on desktop, no matter what size
- **Firefox**: Works on Firefox on desktop, no matter what size
- **Safari**: Works on Safari on mt Ipad, no matter what size
- **Edge**: Works on Edge on desktop, no matter what size

#### Device Testing Matrix

- **Mobile**: Samsung, Huawei
- **Tablet**: iPad (current circulation devices)
- **Desktop**: My Dell Laptop, Multiple screen sizes (1280px to 3840px)

## Screenshots for different screen sizes

### Desktop

[Desktop: Index Page](<_images/screenshots/Desktop/Desktop_Index.jpeg>)

[Desktop: About Page](<_images/screenshots/Desktop/Desktop_About.jpeg>)

[Desktop: Products Page](<_images/screenshots/Desktop/Desktop_Products.jpeg>)

[Desktop: Enquiry Page](<_images/screenshots/Desktop/Desktop_Enquiry.jpeg>)

[Desktop: Contact Page](<_images/screenshots/Desktop/Desktop_Contact.jpeg>)

[Desktop: Checkout Page](<_images/screenshots/Desktop/Desktop_Checkout.jpeg>)

[Desktop: Profile Page](<_images/screenshots/Desktop/Desktop_Profile.jpeg>)

### Tablet

[Tablet: Index Page](<_images/screenshots/Tablet/Tablet_Index.jpeg>)

[Tablet: About Page](<_images/screenshots/Tablet/Tablet_About.jpeg>)

[Tablet: Products Page](<_images/screenshots/Tablet/Tablet_Products.jpeg>)

[Tablet: Enquiry Page](<_images/screenshots/Tablet/Tablet_Enquiry.jpeg>)

[Tablet: Contact Page](<_images/screenshots/Tablet/Tablet_Contact.jpeg>)

[Tablet: Checkout Page](<_images/screenshots/Tablet/Tablet_Checkout.jpeg>)

[Tablet: Profile Page](<_images/screenshots/Tablet/Tablet_Profile.jpeg>)

### Phone

[Phone: Index Page](<_images/screenshots/Phone/Phone_Index.jpeg>)

[Phone: About Page](<_images/screenshots/Phone/Phone_About.jpeg>)

[Phone: Products Page](<_images/screenshots/Phone/Phone_Products.jpeg>)

[Phone: Enquiry Page](<_images/screenshots/Phone/Phone_Enquiry.jpeg>)

[Phone: Contact Page](<_images/screenshots/Phone/Phone_Contact.jpeg>)

[Phone: Checkout Page](<_images/screenshots/Phone/Phone_Checkout.jpeg>)

[Phone: Profile Page](<_images/screenshots/Phone/Phone_Profile.jpeg>)

### Phase 3: Responsive Design (1 October - 3 November)

- **Interactive Elements**: Accordions, tabs, modals, and lightbox gallery
- **Enhanced Navigation**: Improved responsive menu with better mobile experience
- **Dark Mode**: Complete theme switching with proper contrast
- **Search Functionality**: Product search with real-time results
- **Form Validation**: Comprehensive client-side validation with error handling
- **Cart Flyout**: Slide out cart for better user experience
- **SEO Optimization**: Meta tags, semantic HTML, and accessibility features
- **Performance Improvements**: Optimized images and code

## Changelog ( Learned from YouTube )

### Version 1 - Initial Release (25 August 2025)

#### Foundation Implementation

- Complete HTML structure for all 7 pages
- Basic navigation system between pages
- Form structures with proper validation attributes
- Image assets organization with alt text

### Version 2 - CSS Styling Implementation

#### Visual Design System

- External CSS stylesheet (`style.css`) creation
- Comprehensive CSS reset and base styles
- CSS custom properties
- Typography system with hierarchical scaling
- Color palette implementation throughout site

#### Layout and Components

- CSS Grid implementation for product galleries
- Responsive card components with hover effects
- Form styling with focus states
- Interactive button styles and animations

#### Responsive Foundation

- Mobile-first CSS architecture
- Breakpoint definitions for tablet and desktop
- Responsive navigation (hamburger menu for mobile)
- Flexible grid systems for all screen sizes

#### Assurance

- Cross-browser compatibility testing
- Mobile device testing on actual devices
- Accessibility audit and improvements
- Performance optimization and loading times
- SEO optimization and meta tags

#### Documentation

I added more informaton my document

I did improvements from my feedback in a differnt colour

I added more References

**CSS for Desktop**

I used a separate style.css file and linked it to all my pages.

A CSS reset that makes sure everything looks the same across browsers.

I set up font sizes for headings and body text, and used nice fonts for a clear look.

Layouts are built with Grid (for sections) and Flexbox (for alignment).

Buttons and inputs have hover and focus effects for better interaction.

### Version 3 - Enhancing functionality and SEO
**I added the pseudo classes to the code and the mobile navigation to display as block-level elements**

#### Navigation Improvements
- Changed up mobile navigation to display as block level elements
- Enhanced pseudo-class implementation for navigation links
- Added smooth transitions and focus states
- Improved touch targets for mobile users

#### Dark Mode Enhancement
- Complete Change for the dark mode with proper color contrast
- Added smooth transitions between themes
- Persistent theme selection using localStorage
- Improved readability in both light and dark modes

#### Interactive Elements
- Functionality for FAQ sections
- Tabbed interfaces for profile and product pages
- Modal windows for confirmations and details
- Lightbox gallery for image viewing
- Added notifications for user feedback

#### Form Enhancements
- Comprehensive form validation with error messages
- Real-time validation with visual feedback
- Confirmation modals for form submissions
- Form accessibility with proper labels and instructions

#### Search Functionality
- Product search with real time results
- Search results dropdown with product details
- Keyboard navigation for search results

#### Cart Improvements
- Cart with slide in animation
- Quantity controls in cart
- Item removal functionality
- Cart persistence using localStorage

#### Performance Optimizations
- **Improved** CSS with reduced redundancy
- **Added** JavaScript for better performance

## References

Apple (2023) Human Interface Guidelines. Available at: https://developer.apple.com/design/human-interface-guidelines/ (Accessed: 15 September 2025).

Asana (2023) How to write a project proposal: template and examples. Available at: https://asana.com/resources/project-proposal (Accessed: 5 September 2025).

Balsamiq (2023) What are wireframes?. Available at: https://balsamiq.com/blog/what-are-wireframes/ (Accessed: 10 September 2025).

Better Proposals (2023) Software development proposal template. Available at: https://betterproposals.io/template/index.php?ProposalID=Hz-KyfL3zhgcNwHf-yhAFPaD9JcPPjCV_qPkafZxge8&cat=software (Accessed: 3 September 2025).

Bhardwaj, A. (2021) Top design resources for your next UI/UX design project. Available at: https://medium.com/design-bootcamp/top-design-resources-for-your-next-ui-ux-design-project-690da89d6a4 (Accessed: 18 September 2025).

Designhill (2023) Bakery logos that are sure to make your sweet tooth tingle. Available at: https://www.designhill.com/design-blog/bakery-logos-that-are-sure-to-make-your-sweet-tooth-tingle/ (Accessed: 2 September 2025).

Font Awesome (2023) Icons. Available at: https://fontawesome.com/icons (Accessed: 7 September 2025).

Freepik (2023) New modern realistic front view black iPhone mockup. Available at: https://www.freepik.com/free-vector/new-modern-realistic-front-view-black-iphone-mockup-isolated-white-mobile-template-vector_33632328.htm (Accessed: 8 September 2025).

Google Developers (2023) Core Web Vitals. Available at: https://developers.google.com/search/docs/appearance/core-web-vitals (Accessed: 12 September 2025).

Iconfinder (2024) Free food icons. Available at: https://www.iconfinder.com/search/icons?price=free&q=food (Accessed: 20 September 2025).

Iconfinder (2024) Free heart icons. Available at: https://www.iconfinder.com/search?q=heart&price=free (Accessed: 20 September 2025).

Microsoft (2024) Design and code Windows apps. Available at: https://learn.microsoft.com/en-us/windows/apps/design/ (Accessed: 22 September 2025).

MDN Web Docs (2023) Creating the content. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content (Accessed: 14 September 2025).

Mozilla Developer Network (2024) background-size. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/background-size (Accessed: 25 September 2025).

Pexels (2023) Free stock photos. Available at: https://www.pexels.com/ (Accessed: 4 September 2025).

Smashing Magazine (2021) Tools, tips and resources to build better user experiences. Available at: https://www.smashingmagazine.com/2021/12/tools-tips-resources-to-build-better-user-experiences/ (Accessed: 17 September 2025).

Transparent Textures (2024) Cream paper texture. Available at: https://www.transparenttextures.com/patterns/cream-paper.png (Accessed: 23 September 2025).

Unsplash (2023) Free high-resolution images. Available at: https://unsplash.com/ (Accessed: 1 September 2025).

Unsplash (2023) A bunch of heart-shaped cookies on a table [Photograph]. Available at: https://unsplash.com/photos/a-bunch-of-heart-shaped-cookies-on-a-table-nO1KyhLaw4c (Accessed: 6 September 2025).

Unsplash (2023) A loaf of bread on a white plate [Photograph]. Available at: https://unsplash.com/photos/a-loaf-of-bread-sitting-on-top-of-a-white-plate-W7dpLseZmec (Accessed: 6 September 2025).

Unsplash (2023) A man in a suit and tie [Photograph]. Available at: https://unsplash.com/photos/a-man-in-a-suit-and-tie-posing-for-a-picture-_XJzWcd1NVw (Accessed: 6 September 2025).

Unsplash (2023) A pile of bread on a wooden table [Photograph]. Available at: https://unsplash.com/photos/a-pile-of-bread-sitting-on-top-of-a-wooden-table-TM4lD0quDeU (Accessed: 6 September 2025).

Unsplash (2023) Black and gray metal framed glass display counter [Photograph]. Available at: https://unsplash.com/photos/black-and-gray-metal-framed-glass-display-counter-3-PfUgbyWEs (Accessed: 6 September 2025).

Unsplash (2023) Brown bread on black textile [Photograph]. Available at: https://unsplash.com/photos/brown-bread-on-black-textile-9bxJoydEv4U (Accessed: 6 September 2025).

Unsplash (2023) Brown bread on white ceramic plate [Photograph]. Available at: https://unsplash.com/photos/brown-bread-on-white-ceramic-plate-yFyztO4JLI4 (Accessed: 6 September 2025).

Unsplash (2023) Chocolate chip cookies with pecans [Photograph]. Available at: https://unsplash.com/photos/chocolate-chip-cookies-with-pecans-and-pecans-on-top-KmP50MppuN4 (Accessed: 6 September 2025).

Unsplash (2023) Close-up photo of three cookies [Photograph]. Available at: https://unsplash.com/photos/close-up-photo-of-three-cookies-Py0QLFEAagY (Accessed: 6 September 2025).

Unsplash (2023) Coffee surrounded by four baked breads [Photograph]. Available at: https://unsplash.com/photos/coffee-surrounded-by-four-baked-breads-z3em1GBRhvY (Accessed: 6 September 2025).

Unsplash (2023) Cup of cappuccino on brown surface [Photograph]. Available at: https://unsplash.com/photos/cup-of-cappuccino-on-brown-surface-mk7zhx5lFbc (Accessed: 6 September 2025).

Unsplash (2023) Ginger tea with mint, lemon, and honey [Photograph]. Available at: https://unsplash.com/photos/ginger-tea-with-mint-lemon-and-honey-on-concrete-background-top-view-wfQTzlOitDA (Accessed: 6 September 2025).

Unsplash (2023) Grayscale photo of man [Photograph]. Available at: https://unsplash.com/photos/grayscale-photo-of-man-XHVpWcr5grQ (Accessed: 6 September 2025).

Unsplash (2023) Man in white button-up shirt and black vest [Photograph]. Available at: https://unsplash.com/photos/man-in-white-button-up-shirt-and-black-vest-FMh5o5m5N9E (Accessed: 6 September 2025).

Unsplash (2023) Man in white dress shirt standing in front of brown wooden shelf [Photograph]. Available at: https://unsplash.com/photos/man-in-white-dress-shirt-standing-in-front-of-brown-wooden-shelf-RndRFJ1v1kk (Accessed: 6 September 2025).

Unsplash (2023) Orange juice in clear drinking glass [Photograph]. Available at: https://unsplash.com/photos/orange-juice-in-clear-drinking-glass-TmOGarNOGFs (Accessed: 6 September 2025).

Unsplash (2023) Sliced bread on brown wooden chopping board [Photograph]. Available at: https://unsplash.com/photos/sliced-bread-on-brown-wooden-chopping-board-vEtYK2wkOt0 (Accessed: 6 September 2025).

Unsplash (2023) Two cookies and a cup of coffee on a table [Photograph]. Available at: https://unsplash.com/photos/two-cookies-and-a-cup-of-coffee-on-a-table-BK3H1IL2wjE (Accessed: 6 September 2025).

Unsplash (2023) White ceramic cup with brown liquid [Photograph]. Available at: https://unsplash.com/photos/white-ceramic-cup-with-brown-liquid-dAYJfrtVjh0 (Accessed: 6 September 2025).

Unsplash (2023) Woman looking sideways leaning on white wall [Photograph]. Available at: https://unsplash.com/photos/woman-looking-sideways-leaning-on-white-wall-6W4F62sN_yI (Accessed: 6 September 2025).

Unsplash (2023) Woman wearing black crew neck shirt [Photograph]. Available at: https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo (Accessed: 6 September 2025).

W3C (2023) Markup Validation Service. Available at: https://validator.w3.org/ (Accessed: 11 September 2025).

W3Schools (2023) HTML tutorial. Available at: https://www.w3schools.com/html/default.asp (Accessed: 13 September 2025).

W3Schools (2024) Responsive Web Design Introduction. Available at: https://www.w3schools.com/css/css_rwd_intro.asp (Accessed: 24 September 2025).

W3Schools (2024) W3Schools online web tutorials. Available at: https://www.w3schools.com/ (Accessed: 24 September 2025).

Web.dev (2023) Copy images to the clipboard. Available at: https://web.dev/patterns/clipboard/copy-images/pattern (Accessed: 16 September 2025).

[Gosai,VG] (2025) Gantt chart and wireframe components. Drawn in Procreate. 19 September 2025.

[Gosai,VG] (2025) Logo design. Created in Procreate. 19 September 2025.

Mobile version on wire frames drawn by hand on a software called procreate.
Gantt chart draw by hand on Procreate software.
I create the logo using a software on my iPad called Procreate.

## Programming references part three

### CSS Resources
- [W3Schools CSS](https://www.w3schools.com/css/)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Google Fonts](https://fonts.google.com/)
- [CSS-Tricks](https://css-tricks.com/)

### JavaScript Resources
- [W3Schools JavaScript](https://www.w3schools.com/js/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

### Responsive Design
- [Responsive Web Design Basics](https://developers.google.com/web/fundamentals/design-and-ux/responsive)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### SEO Resources
- [Google Search Central](https://developers.google.com/search)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)

