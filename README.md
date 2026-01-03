# EcoTrace

A modern, sustainability-focused web application that helps users discover eco-friendly products, track their environmental impact, and make informed purchasing decisions. Built as a frontend showcase demonstrating responsive design, accessibility, and clean React architecture.

## Live Demo

**[https://eco-trace-ashen.vercel.app/](https://eco-trace-ashen.vercel.app/)**

## Overview

EcoTrace provides a user-friendly interface for exploring sustainable products with transparent eco-scores and carbon footprint data. The application emphasizes visual hierarchy, smooth animations, and a calm, trustworthy design aesthetic to encourage environmentally conscious consumer choices.

This is a frontend-only portfolio project that demonstrates modern web development practices without requiring backend infrastructure.

## Key Features

- **Product Discovery**: Browse and filter sustainable products with detailed eco-scores
- **Impact Tracking**: Visualize environmental impact through interactive charts and statistics
- **Product Comparison**: Compare multiple products side-by-side across sustainability metrics
- **Educational Resources**: Learn about sustainability concepts and eco-certifications
- **Dark Mode**: Seamless light/dark theme switching with proper color contrast
- **Responsive Design**: Optimized layouts for mobile, tablet, and desktop devices
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support

## Tech Stack

**Core Technologies:**

- React 18 - Component-based UI architecture
- Vite - Fast development server and build tool
- TypeScript - Type-safe code with improved developer experience
- Tailwind CSS - Utility-first styling with custom design system

**UI & Animation:**

- Framer Motion - Declarative animations and layout transitions
- Radix UI - Accessible component primitives
- Recharts - Data visualization for impact tracking
- Lucide React - Consistent icon system

**Code Quality:**

- ESLint - Code linting and best practices enforcement
- TypeScript ESLint - TypeScript-specific linting rules

## Responsiveness & Layout

The application uses a mobile-first approach with carefully crafted breakpoints:

- **Mobile (320px - 640px)**: Single-column layouts, full-width CTAs, optimized navigation
- **Tablet (768px - 1024px)**: Two-column grids, adaptive charts, improved spacing
- **Desktop (1280px+)**: Multi-column layouts, sidebar navigation, enhanced data visualization

Key responsive features include a full-screen mobile menu overlay, flexible product grids, and adaptive chart heights that ensure optimal readability across all screen sizes.

## Accessibility & UX Considerations

**Accessibility Features:**

- Minimum 44x44px touch targets for mobile interactions
- Semantic HTML structure for screen readers
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion preferences respected
- Proper focus states on all interactive elements

**User Experience:**

- Clear visual hierarchy with typography scale
- Consistent component design language
- Subtle animations that enhance rather than distract
- Active navigation indicators
- Loading states and empty state handling
- Scroll position locking for modal overlays

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Local Development

```bash
# Clone the repository
git clone <repository-url>
cd eco-trace

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer, PageLayout
│   ├── home/           # Homepage sections
│   ├── products/       # Product-related components
│   └── ui/             # Base UI components (buttons, cards, etc.)
├── pages/              # Route-level page components
├── data/               # Mock data and constants
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css           # Global styles and Tailwind configuration
```

## Design System

The project implements a custom design system with:

- **Color Palette**: Forest green theme with semantic color tokens
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Spacing Scale**: Consistent 4px-based spacing system
- **Component Library**: Reusable, composable UI components

## Data & State Management

The application uses static mock data to simulate real product information. State is managed through React hooks (`useState`, `useMemo`) for filtering, sorting, and UI interactions. This approach keeps the codebase simple while demonstrating proper state management patterns.

## Future Improvements

**Potential Enhancements:**

- Add page transitions with Framer Motion shared layout animations
- Implement skeleton loading states for better perceived performance
- Add unit tests with Vitest and component tests with React Testing Library
- Optimize images with next-gen formats and responsive image loading
- Add search functionality with debounced input
- Implement URL-based filter state for shareable links
- Add PWA capabilities for offline access

## Performance Considerations

- Lazy loading of images with the `loading="lazy"` attribute
- Memoization of expensive calculations with `useMemo`
- Optimized re-renders through proper component structure
- Efficient CSS with Tailwind's utility-first approach
- Vite's fast HMR for development productivity

## Browser Support

The application supports modern browsers:

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

This project is a portfolio demonstration and is available for viewing and reference. For usage inquiries, please contact the repository owner.

---

**Note**: This is a frontend demonstration project using mock data. It showcases modern web development skills including responsive design, accessibility, animation, and clean code architecture.
