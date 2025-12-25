# Placeholder PWA Icons

## Quick Setup

Until you add custom icons, you can use these placeholder icons or generate them from the provided SVG.

### Using the SVG Placeholder

The `icon-512x512.svg` file contains a simple placeholder icon with your initials "AM".

### Generate PNG Icons from SVG

#### Option 1: Online Tools
1. Open [CloudConvert](https://cloudconvert.com/svg-to-png)
2. Upload `icon-512x512.svg`
3. Convert to PNG at different sizes:
   - 512x512, 384x384, 192x192, 152x152, 144x144, 128x128, 96x96, 72x72

#### Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick
# Ubuntu/Debian: sudo apt-get install imagemagick
# macOS: brew install imagemagick

# Navigate to icons directory
cd assets/icons

# Generate all sizes
convert icon-512x512.svg -resize 512x512 icon-512x512.png
convert icon-512x512.svg -resize 384x384 icon-384x384.png
convert icon-512x512.svg -resize 192x192 icon-192x192.png
convert icon-512x512.svg -resize 152x152 icon-152x152.png
convert icon-512x512.svg -resize 144x144 icon-144x144.png
convert icon-512x512.svg -resize 128x128 icon-128x128.png
convert icon-512x512.svg -resize 96x96 icon-96x96.png
convert icon-512x512.svg -resize 72x72 icon-72x72.png
```

#### Option 3: Using npm package
```bash
npm install -g pwa-asset-generator

# Generate all sizes
pwa-asset-generator icon-512x512.svg ./assets/icons
```

### Custom Icon Design

For a professional look, create your custom icon:

1. **Design Requirements**
   - Square format (512x512 recommended)
   - Simple, recognizable design
   - Good contrast
   - Readable at small sizes

2. **Design Tools**
   - [Figma](https://figma.com) (Free, web-based)
   - [Canva](https://canva.com) (Free templates)
   - Adobe Illustrator
   - Inkscape (Free, open-source)

3. **Tips**
   - Use your logo or initials
   - Keep it simple (avoid too much detail)
   - Use 2-3 colors maximum
   - Test at small sizes (72x72)
   - Consider "maskable" icons for Android

### Apple Touch Icon

For iOS devices, also create:
```bash
convert icon-512x512.svg -resize 180x180 ../../apple-touch-icon.png
```

Then add to your HTML `<head>`:
```html
<link rel="apple-touch-icon" href="apple-touch-icon.png">
```

## Testing

After adding icons, test them:

1. **Chrome DevTools**
   - Open DevTools (F12)
   - Go to "Application" tab
   - Check "Manifest" section
   - Verify all icons are listed

2. **Lighthouse**
   - Run Lighthouse audit
   - Check PWA score
   - Verify "Installable" criteria

3. **Real Device Testing**
   - Test installation on Android device
   - Test on iOS device
   - Verify icon appears correctly

## Current Status

✅ SVG placeholder provided
❌ PNG icons need to be generated
❌ Apple touch icon needs to be created

Generate the icons using one of the methods above to enable full PWA functionality.
