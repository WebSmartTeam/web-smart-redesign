const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const pages = [
  { url: '/', name: 'homepage' },
  { url: '/about', name: 'about' },
  { url: '/services', name: 'services' },
  { url: '/services/web-design', name: 'web-design' },
  { url: '/services/seo', name: 'seo' },
  { url: '/services/content-writing', name: 'content-writing' },
  { url: '/services/google-ads', name: 'google-ads' },
  { url: '/portfolio', name: 'portfolio' },
  { url: '/blog', name: 'blog' },
  { url: '/contact', name: 'contact' },
  { url: '/resources', name: 'resources' },
  { url: '/ai-images', name: 'ai-images' },
  { url: '/ai-projects', name: 'ai-projects' },
];

const mobileViewport = { width: 375, height: 667 };

async function captureScreenshots() {
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'mobile-screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: mobileViewport });
  const page = await context.newPage();

  console.log('\n🎨 Capturing Mobile Screenshots (375px width)');
  console.log('='.repeat(60));

  for (const pageInfo of pages) {
    try {
      console.log(`\n📸 Capturing: ${pageInfo.name}`);

      await page.goto(`http://localhost:3001${pageInfo.url}`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });

      // Wait for page to fully render
      await page.waitForTimeout(2000);

      // Take full page screenshot
      const screenshotPath = path.join(screenshotsDir, `${pageInfo.name}-mobile.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });

      console.log(`   ✅ Saved: ${screenshotPath}`);

      // Check for horizontal scrollbar
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      if (hasHorizontalScroll) {
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        console.log(`   ⚠️  HORIZONTAL SCROLL DETECTED: Page width ${scrollWidth}px > viewport 375px`);
      } else {
        console.log(`   ✓  No horizontal scroll`);
      }

    } catch (error) {
      console.error(`   ❌ Error capturing ${pageInfo.name}:`, error.message);
    }
  }

  await browser.close();

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Screenshots saved to: ${screenshotsDir}`);
  console.log('='.repeat(60));
}

captureScreenshots().catch(console.error);
