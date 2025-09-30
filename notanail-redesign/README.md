# nöt a nail tokyo - Redesigned Website

A modern, playful redesign of the nöt a nail tokyo website using React and styled-components with a vibrant, friendly aesthetic.

## Features

- 🎨 **Playful Design**: Bold colors (#264143, #EDDCD9, #E99F4C, #DE5499) with fun shadows and borders
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 💅 **Styled Components**: Modern CSS-in-JS for component-scoped styling
- 🌐 **Multi-Page**: Home, About, Contact, and Access pages with React Router

## Original Content Preserved

All copywriting and images from `business-web-notanail` have been maintained exactly as they were:
- All Japanese text and descriptions
- Company information
- Service descriptions
- Gallery images
- Contact form functionality

## Design Aesthetic

Inspired by a playful, modern UI style featuring:
- Bold, thick borders (2-3px)
- Offset box shadows for depth
- Rounded corners (10-20px)
- Vibrant color palette
- Hover animations and transitions
- Clean, readable typography

## Getting Started

### Installation

```bash
cd notanail-redesign
npm install
```

### Development

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
notanail-redesign/
├── public/
│   ├── asset/              # All nail design images
│   ├── logo.png
│   ├── notanaillogo.svg
│   └── notanialfavicon.png
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation with mobile menu
│   │   ├── Footer.jsx      # Footer with links
│   │   ├── Hero.jsx        # Homepage hero section
│   │   ├── Services.jsx    # Services section
│   │   └── Gallery.jsx     # Image gallery
│   ├── pages/
│   │   ├── Home.jsx        # Homepage
│   │   ├── About.jsx       # About page
│   │   ├── Contact.jsx     # Contact form
│   │   └── Access.jsx      # Location/access info
│   ├── styles/
│   │   └── GlobalStyles.jsx # Global CSS styles
│   ├── App.jsx             # Main app with routing
│   └── main.jsx            # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Color Palette

- **Primary Dark**: `#264143` - Text and borders
- **Cream/Beige**: `#EDDCD9` - Cards and backgrounds
- **Orange/Gold**: `#E99F4C` - Shadows and accents
- **Pink**: `#DE5499` - Buttons and highlights
- **Light Pink**: `#FFF5F5` - Background gradients

## Technologies

- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **Styled Components 6** - CSS-in-JS styling
- **Vite 5** - Build tool and dev server

## Mobile Responsiveness

All components are fully responsive with breakpoints at:
- Desktop: 1400px max-width
- Tablet: 968px
- Mobile: 768px
- Small Mobile: 480px

## Browser Support

Modern browsers supporting ES6+ features:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Built with ❤️ for nöt a nail tokyo