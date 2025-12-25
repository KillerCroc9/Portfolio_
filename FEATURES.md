# Advanced Features Documentation

This document provides detailed information about the advanced features added to the portfolio website.

## Table of Contents

1. [GitHub API Integration](#github-api-integration)
2. [Analytics Tracking](#analytics-tracking)
3. [Theme Toggle](#theme-toggle)
4. [Internationalization (i18n)](#internationalization-i18n)
5. [Progressive Web App (PWA)](#progressive-web-app-pwa)
6. [Performance Optimization](#performance-optimization)

---

## GitHub API Integration

### Overview
Displays live statistics from your GitHub repositories, including stars, forks, and last update time.

### Features
- Fetches top 6 repositories sorted by last updated
- Caches data for 15 minutes to avoid API rate limits
- Shows repository name, description, language, stars, and forks
- Links directly to GitHub repository
- Graceful error handling

### Configuration

Edit `github-api.js` to customize:

```javascript
const GITHUB_USERNAME = 'KillerCroc9'; // Change to your username
const CACHE_DURATION = 1000 * 60 * 15; // Adjust cache duration (15 minutes default)
```

### API Rate Limits
- Unauthenticated: 60 requests/hour
- Authenticated: 5000 requests/hour (requires GitHub token)

To use authenticated requests, modify the fetch call in `github-api.js`:

```javascript
const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
    headers: {
        'Authorization': 'token YOUR_GITHUB_TOKEN'
    }
});
```

---

## Analytics Tracking

### Supported Platforms

#### 1. Google Analytics 4 (GA4)

**Setup:**
1. Create a GA4 property at [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Update `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // Uncomment and add your ID
</script>
```

#### 2. Plausible Analytics (Privacy-friendly alternative)

**Setup:**
1. Sign up at [Plausible.io](https://plausible.io/)
2. Add your domain
3. Uncomment this line in `index.html`:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Tracked Events

The following events are automatically tracked:

- **Theme Changes**: When user switches between dark/light mode
- **Language Changes**: When user changes language
- **Video Views**: When user opens a video
- **Form Submissions**: When contact form is submitted
- **GitHub Repos Load**: When repositories are successfully loaded
- **PWA Install**: When user installs the app

### Custom Event Tracking

Use the `trackEvent()` function in your code:

```javascript
trackEvent('Category', 'Action', 'Label', value);
```

Example:
```javascript
trackEvent('Project', 'Click', 'Project Name', 1);
```

---

## Theme Toggle

### Features
- Switches between dark and light themes
- Saves user preference in localStorage
- Respects system preference on first visit
- Smooth transitions between themes

### Usage
Click the moon/sun icon in the navigation bar to toggle themes.

### Customization

Edit theme colors in `styles.css`:

```css
/* Dark Theme (default) */
:root {
    --primary-color: #667eea;
    --dark-bg: #0f0f23;
    --text-primary: #ffffff;
    /* ... */
}

/* Light Theme */
[data-theme="light"] {
    --dark-bg: #f7fafc;
    --light-bg: #ffffff;
    --text-primary: #1a202c;
    /* ... */
}
```

### Programmatic Access

```javascript
// Get current theme
const theme = getCurrentTheme(); // Returns 'dark' or 'light'

// Set theme
setTheme('light');

// Toggle theme
toggleTheme();
```

---

## Internationalization (i18n)

### Supported Languages
- English (en) - Default
- Urdu (ur)

### Features
- Automatic text translation
- RTL support for Urdu
- Saves language preference
- Smooth language switching

### Usage
Click the language toggle button (EN/UR) in the navigation bar.

### Adding New Languages

1. **Add translations to `i18n.js`:**

```javascript
const translations = {
    en: { /* existing translations */ },
    ur: { /* existing translations */ },
    es: {  // New Spanish translation
        nav: {
            home: 'Inicio',
            about: 'Acerca de',
            // ... add all keys
        },
        // ... add all sections
    }
};
```

2. **Update supported languages:**

```javascript
const SUPPORTED_LANGUAGES = ['en', 'ur', 'es'];
```

3. **Add data-i18n attributes to HTML:**

```html
<h1 data-i18n="hero.title">Abdul Muqeet</h1>
<p data-i18n="hero.subtitle">Lead Unreal Developer</p>
```

### Translation Keys

Use dot notation for nested keys:
- `nav.home` → Navigation home link
- `hero.title` → Hero section title
- `form.name_placeholder` → Form name input placeholder

---

## Progressive Web App (PWA)

### Features
- **Offline Support**: Works without internet connection
- **Installable**: Can be installed on mobile/desktop
- **Fast Loading**: Caches assets for instant loading
- **App-like Experience**: Full-screen mode, no browser UI

### Installation

#### Desktop
1. Visit the website
2. Look for install prompt or click install button in address bar
3. Click "Install"

#### Mobile
1. Open in Chrome/Safari
2. Tap "Add to Home Screen"
3. Confirm installation

### Configuration

#### Update Service Worker Cache

Edit `service-worker.js`:

```javascript
const CACHE_NAME = 'portfolio-v1.0.1'; // Update version
const STATIC_ASSETS = [
    '/Portfolio_/',
    '/Portfolio_/index.html',
    // Add more assets to cache
];
```

#### Customize Manifest

Edit `manifest.json`:

```json
{
    "name": "Your Portfolio Name",
    "short_name": "Portfolio",
    "start_url": "/your-path/",
    "theme_color": "#667eea",
    // ... other settings
}
```

### Adding PWA Icons

See `assets/PWA_ASSETS_README.md` for detailed instructions.

Required icon sizes:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512 pixels

Place icons in `assets/icons/` directory.

### Update Notifications

When a new version is available, users see an update notification. To trigger an update:

1. Update the `CACHE_NAME` version in `service-worker.js`
2. Deploy changes
3. Users will see "A new version is available! Click to refresh."

---

## Performance Optimization

### Lazy Loading

Images are loaded only when they enter the viewport.

**How to use:**

```html
<!-- Add loading="lazy" attribute -->
<img src="image.jpg" loading="lazy" alt="Description">

<!-- Or use data-src for custom lazy loading -->
<img data-src="image.jpg" alt="Description">
```

The lazy loading script will automatically handle loading when images come into view.

### Caching Strategy

**Static Assets**: Cached on first load
- HTML, CSS, JavaScript files
- Fonts and icons

**Dynamic Content**: Cached after first access
- Images
- Video thumbnails

**Never Cached**:
- API responses (GitHub API)
- Analytics scripts
- External resources from unknown domains

### Best Practices

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images (use TinyPNG, ImageOptim)
   - Serve responsive images with srcset

2. **Minify Assets** (for production)
   ```bash
   # CSS
   npx clean-css-cli -o styles.min.css styles.css
   
   # JavaScript
   npx terser script.js -o script.min.js
   ```

3. **Preload Critical Assets**
   ```html
   <link rel="preload" href="styles.css" as="style">
   <link rel="preload" href="script.js" as="script">
   ```

4. **Use CDN for libraries**
   - Font Awesome is loaded from CDN
   - Consider using CDN for large assets

### Performance Monitoring

Use these tools to test performance:
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

Target metrics:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

---

## Troubleshooting

### GitHub API Issues

**Problem**: Repositories not loading
**Solutions**:
- Check browser console for errors
- Verify GitHub username is correct
- Check if API rate limit exceeded
- Clear localStorage cache

### Analytics Not Working

**Problem**: Events not tracked
**Solutions**:
- Verify tracking ID is correct and uncommented
- Check browser console for errors
- Disable ad blockers for testing
- Wait 24-48 hours for data to appear in dashboard

### Theme Not Persisting

**Problem**: Theme resets on page reload
**Solutions**:
- Check if localStorage is enabled in browser
- Clear browser cache
- Check browser console for errors

### PWA Not Installing

**Problem**: Install prompt doesn't appear
**Solutions**:
- Ensure HTTPS is enabled (required for PWA)
- Verify manifest.json is accessible
- Check service worker registration in DevTools
- Ensure all required manifest fields are present

### Translation Issues

**Problem**: Text not translating
**Solutions**:
- Verify data-i18n attributes are correct
- Check translation keys exist in i18n.js
- Clear localStorage and reload
- Check browser console for errors

---

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Theme Toggle | ✅ | ✅ | ✅ | ✅ |
| i18n | ✅ | ✅ | ✅ | ✅ |
| PWA | ✅ | ✅ | ⚠️ Limited | ✅ |
| Service Worker | ✅ | ✅ | ✅ | ✅ |
| Lazy Loading | ✅ | ✅ | ✅ | ✅ |

⚠️ Safari on iOS has limited PWA support compared to Android/Desktop

---

## Support

For issues or questions:
- Open an issue on GitHub
- Check browser console for error messages
- Review this documentation
- Test in different browsers

---

## Credits

- Font Awesome for icons
- GitHub API for repository data
- Google Analytics / Plausible for analytics
- MDN Web Docs for PWA guides
