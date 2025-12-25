# Testing Guide for Portfolio Features

This guide helps you test all the advanced features added to the portfolio website.

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Local web server (Python, Node.js, or similar)
- Internet connection (for GitHub API and external resources)

## Setup for Testing

### 1. Start Local Server

Choose one method:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

### 2. Open in Browser

Navigate to: `http://localhost:8000`

---

## Feature Testing Checklist

### ✅ GitHub API Integration

**Test Steps:**
1. Scroll to "GitHub Repositories" section
2. Wait for repositories to load (shows spinner initially)
3. Verify repository cards appear with:
   - Repository name (linked to GitHub)
   - Description
   - Star count
   - Fork count
   - Programming language
   - Last update time

**Expected Results:**
- ✅ Repositories load within 2-3 seconds
- ✅ Data is cached (reload page, should load instantly)
- ✅ Shows placeholder if username not configured
- ✅ Graceful error handling if API fails

**Troubleshooting:**
- Check browser console for errors
- Verify GitHub username in `github-api.js`
- Check API rate limits (60 requests/hour unauthenticated)

---

### ✅ Dark/Light Theme Toggle

**Test Steps:**
1. Click moon/sun icon in navigation
2. Observe theme change
3. Reload page
4. Verify theme preference persisted

**Expected Results:**
- ✅ Smooth transition between themes
- ✅ All elements update colors appropriately
- ✅ Icon changes (moon → sun, sun → moon)
- ✅ Preference saved in localStorage
- ✅ Notification appears on theme change

**Test Both Themes:**
- Check all sections visibility
- Verify text contrast and readability
- Test cards, buttons, and form elements
- Ensure gradient backgrounds work

---

### ✅ Language Toggle (i18n)

**Test Steps:**
1. Click language button (EN/UR)
2. Observe text translations
3. Verify Urdu shows right-to-left (RTL)
4. Reload page
5. Confirm language preference persisted

**Expected Results:**
- ✅ Navigation menu translates
- ✅ Section titles translate
- ✅ Buttons and form labels translate
- ✅ RTL layout for Urdu
- ✅ Preference saved in localStorage
- ✅ Notification shows language change

**Test Coverage:**
- All navigation links
- Hero section text
- Section titles
- Form placeholders
- Button text

---

### ✅ Analytics Tracking

**Test Steps:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Perform actions:
   - Change theme
   - Change language
   - Click video card
   - Submit contact form
   - Wait for GitHub repos to load

**Expected Results (Development Mode):**
- ✅ Console logs show events:
  ```
  Analytics Event: {
    category: "Theme",
    action: "Change",
    label: "light",
    value: undefined
  }
  ```

**Production Setup:**
- Configure Google Analytics ID
- Wait 24-48 hours for data
- Check GA4 dashboard for events

---

### ✅ PWA Features

#### Service Worker Registration

**Test Steps:**
1. Open DevTools → Application tab
2. Check "Service Workers" section
3. Verify service worker is registered

**Expected Results:**
- ✅ Status: "activated and is running"
- ✅ Scope: `/Portfolio_/` (or your path)
- ✅ No errors in console

#### Offline Functionality

**Test Steps:**
1. Load page fully
2. Open DevTools → Network tab
3. Check "Offline" checkbox
4. Reload page

**Expected Results:**
- ✅ Page loads from cache
- ✅ Static assets available offline
- ✅ GitHub API fails gracefully

#### PWA Installation

**Desktop (Chrome):**
1. Look for install icon in address bar
2. Click "Install"
3. App opens in standalone window

**Mobile (Chrome/Safari):**
1. Tap menu (⋮)
2. Tap "Add to Home Screen"
3. Confirm installation

**Expected Results:**
- ✅ Install prompt appears
- ✅ App installs successfully
- ✅ Icon appears on device
- ✅ Opens in app mode (no browser UI)

#### Manifest Validation

**Test Steps:**
1. DevTools → Application → Manifest
2. Verify all fields present:
   - Name
   - Short name
   - Icons (if added)
   - Start URL
   - Display mode
   - Theme color

---

### ✅ Lazy Loading Images

**Test Steps:**
1. Open DevTools → Network tab
2. Filter by "Img"
3. Scroll slowly through page
4. Watch images load as they enter viewport

**Expected Results:**
- ✅ Images load only when visible
- ✅ Smooth fade-in effect
- ✅ Reduces initial page load
- ✅ No layout shift (CLS)

**Performance Test:**
1. DevTools → Network
2. Hard reload (Ctrl+Shift+R)
3. Check "transferred" size
4. Should be less with lazy loading

---

### ✅ Contact Form Validation

**Test Steps:**

**Test 1: Empty Form**
1. Click "Send Message" without filling
2. Verify error messages appear

**Test 2: Invalid Email**
1. Enter name: "John Doe"
2. Enter email: "invalid-email"
3. Submit form
4. Verify email error

**Test 3: Valid Submission**
1. Fill all required fields correctly
2. Submit form
3. Verify success notification
4. Check form clears

**Expected Results:**
- ✅ Real-time validation on blur
- ✅ Clear error messages
- ✅ Success notification appears
- ✅ Form resets after success
- ✅ Analytics event tracked

---

### ✅ Video Modal

**Test Steps:**
1. Click any video card
2. Verify modal opens
3. Check video plays
4. Close modal (X button or click outside)
5. Verify video stops

**Expected Results:**
- ✅ Smooth modal animation
- ✅ Video loads and plays
- ✅ ESC key closes modal
- ✅ Click outside closes modal
- ✅ Analytics tracks video view
- ✅ Page scroll disabled when open

---

### ✅ Responsive Design

**Test Viewports:**

**Desktop (1920x1080)**
- ✅ Full layout with all sections
- ✅ Navigation horizontal
- ✅ Cards in grid (3-4 columns)

**Tablet (768x1024)**
- ✅ Adjusted layout
- ✅ Cards in 2 columns
- ✅ Navigation collapses

**Mobile (375x667)**
- ✅ Single column layout
- ✅ Hamburger menu
- ✅ Touch-friendly buttons
- ✅ Readable text sizes

**Test Methods:**
1. DevTools → Toggle device toolbar (Ctrl+Shift+M)
2. Test different device presets
3. Rotate device (portrait/landscape)

---

### ✅ Navigation

**Test Steps:**
1. Click navigation links
2. Verify smooth scroll to sections
3. Test hamburger menu (mobile)
4. Check active link highlighting

**Expected Results:**
- ✅ Smooth scroll animation
- ✅ Correct section offset (navbar height)
- ✅ Mobile menu opens/closes
- ✅ Active section highlighted
- ✅ Menu closes on link click (mobile)

---

### ✅ Performance

**Lighthouse Audit:**
1. Open DevTools → Lighthouse
2. Select "Desktop" or "Mobile"
3. Check all categories
4. Click "Generate report"

**Target Scores:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95
- PWA: > 90

**Key Metrics:**
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

---

## Browser Compatibility Testing

Test in multiple browsers:

### Chrome
- ✅ All features
- ✅ PWA installation
- ✅ Service worker

### Firefox
- ✅ All features
- ✅ PWA installation
- ✅ Service worker

### Safari
- ✅ All features
- ⚠️ Limited PWA support
- ✅ Service worker

### Edge
- ✅ All features
- ✅ PWA installation
- ✅ Service worker

---

## Common Issues and Solutions

### Issue: GitHub repos not loading
**Solution:**
- Check GitHub username in `github-api.js`
- Verify internet connection
- Check API rate limits
- Clear localStorage cache

### Issue: Theme not persisting
**Solution:**
- Check localStorage is enabled
- Clear browser cache
- Test in incognito mode

### Issue: Service worker not registering
**Solution:**
- Use HTTPS or localhost
- Check service worker path
- Clear application cache
- Hard reload (Ctrl+Shift+R)

### Issue: PWA not installable
**Solution:**
- Verify manifest.json is accessible
- Add required PWA icons
- Use HTTPS
- Check manifest in DevTools

### Issue: Translations not working
**Solution:**
- Verify data-i18n attributes
- Check translation keys in i18n.js
- Clear localStorage
- Check console for errors

---

## Automated Testing (Optional)

For continuous testing, consider:

### Playwright/Puppeteer
```javascript
// Example test
test('theme toggle works', async ({ page }) => {
  await page.goto('http://localhost:8000');
  await page.click('#theme-toggle');
  const theme = await page.getAttribute('html', 'data-theme');
  expect(theme).toBe('light');
});
```

### Lighthouse CI
```bash
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:8000
```

---

## Pre-Deployment Checklist

Before deploying to production:

- [ ] All tests passing
- [ ] GitHub username configured
- [ ] Analytics tracking ID added
- [ ] PWA icons generated and added
- [ ] Manifest.json updated with correct URLs
- [ ] Service worker paths correct
- [ ] All links working
- [ ] Forms tested
- [ ] Responsive design verified
- [ ] Performance optimized
- [ ] SEO tags updated
- [ ] Browser testing completed

---

## Reporting Issues

If you find issues:

1. Check browser console for errors
2. Test in multiple browsers
3. Verify configuration settings
4. Check this testing guide
5. Open GitHub issue with:
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

---

## Success Criteria

✅ All features working as expected
✅ No console errors
✅ Lighthouse score > 90 in all categories
✅ PWA installable
✅ Works offline
✅ Responsive on all devices
✅ Fast loading times
✅ Analytics tracking events
✅ Smooth animations
✅ Accessible to all users
