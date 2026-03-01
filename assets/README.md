# Assets Folder

This folder should contain all images and media assets for the landing page.

## Required Files

### 1. logo.png
- **Purpose**: Checklists company logo
- **Recommended size**: 200x50px (or proportional)
- **Format**: PNG with transparent background
- **Usage**: Header and footer
- **Color**: Should work on both white and black backgrounds

### 2. og-image.jpg
- **Purpose**: Social media sharing preview image
- **Required size**: 1200x630px (Facebook/LinkedIn standard)
- **Format**: JPG or PNG
- **Content suggestions**:
  - Course title in Hebrew
  - Checklists logo
  - Key benefit or tagline
  - Professional/premium design
  - Gold and black color scheme

## Optional Files

### 3. favicon.ico (recommended)
- **Purpose**: Browser tab icon
- **Size**: 32x32px or 16x16px
- **Format**: ICO file
- **Add to HTML**: `<link rel="icon" href="./assets/favicon.ico" type="image/x-icon">`

### 4. apple-touch-icon.png (recommended for iOS)
- **Purpose**: iOS home screen icon
- **Size**: 180x180px
- **Format**: PNG
- **Add to HTML**: `<link rel="apple-touch-icon" href="./assets/apple-touch-icon.png">`

### 5. course-thumbnail.jpg (optional)
- **Purpose**: Alternative video thumbnail if needed
- **Size**: 1280x720px
- **Format**: JPG

## Where to Get the Logo

1. Visit [https://checklists-group.co.il](https://checklists-group.co.il)
2. Right-click on the logo and save it
3. Or request high-resolution versions from the Checklists team

## Creating OG Image

Tools for creating og-image.jpg:
- **Canva**: [canva.com](https://canva.com) - Free templates available
- **Figma**: Professional design tool
- **Photoshop**: For advanced design
- **Online OG Image generators**: Search "og image generator"

### OG Image Content Template

```
┌─────────────────────────────────────────┐
│                                         │
│         [Checklists Logo]               │
│                                         │
│   קורס דיגיטלי להקמת עסק עצמאי        │
│      בתחום האירועים                    │
│                                         │
│   ✓ 12 שיעורים מקיפים                 │
│   ✓ ליווי מקצועי מלא                   │
│   ✓ התחל לעבוד מהבית                   │
│                                         │
│      [Gold/Black design elements]       │
│                                         │
└─────────────────────────────────────────┘
```

## Current Status

❌ **logo.png** - Not yet added (REQUIRED)
❌ **og-image.jpg** - Not yet added (REQUIRED)
⚠️ **favicon.ico** - Optional but recommended
⚠️ **apple-touch-icon.png** - Optional but recommended

## After Adding Assets

Once you've added the required files:

1. **Verify the paths in index.html**:
   - Line 11: `<meta property="og:image" content="./assets/og-image.jpg">`
   - Line 36: `<img src="./assets/logo.png" alt="Checklists Logo">`
   - Line 253: `<img src="./assets/logo.png" alt="Checklists Logo">`

2. **Test the logo display**:
   - Open index.html in a browser
   - Check header and footer for logo visibility

3. **Test OG image**:
   - Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Or [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
   - Enter your landing page URL to preview

## File Size Recommendations

- **logo.png**: < 50 KB
- **og-image.jpg**: < 200 KB
- **favicon.ico**: < 10 KB
- **apple-touch-icon.png**: < 50 KB

Compress images using:
- [TinyPNG](https://tinypng.com)
- [ImageOptim](https://imageoptim.com)
- [Squoosh](https://squoosh.app)

## Notes

- Keep file names lowercase and use hyphens instead of spaces
- Always use web-optimized formats (PNG for logos, JPG for photos)
- Test images on both light and dark backgrounds
- Ensure the logo is clear and recognizable at small sizes
