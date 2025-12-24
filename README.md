# Portfolio Website - Lead Unreal Developer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> A modern, professional portfolio website showcasing expertise in Unreal Engine development, C++ programming, AI integration, and game development leadership.

**Live Demo:** [View Portfolio](https://killercroc9.github.io/Portfolio_/)

---

## 📑 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Structure](#-structure)
- [Sections](#-sections)
- [Customization Guide](#-customization-guide)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Browser Support](#-browser-support)
- [Technologies Used](#-technologies-used)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 📚 Additional Documentation

- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick reference for common customization tasks
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Comprehensive pre-deployment checklist
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guidelines for contributing to this project
- **[assets/README.md](assets/README.md)** - Information about asset requirements

---

A modern, professional portfolio website showcasing expertise in game development and generative AI, featuring video descriptions, current projects, and professional experience.

## ✨ Features

- **Responsive Design** - Seamlessly adapts to desktop, tablet, and mobile devices with fluid layouts
- **Professional Sections** - Comprehensive showcase including About, Experience, Projects, Awards, and Contact
- **Video Showcase** - Display project demos and explanations with embedded video player modal
- **Current Projects** - Highlight active development work with detailed technical descriptions
- **Experience Timeline** - Visual timeline showcasing professional career progression and achievements
- **Interactive Contact Form** - Built-in form validation for easy communication
- **Smooth Animations** - Modern UI with intersection observer-based scroll animations
- **Dark Theme** - Professional dark theme with purple gradient accents
- **SEO Optimized** - Includes meta tags for social sharing and search engines
- **Accessible** - ARIA labels and semantic HTML for screen readers

---

## 📸 Screenshots

*Coming soon - Add screenshots of your portfolio sections*

---

## 📁 Structure

```
Portfolio_/
├── index.html                    # Main HTML structure
├── styles.css                    # Complete styling with responsive design
├── script.js                     # Interactive features and animations
├── README.md                     # Main documentation
├── LICENSE                       # MIT License
├── CONTRIBUTING.md               # Contribution guidelines
├── QUICK_REFERENCE.md            # Quick customization reference
├── DEPLOYMENT_CHECKLIST.md       # Pre-deployment checklist
├── .gitignore                    # Git ignore rules
├── .editorconfig                 # Editor configuration
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages deployment workflow
└── assets/
    └── README.md                 # Asset requirements and guidelines
```

---

## 📄 Sections

### 1. **Hero Section**
Eye-catching introduction with animated title and call-to-action buttons

### 2. **About Section**
Professional overview highlighting expertise in:
- Unreal Engine C++ Development
- AI Integration (OpenAI, ConvAi)
- Technical Leadership
- Performance Optimization

### 3. **Education Section**
Academic background and qualifications

### 4. **Skills Section**
Comprehensive display of technical skills categorized by:
- Programming Languages (C++, C#, Blueprint, Python)
- Unreal Engine Expertise
- Development Tools
- Platforms
- API Integrations

### 5. **Awards & Leadership Section**
Achievements, competitions, and leadership roles

### 6. **Projects Section**
Showcase of relevant academic and personal projects including:
- AI NPC Dialogue Systems
- Motion Capture Projects
- Reinforcement Learning Games

### 7. **Experience Section**
Professional timeline featuring:
- Lead Unreal Developer at AB {Ark} Private Limited
- Senior Unreal Developer at Moshpit Studios
- Freelance Game Development
- Unity Development at Virtual Dive

### 8. **Contact Section**
Contact information and interactive form with validation

### 9. **Footer**
Quick navigation links and social media connections

---

## 🎨 Customization Guide

### Adding Your Own Videos

Edit `script.js` and update the `videoData` object (around line 82):

```javascript
const videoData = {
    video1: {
        title: 'Your Video Title',
        description: 'Your comprehensive video description',
        url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
    },
    // Add more videos as needed...
};
```

To get a YouTube embed URL:
1. Go to your video on YouTube
2. Click "Share" → "Embed"
3. Copy the URL from `src="..."` (e.g., `https://www.youtube.com/embed/dQw4w9WgXcQ`)

### Updating Projects

Modify the project cards in the "Relevant Projects" section of `index.html`:
- Update project titles and descriptions
- Replace placeholder images with actual screenshots
- Update technology tags
- Add working project links (replace `#` with actual URLs)

**Example:**
```html
<div class="project-image">
    <img src="path/to/your/image.jpg" alt="Project Name">
</div>
```

### Customizing Experience

Edit the timeline items in the "Experience" section of `index.html`:
- Update dates, positions, and companies
- Modify job descriptions and achievements
- Add or remove `<li>` items within each timeline entry
- Maintain chronological order (most recent first)

### Changing Personal Information

Update these sections in `index.html`:

**Contact Information:**
```html
<!-- Around line 429 -->
<div class="contact-info">
    <p>YourEmail@example.com</p>
    <p><a href="https://linkedin.com/in/your-profile">your-profile</a></p>
    <p><a href="https://github.com/your-username">your-username</a></p>
</div>
```

**Footer Social Links:**
```html
<!-- Around line 499 -->
<a href="https://github.com/your-username" target="_blank">...</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">...</a>
```

### Color Scheme

Modify CSS custom properties in `styles.css` (around line 8):

```css
:root {
    --primary-color: #667eea;      /* Main purple */
    --secondary-color: #764ba2;    /* Dark purple */
    --accent-color: #f093fb;       /* Pink accent */
    --dark-bg: #0f0f23;            /* Background */
    --light-bg: #1a1a2e;           /* Secondary bg */
    --card-bg: #16213e;            /* Card backgrounds */
    --text-primary: #ffffff;       /* Main text */
    --text-secondary: #a0aec0;     /* Secondary text */
}
```

### Meta Tags for SEO

Update meta tags in `index.html` `<head>` section:
```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="your, custom, keywords">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Portfolio Title">
<meta property="og:description" content="Your description">
```

---

## 🚀 Usage

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/KillerCroc9/Portfolio_.git
   cd Portfolio_
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View in browser**
   - Navigate to `http://localhost:8000`

**No build process required!** Pure HTML, CSS, and JavaScript.

---

## 🌐 Deployment

You can deploy this portfolio to any static hosting service:

### GitHub Pages (Recommended)

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select source branch (main/master)
4. Your site will be available at: `https://yourusername.github.io/repository-name/`

### Netlify

1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Or connect your GitHub repository for automatic deployments
3. Configure build settings (none needed for static sites)

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Or import your GitHub repository at [vercel.com](https://vercel.com)

### Alternative Hosting Options

- **AWS S3**: Upload files to an S3 bucket with static website hosting enabled
- **Cloudflare Pages**: Connect your GitHub repo for automatic deployments
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Surge**: Simple deployment with `surge` command

---

## 🌍 Browser Support

| Browser | Supported Versions |
|---------|-------------------|
| Chrome | Latest ✅ |
| Firefox | Latest ✅ |
| Safari | Latest ✅ |
| Edge | Latest ✅ |
| Mobile Safari (iOS) | iOS 12+ ✅ |
| Chrome Mobile (Android) | Latest ✅ |

**Note:** The site uses modern CSS features (CSS Grid, Flexbox, Custom Properties) and ES6+ JavaScript.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling with Flexbox, Grid, and Animations |
| **JavaScript (ES6+)** | Interactive features and form validation |
| **Font Awesome 6.4.0** | Icon library for UI elements |
| **Intersection Observer API** | Scroll-based animations |
| **CSS Custom Properties** | Theming and easy customization |

---

## 💡 Tips for Personalization

1. **Replace placeholder images**
   - Use high-quality screenshots from your actual projects
   - Recommended size: 600x400px for project cards
   - Optimize images for web (use tools like TinyPNG)

2. **Add real video content**
   - Upload project demos to YouTube
   - Replace embed links in `script.js`
   - Consider adding video thumbnails

3. **Customize all text content**
   - Update descriptions to reflect your actual experience
   - Use specific metrics and achievements
   - Keep language professional and concise

4. **Add your branding**
   - Include your logo in the navigation
   - Update favicon (add `<link rel="icon">` in HTML head)
   - Maintain consistent color scheme

5. **Update page metadata**
   - Modify title tag for SEO
   - Update meta descriptions
   - Add Open Graph images for social sharing

6. **Test thoroughly**
   - Check all links work correctly
   - Test on multiple devices and browsers
   - Validate HTML and CSS (W3C validators)
   - Test form submission

---

## 🔮 Future Enhancements

Consider adding:

- [ ] **Blog section** for technical articles and tutorials
- [ ] **Skills section** with interactive proficiency indicators
- [ ] **Testimonials** from colleagues or clients
- [ ] **Achievement badges** and certifications display
- [ ] **GitHub API integration** to show live repository statistics
- [ ] **Analytics tracking** (Google Analytics, Plausible, etc.)
- [ ] **Dark/Light theme toggle** for user preference
- [ ] **Internationalization (i18n)** for multiple languages
- [ ] **PWA features** for offline capability
- [ ] **Backend integration** for functional contact form
- [ ] **Blog/CMS integration** with headless CMS
- [ ] **Performance optimization** with lazy loading

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

You are free to:
- Use this template for your own portfolio
- Modify and customize it
- Distribute it
- Use it commercially

---

## 📧 Contact

**Abdul Muqeet** - Lead Unreal Developer

- Email: [Muqeeta2@gmail.com](mailto:Muqeeta2@gmail.com)
- LinkedIn: [abdul-muqeet-765283207](https://www.linkedin.com/in/abdul-muqeet-765283207/)
- GitHub: [@KillerCroc9](https://github.com/KillerCroc9)
- Portfolio: [View Live Site](https://killercroc9.github.io/Portfolio_/)

---

## 🙏 Acknowledgments

- Font Awesome for the icon library
- Inspiration from modern portfolio designs
- The open-source community

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by Abdul Muqeet

</div>