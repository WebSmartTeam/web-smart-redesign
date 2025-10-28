const { chromium } = require('playwright');
const path = require('path');

async function capturePinnacleRoofing() {
  const browser = await chromium.launch({ headless: true });

  try {
    console.log('📸 Capturing Pinnacle Roofing with authentication...');
    const page = await browser.newPage({
      viewport: { width: 1920, height: 1080 }
    });

    // Set HTTP Basic Auth credentials
    await page.setExtraHTTPHeaders({
      'Authorization': 'Basic ' + Buffer.from('websmart:websmart').toString('base64')
    });

    await page.goto('https://pinnacle-roofing.client-demo.co/', {
      waitUntil: 'networkidle',
      timeout: 60000
    });

    // Wait for page to fully load
    await page.waitForTimeout(3000);

    const screenshotPath = path.join('./web-smart-redesign/public/images/portfolio', 'pinnacle-roofing.jpg');
    await page.screenshot({
      path: screenshotPath,
      type: 'jpeg',
      quality: 85,
      fullPage: false
    });

    console.log('✓ Successfully captured pinnacle-roofing.jpg');
    await page.close();

  } catch (error) {
    console.error('✗ Failed to capture Pinnacle Roofing:', error.message);
  }

  await browser.close();
  console.log('\n✓ Screenshot capture complete!');
}

capturePinnacleRoofing();
