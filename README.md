# Checklists Digital Course Landing Page

A clean, modern, and conversion-focused landing page for the Checklists Digital Course: "Start Your Own Event Attendance & Seating Business."

## 🎯 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ RTL (Right-to-Left) support for Hebrew
- ✅ Video integration (YouTube/Vimeo)
- ✅ Interactive testimonials carousel
- ✅ Lead capture form with WhatsApp integration
- ✅ Facebook Pixel & Google Tag Manager integration
- ✅ Social media links (Facebook, Instagram)
- ✅ SEO optimized with meta tags
- ✅ Clean, white background with teal and navy blue accents (matches Checklists logo)
- ✅ Smooth scrolling and animations

## 📁 Project Structure

```
checklist/
├── index.html          # Main HTML file
├── styles.css          # All styling (responsive)
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/            # Create this folder for images
    ├── logo.png       # Checklists logo
    └── og-image.jpg   # Open Graph image for social sharing
```

## 🚀 Quick Start

### 1. Assets Setup

Create an `assets` folder and add:
- **logo.png**: Your Checklists logo (recommended: 200x50px, transparent background)
- **og-image.jpg**: Social sharing image (recommended: 1200x630px)

### 2. Video Integration

Replace `VIDEO_ID` in [index.html](index.html) with your actual YouTube video IDs:

**Hero Section** (Line 48):
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
```

**Video Preview Section** (Line 148):
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### 3. Analytics Setup

#### Google Tag Manager
Replace `GTM-XXXXXXX` with your GTM container ID in [index.html](index.html):
- Line 12 (noscript)
- Line 283 (script)

#### Facebook Pixel
Replace `PIXEL_ID` with your Facebook Pixel ID in [index.html](index.html):
- Line 293 (fbq init)
- Line 299 (noscript)

### 4. Form Integration

The lead form needs to be connected to your CRM or database. Options:

#### Option A: Google Sheets (Recommended for quick setup)
1. Create a Google Apps Script web app
2. Update [script.js](script.js) line 196 with your script URL
3. Example script provided in section below

#### Option B: Custom Backend
1. Create your API endpoint
2. Update [script.js](script.js) line 190 with your endpoint
3. Handle POST requests with form data

### 5. WhatsApp Integration

Update the WhatsApp phone number in [script.js](script.js) line 213:
```javascript
const whatsappNumber = '972501234567'; // Replace with your number (format: country code + number)
```

### 6. Contact Information

Update footer contact details in [index.html](index.html) lines 257-259:
```html
<p>צור קשר: <a href="mailto:your-email@checklists-group.co.il">your-email@checklists-group.co.il</a></p>
<p>טלפון: <a href="tel:+972501234567">050-123-4567</a></p>
```

## 🔧 Google Sheets Integration

### Step 1: Create Google Sheet
Create a new Google Sheet with these columns:
- Timestamp
- Full Name
- Phone
- Email
- Interest

### Step 2: Apps Script
1. Open your Google Sheet
2. Go to Extensions > Apps Script
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp,
      data.fullName,
      data.phone,
      data.email,
      data.interest
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success'
    })).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Deploy as Web App:
   - Click Deploy > New deployment
   - Select type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Copy the Web App URL

5. Update [script.js](script.js) with your Web App URL

## 🎨 Customization

### Colors
The colors are matched to the Checklists logo. Edit CSS variables in [styles.css](styles.css) lines 8-21:
```css
:root {
    --primary-teal: #1e9baa;      /* Checklists turquoise from logo */
    --primary-navy: #1e3a5f;      /* Checklists navy blue from logo */
    --accent-teal: #26b5c7;       /* Lighter teal for hovers */
    --text-primary: #2c2c2c;
    --text-secondary: #666666;
    /* ... */
}
```

### Fonts
The landing page uses Google Fonts (Assistant). To change:
1. Update link in [index.html](index.html) line 13
2. Update font-family in [styles.css](styles.css) line 26

### Content
All text content can be edited directly in [index.html](index.html):
- Hero section: Lines 40-51
- About section: Lines 56-82
- Lessons: Lines 88-172
- Testimonials: Lines 192-242
- Footer: Lines 254-278

## 📱 Social Media Links

Current links (update as needed in [index.html](index.html)):
- Facebook: [https://www.facebook.com/checklistsweddingRSVPs](https://www.facebook.com/checklistsweddingRSVPs)
- Instagram: [https://www.instagram.com/checklists_events/](https://www.instagram.com/checklists_events/)

## 🔍 SEO

### Meta Tags
Already included in [index.html](index.html):
- Title tag (Line 6)
- Meta description (Line 7)
- Open Graph tags (Lines 8-11)

### Structured Data
Consider adding JSON-LD structured data for courses:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "קורס דיגיטלי להקמת עסק עצמאי בתחום האירועים",
  "description": "למדו איך לפתוח עסק עצמאי בתחום אישורי ההגעה וההושבה לאירועים",
  "provider": {
    "@type": "Organization",
    "name": "Checklists",
    "url": "https://checklists-group.co.il"
  }
}
</script>
```

## 🧪 Testing Checklist

Before launching:
- [ ] Test all forms submit correctly
- [ ] Verify WhatsApp redirect works
- [ ] Check analytics tracking (use browser dev tools)
- [ ] Test on mobile devices (iOS and Android)
- [ ] Verify all links work
- [ ] Test video playback
- [ ] Check RTL layout on all sections
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Test page speed (https://pagespeed.web.dev/)
- [ ] Verify social sharing images
- [ ] Test across browsers (Chrome, Safari, Firefox, Edge)

## 🚀 Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push your files
3. Enable GitHub Pages in repository settings
4. Your site will be at: `https://yourusername.github.io/repository-name/`

### Option 2: Netlify (Recommended)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Get instant HTTPS and global CDN
4. Free custom domain support

### Option 3: Traditional Hosting
1. Upload all files via FTP/cPanel
2. Ensure all paths are correct
3. Configure SSL certificate
4. Set up custom domain

## 📊 Analytics Events Tracked

The landing page automatically tracks:
- Page views
- Form submissions
- CTA button clicks
- Video views
- Social media clicks
- Time on page (30s, 2min milestones)
- Scroll depth

View these events in:
- Google Analytics (via GTM)
- Facebook Events Manager

## 🔧 Troubleshooting

### Videos not loading
- Check video IDs are correct
- Ensure videos are set to "Public" or "Unlisted" on YouTube
- Verify embed permissions in video settings

### Form not submitting
- Check browser console for errors
- Verify Google Apps Script deployment settings
- Ensure "Anyone" has access to your web app

### Analytics not tracking
- Verify pixel/GTM IDs are correct
- Use Facebook Pixel Helper Chrome extension
- Use Google Tag Manager preview mode

### Mobile layout issues
- Clear browser cache
- Test on real devices, not just browser resize
- Check viewport meta tag is present

## 📞 Support

For issues with:
- **Landing page code**: Check this README
- **Checklists platform**: Visit [checklists-group.co.il](https://checklists-group.co.il)
- **Course content**: Contact via form or WhatsApp

## 📝 License

© 2024 Checklists. All rights reserved.

## 🎯 Conversion Optimization Tips

1. **A/B Testing**: Test different headlines, CTA colors, and button text
2. **Social Proof**: Add more testimonials from Mit4Mit reviews
3. **Urgency**: Consider adding limited-time offers
4. **Trust Badges**: Add certificates, awards, or partner logos
5. **FAQ Section**: Answer common questions to reduce friction
6. **Live Chat**: Consider adding WhatsApp chat widget
7. **Exit Intent**: Add popup with special offer when user tries to leave

## 🔄 Maintenance

Regular updates recommended:
- Update testimonials quarterly
- Refresh video content annually
- Review analytics monthly
- Update contact information as needed
- Test forms weekly
- Monitor page speed monthly

## 📈 Next Steps

After launching:
1. Set up Google Search Console
2. Create sitemap.xml
3. Submit to Google for indexing
4. Set up email notifications for form submissions
5. Create retargeting campaigns
6. Monitor and optimize based on analytics

---

**Need help?** Consult the code comments in each file for detailed explanations.
