const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('Navigating to web-smart.co...');
  await page.goto('https://web-smart.co/', { waitUntil: 'networkidle' });
  
  // Wait for page to load
  await page.waitForTimeout(3000);
  
  // Find all images in the logo slider section
  const logoImages = await page.evaluate(() => {
    const images = [];
    // Look for images that might be partner logos
    const allImages = document.querySelectorAll('img');
    
    allImages.forEach(img => {
      const src = img.src;
      const alt = img.alt || '';
      
      // Filter for partner/logo images
      if (src.includes('microsoft') || src.includes('openai') || 
          src.includes('claude') || src.includes('eleven') || 
          src.includes('runway') || src.includes('google-cloud') || 
          src.includes('meta')) {
        images.push({
          src: src,
          alt: alt,
          filename: src.split('/').pop()
        });
      }
    });
    
    return images;
  });
  
  console.log('Found logos:', logoImages);
  
  // Download each logo
  const outputDir = './web-smart-redesign/public/images/partners';
  
  for (const logo of logoImages) {
    const filepath = path.join(outputDir, logo.filename);
    console.log(`Downloading ${logo.filename}...`);
    try {
      await downloadImage(logo.src, filepath);
      console.log(`✓ Downloaded ${logo.filename}`);
    } catch (error) {
      console.error(`✗ Failed to download ${logo.filename}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('Done!');
})();
