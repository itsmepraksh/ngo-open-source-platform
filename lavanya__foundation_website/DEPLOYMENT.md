# Deployment Guide - Lavanya Foundation Website

## 🚀 Quick Start (Local Testing)

1. **Download the files** to your computer
2. **Open index.html** in any modern web browser
3. **Access admin panel** by opening admin.html
4. **Login credentials**: admin / admin123

## 🌐 Web Hosting Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named "lavanya-website"
3. Upload all files to the repository
4. Go to Settings > Pages
5. Select "Deploy from a branch" > "main"
6. Your site will be available at: `https://yourusername.github.io/lavanya-website`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder to deploy
3. Get instant live URL
4. Auto-deploys on file changes

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Get instant deployment with custom domain

### Option 4: Traditional Web Hosting
1. Purchase hosting from providers like:
   - Hostgator
   - Bluehost
   - SiteGround
   - GoDaddy
2. Upload files via FTP to public_html folder
3. Point your domain to the hosting

## 📁 File Requirements

Make sure these files are present:
```
├── index.html          (Main website)
├── admin.html          (Admin panel)
├── css/
│   ├── style.css
│   └── admin.css
├── js/
│   ├── script.js
│   └── admin.js
├── assets/             (Create this folder)
│   ├── logo.png       (Add your logo)
│   ├── favicon.png    (Add favicon)
│   └── hero-video.mp4 (Optional: Add your video)
```

## 🎯 Pre-Launch Checklist

### Content
- [ ] Replace placeholder logo with real logo
- [ ] Add real hero video (or use CSS background)
- [ ] Update contact information in footer
- [ ] Customize color scheme if needed
- [ ] Add real team member photos and bios
- [ ] Update gallery with actual project images
- [ ] Customize impact stories with real data
- [ ] Update partner logos and information

### Technical
- [ ] Test on different devices (mobile, tablet, desktop)
- [ ] Test in different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all links work
- [ ] Check image loading
- [ ] Test admin panel functionality
- [ ] Verify responsive design

### SEO & Performance
- [ ] Add meta descriptions to HTML files
- [ ] Optimize images for web (compress large files)
- [ ] Add alt text to all images
- [ ] Test loading speed
- [ ] Add Google Analytics (if desired)

## 🔧 Customization Guide

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2ecc71;    /* Main green */
    --secondary-color: #3498db;  /* Blue accent */
    --accent-color: #27ae60;     /* Dark green */
}
```

### Adding Your Logo
1. Create logo files (PNG format recommended):
   - Logo: 200x200px or larger
   - Favicon: 32x32px
2. Replace files in assets folder
3. Update references in HTML if filename changes

### Adding Real Video
1. Create/obtain a professional video (MP4 format)
2. Keep file size under 50MB for fast loading
3. Recommended dimensions: 1920x1080
4. Place in assets folder as `hero-video.mp4`

### Custom Domain
1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Point domain to your hosting provider
3. Update any absolute URLs in code

## 📱 Mobile Optimization

The website is already mobile-optimized, but verify:
- Touch targets are large enough (44px minimum)
- Text is readable without zooming
- Images scale properly
- Navigation works on mobile
- Forms are easy to fill on mobile

## 🔒 Security Considerations

### For Production Use:
1. **Replace demo admin login** with real authentication
2. **Add server-side backend** for data storage
3. **Implement HTTPS** (most hosting providers offer this free)
4. **Add form validation** server-side
5. **Consider adding CAPTCHA** to contact forms

### Current Limitations:
- Admin uses localStorage (data only stored locally)
- No real user authentication
- No server-side data persistence
- No email functionality

## 📈 Analytics & Monitoring

### Add Google Analytics:
1. Create Google Analytics account
2. Add tracking code to `<head>` section of both HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Monitor Performance:
- Use Google PageSpeed Insights
- Test with GTmetrix
- Monitor uptime with services like UptimeRobot

## 🆘 Troubleshooting

### Common Issues:

**Images not loading:**
- Check file paths are correct
- Ensure images are in assets folder
- Verify image formats (PNG, JPG, WebP supported)

**Admin panel not working:**
- Clear browser cache
- Check browser console for errors
- Ensure JavaScript is enabled

**Mobile display issues:**
- Test viewport meta tag is present
- Check CSS media queries
- Verify touch interactions work

**Performance issues:**
- Compress large images
- Optimize video files
- Consider using CDN for assets

## 📞 Support

For technical support:
1. Check the README.md file
2. Review browser console for error messages
3. Test in different browsers
4. Contact your hosting provider for server issues

## 🎉 Going Live

1. **Final testing** on staging environment
2. **Backup** all files
3. **Upload** to production hosting
4. **Test live site** thoroughly
5. **Update DNS** if using custom domain
6. **Announce** your new website!

---

**Congratulations!** Your Lavanya Foundation website is ready to make an impact online! 🌱✨
