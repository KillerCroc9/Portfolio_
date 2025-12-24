# Portfolio Website - Game Dev & Gen AI Lead

A modern, professional portfolio website showcasing expertise in game development and generative AI, featuring video descriptions, current projects, and professional experience.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Video Showcase**: Display project demos and explanations with video embeds
- **Current Projects**: Highlight active development work with detailed descriptions
- **Experience Timeline**: Professional history with visual timeline
- **Contact Form**: Easy way for potential collaborators to get in touch
- **Smooth Animations**: Modern UI with smooth scrolling and entrance animations
- **Dark Theme**: Professional dark theme with gradient accents

## Structure

- `index.html` - Main HTML structure with all sections
- `styles.css` - Complete styling with responsive design
- `script.js` - Interactive features and animations

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Overview of expertise in game development and generative AI
3. **Videos Section**: Showcase projects through video descriptions
4. **Projects Section**: Display current active projects
5. **Experience Section**: Professional timeline of career progression
6. **Contact Section**: Contact information and message form
7. **Footer**: Quick links and social media connections

## Customization Guide

### Adding Your Own Videos

Edit `script.js` and update the `videoData` object:

```javascript
const videoData = {
    video1: {
        title: 'Your Video Title',
        description: 'Your video description',
        url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
    },
    // Add more videos...
};
```

Then update the corresponding video cards in `index.html` with appropriate thumbnails and metadata.

### Updating Projects

Modify the project cards in the "Current Projects" section of `index.html`:
- Change project titles, descriptions, and technologies
- Update placeholder images with actual project screenshots
- Add project links

### Customizing Experience

Edit the timeline items in the "Experience" section:
- Update dates, positions, and companies
- Modify job descriptions and achievements
- Add or remove timeline items as needed

### Changing Contact Information

Update the contact section in `index.html`:
- Email address
- Phone number
- Location
- Social media links in the footer

### Color Scheme

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... modify other colors */
}
```

## Usage

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required - it's pure HTML, CSS, and JavaScript

### Deployment

You can deploy this website to any static hosting service:

- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Netlify**: Drag and drop the files or connect your repo
- **Vercel**: Import your repository
- **AWS S3**: Upload files to an S3 bucket with static hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

## Tips for Personalization

1. **Replace placeholder images**: Use actual screenshots from your projects
2. **Add real video content**: Replace YouTube embed links with your actual videos
3. **Customize text**: Update all descriptions to reflect your actual experience
4. **Add your branding**: Include your logo or personal branding elements
5. **Update metadata**: Modify page title and add meta tags for SEO

## Future Enhancements

Consider adding:
- Blog section for technical articles
- Skills section with proficiency bars
- Testimonials from colleagues or clients
- Achievement badges or certifications
- Integration with GitHub API to show live repos
- Analytics tracking (Google Analytics, etc.)

## License

This is a portfolio template. Feel free to use and modify for your own portfolio.