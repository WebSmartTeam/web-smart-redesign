const { chromium } = require('playwright');
const path = require('path');

const websites = [
  { url: 'https://advancedheatingplumbing.co.uk/', name: 'advancedheatingplumbing' },
  { url: 'https://jhare.com/', name: 'jhare' },
  { url: 'https://pinnacle-roofing.client-demo.co/', name: 'pinnacle-roofing' },
  { url: 'http://mpbuild.co.uk/', name: 'mpbuild' },
];

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const outputDir = './web-smart-redesign/public/images/portfolio';

  for (const site of websites) {
    try {
      console.log(`📸 Capturing ${site.name}...`);
      const page = await browser.newPage({
        viewport: { width: 1920, height: 1080 }
      });

      await page.goto(site.url, {
        waitUntil: 'networkidle',
        timeout: 60000
      });

      await page.waitForTimeout(2000);

      const screenshotPath = path.join(outputDir, `${site.name}.jpg`);
      await page.screenshot({
        path: screenshotPath,
        type: 'jpeg',
        quality: 85,
        fullPage: false
      });

      console.log(`✓ Saved ${site.name}.jpg`);
      await page.close();

    } catch (error) {
      console.error(`✗ Failed to capture ${site.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('\n✓ All screenshots captured!');
}

captureScreenshots();
