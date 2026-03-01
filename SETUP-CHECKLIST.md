# 📋 Landing Page Setup Checklist

Use this checklist to ensure your landing page is fully configured before launch.

## ✅ Pre-Launch Checklist

### 1. Assets & Media

- [ ] Add Checklists logo to `assets/logo.png`
- [ ] Create and add OG image to `assets/og-image.jpg`
- [ ] (Optional) Add favicon.ico
- [ ] (Optional) Add apple-touch-icon.png
- [ ] Verify logo appears in header
- [ ] Verify logo appears in footer
- [ ] Test OG image with Facebook Sharing Debugger

### 2. Video Setup

- [ ] Upload intro video to YouTube/Vimeo
- [ ] Set video visibility to Public or Unlisted
- [ ] Copy video ID from URL
- [ ] Replace `VIDEO_ID` in hero section (index.html line 48)
- [ ] Replace `VIDEO_ID` in preview section (index.html line 148)
- [ ] Test video playback on desktop
- [ ] Test video playback on mobile
- [ ] Verify autoplay works in hero section

### 3. Analytics Integration

#### Google Tag Manager
- [ ] Create GTM account at [tagmanager.google.com](https://tagmanager.google.com)
- [ ] Create new container for website
- [ ] Copy Container ID (format: GTM-XXXXXXX)
- [ ] Replace GTM-XXXXXXX in index.html line 12
- [ ] Replace GTM-XXXXXXX in index.html line 283
- [ ] Install GTM Preview Chrome extension
- [ ] Test GTM in Preview mode

#### Facebook Pixel
- [ ] Create Facebook Business Manager account
- [ ] Create Facebook Pixel in Events Manager
- [ ] Copy Pixel ID
- [ ] Replace PIXEL_ID in index.html line 293
- [ ] Replace PIXEL_ID in index.html line 299
- [ ] Install Facebook Pixel Helper Chrome extension
- [ ] Verify pixel fires on page load
- [ ] Test Lead event fires on form submission

### 4. Form Integration

Choose one option:

#### Option A: Google Sheets
- [ ] Create new Google Sheet
- [ ] Add columns: Timestamp, Full Name, Phone, Email, Interest
- [ ] Open Extensions > Apps Script
- [ ] Copy script from README
- [ ] Deploy as Web App
- [ ] Set "Execute as: Me"
- [ ] Set "Who has access: Anyone"
- [ ] Copy Web App URL
- [ ] Paste URL in script.js line 196
- [ ] Test form submission
- [ ] Verify data appears in sheet

#### Option B: Custom Backend
- [ ] Create API endpoint
- [ ] Configure CORS if needed
- [ ] Update script.js line 190 with endpoint URL
- [ ] Test POST request with form data
- [ ] Set up email notifications
- [ ] Configure error handling

### 5. WhatsApp Integration

- [ ] Decide on WhatsApp business number
- [ ] Format number correctly (country code + number, no spaces)
  - Example: 972501234567 (not +972-50-123-4567)
- [ ] Update whatsappNumber in script.js line 213
- [ ] Test WhatsApp redirect after form submission
- [ ] Verify pre-filled message appears correctly

### 6. Contact Information

- [ ] Update email in footer (index.html line 257)
- [ ] Update phone in footer (index.html line 258)
- [ ] Test email link opens mail client
- [ ] Test phone link opens dialer on mobile
- [ ] Verify all contact info is correct

### 7. Social Media Links

- [ ] Verify Facebook URL: https://www.facebook.com/checklistsweddingRSVPs
- [ ] Verify Instagram URL: https://www.instagram.com/checklists_events/
- [ ] Test all social links open in new tab
- [ ] Check social icons display correctly

### 8. Content Review

- [ ] Proofread all Hebrew text
- [ ] Verify lesson descriptions are accurate
- [ ] Check testimonials are authentic
- [ ] Confirm pricing/offer details (if added)
- [ ] Review hero headline and subheadline
- [ ] Verify CTA button text is compelling

### 9. SEO & Meta Tags

- [ ] Verify page title (index.html line 6)
- [ ] Verify meta description (index.html line 7)
- [ ] Check OG title (index.html line 8)
- [ ] Check OG description (index.html line 9)
- [ ] Test OG image displays correctly
- [ ] (Optional) Add structured data for Course schema
- [ ] Create robots.txt file
- [ ] Create sitemap.xml file

### 10. Design & Styling

- [ ] Review color scheme matches brand
- [ ] Test responsive design on iPhone
- [ ] Test responsive design on Android
- [ ] Test responsive design on iPad
- [ ] Test on desktop (1920px width)
- [ ] Verify RTL layout works correctly
- [ ] Check all animations work smoothly
- [ ] Verify form styling is consistent
- [ ] Test hover states on all buttons

### 11. Cross-Browser Testing

- [ ] Test on Chrome (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Edge (latest)
- [ ] Test on mobile Safari (iOS)
- [ ] Test on Chrome Mobile (Android)

### 12. Functionality Testing

- [ ] Test smooth scrolling to sections
- [ ] Test sticky header behavior
- [ ] Test testimonials carousel auto-play
- [ ] Test carousel navigation dots
- [ ] Test carousel touch/swipe on mobile
- [ ] Test form validation (empty fields)
- [ ] Test phone number validation
- [ ] Test email validation
- [ ] Test form submission success message
- [ ] Test form reset after submission

### 13. Performance Optimization

- [ ] Run Google PageSpeed Insights
- [ ] Aim for 90+ score on mobile
- [ ] Aim for 95+ score on desktop
- [ ] Compress all images
- [ ] Verify videos are optimized
- [ ] Check page load time < 3 seconds
- [ ] Test on slow 3G connection

### 14. Security & Privacy

- [ ] Add Privacy Policy page (if required)
- [ ] Add Terms of Service (if required)
- [ ] Ensure HTTPS is enabled
- [ ] Configure CORS properly
- [ ] Verify no sensitive data in client code
- [ ] Add honeypot field to form (anti-spam)

### 15. Deployment

- [ ] Choose hosting platform
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Upload all files
- [ ] Test live URL
- [ ] Verify all paths work on live site
- [ ] Set up CDN (optional)
- [ ] Configure caching headers

### 16. Post-Launch

- [ ] Submit to Google Search Console
- [ ] Submit sitemap to Google
- [ ] Test all forms on live site
- [ ] Monitor analytics for first 24 hours
- [ ] Check for JavaScript errors in console
- [ ] Test on real devices (not just browser tools)
- [ ] Ask colleagues/friends to review
- [ ] Set up uptime monitoring

### 17. Marketing Preparation

- [ ] Create Facebook ad campaigns
- [ ] Set up retargeting pixels
- [ ] Prepare Instagram story templates
- [ ] Create promotional graphics
- [ ] Write social media copy
- [ ] Plan email marketing campaigns
- [ ] Create QR code for landing page

### 18. Backup & Monitoring

- [ ] Backup all files
- [ ] Document all customizations
- [ ] Set up form submission notifications
- [ ] Monitor Google Analytics weekly
- [ ] Check for broken links monthly
- [ ] Review and update testimonials quarterly

---

## 🚨 Critical Issues Checklist

Before launch, ensure NONE of these issues exist:

- [ ] ❌ "VIDEO_ID" placeholder still in code
- [ ] ❌ "GTM-XXXXXXX" placeholder still in code
- [ ] ❌ "PIXEL_ID" placeholder still in code
- [ ] ❌ "050-123-4567" placeholder phone number
- [ ] ❌ "info@checklists-group.co.il" generic email (if not actual)
- [ ] ❌ Logo images show broken image icons
- [ ] ❌ Forms submit but data goes nowhere
- [ ] ❌ Console shows JavaScript errors
- [ ] ❌ Mobile menu doesn't work
- [ ] ❌ Videos don't load
- [ ] ❌ WhatsApp redirect fails

---

## 📊 Launch Day Checklist

On the day of launch:

1. **Morning (Pre-Launch)**
   - [ ] Final test of all forms
   - [ ] Verify analytics are tracking
   - [ ] Check all videos load
   - [ ] Test on multiple devices
   - [ ] Clear CDN cache if using one

2. **Launch**
   - [ ] Make site live
   - [ ] Test live URL immediately
   - [ ] Share on social media
   - [ ] Send to email list
   - [ ] Monitor analytics dashboard

3. **Evening (Post-Launch)**
   - [ ] Check form submissions
   - [ ] Review analytics data
   - [ ] Monitor for errors
   - [ ] Respond to any inquiries
   - [ ] Document any issues found

---

## 📈 Week 1 Checklist

After first week:

- [ ] Review conversion rate
- [ ] Analyze traffic sources
- [ ] Check bounce rate
- [ ] Review form completion rate
- [ ] Identify top-performing CTAs
- [ ] A/B test headlines (if traffic allows)
- [ ] Optimize underperforming sections
- [ ] Add more testimonials if available

---

## 🎯 Success Metrics to Track

- Page views
- Unique visitors
- Form submission rate
- WhatsApp click rate
- Video view duration
- Bounce rate
- Average time on page
- Mobile vs desktop traffic
- Traffic sources (organic, social, paid)
- Geographic distribution

---

## 📞 Need Help?

If you get stuck on any item:

1. Check the main [README.md](README.md) file
2. Review code comments in each file
3. Use browser DevTools Console for errors
4. Test in incognito mode to rule out cache issues
5. Check [checklists-group.co.il](https://checklists-group.co.il) for brand guidelines

---

**Remember**: A successful launch requires attention to detail. Take your time with each item!

Good luck! 🚀
