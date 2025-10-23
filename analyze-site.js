const { webkit } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function analyzeSite() {
  const browser = await webkit.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const baseUrl = 'https://web-smart.co';
  const visitedPages = new Set();
  const allImages = [];
  const pageData = [];

  console.log('🌐 Starting Web-Smart.co analysis...\n');

  // Pages to scrape
  const pagesToScrape = [
    { url: '/', name: 'homepage' },
    { url: '/web-design-services/', name: 'web-design-services' },
    { url: '/seo-services/', name: 'seo-services' },
    { url: '/website-content-writing/', name: 'content-writing' },
    { url: '/portfolio/', name: 'portfolio' },
    { url: '/free-ai-generated-images/', name: 'ai-images' },
    { url: '/about-us/', name: 'about' },
    { url: '/blogs/', name: 'blogs' },
    { url: '/contact-us/', name: 'contact' },
  ];

  for (const pageInfo of pagesToScrape) {
    const fullUrl = baseUrl + pageInfo.url;

    if (visitedPages.has(fullUrl)) continue;
    visitedPages.add(fullUrl);

    console.log(`📄 Analyzing: ${pageInfo.name}`);

    try {
      await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);

      // Take screenshot
      const screenshotPath = path.join(__dirname, 'screenshots', `${pageInfo.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`  📸 Screenshot saved: ${pageInfo.name}.png`);

      // Get page title
      const title = await page.title();

      // Get all images
      const images = await page.$$eval('img', imgs =>
        imgs.map(img => ({
          src: img.src,
          alt: img.alt || '',
          width: img.naturalWidth,
          height: img.naturalHeight
        })).filter(img => img.src && !img.src.includes('data:image'))
      );

      console.log(`  🖼️  Found ${images.length} images`);

      // Add to collection
      images.forEach(img => {
        allImages.push({
          ...img,
          page: pageInfo.name,
          pageName: title
        });
      });

      // Get text content
      const textContent = await page.evaluate(() => {
        const main = document.querySelector('main') || document.body;
        return main.innerText.substring(0, 500);
      });

      pageData.push({
        name: pageInfo.name,
        url: fullUrl,
        title,
        imageCount: images.length,
        preview: textContent
      });

    } catch (error) {
      console.log(`  ❌ Error on ${pageInfo.name}: ${error.message}`);
    }
  }

  // Save page data
  fs.writeFileSync(
    path.join(__dirname, 'documentation', 'pages-catalog.json'),
    JSON.stringify(pageData, null, 2)
  );

  // Save image catalog
  fs.writeFileSync(
    path.join(__dirname, 'documentation', 'images-catalog.json'),
    JSON.stringify(allImages, null, 2)
  );

  console.log(`\n✅ Analysis complete!`);
  console.log(`📊 Total pages analyzed: ${pageData.length}`);
  console.log(`🖼️  Total images found: ${allImages.length}`);

  await browser.close();
}

analyzeSite().catch(console.error);
