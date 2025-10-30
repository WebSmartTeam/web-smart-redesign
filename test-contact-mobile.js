const { chromium } = require('playwright');

async function testContact() {
  console.log('\n📸 Testing Contact Page Mobile Layout (375px)\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 667 } });
  const page = await context.newPage();

  try {
    await page.goto('http://localhost:3001/contact', {
      waitUntil: 'domcontentloaded',
      timeout: 15000
    });

    await page.waitForTimeout(2000);

    // Check contact info grid
    const gridInfo = await page.evaluate(() => {
      const grid = document.querySelector('.grid.grid-cols-1');
      if (!grid) return { error: 'Grid not found with grid-cols-1' };

      const style = window.getComputedStyle(grid);
      const cards = Array.from(grid.children);

      return {
        gridTemplateColumns: style.gridTemplateColumns,
        cardCount: cards.length,
        cardWidths: cards.map(card => card.getBoundingClientRect().width)
      };
    });

    console.log('Contact Info Grid:', JSON.stringify(gridInfo, null, 2));

    // Take screenshot
    await page.screenshot({
      path: '/Users/aryanchoubey/Documents/MasterClaude/projects/web-smart/mobile-screenshots/contact-fixed.png',
      fullPage: true
    });

    console.log('\n✅ Screenshot saved: mobile-screenshots/contact-fixed.png');

    if (gridInfo.gridTemplateColumns && gridInfo.gridTemplateColumns.includes('px') && !gridInfo.gridTemplateColumns.includes(' ')) {
      console.log('✅ FIXED! Contact info boxes now stack vertically on mobile (single column)');
    } else {
      console.log('⚠️  Grid columns:', gridInfo.gridTemplateColumns);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }

  await browser.close();
}

testContact();
