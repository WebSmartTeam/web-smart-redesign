const { chromium } = require('playwright');

async function quickTest() {
  console.log('\n📸 Quick Portfolio Test (375px mobile)\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 667 } });
  const page = await context.newPage();

  // Wait for dev server
  console.log('Waiting 5 seconds for dev server...');
  await new Promise(resolve => setTimeout(resolve, 5000));

  try {
    await page.goto('http://localhost:3001/portfolio', {
      waitUntil: 'domcontentloaded',
      timeout: 15000
    });

    await page.waitForTimeout(2000);

    // Check grid columns
    const gridInfo = await page.evaluate(() => {
      const grid = document.querySelector('.grid');
      if (!grid) return { error: 'Grid not found' };
      const style = window.getComputedStyle(grid);
      return {
        gridTemplateColumns: style.gridTemplateColumns,
        firstCardWidth: grid.children[0]?.getBoundingClientRect().width
      };
    });

    console.log('Grid Info:', JSON.stringify(gridInfo, null, 2));

    // Take screenshot
    await page.screenshot({
      path: '/Users/aryanchoubey/Documents/MasterClaude/projects/web-smart/mobile-screenshots/portfolio-fixed.png',
      fullPage: true
    });

    console.log('\n✅ Screenshot saved: mobile-screenshots/portfolio-fixed.png');

    if (gridInfo.firstCardWidth > 300) {
      console.log('✅ FIXED! Cards are now properly sized for mobile');
    } else {
      console.log('⚠️  Cards still narrow:', gridInfo.firstCardWidth, 'px');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }

  await browser.close();
}

quickTest();
