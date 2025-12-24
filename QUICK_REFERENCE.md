# Quick Reference Guide

This guide provides quick access to common customization tasks for your portfolio.

## 📝 Common Updates

### Update Personal Information

**Location:** `index.html`

1. **Name** (Lines 24, 45)
   ```html
   <h1>Your Name</h1>
   ```

2. **Title/Role** (Line 46)
   ```html
   <p class="hero-subtitle">Your Title</p>
   ```

3. **Email** (Line 433)
   ```html
   <p>your.email@example.com</p>
   ```

4. **LinkedIn** (Lines 440, 501)
   ```html
   <a href="https://linkedin.com/in/your-profile">your-profile</a>
   ```

5. **GitHub** (Lines 447, 500)
   ```html
   <a href="https://github.com/your-username">your-username</a>
   ```

---

### Add Video Content

**Location:** `script.js` (Starting at line 96)

```javascript
const videoData = {
    video1: {
        title: 'Your Video Title',
        description: 'Detailed description of your video',
        url: 'Video And Description/Your-Video-File.mp4'
    }
};
```

**Adding Local Videos:**
1. Place your .mp4 video file in the `Video And Description` folder
2. Update the `url` field with the relative path to your video file
3. Ensure videos are web-optimized (H.264 codec recommended)

---

### Update Projects

**Location:** `index.html` (Lines 250-325)

**For each project card:**

1. **Image** (Line 258)
   ```html
   <img src="path/to/image.jpg" alt="Project Name">
   ```

2. **Status Badge** (Line 260)
   ```html
   <span class="status-badge active">Completed</span>
   <!-- or -->
   <span class="status-badge">In Progress</span>
   ```

3. **Title** (Line 264)
   ```html
   <h3>Project Name</h3>
   ```

4. **Description** (Line 265)
   ```html
   <p>Project description...</p>
   ```

5. **Tech Tags** (Lines 266-270)
   ```html
   <span class="tech-tag">Technology</span>
   ```

6. **Project Link** (Line 273)
   ```html
   <a href="https://github.com/you/project" class="project-link">
   ```

---

### Add Experience Entry

**Location:** `index.html` (Lines 333-420)

**Template for new timeline item:**

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <span class="timeline-date">Month Year – Month Year</span>
        <h3>Job Title</h3>
        <h4>Company Name</h4>
        <p>Brief role description</p>
        <ul>
            <li>Achievement or responsibility 1</li>
            <li>Achievement or responsibility 2</li>
            <li>Achievement or responsibility 3</li>
        </ul>
    </div>
</div>
```

**Note:** Add new items at the top for chronological order (most recent first)

---

### Update Skills

**Location:** `index.html` (Lines 130-183)

**Add new skill tag:**
```html
<span class="skill-tag">New Skill</span>
```

**Add new skill category:**
```html
<div class="skill-category">
    <h3><i class="fas fa-icon-name"></i> Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

---

### Change Color Scheme

**Location:** `styles.css` (Lines 8-20)

```css
:root {
    --primary-color: #667eea;      /* Main accent color */
    --secondary-color: #764ba2;    /* Secondary accent */
    --accent-color: #f093fb;       /* Highlight color */
    --dark-bg: #0f0f23;            /* Main background */
    --light-bg: #1a1a2e;           /* Section backgrounds */
    --card-bg: #16213e;            /* Card backgrounds */
    --text-primary: #ffffff;       /* Main text */
    --text-secondary: #a0aec0;     /* Secondary text */
}
```

**Tip:** Use [Coolors.co](https://coolors.co/) to generate color palettes

---

### Update Meta Tags (SEO)

**Location:** `index.html` (Lines 4-26)

1. **Page Description** (Line 6)
   ```html
   <meta name="description" content="Your description">
   ```

2. **Keywords** (Line 7)
   ```html
   <meta name="keywords" content="keyword1, keyword2, keyword3">
   ```

3. **Open Graph Title** (Line 13)
   ```html
   <meta property="og:title" content="Your Portfolio Title">
   ```

4. **Open Graph Description** (Line 14)
   ```html
   <meta property="og:description" content="Your description">
   ```

---

### Add New Section

**General Structure:**

```html
<section id="section-name" class="section-name">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <p class="section-subtitle">Optional subtitle</p>
        <!-- Your content here -->
    </div>
</section>
```

**Don't forget to:**
1. Add navigation link in navbar (Line 32)
2. Add footer link (Line 489)
3. Add corresponding CSS styles in `styles.css`

---

## 🎨 Styling Tips

### Card Hover Effects
Cards automatically have hover effects. To disable, remove in CSS:
```css
.card:hover {
    transform: translateY(-10px);
}
```

### Animation Speed
Adjust in `styles.css`:
```css
:root {
    --transition: all 0.3s ease; /* Change 0.3s to your preference */
}
```

### Font Changes
Update in `styles.css` (Line 27):
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Update all personal information
- [ ] Add real project images
- [ ] Update project links
- [ ] Add video URLs (if applicable)
- [ ] Create and add `og-image.jpg` for social sharing
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Validate HTML and CSS
- [ ] Test contact form
- [ ] Update README with live site URL

---

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed information
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines
- Open an issue on GitHub for bugs or questions

---

**Last Updated:** December 2024
