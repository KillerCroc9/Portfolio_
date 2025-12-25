# PWA Icons and Screenshots

This directory contains assets required for Progressive Web App (PWA) functionality.

## Icons

Add PNG icons in the following sizes to the `icons/` subdirectory:

- **icon-72x72.png** (72x72 pixels)
- **icon-96x96.png** (96x96 pixels)
- **icon-128x128.png** (128x128 pixels)
- **icon-144x144.png** (144x144 pixels)
- **icon-152x152.png** (152x152 pixels)
- **icon-192x192.png** (192x192 pixels)
- **icon-384x384.png** (384x384 pixels)
- **icon-512x512.png** (512x512 pixels)

### Icon Design Guidelines

- Use a simple, recognizable design
- Ensure good contrast and visibility at small sizes
- Use PNG format with transparency
- Consider "maskable" icons (safe zones for different device shapes)
- Keep the design consistent with your brand

### Recommended Tools

- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator) - Automatically generate all icon sizes
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Create favicons and app icons
- [Figma](https://www.figma.com/) or [Canva](https://www.canva.com/) - Design your icon

## Screenshots

Add screenshots to the `screenshots/` subdirectory for app stores:

- **desktop-1.jpg** (1920x1080 pixels) - Desktop view
- **mobile-1.jpg** (750x1334 pixels) - Mobile view

### Screenshot Guidelines

- Capture key features and sections of your portfolio
- Ensure high quality (at least 1920x1080 for desktop)
- Use actual content, not placeholder text
- Show the app in its best light
- Consider adding multiple screenshots showing different sections

## Temporary Placeholder

Until you add your custom icons, the PWA will work but may show default browser icons. To generate placeholder icons quickly:

1. Create a square logo (512x512 recommended)
2. Use an online tool like [Favicon.io](https://favicon.io/) to generate all sizes
3. Download and extract to the `icons/` directory

## Apple-Specific Icons

For iOS devices, you may also want to add:

- **apple-touch-icon.png** (180x180 pixels) - Place in the root directory

Reference in your HTML:
```html
<link rel="apple-touch-icon" href="/Portfolio_/apple-touch-icon.png">
```
