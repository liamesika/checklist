# ⚡ Quick Start Guide - Checklists Landing Page

Get your landing page live in under 30 minutes!

## 📦 What You Have

```
checklist/
├── 📄 index.html              - Main landing page
├── 🎨 styles.css              - All styling
├── ⚙️ script.js               - Interactive features
├── 📖 README.md               - Full documentation
├── ✅ SETUP-CHECKLIST.md      - Pre-launch checklist
├── 🎨 CUSTOMIZATION-GUIDE.md  - Customization options
└── 📁 assets/                 - Images folder (empty - needs your files)
```

## 🚀 5-Minute Launch (Basic)

If you just want to see it working:

1. **Add your logo** (or use a placeholder)
   - Save any image as `assets/logo.png`
   - Recommended: 200x50px PNG

2. **Add OG image** (for social sharing)
   - Save any image as `assets/og-image.jpg`
   - Recommended: 1200x630px JPG

3. **Open in browser**
   - Double-click [index.html](index.html)
   - Your landing page is now viewable locally!

**Note**: Forms, videos, and analytics won't work yet, but you can see the design.

---

## ⚡ 30-Minute Full Setup

### Step 1: Get Your Assets (5 min)

- [ ] Download Checklists logo from [checklists-group.co.il](https://checklists-group.co.il)
- [ ] Save as `assets/logo.png`
- [ ] Create a social sharing image (use Canva)
- [ ] Save as `assets/og-image.jpg`

### Step 2: Add Your Videos (5 min)

1. Upload your course intro video to YouTube
2. Copy the video ID from the URL:
   - URL: `https://youtube.com/watch?v=ABC123xyz`
   - ID: `ABC123xyz`
3. Open [index.html](index.html)
4. Replace all instances of `VIDEO_ID` with your actual ID (2 places)

### Step 3: Set Up Form Backend (10 min)

**Option A: Google Sheets (Easiest)**

1. Create a new Google Sheet
2. Add columns: `Timestamp | Full Name | Phone | Email | Interest`
3. Go to: Extensions → Apps Script
4. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.timestamp, data.fullName, data.phone, data.email, data.interest]);
    return ContentService.createTextOutput(JSON.stringify({'status': 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({'status': 'error'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Deploy → New deployment → Web app
6. Execute as: **Me**
7. Who has access: **Anyone**
8. Copy the Web App URL
9. Open [script.js](script.js)
10. Find line 196 and paste your URL

### Step 4: Update Contact Info (5 min)

Open [index.html](index.html) and update:

- **Email** (line 257): `info@checklists-group.co.il`
- **Phone** (line 258): `050-123-4567`

Open [script.js](script.js) and update:

- **WhatsApp number** (line 213): `972501234567`

### Step 5: Test Everything (5 min)

- [ ] Open [index.html](index.html) in browser
- [ ] Click all navigation links
- [ ] Play the videos
- [ ] Submit the form with test data
- [ ] Check if data appears in Google Sheet
- [ ] Verify WhatsApp opens correctly

### Step 6: Deploy! (Already done!)

Your landing page is ready. Now choose how to host it:

---

## 🌐 Hosting Options

### Option 1: Netlify (Recommended - FREE)

**Fastest and easiest!**

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag the entire `checklist` folder onto Netlify
4. Get instant HTTPS URL: `https://your-site.netlify.app`
5. Optional: Add custom domain

**Time: 2 minutes**

### Option 2: GitHub Pages (FREE)

1. Create GitHub account
2. Create new repository
3. Upload all files
4. Settings → Pages → Enable
5. Your URL: `https://username.github.io/repo-name/`

**Time: 5 minutes**

### Option 3: Traditional Hosting

1. Purchase hosting (GoDaddy, Bluehost, etc.)
2. Upload files via FTP or cPanel File Manager
3. Access via your domain

**Time: 10-30 minutes**

---

## 📊 Add Analytics (Optional - 10 min)

### Google Tag Manager

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Create account + container
3. Copy Container ID (GTM-XXXXXXX)
4. Open [index.html](index.html)
5. Replace `GTM-XXXXXXX` with your ID (2 places: lines 12 and 283)

### Facebook Pixel

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Create pixel
3. Copy Pixel ID
4. Open [index.html](index.html)
5. Replace `PIXEL_ID` with your ID (2 places: lines 293 and 299)

---

## 🎨 Quick Customizations

### Change Colors

Open [styles.css](styles.css), find lines 10-18:

```css
:root {
    --primary-gold: #D4AF37;    /* Change this */
    --primary-black: #1a1a1a;   /* And this */
}
```

### Change Text

Open [index.html](index.html) and edit:
- **Headline** (line 42)
- **Subheadline** (line 43)
- Any other text you see

### Change Testimonials

Find the testimonials section in [index.html](index.html) (line 192) and update with your own.

---

## 🐛 Troubleshooting

### "Logo not showing"
- Check file exists: `assets/logo.png`
- Check file name is exactly `logo.png` (lowercase)
- Try refreshing browser (Cmd+Shift+R or Ctrl+Shift+R)

### "Videos not loading"
- Check video ID is correct
- Verify video is Public or Unlisted (not Private)
- Check your internet connection

### "Form not working"
- Check Google Apps Script is deployed
- Verify "Anyone" has access to web app
- Check browser console for errors (F12)

### "WhatsApp not opening"
- Check phone number format: `972501234567` (no + or -)
- Try different number to test
- Verify WhatsApp is installed on mobile

### "Mobile view looks broken"
- Clear browser cache
- Test on real device (not just browser resize)
- Check if files are all uploaded correctly

---

## 📚 What's Next?

After your quick setup:

1. **Review full docs**: Read [README.md](README.md) for detailed info
2. **Customize**: See [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md)
3. **Launch checklist**: Use [SETUP-CHECKLIST.md](SETUP-CHECKLIST.md) before going live
4. **Add content**: Replace testimonials with real reviews
5. **Test thoroughly**: On multiple devices and browsers
6. **Monitor**: Check analytics after launch

---

## 🎯 Success Metrics

After launching, track:

- **Form submissions** (Google Sheet)
- **Page views** (Google Analytics)
- **Video views** (YouTube Analytics)
- **WhatsApp clicks** (Track manually or with UTM)

---

## 🆘 Need Help?

**Common issues:**
- Read the [README.md](README.md)
- Check browser console (F12) for errors
- Try in incognito/private mode
- Clear browser cache

**For Checklists-specific questions:**
- Visit [checklists-group.co.il](https://checklists-group.co.il)
- Use the contact form on the landing page

---

## ✨ Pro Tips

1. **Test mobile first** - Most users will view on mobile
2. **Use real content** - Replace placeholder text ASAP
3. **Compress images** - Use [tinypng.com](https://tinypng.com)
4. **Update regularly** - Add new testimonials monthly
5. **Monitor forms** - Check daily for new submissions
6. **A/B test** - Try different headlines to improve conversions

---

## 🎉 You're Ready!

Your landing page is now live and ready to convert visitors into students!

**Share it:**
- On Facebook: [Your Facebook Page](https://www.facebook.com/checklistsweddingRSVPs)
- On Instagram: [Your Instagram](https://www.instagram.com/checklists_events/)
- Via WhatsApp: Send to your contacts
- In your email signature

**Good luck with your course! 🚀**

---

**Quick Links:**
- 📖 [Full README](README.md)
- ✅ [Setup Checklist](SETUP-CHECKLIST.md)
- 🎨 [Customization Guide](CUSTOMIZATION-GUIDE.md)
- 📁 [Assets Guide](assets/README.md)
