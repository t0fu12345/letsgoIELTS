---
name: Luminous Scholar
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3e4850'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6e7881'
  outline-variant: '#bdc8d2'
  surface-tint: '#006590'
  primary: '#006590'
  on-primary: '#ffffff'
  primary-container: '#1cb0f6'
  on-primary-container: '#00405d'
  inverse-primary: '#88ceff'
  secondary: '#745b00'
  on-secondary: '#ffffff'
  secondary-container: '#ffcf2a'
  on-secondary-container: '#705900'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#a7a5a5'
  on-tertiary-container: '#3b3b3b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8e6ff'
  primary-fixed-dim: '#88ceff'
  on-primary-fixed: '#001e2e'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#ffe08a'
  secondary-fixed-dim: '#f0c116'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574400'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  surface-white: '#FFFFFF'
  on-surface-text: '#1A1A1A'
  index-number-gray: '#E5E5E5'
  footer-background: '#F3C41B'
  footer-on-surface: '#000000'
typography:
  display-lg:
    fontFamily: Nunito Sans
    fontSize: 57px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Nunito Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Nunito Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Nunito Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  index-bg:
    fontFamily: Nunito Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 72px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: auto
  section-padding: 80px
  nav-height: 64px
---

## Brand & Style
The design system embodies a clean, educational, and trustworthy aesthetic, specifically tailored for a high-performance IELTS learning platform. It strikes a balance between professional academic rigor and the approachability of modern EdTech.

The visual style is **Corporate / Modern**, adhering strictly to **Material Design 3 (M3)** principles. It utilizes a high-clarity interface with purposeful whitespace to reduce cognitive load during intensive study sessions. The atmosphere is optimistic and encouraging, achieved through a bright color palette and soft geometry, ensuring students feel supported rather than overwhelmed. Key distinctive elements include "ghost" background index numbers and a high-impact, high-contrast footer that grounds the experience.

## Colors
The color strategy employs a "Bright Blue" primary to signal intelligence, technology, and trust. The "Vibrant Yellow" secondary color is reserved for high-impact zones: the site footer and primary Call-to-Action (CTA) highlights, ensuring they are impossible to miss while maintaining a cheerful brand personality.

Backgrounds primarily utilize pure white (`#FFFFFF`) for core content areas, with a soft gray (`#F8F9FA`) used for sectional differentiation. Typography avoids pure black, opting for a deep charcoal (`#1A1A1A`) to improve readability and reduce eye strain during long reading passages.

## Typography
The system uses a dual-font strategy: **Nunito Sans** for headlines and brand-related text to inject a friendly, rounded personality, and **Inter** for body text and UI components to ensure maximum legibility and a professional feel.

A specialized `index-bg` style is used for the large, decorative background numbers (`01`, `02`, etc.) in feature lists. These should be rendered with a very low opacity or in the `index-number-gray` to sit behind the main content without obstructing readability. Hero quotes should use `headline-md` with an italic style to differentiate them from standard informational headers.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop, centered with a `max-width` of 1200px. It utilizes a 12-column system. 

- **Desktop:** 24px gutters, with section vertical padding set to 80px to create a sense of breathability.
- **Mobile:** Transition to a fluid layout with 16px side margins.
- **Sticky Header:** A fixed 64px height bar that maintains a consistent `elevation: 1` shadow to separate it from the scrolling content.
- **Feature Lists:** Use a 2-column grid on desktop, reflowing to a single column on mobile.

## Elevation & Depth
In accordance with Material 3, depth is communicated through both **Tonal Layers** and **Ambient Shadows**:

- **Level 0 (Flat):** Main background surfaces.
- **Level 1 (Elevated):** Standard cards and the Navigation Bar. Use a subtle, diffused shadow (Blur: 4px, Y: 2px, Opacity: 8%).
- **Level 2 (Hover/Active):** Cards when interacted with. The card should lift (`transform: translateY(-2px)`) and the shadow should become slightly more pronounced (Blur: 8px, Y: 4px, Opacity: 12%).
- **Glassmorphism:** Reserved exclusively for search dropdowns or mobile navigation overlays, using a `backdrop-filter: blur(10px)` to maintain context.

## Shapes
The shape language is primarily **Rounded**, aligning with the friendly nature of the brand.

- **Standard Components:** Buttons, Input Fields, and Cards use a 0.5rem (8px) corner radius.
- **High-Interaction Components:** The Search Bar and "Pill" style buttons use a fully rounded (28px+) radius to signify their "primary" status within the M3 framework.
- **Social Icons:** Use a specific "Squircle" (rounded-square) container as seen in the reference material to maintain a distinctive graphic identity.

## Components

### Buttons
- **Primary CTA:** M3 Filled Button style using the `primary_color`. Use uppercase labels for high importance.
- **Secondary/Footer CTA:** M3 Outlined or Text buttons using black/white contrast depending on the background.
- **Hover State:** All buttons should lift 2px on hover.

### Cards
- **Elevated Cards:** Used for quotes and features. They feature a white background, 8px corner radius, and Level 1 elevation.
- **Feature Cards:** Must support a background text layer (Index Numbers) positioned absolutely at the bottom-right or behind the text.

### Search Bar
- Fully rounded (28px) with a leading search icon. On focus, it expands into a dropdown menu listing "Hot Topics" or "Recent Searches."

### Footer
- **Background:** Full-width `#F3C41B`.
- **Contrast:** Icons should be black or white with thin black outlines. 
- **Structure:** 3-column layout (Brand, About, Social). Social icons are contained in thin-bordered squares with rounded corners.

### Input Fields
- M3 Outlined style. 8px corner radius. Labels move to the border line on focus (Floating labels).